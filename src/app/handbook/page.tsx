import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div className="text-sm">
        <Content />
      </div>
    </div>
  );
}

export default function HandBook() {
  const posts = allPosts.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="max-w-2xl py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Music Handbook</h1>
      {posts.map((post: any, idx: any) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
