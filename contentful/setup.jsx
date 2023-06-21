import { createClient } from "contentful";

export const client = createClient({
    space: 'sk3y1i3c4bxt',
    environment: 'master', // defaults to 'master' if not set
    accessToken: import.meta.env.VITE_ACCESS_TOKEN
  })