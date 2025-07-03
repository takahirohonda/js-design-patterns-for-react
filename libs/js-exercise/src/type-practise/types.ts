enum EntityType {
  COMPANY = 'company',
  PERSON = 'person',
}

type theme = 'light' | 'dark'

type Entity = {
  id: string
  name: string
  type: EntityType
  createdAt: Date
  updatedAt: Date
  theme: theme
}

export const typeAssertion = {
  id: '123',
  name: 'Example Entity',
  type: 'company',
  createdAt: new Date(),
  updatedAt: new Date(),
  theme: 'dark',
} as Entity

export const typeAnnotation: Entity = {
  id: '123',
  name: 'Example Entity',
  type: EntityType.COMPANY,
  createdAt: new Date(),
  updatedAt: new Date(),
  theme: 'dark',
}

export const typeSatisfaction = {
  id: '123',
  name: 'Example Entity',
  type: EntityType.PERSON,
  createdAt: new Date(),
  updatedAt: new Date(),
  theme: 'dark',
} satisfies Entity

// Type annotation: Widens the type to the full union/type
// satisfies: Preserves the specific literal values you provided

// Not sure if this is true... especially with enums?
// typeAnnotation.type has type EntityType (could be COMPANY or PERSON)
// typeSatisfies.type has type EntityType.COMPANY (specifically COMPANY)

const entity1 = typeAssertion.type
const entity2 = typeAnnotation.type

// This one makes sense
// typeAssertion.theme has type 'dark' | 'light'
// typeSatisfaction.theme has  'dark' because it was defined as 'dark' in the object
const theme1 = typeAssertion.theme
const theme2 = typeSatisfaction.theme
if (theme1 === 'light') {
  console.log('check')
}
if (theme2 === 'light') {
  console.log('type script error because it knows theme2 is always dark')
}
// More practical example showing the benefit:
type Config = {
  apiUrl: string
  retries: number
  endpoints: Record<string, string>
}

// Type annotation - loses specific keys
const config1: Config = {
  apiUrl: 'https://api.example.com',
  retries: 3,
  endpoints: {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
  },
}

// satisfies - preserves specific keys
const config2 = {
  apiUrl: 'https://api.example.com',
  retries: 3,
  endpoints: {
    users: '/users',
    posts: '/posts',
    comments: '/comments',
  },
} satisfies Config

// The difference:
// config1.endpoints.users // ❌ TypeScript doesn't know 'users' exists
// config2.endpoints.users // ✅ TypeScript knows 'users' exists and is type string

const users1 = config1.endpoints // ❌ TypeScript doesn't know 'users' exists
const users2 = config2.endpoints.users

// more

type ApiConfig = {
  baseUrl: 'https://api.example.com' | 'localhost'
  timeout: number
}

const configSatisfies = {
  baseUrl: 'https://api.example.com',
  timeout: 5000,
} satisfies ApiConfig

const configBaseUrlWithTypeSatisfaction = configSatisfies.baseUrl // typescript knows it is 'https://api.example.com' and no other string

if (configBaseUrlWithTypeSatisfaction === 'localhost') {
  console.log('This is the correct base URL')
}
