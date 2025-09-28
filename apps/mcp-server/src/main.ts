import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

// Create an MCP server
const server = new McpServer({
  name: 'add-server',
  version: '1.0.0',
})

// Add an addition tool
server.registerTool(
  'add',
  {
    title: 'Addition Tool',
    description: 'Add two numbers',
    inputSchema: {
      a: z.number(),
      b: z.number(),
    },
  },
  async ({ a, b }) => {
    return {
      content: [{ type: 'text', text: String(a + b) }],
    }
  }
)

// We need to keep stdout clean for Claude desktop.
console.error('Registered tools: add')
console.error('checking to see if this is running...')

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()
;(async () => {
  console.error('Starting MCP server...')
  await server.connect(transport)
  console.error('MCP server started and listening.')
})()
