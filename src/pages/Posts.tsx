import Header from "@/components/Header";
import Link from 'next/link';
import Image from 'next/image';
// import { formatDate } from '../utils/helpers'; // 自定義的日期格式化函數
// import posts from '../data/posts'; // 假設文章資料已經寫好並匯入


function BlogList() {
  const post:string[] = [ 1,2,3]
  return (
    <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
      {posts.map((post) => (
        <div key={post.slug} className="bg-white rounded-md overflow-hidden shadow-md">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={800}
                height={500}
                className="object-cover w-full h-48 md:h-64"
              />
            </a>
          </Link>
          <div className="p-4">
            <div className="mb-2">
              <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;