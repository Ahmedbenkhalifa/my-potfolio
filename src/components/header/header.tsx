import React, { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config"
import { cn } from "@/utils"
import { Button } from "../ui"
import { BlurBackground } from "./blur-background"
import { MobileNav } from "./mobile-nav"
import { Nav } from "./nav"
import { ThemeToggle } from "./theme-toggle"

const logo = siteConfig.header.logo
const name = siteConfig.name
const nav = siteConfig.header.nav

export const Header = () => {
  return (
    <header className={cn("sticky top-0 z-40 w-full")}>
      <div className="relative">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
          <Link
            href="/"
            className="mr-8 flex items-center space-x-2 transition-all hover:opacity-80"
          >
            {logo && (
              <div className="rounded-lg bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-[1px] shadow-lg ring-[3px] ring-purple-500/10">
                <div className="h-[30px] w-[30px]">
                  <Image
                    src={logo}
                    alt={name}
                    loading="lazy"
                    width={30}
                    height={30}
                    className="aspect-[auto 30 / 30] object-cover"
                  />
                </div>
              </div>
            )}
            <span className="inline-block font-bold">{name}</span>
          </Link>
          <div className="">
            <Nav items={nav} />
          </div>
          <div className="flex space-x-2">
            <Button className="px-6">Contact</Button>
          </div>
          <div className="flex flex-1 sm:hidden ">
            <div className="flex-1" />
            {/* <ThemeToggle /> */}
            <MobileNav />
          </div>
        </div>
        {/* background */}
        <Suspense fallback={null}>
          <BlurBackground />
        </Suspense>
      </div>
    </header>
  )
}

export default Header
