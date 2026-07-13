import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import SuccessContent from "./SuccessContent";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="animate-spin" size={32} />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}