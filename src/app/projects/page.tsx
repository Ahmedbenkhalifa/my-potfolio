import React from "react"
import { ProjectsTable } from "@/features/portfolio"

const Projects = () => {
  return (
    <div className="pt-4">
      <div className="container mt-12 max-w-6xl">
        <h1 className="font-display mb-12 text-center	text-4xl font-bold">
          Projects archive
        </h1>
        {/* <SecondaryFeatures /> */}
        <ProjectsTable />
      </div>
    </div>
  )
}

export default Projects
