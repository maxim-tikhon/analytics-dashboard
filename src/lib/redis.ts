import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://eu2-champion-quetzal-32410.upstash.io',
  token: process.env.REDIS_TOKEN!
})
