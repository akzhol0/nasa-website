import { useContext, useEffect, useState } from "react";
import { contextData } from "../context/logic";
import MyDefaultButton from "../UI/my-buttons/my-default-button/MyDefaultButton";

function HomePageParallax() {
  const { apiKey } = useContext(contextData);
  const [loaded, setLoaded] = useState(true);

  const [dailyImage, setDailyImage] = useState<any>({
    copyright: "Jesús Carmona Guillén",
    date: "2024-07-04",
    explanation: "The beautiful Trifid Nebula is a cosmic study in contrasts. Also known as M20, it lies about 5,000 light-years away toward the nebula rich constellation Sagittarius. A star forming region in the plane of our galaxy, the Trifid does illustrate three different types of astronomical nebulae; red emission nebulae dominated by light from hydrogen atoms, blue reflection nebulae produced by dust reflecting starlight, and dark nebulae where dense dust clouds appear in silhouette. But the red emission region, roughly separated into three parts by obscuring dust lanes, is what lends the Trifid its popular name. Pillars and jets sculpted by newborn stars, above and right of the emission nebula's center, appear in famous Hubble Space Telescope close-up images of the region. The Trifid Nebula is about 40 light-years across. Too faint to be seen by the unaided eye, it almost covers the area of a full moon on planet Earth's sky.",
    hdurl: "https://apod.nasa.gov/apod/image/2407/TrifidrecortesRGB.jpg",
    media_type: "image",
    service_version: "v1",
    title: "A Beautiful Trifid",
    url: "https://apod.nasa.gov/apod/image/2407/TrifidrecortesRGB1024.jpg"
  });

  async function getDailyImage() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const options = {
      method: "GET"
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setDailyImage(result)
      console.log(result)
      setLoaded(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // getDailyImage();
  }, [])

  return (
    <>
      {loaded ? (
        <>
          <div className="w-full h-[800px]">
            <img className="w-full h-[800px] object-cover" src={dailyImage.hdurl} alt="nasa-photo" />
          </div>
          <div className="w-full h-[800px] flex items-center ps-[10px] md:ps-[120px] mt-[-800px]">
            <div className="flex flex-col text-white">
              <h1 className="font-semibold text-[50px]">{dailyImage.title}</h1>
              <p className="max-w-[800px] max-h-[70px] overflow-hidden">{dailyImage.explanation}</p>
              <p className="mb-3">{dailyImage.date}</p>
              <p className="text-[#c7c7c7]">*This is Astronomy Picture of the Day, changing every day, provided by NASA API*</p>
              <a href="https://www.nasa.gov/" target="_blank"><MyDefaultButton className="w-[200px] mt-4">More Info</MyDefaultButton></a>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-white">Loading...</p>
      )}</>
  )
}

export default HomePageParallax