import HomePageArticle from "./HomePageArticle";
import HomePageParallax from "./HomePageParallax";

function HomePage() {

  return (
    <div className="w-full min-h-[800px] flex flex-col">
      <div className="w-full h-auto mt-[80px]">
        <HomePageParallax />
      </div>
      <div className="w-full h-auto xl:h-[600px] flex justify-center bg-white">
        <HomePageArticle />
      </div>
    </div>
  )
}

export default HomePage