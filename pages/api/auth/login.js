import { login } from '@/mocks/api/auth.handler'
import { mock } from '@/utils/api'

export default async function handler(req, res) {
  return mock(req, res, () => login(req.body))
}