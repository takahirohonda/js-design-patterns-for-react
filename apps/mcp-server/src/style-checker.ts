import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { fetchWeatherApi } from 'openmeteo'
import { z } from 'zod'
import { readFileSync } from 'fs'
import path from 'path'

// Since we're building to CommonJS, just use process.cwd() or a relative path
// The built file will be in: dist/apps/mcp-server/apps/mcp-server/src/
// So we need to go back to project root and find the source file
const projectRoot = process.cwd()
const airbnbMarkdownPath = path.join(
  projectRoot,
  'apps/mcp-server/src/assets/airbnb-style-guide.md'
)
const airbnbMarkdown = readFileSync(airbnbMarkdownPath, 'utf-8')

// Create an MCP server
const server = new McpServer({
  name: 'style-checker',
  version: '1.0.0',
})

// Register the prompt
server.registerPrompt(
  'review-code',
  {
    title: 'Code Review',
    description: 'Review code to follow the style guide',
    argsSchema: { code: z.string() },
  },
  ({ code }) => ({
    messages: [
      {
        role: 'user',
        content: {
          type: 'text',
          text: `please review this code to see if it follow our best practices.
        Use this AirBnb style guide as a reference and the rules:
        \n\n=============${airbnbMarkdown}============
        \n\n for this ${code}`,
        },
      },
    ],
  })
)

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport()

;(async () => {
  console.error('Starting MCP server...')
  await server.connect(transport)
  console.error('MCP server started and listening.')
})()
