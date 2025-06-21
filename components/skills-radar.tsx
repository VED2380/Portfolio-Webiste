"use client"

import { useEffect, useRef } from "react"

interface Skill {
  name: string
  level: number
  color: string
}

const skills: Skill[] = [
  { name: "Python", level: 90, color: "#2dd4bf" },
  { name: "TensorFlow", level: 85, color: "#3b82f6" },
  { name: "PyTorch", level: 85, color: "#8b5cf6" },
  { name: "C++", level: 80, color: "#f59e0b" },
  { name: "JavaScript", level: 75, color: "#10b981" },
  { name: "YOLOv8", level: 80, color: "#ef4444" },
]

export function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const maxRadius = Math.min(centerX, centerY) - 60

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius * i) / 5
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
      ctx.strokeStyle = "#334155"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw grid lines
    const angleStep = (2 * Math.PI) / skills.length
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + maxRadius * Math.cos(angle)
      const y = centerY + maxRadius * Math.sin(angle)

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.strokeStyle = "#334155"
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw skill polygon
    ctx.beginPath()
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const radius = (maxRadius * skills[i].level) / 100
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = "rgba(45, 212, 191, 0.2)"
    ctx.fill()
    ctx.strokeStyle = "#2dd4bf"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw skill points and labels
    for (let i = 0; i < skills.length; i++) {
      const angle = i * angleStep - Math.PI / 2
      const radius = (maxRadius * skills[i].level) / 100
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)

      // Draw point
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = skills[i].color
      ctx.fill()

      // Draw label
      const labelRadius = maxRadius + 30
      const labelX = centerX + labelRadius * Math.cos(angle)
      const labelY = centerY + labelRadius * Math.sin(angle)

      ctx.fillStyle = "#e2e8f0"
      ctx.font = "12px Inter"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skills[i].name, labelX, labelY)
      ctx.fillText(`${skills[i].level}%`, labelX, labelY + 15)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="max-w-full h-auto"
        aria-label="Skills radar chart showing proficiency levels in Python (90%), TensorFlow (85%), PyTorch (85%), C++ (80%), JavaScript (75%), and YOLOv8 (80%)"
      />
    </div>
  )
}
