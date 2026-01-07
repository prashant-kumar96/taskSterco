import { data } from '@/app/constants/latestNews'
import { LatestNewsitemType } from '@/app/types/latestNews'
import Image from 'next/image'
import React from 'react'

const SmallBox = () => {
  return (
    <div className="">
      {data.map((item: LatestNewsitemType, index: Number) =>
        <div key={item.heading + String(index)} className="lg:flex gap-[24px] py-[15px] border-b-1 border-gray-200">
          <div className="relative w-full h-[250px] md:h-[450px] lg:w-[138px] lg:h-[112px]">
            {/* <Image src={item.imgsrc} alt="Latest News" width={138} height={112} /> */}
            <Image src={item.imgsrc} alt="Latest News" fill={true} />
          </div>
          <div className="mt-2 flex flex-col justify-between">
            <p className="text-[16px] font-bold">{item.heading}</p>
            <p className="text-[20px] mt-[16px] lg:text-[16px] lg:max-w-[315px] font-semibold">{item.description}</p>
          </div>
        </div>)}
    </div>
  )
}

export default SmallBox