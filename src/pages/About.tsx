import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center">
      <Head>
        <title>關於我</title>
        <meta name="description" content="關於我 | 前端工程師" />
      </Head>
      <Header doNotShowButton={true}/>
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <Image
                  className="rounded-full"
                  src="/images/user.png"
                  alt="我的頭像"
                  width={150}
                  height={150}
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">鄭明倫</h1>
              <p className="text-gray-600">前端工程師</p>
            </div>
            <div className="mt-8 text-lg leading-7">
              <p>
                您好，我是鄭明倫，一位有著 React 和 Next.js 經驗的前端工程師。我熱愛開發美觀、生動的網站，為使用者帶來最佳的使用體驗。
              </p>
              <p className="mt-4">
                在我看來，前端工程師的工作不僅是實現網站的設計和功能，更是將用戶體驗帶入每個細節，從而打造出最佳的產品。我熱愛在開發過程中不斷挑戰自己，學習新的技術，並不斷優化自己的程式碼。如果您正在尋找一位有熱情、有經驗的前端工程師，我認為我會是一個很好的選擇。
              </p>
              <p className="font-bold">
                如果您想與我聯繫，請發送電子郵件至 abc@example.com。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}