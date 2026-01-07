import Image from "next/image"
import SmallBox from "./smallBox"


const LatestNews = () => {
  return (
    <div className="p-4 py-10 sm:p-[80px] bg-[#BC2035] text-white">
        <h1 className="text-center text-lg sm:text-[52px] uppercase">Latest News</h1>
        <div className="mt-10 sm:mt-[92px] flex flex-wrap gap-y-4">
          <div className="md:w-1/3">
            <SmallBox />
          </div>
            <div className="relative min-h-[280px] min-w-[300px] w-full md:w-1/3 ">
              <Image src="/homepage/soldiers_on_jeep.png" alt="" fill={true}/>
            </div>
            <div className="relative min-h-[280px] min-w-[300px] w-full md:w-1/3 ">
              <Image src="/homepage/soldier_Helicopter.png" alt="" fill={true}/>
            </div>
        </div>
    </div>
  )
}

export default LatestNews