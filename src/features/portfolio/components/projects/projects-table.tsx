"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/config"
import { getFirstStringsLessThanNChars } from "@/utils"
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui"
import { ProjectModal } from "./project-modal"

const projects = siteConfig.projects

export const ProjectsTable = () => {
  const router = useRouter()
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Year</TableHead>
          <TableHead>Project</TableHead>
          <TableHead className="w-[450px]">Summary</TableHead>
          <TableHead className="w-[250px]">Built with</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="cursor-pointer appearance-none items-start"
          >
            <TableCell className="text-muted-foreground">
              {project.createdAt}
            </TableCell>
            <TableCell>{project.title}</TableCell>
            <TableCell>
              {project.summary.length > 100
                ? `${getFirstStringsLessThanNChars(
                    project.summary.split(" "),
                    100
                  ).join(" ")}...`
                : project.summary}
            </TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge variant="filled" key={index}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
