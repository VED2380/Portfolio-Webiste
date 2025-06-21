import type React from "react"
import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  name: string
  color?: string
  icon?: React.ReactNode
}

export function TechBadge({ name, color = "14B8A6", icon }: TechBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground border border-border hover:bg-muted transition-colors"
    >
      {icon && <span className="w-3 h-3">{icon}</span>}
      <img
        src={`https://img.shields.io/badge/${name}-${color}?style=flat&logo=${name.toLowerCase()}&logoColor=white`}
        alt={name}
        className="h-4"
      />
    </Badge>
  )
}
