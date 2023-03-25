import Header from "@/components/Header";
import TitleButton from "@/components/TitleButton";

export default function Home() {
  return (
    <div className='h-screen w-screen bg-[#f5f8f9]'>
      <Header />
      <div className='h-[80px] flex bg-[#ffffff]'>
        <TitleButton  title="About"/>
        <TitleButton  title="Blogs"/>
      </div>
    </div>
  )
}