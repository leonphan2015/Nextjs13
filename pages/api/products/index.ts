import type { NextApiRequest, NextApiResponse } from 'next'
 
type Data = {
  data: any[];
  pagination: any
} | { name: string }
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method !== 'GET') {
        return res.status(404).json({name: 'method not supported!'})
    }

    const reponse = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&_limit=10')
    const reponseJson = await reponse.json()
    
    res.status(200).json(reponseJson)
}