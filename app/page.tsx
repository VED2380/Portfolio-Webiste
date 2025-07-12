"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"
import { SkillsTree } from "@/components/skills-tree"
import {
  Github,
  Mail,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Brain,
  Eye,
  BarChart3,
  Code,
  FileText,
  ChevronRight,
  Star,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Respiratory Sound Classification System",
      description: "Advanced deep learning system for medical diagnosis using spectrogram-based audio analysis",
      achievements: [
        "Achieved 81.6% accuracy, 76.25% sensitivity, and 92.32% specificity",
        "Outperformed baseline models by 5.21%",
        "Surpassed published benchmarks with CNN-LSTM hybrid architecture",
        "Multi-class classification of four respiratory sound categories",
      ],
      technologies: ["PyTorch", "CNN", "LSTM", "ResNet18", "ResNet50", "Audio Processing", "Spectrograms"],
      github: "https://github.com/VED2380/Respiratory-Sound-Classification",
      featured: true,
    },
    {
      title: "Real-Time ASL Gesture Recognition",
      description:
        "Computer vision application for American Sign Language gesture-to-text conversion with cross-platform compatibility",
      achievements: [
        "Real-time hand tracking and gesture recognition",
        "Custom CNN model with 3 convolutional layers",
        "Integrated text-to-speech functionality",
        "Cross-platform compatibility achieved",
      ],
      technologies: ["Python", "TensorFlow", "MediaPipe", "CNN", "Computer Vision", "Deep Learning"],
      github: "https://github.com/VED2380/Realtime-Sign-Language-Detection-",
      featured: true,
    },
    {
      title: "Zucchini Leaf Instance Segmentation",
      description:
        "Multi-condition agricultural computer vision system with comprehensive deep learning pipeline for crop monitoring",
      achievements: [
        "96.53% mAP@0.5 detection accuracy (13-26% above industry standard)",
        "95.71% segmentation quality with 87.94% localization precision",
        "50-75% faster training efficiency (<50 epochs vs 100-200 standard)",
        "Robust performance across varying environmental conditions",
        "COCO format standardization with comprehensive annotation pipeline",
      ],
      technologies: [
        "Python",
        "YOLOv8",
        "PyTorch",
        "Roboflow",
        "Albumentations",
        "Computer Vision",
        "Instance Segmentation",
      ],
      github: "https://github.com/VED2380/Zucchini-Leaf-Instance-Segmentation",
      featured: false,
    },
  ]

  const experiences = [
    {
      title: "Summer Research Intern",
      company: "IIT Ropar",
      period: "June 2024 - Present",
      location: "Punjab, India",
      description:
        "Working on advanced computer vision research focusing on instance segmentation for agricultural applications",
      achievements: [
        "Developing YOLOv8-based models for crop monitoring",
        "Implementing COCO-standard annotation pipelines",
        "Collaborating with PhD researchers on agricultural AI solutions",
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "teal",
    },
    {
      title: "Machine Learning Intern",
      company: "Elevate Labs",
      period: "Dec 2023 - Feb 2024",
      location: "Bangalore, India",
      description:
        "Developed real-time computer vision applications for accessibility, focusing on ASL gesture recognition",
      achievements: [
        "Architected real-time ASL gesture-to-text conversion system",
        "Implemented MediaPipe-based hand tracking pipeline",
        "Achieved cross-platform compatibility with TensorFlow deployment",
      ],
      icon: <Briefcase className="w-6 h-6" />,
      color: "blue",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    window.open("https://drive.google.com/drive/u/1/folders/1exwJbO6mlNXGkYVd0qTx5kN5zlynnD7H", "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-hero-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,212,191,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div
          className={`relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {/* Left Column - Text Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium border border-teal-500/30">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                Available for opportunities
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Vedant Agnihotri</span>
              </h1>

              <p className="text-xl md:text-2xl font-heading font-semibold text-teal-400">
                B.Tech Computer Science Graduate | Machine Learning & Computer Vision Enthusiast
              </p>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Final-year Computer Science Engineering student at SASTRA University, Tamil Nadu, passionate about
                building intelligent systems that solve real-world problems in healthcare and agriculture.
              </p>
            </div>

            {/* Specializations */}
            <div className="flex flex-wrap gap-3">
              <Badge className="px-4 py-2 bg-teal-500/20 text-teal-400 border-teal-500/30">
                <Brain className="w-4 h-4 mr-2" />
                Deep Learning
              </Badge>
              <Badge className="px-4 py-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Eye className="w-4 h-4 mr-2" />
                Computer Vision
              </Badge>
              <Badge className="px-4 py-2 bg-purple-500/20 text-purple-400 border-purple-500/30">
                <BarChart3 className="w-4 h-4 mr-2" />
                Interpretable ML
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="accent-gradient text-white px-8 py-3 text-base font-medium hover:opacity-90 focus-visible:focus"
              >
                View Projects
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={downloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-base font-medium focus-visible:focus"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">2</div>
                <div className="text-sm text-slate-400">Internships</div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my5-uLlmSQl6i8GWk1qBqjcO87U0tVB9lp.jpeg"
                    alt="Vedant Agnihotri - Professional headshot of a Computer Science student wearing glasses"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full p-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400/30 rounded-full animate-pulse-slow"></div>
              <div
                className="absolute top-1/4 -right-8 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My journey from curiosity to expertise in machine learning and computer vision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-semibold text-teal-400">
                  My Journey in AI and Computer Vision
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Picture this: a curious student in Tamil Nadu, tinkering with code late into the night, suddenly
                  realizing that technology could bridge gaps in human communication. That's where my passion for
                  machine learning truly sparked—as a fresh Computer Science graduate from SASTRA University (class of
                  June 2025), my world changed during my internship at Elevate Labs in Bangalore. There, I dove
                  headfirst into building a real-time American Sign Language gesture recognition system using MediaPipe
                  and CNN architectures. Watching the app translate hand movements into text in real-time wasn't just a
                  technical win; it revealed the profound impact of computer vision in making technology accessible to
                  everyone, from the hearing impaired to everyday users.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  This breakthrough moment fueled my drive for more. Eager to tackle real-world challenges, I jumped
                  into advanced research at IIT Ropar, where I'm currently leading an agricultural computer vision
                  project on zucchini leaf instance segmentation. By crafting an end-to-end data pipeline with Roboflow
                  and Albumentations, and fine-tuning YOLOv8, I've pushed the model to achieve 96% mAP at IoU 0.50 and
                  84% for mAP50-95—metrics that prove how AI can revolutionize crop monitoring for farmers facing
                  unpredictable challenges. Balancing this with my studies wasn't easy, but my commitment to continuous
                  learning and sharp time management skills turned late-night debugging sessions into triumphs of
                  academic and research excellence.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  At my core, I believe in crafting intelligent systems that make a tangible difference—whether it's
                  aiding doctors in diagnosing respiratory conditions through a PyTorch-based classification model with
                  81.6% accuracy, or empowering farmers with precise crop insights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">Graduating June 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">SASTRA University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">Research Intern</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-teal-400" />,
                  title: "AI Research",
                  description: "Deep learning architectures for medical diagnosis and agricultural applications",
                },
                {
                  icon: <Eye className="w-8 h-8 text-blue-400" />,
                  title: "Computer Vision",
                  description: "Real-time systems for object detection, segmentation, and gesture recognition",
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
                  title: "Data Science",
                  description: "Statistical analysis and machine learning model optimization",
                },
                {
                  icon: <Code className="w-8 h-8 text-green-400" />,
                  title: "Software Development",
                  description: "Full-stack development with focus on ML deployment",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Experience</h2>
            <p className="text-xl text-slate-300">Professional journey and research positions</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 card-hover">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${exp.color}-500/20 text-${exp.color}-400 mb-4`}
                      >
                        {exp.icon}
                      </div>
                      <div className="text-sm text-slate-400">{exp.period}</div>
                      <div className="text-sm text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-heading font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-teal-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-slate-300 flex items-start">
                            <Star className="w-4 h-4 text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-300">Comprehensive overview of my technical expertise</p>
          </div>

          <SkillsTree />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-slate-300">Showcasing innovative solutions in ML and computer vision</p>
          </div>

          <div className="space-y-8">
            {/* Featured Projects Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </div>

            {/* Non-Featured Projects Row - Same size as featured */}
            <div className="grid md:grid-cols-2 gap-8 justify-center">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <div key={index} className="max-w-none">
                    <ProjectCard {...project} />
                  </div>
                ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              className="accent-gradient text-white hover:opacity-90 focus-visible:focus"
              onClick={() => window.open("https://github.com/VED2380", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Research Publications</h2>
            <p className="text-xl text-slate-300">Contributing to the advancement of medical AI</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 card-hover">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-teal-500/20 text-teal-400 flex-shrink-0">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    Respiratory Sound Classification using Deep Learning Approaches
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    A comprehensive study on using CNN-LSTM architectures with spectrogram analysis for automated
                    respiratory disease diagnosis. Our hybrid model achieved 81.6% accuracy and 92.32% specificity,
                    outperforming baseline models by 5.21% and surpassing published benchmarks.
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Under Review</Badge>
                    <span className="text-slate-400 text-sm">Medical AI Journal</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Deep Learning", "Medical AI", "Audio Processing", "CNN-LSTM", "Spectrograms"].map((tag, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-400 bg-slate-800/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-300 mb-8">Let's discuss your next AI project or research collaboration</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">Let's Connect</h3>
                  <div className="space-y-4">
                    <Button
                      className="w-full justify-start accent-gradient text-white hover:opacity-90 focus-visible:focus"
                      onClick={() => window.open("mailto:09vedantagnihotri1@gmail.com", "_blank")}
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      09vedantagnihotri1@gmail.com
                    </Button>

                    <Button
                      className="w-full justify-start accent-gradient text-white hover:opacity-90 focus-visible:focus"
                      onClick={() => window.open("https://github.com/VED2380", "_blank")}
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">Download Resume</h3>
                  <p className="text-slate-300 mb-4">
                    Get a detailed overview of my experience, skills, and achievements in machine learning and computer
                    vision.
                  </p>
                  <Button
                    className="w-full accent-gradient text-white hover:opacity-90 focus-visible:focus"
                    onClick={downloadResume}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-white mb-4">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">4.0</div>
                      <div className="text-sm text-slate-400">Years of Study</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">2</div>
                      <div className="text-sm text-slate-400">Research Internships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">15+</div>
                      <div className="text-sm text-slate-400">ML Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">1</div>
                      <div className="text-sm text-slate-400">Publication</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">© 2024 Vedant Agnihotri. Built with Next.js and Tailwind CSS.</p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-teal-400 focus-visible:focus"
                onClick={() => window.open("https://github.com/VED2380", "_blank")}
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-teal-400 focus-visible:focus"
                onClick={() => window.open("mailto:09vedantagnihotri1@gmail.com", "_blank")}
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
