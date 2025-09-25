import { ZodTypeAny } from 'zod'

declare module '@modelcontextprotocol/sdk' {
  interface ToolOptions {
    inputSchema?: ZodTypeAny
    outputSchema?: ZodTypeAny
  }
}
