# Making MCP server with MCP SDK

[Intro to MCP](https://modelcontextprotocol.io/docs/getting-started/intro)
[MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)

```bash
yarn add @modelcontextprotocol/sdk zod
```

- MCP server can get LLM to produce deterministic output, like addition. For more advanced example, like manipulating database. For example, we can make sure LLM doesn't drop a table and re-create a new one when it cannot insert data.

Example of tools: https://github.com/neondatabase/mcp-server-neon/blob/main/src/tools/toolsSchema.ts

## MCP server basic

1. What is the purpose of the input schema when registering a tool in an MCP server?

The input schema defines the expected input types for the tool, using Zod to specify the data types (such as Z number for numeric inputs). This helps the AI understand what kind of data the tool requires to function correctly.

2. How does an MCP server help address inconsistencies with Large Language Models (LLMs)?

MCP servers allow for deterministic tool creation with specific inputs and outputs, which prevents LLMs from making unpredictable or unintended decisions by providing precise, controlled functions with clear descriptions and schemas.

3. What key components are needed when registering a tool in an MCP server?

When registering a tool, you need to provide a title, description, input schema (defining input types), and an async function that performs the specific task with the given inputs.

4. How does an LLM decide whether to use a specific tool in an MCP server?

The LLM uses the tool's description to determine if the tool is appropriate for the current task. The description provides hints about the tool's functionality and when it should be used.

5. What is the recommended approach for writing a tool description in an MCP server?

The description should be concise and provide enough context for the LLM to understand the tool's purpose without being overly detailed, which could potentially cause the LLM to hallucinate or misinterpret the instructions.

##

WHat is RPC in JSON RPC?

RPC stands for Remote Procedure Call, which involves telling a remote system to run a specific function using provided parameters.

What are the key differences between RPC and REST?

REST focuses on resources in the cloud, while RPC is centered on executing specific actions with given parameters, without primarily dealing with resources.

What are the required components when making a JSON RPC 2.0 call?

A JSON RPC 2.0 call requires jsonrpc version, an ID to identify the client/command, a method name, and optional parameters.

## Testing

```bash
# run this in one process
node ./dist/apps/mcp-server/main.js

# run this in another process. This will give us the info about this tool.
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{"name":"add", "arguments" : {}}}' | node ./dist/apps/mcp-server/main.js

echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "add", "arguments": {"a": 5, "b": 3}}}' | node ./dist/apps/mcp-server/main.js
```

dist/apps/mcp-server/main.js

## Configuring Claude Desktop to use a local MCP server

1. Download Desktop app

2. Settings -> Developer -> Edit Config (This will open the config file).

3. Configure.

- `command` is the node path (use `which node` to find the path)
- `args` are the path for the transpiled mcp server file. Make sure that it's an array.
- Suppressing deprecation messages is good practice so that we don't cloud stdout.

```json
{
  "mcpServers": {
    "demo-server": {
      "command": `Output from which node`,
      "args": [`Path to the mcp server file`],
      "env": {
        "NODE_OPTIONS": "--no-deprecation"
      }
    }
  }
}
```

4. Restart the desktop app (otherwise, the app won't register the server)

## Trouble shooting MCP

### 1. Remove console.log and replace it with console.error

`stdout` needs to be clean for Claude Desktop. Make `stderr` receives the debug message. In this way, the debug messages won't interfere with the protocol.

## More LLM info

What is the purpose of the 'temperature' parameter when invoking an LLM?

The temperature parameter controls the level of randomness or variance in the LLM's responses. A temperature of 1 means it will always choose the best result with no variance, while a temperature around 0.8 introduces some variability in responses.

Why should you minimize the number of tools exposed to an LLM?

Exposing too many tools can cause confusion for the LLM, waste input tokens, and potentially lead to poor tool selection or performance. It's recommended to only expose tools that will be actively used.

What is an LLM's default behavior when it has multiple tools for a similar task?

When an LLM has multiple tools for a similar task, it may become confused, potentially try to use both tools, or choose one arbitrarily, which can lead to suboptimal or inconsistent results.

# Tools vs Resources

What is the key difference between a resource and a tool in the context of LLM interactions?

A resource is a user-driven method of providing additional static context to an LLM, while a tool is an LLM-initiated method of fetching additional information or capabilities.

What is a characteristic of static resources in LLM interactions?

Static resources are fixed and cannot be dynamically modified. They provide a single, unchanging piece of context to the LLM.

How might RAG (Retrieval Augmented Generation) be implemented with resources or tools?

RAG can be implemented with tools by searching a vector-based database and fetching related context, or with resources by providing pre-selected vector search databases directly to the LLM.

What is the fundamental difference between pushing and pulling information in LLM interactions?

Pushing (resources) involves directly providing context to the LLM, while pulling (tools) allows the LLM to independently fetch additional information or capabilities as needed.

What limitation currently exists with static resources in LLM interactions?

Static resources can currently only provide one fixed piece of context without the ability to customize or parameterize the response.

## Root, Sampling, Elicitation

Roots represent a directory or subset of a file system where an agent can view, modify, update, read, and delete files, similar to how one might use VS Code in a directory

In the context of MCP, what does 'Sampling' specifically mean?

Sampling is the ability for an MCP server to directly prompt an LLM, allowing the server to interact with the language model without a human intermediary while still maintaining human-in-the-loop review capabilities

What is 'Elicitation' in the MCP protocol?

Elicitation is a process where an MCP server can pause a tool call and request additional information from the user to complete a task, such as asking follow-up questions when more context is needed to fill out a form

What is a key principle of the MCP protocol regarding human interaction?

It is part of the protocol that there should always be a human-in-the-loop review, though individual clients can choose how strictly to implement this requirement

What unique feature does the sampling workflow provide in MCP?

The sampling workflow allows humans to view, modify, and review both the prompt sent to the LLM and the response received, providing control and transparency at every step of the AI interaction
