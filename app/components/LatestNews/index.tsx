import Image from "next/image"
import SmallBox from "./smallBox"
import { data } from "@/app/constants/latestNews"


const LatestNews = () => {
  const imagesSrcs = [
    "/homepage/soldiers_on_jeep.png",
    "/homepage/soldier_Helicopter.png"
  ]
  return (
    <div className="p-4 py-10 md:p-8 lg:p-12 xl:p-16 bg-[#BC2035] text-white">
      <h1 className="text-center text-lg sm:text-[52px] uppercase">Latest News</h1>
      <div className="mt-6 sm:mt-8  lg:mt-[80px] flex flex-wrap lg:flex-nowrap gap-y-4 lg:gap-x-4">
        <div className="lg:w-1/3 w-full min-w-[300px]">
          <SmallBox />
        </div>
        

        
        {imagesSrcs.map((img,index)=>
        <div key={String(index)+" "+ img} className="relative min-h-[280px] min-w-[300px] md:h-[450px] w-full lg:w-1/3">
          <Image src={img} alt="" fill={true} />
          <div className="absolute z-10 bottom-2 px-2">
            <p className="text-[16px] font-bold pb-4 border-b-1 border-gray-100">{data[0].heading}</p>
            <p className="text-[20px] lg:text-[16px] mt-[16px] lg:max-w-[315px] font-semibold">{data[0].description}</p>
          </div>
        </div>)}
      
   
      </div>
    </div>
  )
}

export default LatestNews