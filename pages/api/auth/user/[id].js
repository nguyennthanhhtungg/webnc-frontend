import users from '@/mocks/data/users.json'
export default async function handler(req, res) {
  return res.status(200).json({ results: users[0] })
}
