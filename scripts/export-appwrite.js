require("dotenv").config({ path: ".env.local" });

const sdk = require("node-appwrite");
const fs = require("fs");

const client = new sdk.Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const tablesDB = new sdk.TablesDB(client);

async function exportDatabase() {
  const databaseId = process.env.APPWRITE_DATABASE_ID;

  const output = {};

  const tables = await tablesDB.listTables(databaseId);

  console.log(`Found ${tables.tables.length} tables`);

  for (const table of tables.tables) {
    console.log(`Exporting ${table.name}...`);

    const rows = await tablesDB.listRows(
      databaseId,
      table.$id
    );

    output[table.name] = {
      tableId: table.$id,
      rows: rows.rows,
    };
  }

  fs.writeFileSync(
    "appwrite-export.json",
    JSON.stringify(output, null, 2)
  );

  console.log("Export complete");
}

exportDatabase().catch(console.error);