import React from "react"
import { PageLayout } from "@/layout"

interface ProjectsLayoutProps {
  children: React.ReactNode
}

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return <div>{children}</div>
}

export default ProjectsLayout
