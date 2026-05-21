"use client";

import { useEffect, useState } from "react";
import { databases } from "@/lib/appwrite";
import { DATABASE_ID, PRODUCTS_ID } from "@/lib/constants";
import { createProduct } from "@/lib/products";

export default function TestPage() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    const run = async () => {
      try {
        // 🔥 CREATE PRODUCT (ONLY TEMPORARY)
       

        // 🔥 FETCH PRODUCTS
        const res = await databases.listDocuments(DATABASE_ID, PRODUCTS_ID);
        console.log("Appwrite response:", res);

        setStatus("✅ Product created! Check console");
      } catch (err: any) {
        console.error("Error:", err);
        setStatus("❌ Error: " + err.message);
      }
    };

    run();
  }, []);

  return <div>{status}</div>;
}