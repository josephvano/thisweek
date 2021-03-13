import {NextApiRequest, NextApiResponse} from "next";
import {getCredentials}                  from "../../../../lib/github";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const credentials = getCredentials();
    const params = new URLSearchParams({
      client_id: credentials.client_id
    })

    res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
  }
}
