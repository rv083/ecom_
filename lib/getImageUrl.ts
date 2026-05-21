// /lib/getImageUrl.ts
import { storage } from "@/lib/appwrite";
import { BUCKET_ID } from "@/lib/constants";

export const getImageUrl = (fileId: string) => {
  return storage.getFilePreview(BUCKET_ID, fileId);
};