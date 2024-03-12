const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'node_modules/@hr', 'services');
const filePath = path.join(directoryPath, 'index.d.ts');
const fileContent = `import { ApolloClient, NormalizedCacheObject } from "@apollo/client";

declare module "@hr/services" {
  export interface User {
    id: string;
    name: string;
  }
  export interface AuthToken {
    token: string;
    expires: Date;
  }
  export function getUser(userId: string): Promise<User>;
  export const ServiceClient: ApolloClient<NormalizedCacheObject>;
  export function publicApiFunction():void
  export function setAuthToken(value: string): void;
  export function getAuthToken():null|string
}`

fs.mkdir(directoryPath, { recursive: true }, (err) => {
  if (err) throw err;
  fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.log('MFE Types Directory and file created successfully!');
  });
});