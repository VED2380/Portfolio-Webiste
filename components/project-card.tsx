"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Play } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  achievements: string[]
  technologies: string[]
  github?: string
  demo?: string
  image?: string
  video?: string
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  achievements,
  technologies,
  github,
  demo,
  image,
  video,
  featured = false,
}: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Card className={`card-hover bg-slate-800/50 border-slate-700 ${featured ? "ring-2 ring-teal-500" : ""}`}>
      {/* Project Image/Video - Only show if image is provided */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-slate-700 rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={`${title} project screenshot`}
            className={`w-full h-full object-cover transition-all duration-300 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-teal-600 text-white">Featured</Badge>
            </div>
          )}
          {video && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
              <Button size="sm" className="accent-gradient text-white">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          )}
        </div>
      )}

      <CardHeader className={!image ? "pt-6" : ""}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-heading text-white">{title}</CardTitle>
            <CardDescription className="text-slate-300 mt-2">{description}</CardDescription>
          </div>
          {!image && featured && <Badge className="bg-teal-600 text-white ml-4">Featured</Badge>}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Achievements */}
        <div>
          <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Achievements</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-slate-300 flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 mr-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs border-slate-600 text-slate-300 bg-slate-800/50">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {github && (
            <Button
              size="sm"
              className="flex-1 accent-gradient text-white hover:opacity-90 focus-visible:focus"
              onClick={() => window.open(github, "_blank")}
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
          )}
          {demo && title !== "Real-Time ASL Gesture Recognition" && (
            <Button
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white focus-visible:focus"
              onClick={() => window.open(demo, "_blank")}
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
