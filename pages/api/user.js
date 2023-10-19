import { kv } from '@vercel/kv';

export default async function getUser(request, response) {
  const user = await kv.hgetall('user:me');
  return response.status(200).json(user);
}