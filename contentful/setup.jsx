import { createClient } from "contentful";

export const client = createClient({
    space: 'sk3y1i3c4bxt',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'LfNaXXEhFd4yUobgLgqMAfdifnnT4cKk2qkxSi2REmw'
  })