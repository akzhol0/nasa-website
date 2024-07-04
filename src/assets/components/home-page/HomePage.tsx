import MyDefaultButton from "../UI/my-buttons/my-default-button/MyDefaultButton";
import HomePageParallax from "./HomePageParallax";

function HomePage() {

  return (
    <div className="w-full min-h-[800px] flex flex-col">
      <div className="w-full h-auto mt-[80px]">
        <HomePageParallax />
      </div>
      <div className="w-full h-auto xl:h-[600px] flex justify-center bg-white">
        <div className="w-[80%] flex flex-col xl:flex-row gap-2 items-center py-5">
          <div className="w-full flex gap-[30px] flex-col">
            <strong className="text-[40px]">On Fourth of July</strong>
            <small className="text-[18px]">NASA astronauts Mike Barratt, Matt Dominick, Tracy C. Dyson, Jeanette
              Epps, Butch Wilmore, and Suni Williams share an Independence Day message and extend
              their best wishes to those back on Earth. The crew members are currently living and
              working aboard the International Space Station.</small>
            <a href="https://www.nasa.gov/international-space-station/space-station-research-and-technology/" target="_blank">
              <MyDefaultButton className="w-[300px]">More Info</MyDefaultButton>
            </a>
          </div>
          <div className="w-full flex justify-center">
            <iframe width="600" height="330"
              src="https://www.youtube.com/embed/ijkkPoXQukY?autoplay=1&mute=0">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage