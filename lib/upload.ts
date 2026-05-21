// /lib/upload.ts
import { storage } from "@/lib/appwrite";
import { BUCKET_ID } from "@/lib/constants";
import { ID } from "appwrite";

export const uploadImages = async (files: File[]) => {
  const uploads = await Promise.all(
    files.map(file =>
      storage.createFile(BUCKET_ID, ID.unique(), file)
    )
  );

  return uploads.map(f => f.$id);
};