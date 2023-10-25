import React from "react"
import { REVALIDATE_TIME } from "@/config"

interface PostLayoutProps {
  children: React.ReactNode
}

export const revalidate = REVALIDATE_TIME

const PostLayout = (props: PostLayoutProps) => {
  const { children } = props
  return <div className="container mt-12 max-w-5xl">{children}</div>
}

export default PostLayout
