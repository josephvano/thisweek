import fetch from "node-fetch";

export type GitHubCredentials = {
  client_id: string;
  client_secret: string;
  code?: string;
}

type GitHubLoginResponse = {
  id: number;
  login: string;
  email: string;
  avatar_url: string;
  url: string;
}

type HttpResponse<T> = {
  success: boolean;
  error?: string;
  message?: string;
  data?: T;
}

/**
 * GitHub: Get access token for user
 * @param credentials
 */
export async function getAccessToken(credentials: GitHubCredentials): Promise<HttpResponse<string>> {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    'method' : 'POST',
    'headers': {
      'Content-Type': 'application/json'
    },
    'body'   : JSON.stringify(credentials)
  });


  const text   = await response.text();
  const params = new URLSearchParams(text);

  const access_token    = params.get('access_token') as string;
  const error: string   = params.get('error') as string;
  const message: string = params.get('error_description') as string;

  if (error) {
    return {
      error,
      message,
      success: false
    }
  }

  return {
    success: true,
    data   : access_token
  };
}

/**
 * Fetches user data from GitHub API
 *
 * @param token
 * @returns Promise<GitHubLoginResponse>
 */
export async function getUser(token: string): Promise<GitHubLoginResponse> {
  const response = await fetch('https://api.github.com/user', {
    'headers': {
      'Authorization': `bearer ${token}`
    }
  });

  return await response.json();
}

export const getCredentials = (): GitHubCredentials => {
  return {
    client_id    : process.env.GITHUB_CLIENT_ID as string,
    client_secret: process.env.GITHUB_CLIENT_SECRET as string
  }
}