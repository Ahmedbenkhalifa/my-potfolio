import React from "react"
import Image from "next/image"
import { Github, Link, Npm } from "@/assets/icons"
import { siteConfig } from "@/config"
import { ProjectCarousel } from "@/features/portfolio"
import { ILinks } from "@/types"
import { Badge, Button } from "@/components/ui"

interface ProjectPageProps {
  params: {
    projectSlug: string
  }
}
const icons = {
  website: Link,
  github: Github,
  npm: Npm,
}

const projects = siteConfig.projects

const Projects = (props: ProjectPageProps) => {
  const { params } = props
  const { projectSlug } = params
  const { title, summary, screenshots, description, tags, links } =
    projects.find((project) => project.slug === decodeURIComponent(projectSlug))

  return (
    <div>
      <h2 className="font-display mb-2 text-center text-3xl">{title}</h2>
      <p className="text-muted-foreground text-sm">{summary}</p>
      {/* <Image
        src={image}
        width={350}
        height={100}
        alt={title}
        objectFit="contain"
        className="mx-auto my-6"
      /> */}
      <ProjectCarousel screenshots={screenshots} />
      <div className="mb-4 flex gap-2">
        {tags &&
          tags.map((tag, index) => (
            <Badge variant="filled" key={index}>
              {tag}
            </Badge>
          ))}
      </div>
      <div className="mb-2">
        {description &&
          description.map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
      </div>
      <div className="mt-8 flex space-x-1">
        {links &&
          Object.keys(links).map((key) => {
            if (links[key as keyof ILinks]) {
              const Icon = icons[key as keyof ILinks]
              return (
                <a key={key} href={links[key as keyof ILinks]} target="_blank">
                  <Button size="icon" variant="ghost">
                    <Icon size={20} />
                  </Button>
                </a>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Projects
