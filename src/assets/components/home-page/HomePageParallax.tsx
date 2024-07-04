import { useContext, useEffect, useState } from "react";
import { contextData } from "../context/logic";
import MyDefaultButton from "../UI/my-buttons/my-default-button/MyDefaultButton";

function HomePageParallax() {
  const { apiKey } = useContext(contextData);
  const [loaded, setLoaded] = useState(true);

  const [dailyImage, setDailyImage] = useState<any>([]);

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
    getDailyImage();
  }, [])

  return (
    <>
      {loaded ? (
        <>
          <div className="w-full h-[800px]">
            <img className="w-full h-[800px] object-cover" src={dailyImage.url} alt="nasa-photo" />
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