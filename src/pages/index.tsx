import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-100">
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
        <ul>
          <li className="mb-4">
            <Link href="/posts/1" className="text-xl font-medium text-gray-700 hover:text-gray-900">
              My First Blog Post
            </Link>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="mb-4">
            <Link href="/posts/2" className="text-xl font-medium text-gray-700 hover:text-gray-900">
              My Second Blog Post
            </Link>
            <p className="mt-2 text-gray-600">Dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </main>

      <footer className="mt-12 border-t border-gray-200 py-6">
        <p className="text-sm text-gray-600">&copy; 2023 My Blog</p>
      </footer>
    </div>
  );
};

export default Home;