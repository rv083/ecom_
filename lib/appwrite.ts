import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") // Appwrite endpoint
  .setProject("6a0a11c4001d43946f35"); // replace this

export const databases = new Databases(client);
export const storage = new Storage(client);
export const account = new Account(client);

export default client;