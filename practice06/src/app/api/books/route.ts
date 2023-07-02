import { prisma } from '@/code/settings/backend'
import { NextResponse as res } from 'next/server'

export async function GET(request: Request) {
  const books = await prisma.book.findMany()
  return res.json({ data: books })
}
