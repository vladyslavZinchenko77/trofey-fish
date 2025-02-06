import { NextResponse } from 'next/server';
import { posts } from '@/data/posts';

// Получение постов (GET)
export async function GET() {
  return NextResponse.json(posts);
}

// Создание поста (POST)
export async function POST(req: Request) {
  const body = await req.json();
  const newPost = { id: posts.length + 1, ...body };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
