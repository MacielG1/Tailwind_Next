import { PostType } from '@/utils/types';

export default function Post({ post }: { post: PostType }) {
  return (
    <article className="relative dark:bg-neutral-800 bg-white shadow-xl rounded-lg p-6 m-4  hover:bg-neutral-100 transition-colors duration-300 ">
      <h2 className="text-3xl font-semibold dark:text-white text-neutral-900 tracking-wide text-center">
        {post.title}
      </h2>
      <p className="py-6 px-6 text-xl dark:text-neutral-300 text-gray-500 leading-relaxed mb-6">
        {post.body}
      </p>
      <div className="flex flex-wrap gap-2 absolute bottom-0 p-4 right-0">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block dark:bg-neutral-700 bg-neutral-500 rounded-xl px-3 py-2 text-sm font-semibold text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
