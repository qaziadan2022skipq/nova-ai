export {}

// Create a type for the roles
export type Roles = 'admin' | 'company' | "company-user"

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    }
  }
}
