import { kv } from '@vercel/kv';

export default async function userHandler(req, res) {
  console.log("req----:" + JSON.stringify(req))
  console.log("res----:" + JSON.stringify(res))
  const views = await kv.incr('views')
  console.log("views" + views)
  return
  // Intl.NumberFormat('en-us').format(views)
  (
    <p className="text-sm text-gray-500">
      {views} views
    </p>
  )
}