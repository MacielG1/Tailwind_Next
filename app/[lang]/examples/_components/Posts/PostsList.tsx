import { PostType } from '@/utils/types';
import Product from './Post';

async function getAllPosts() {
  const res = await fetch('https://dummyjson.com/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
    next: { revalidate: 7200 },
  });
  const { posts } = await res.json();

  if (!posts) {
    console.log('error!');
  }

  return posts as PostType[];
}

export default async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-[1000px] lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="= grid grid-cols-1 gap-4">
        {posts.map((i) => (
          <Product post={i} key={i.id} />
        ))}
      </div>
    </div>
  );
}
