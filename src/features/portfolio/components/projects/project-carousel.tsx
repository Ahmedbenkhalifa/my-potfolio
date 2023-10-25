"use client"

import React from "react"
import Image from "next/image"
import screenshotProfitLoss from "@/assets/project02.png"
import screenshotProfitLoss2 from "@/assets/project_weather_2.png"
import screenshotProfitLoss3 from "@/assets/project_weather_3.png"
import clsx from "clsx"

// const screenshots = [
//   {
//     image: screenshotProfitLoss,
//   },
//   {
//     image: screenshotProfitLoss2,
//   },
//   {
//     image: screenshotProfitLoss3,
//   },
// ]

interface CarouselDesktopProps {
  screenshots: string[]
}

function CarouselDesktop(props: CarouselDesktopProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const { screenshots } = props

  return (
    <div className="hidden  lg:block">
      <div className="rounded-4xl relative overflow-hidden bg-transparent px-14 py-16 xl:px-16">
        <div className="-mx-5 flex">
          {screenshots.map((screenshot, screenshotIndex) => (
            <div
              onMouseEnter={() => setActiveIndex(screenshotIndex)}
              key={screenshotIndex}
              className={clsx(
                "px-5 transition duration-1000 ease-in-out [&:not(:focus-visible)]:focus:outline-none",
                screenshotIndex !== activeIndex && "opacity-60"
              )}
              style={{ transform: `translateX(-${activeIndex * 90}%)` }}
              aria-hidden={screenshotIndex !== activeIndex}
            >
              <div className="w-[42.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                <Image
                  className="w-full"
                  src={screenshot}
                  alt=""
                  sizes="42.75rem"
                  width={100}
                  height={0}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-4xl pointer-events-none absolute inset-0 ring-1 ring-inset ring-slate-900/10" />
      </div>
    </div>
  )
}

export const ProjectCarousel = (props: CarouselDesktopProps) => {
  const { screenshots } = props
  return (
    <section id="prejcts-carousel" className="py-2">
      <CarouselDesktop screenshots={screenshots} />
    </section>
  )
}
