// /lib/getImageUrl.ts
import { storage } from "@/lib/appwrite";
import { BUCKET_ID } from "@/lib/constants";

export const getImageUrl = (fileId: string): string => {
  return storage.getFileView(BUCKET_ID, fileId).toString();
};