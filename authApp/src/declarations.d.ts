import { ApolloClient } from '@apollo/client';

declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

// declare module "@hr/services" {

//   export interface User {
//     id: string;
//     name: string;
//   }

//   export interface AuthToken {
//     token: string;
//     expires: Date;
//   }
//   export function getUser(userId: string): Promise<User>;
//   export function authenticate(username: string, password: string): Promise<AuthToken>;
// }

// declare module "@hr/services" 