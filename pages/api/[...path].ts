import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const cookies = new Cookies(req, res);
  const accessToken = cookies.get('access_token')
  if (accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  req.headers.cookies = '';

  return new Promise((resolve) => {
    
    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });

    proxy.once('proxyRes', () => {
      resolve(true);
    });
  })
}
