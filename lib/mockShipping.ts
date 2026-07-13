// lib/mockShipping.ts

const COURIERS = ["Delhivery", "Bluedart", "Ekart", "XpressBees"];

/**
 * Simulates what Shiprocket's "create order" + "assign AWB" APIs would return.
 * Deterministic per orderId, so refreshing doesn't change the tracking number.
 */
export function generateMockShipment(orderId: string) {
  // simple hash of orderId so the same order always gets the same courier/awb
  let hash = 0;
  for (let i = 0; i < orderId.length; i++) {
    hash = (hash << 5) - hash + orderId.charCodeAt(i);
    hash |= 0;
  }
  const positiveHash = Math.abs(hash);

  const courierName = COURIERS[positiveHash % COURIERS.length];
  const awbCode = `MOCK${positiveHash.toString().padStart(9, "0")}`;

  return { courierName, awbCode };
}

export type ShipmentStatus =
  | "Order Confirmed"
  | "Picked Up"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered";

export interface TrackingStep {
  status: ShipmentStatus;
  completed: boolean;
  timestamp: string | null;
}

/**
 * Simulates a live courier status timeline based on time elapsed
 * since the order was created. Mirrors what you'd get by polling
 * Shiprocket's track/awb API in real life.
 */
export function getTrackingTimeline(createdAt: string): {
  currentStatus: ShipmentStatus;
  steps: TrackingStep[];
} {
  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();
  const minutesElapsed = (now - createdTime) / 1000 / 60;

  const stages: { status: ShipmentStatus; afterMinutes: number }[] = [
    { status: "Order Confirmed", afterMinutes: 0 },
    { status: "Picked Up", afterMinutes: 1 },
    { status: "In Transit", afterMinutes: 3 },
    { status: "Out for Delivery", afterMinutes: 6 },
    { status: "Delivered", afterMinutes: 10 },
  ];

  let currentStatus: ShipmentStatus = "Order Confirmed";

  const steps: TrackingStep[] = stages.map((stage) => {
    const completed = minutesElapsed >= stage.afterMinutes;
    if (completed) currentStatus = stage.status;

    return {
      status: stage.status,
      completed,
      timestamp: completed
        ? new Date(createdTime + stage.afterMinutes * 60 * 1000).toISOString()
        : null,
    };
  });

  return { currentStatus, steps };
}