"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import AdminProductForm from "@/components/AdminProductForm";
import AdminProductList from "@/components/AdminProductList";

import { account } from "@/lib/appwrite";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      await account.get();
      setLoading(false);
    } catch (error) {
      router.push("/admin/login");
    }
  };

  const handleLogout = async () => {
  try {
    await account.deleteSessions();
    router.push("/admin/login");
  } catch (error) {
    console.error(error);
  }
};

  if (loading) {
    return (
      <div className="p-6">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <AdminProductForm />
      <AdminProductList />
    </div>
  );
}