import React from "react"
import Link from "next/link"
import { IWorkExperience } from "@/types"
import { Badge } from "@/components/ui"
import WorkExperienceDescription from "./work-experience-description"

interface WorkExperienceListProps {
  experiences: IWorkExperience[]
}

export const WorkExperienceList = (props: WorkExperienceListProps) => {
  const { experiences } = props
  return (
    <ul className="flex flex-col space-y-4">
      {experiences.map((experience, index) => (
        <li className="group relative cursor-pointer" key={index}>
          <Link href={experience.link} target="_blank">
            {/* background */}
            <div className="absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-[rgba(50,50,50,0.1)] opacity-30 shadow-md transition-all duration-300 group-hover:opacity-100 dark:bg-[rgba(230,230,230,0.1)] dark:from-transparent dark:via-transparent dark:to-transparent" />
            {/* content */}
            <div className="grid grid-cols-9 gap-1 px-6 pb-0 pt-6 sm:gap-6">
              <div className="col-span-9 pt-1 sm:col-span-2">
                <p className="text-foreground-secondary text-sm font-medium uppercase">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <div className="col-span-9 sm:col-span-7">
                <h3 className="text-lg font-bold">
                  {experience.title}{" "}
                  <span className="text-primary">@{experience.company}</span>
                </h3>
                <p className="text-md text-foreground-secondary mb-1">
                  {experience.location}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-9 gap-1 px-6 pb-6 pt-3 sm:gap-6">
              {experience.projects.map((project, index) => (
                <React.Fragment key={index}>
                  <div key={index} className="col-span-9 pt-1 sm:col-span-2">
                    <p className="text-foreground-secondary pl-4 text-sm font-medium uppercase">
                      {project.name}
                    </p>
                  </div>
                  <div className="col-span-9 sm:col-span-7">
                    <WorkExperienceDescription list={project.description} />
                  </div>
                </React.Fragment>
              ))}
              <div className="sm:col-span-2" />
              <div className="col-span-9  sm:col-span-7">
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, index) => (
                    <Badge key={index} className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
