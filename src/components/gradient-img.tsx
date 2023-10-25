import React from "react"
import Image from "next/image"
import gradient from "@/assets/gradientImg.png"

export const GradientImage = () => {
  return (
    <div className="absolute w-full top-0 mt-[-40px] h-[60vh] max-h-[60vh] z-[-2] opacity-[0.5]">
      <span className="block overflow-hidden w-initial h-initial bg-none opacity-100 border-0 m-0 p-0 absolute inset-0">
        <div className="relative w-full h-full overflow-hidden  ">
          <Image
            alt="gradient"
            sizes="100vw"
            src={gradient}
            decoding="async"
            data-nimg="fill"
            className="absolute inset-0 h-0 max-h-full min-h-full w-0 min-w-full max-w-full object-cover object-center "
          />
        </div>
      </span>
      <div className="w-full h-full  absolute top-0  bg-gradient-to-b from-transparent to-background via-transparent " />
    </div>
  )
}
