import category from '@/mocks/data/category.json'
export default function handler(req, res) {
  const { id } = req.query
  return res.status(200).json({ results: { categories: category.topics } })
}