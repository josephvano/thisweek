import {NextApiRequest, NextApiResponse}         from "next";
import {getAccessToken, getCredentials, getUser} from "../../../../lib/github";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const code = req.query.code as string;

    if (!code) {
      return res.send({
        success: false,
        message: `Error: no code`
      });
    }

    const credentials = getCredentials();
    credentials.code  = code;

    const accessTokenResponse = await getAccessToken(credentials);

    if (accessTokenResponse.success) {
      const data = await getUser(<string>accessTokenResponse.data);

      return res.json({
        data
      })
    }

    res.status(400).send({
      error  : accessTokenResponse.error || 'Error',
      message: accessTokenResponse.message || 'Could not get token'
    });
  }
}