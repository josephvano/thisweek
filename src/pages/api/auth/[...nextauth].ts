import NextAuth                              from 'next-auth';
import Providers                             from 'next-auth/providers';
import {getCredentials as gitHubCredentials} from "../../../lib/github";

const GitHub = gitHubCredentials();
const database = process.env.DB_URL;

console.log(database);

/**
 * https://next-auth.js.org/getting-started/example
 */
export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId    : GitHub.client_id,
      clientSecret: GitHub.client_secret,
      scope: "user:email"
    })
  ],
  
  database: process.env.DB_URL
})

