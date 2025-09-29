import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import sqlite3 from 'sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname is not available in ESM.
let __dirname: string
try {
  __dirname = path.dirname(fileURLToPath(import.meta.url))
} catch {
  // Fallback for when import.meta.url is not available
  __dirname = process.cwd()
}

// Define interface for the database row
interface SchemaRow {
  sql: string
}

// Create an MCP server
const server = new McpServer({
  name: 'issues-server',
  version: '1.0.0',
})

// Register the database schema resource
server.registerResource(
  'database-schema',
  'schema://database',
  {
    title: 'Database Schema',
    description: 'SQLite schema for the issues database',
    mimeType: 'text/plain',
  },
  async (uri) => {
    const dbPath = path.join(__dirname, '..', 'backend', 'database.sqlite')

    const schema = await new Promise<string>((resolve, reject) => {
      const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY)

      db.all(
        "SELECT sql FROM sqlite_master WHERE type='table' AND sql IS NOT NULL ORDER BY name",
        (err, rows: SchemaRow[]) => {
          db.close()
          if (err) reject(err)
          else resolve(rows.map((row) => row.sql + ';').join('\n'))
        }
      )
    })

    return {
      contents: [
        {
          uri: uri.href,
          mimeType: 'text/plain',
          text: schema,
        },
      ],
    }
  }
)

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()

;(async () => {
  console.error('Starting MCP server...')
  await server.connect(transport)
  console.error('MCP server started and listening.')
})()
