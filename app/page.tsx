"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Eye,
  BarChart3,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  Star,
  Download,
  ArrowRight,
  Code,
  Database,
  Cpu,
  Code2,
  Globe,
  Coffee,
  Layout,
  Zap,
  Server,
  Container,
  Video,
  Target,
  GitBranch,
  ImageIcon,
  Shuffle,
  Calculator,
  Table,
  TrendingUp,
  PieChart,
  Layers,
  MessageSquare,
  Grid3x3,
  Repeat,
  Scissors,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const techCategories = {
    Languages: [
      { name: "Python", icon: <Code2 className="w-4 h-4" /> },
      { name: "C++", icon: <Cpu className="w-4 h-4" /> },
      { name: "JavaScript", icon: <Globe className="w-4 h-4" /> },
      { name: "SQL", icon: <Database className="w-4 h-4" /> },
      { name: "Java", icon: <Coffee className="w-4 h-4" /> },
      { name: "HTML/CSS", icon: <Layout className="w-4 h-4" /> },
    ],
    "Frameworks & Tools": [
      { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
      { name: "PyTorch", icon: <Zap className="w-4 h-4" /> },
      { name: "Flask", icon: <Server className="w-4 h-4" /> },
      { name: "FastAPI", icon: <Zap className="w-4 h-4" /> },
      { name: "Docker", icon: <Container className="w-4 h-4" /> },
      { name: "MediaPipe", icon: <Video className="w-4 h-4" /> },
      { name: "YOLOv8", icon: <Target className="w-4 h-4" /> },
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      { name: "Roboflow", icon: <ImageIcon className="w-4 h-4" /> },
      { name: "Albumentations", icon: <Shuffle className="w-4 h-4" /> },
    ],
    Libraries: [
      { name: "NumPy", icon: <Calculator className="w-4 h-4" /> },
      { name: "Pandas", icon: <Table className="w-4 h-4" /> },
      { name: "Matplotlib", icon: <TrendingUp className="w-4 h-4" /> },
      { name: "SHAP", icon: <PieChart className="w-4 h-4" /> },
      { name: "Scikit-learn", icon: <Brain className="w-4 h-4" /> },
      { name: "Pydantic", icon: <Calculator className="w-4 h-4" /> },
    ],
    Concepts: [
      { name: "Machine Learning", icon: <Brain className="w-4 h-4" /> },
      { name: "Deep Learning", icon: <Layers className="w-4 h-4" /> },
      { name: "Computer Vision", icon: <Eye className="w-4 h-4" /> },
      { name: "NLP", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "CNNs", icon: <Grid3x3 className="w-4 h-4" /> },
      { name: "LSTM", icon: <Repeat className="w-4 h-4" /> },
      { name: "Instance Segmentation", icon: <Scissors className="w-4 h-4" /> },
    ],
  }

  const projects = [
    {
      title: "Respiratory Sound Classifier",
      description: "Advanced CNN-LSTM model using spectrograms and ResNet variants for medical diagnosis",
      achievements: ["81.6% accuracy", "92.32% specificity", "Medical AI Journal submission"],
      tech: ["CNN", "LSTM", "ResNet", "Spectrograms", "Medical AI"],
      github: "https://github.com/VED2380/Respiratory-Sound-Classification",
      icon: <Brain className="w-6 h-6" />,
      featured: true,
    },
    {
      title: "Real-Time Sign Language Detector",
      description: "Real-time webcam gesture-to-text pipeline with text-to-speech integration",
      achievements: ["Real-time processing", "MediaPipe integration", "TTS functionality"],
      tech: ["MediaPipe", "TensorFlow", "Computer Vision", "TTS"],
      github: "https://github.com/VED2380/Realtime-Sign-Language-Detection-",
      icon: <Eye className="w-6 h-6" />,
      featured: true,
    },
    {
      title: "Zucchini Leaf Instance Segmentation",
      description: "Full-cycle pipeline for leaf instance segmentation using annotated agricultural imagery",
      achievements: ["Roboflow labeling integration", "YOLOv8 model training", "Performance evaluation metrics"],
      tech: ["YOLOv8", "Roboflow", "Albumentations", "Instance Segmentation"],
      icon: <MapPin className="w-6 h-6" />,
      featured: false,
    },
    {
      title: "Diabetes Predictor",
      description: "Predictive model to forecast diabetes risk using patient health data with SHAP interpretability",
      achievements: [
        "Multiple regression algorithms compared",
        "SHAP feature importance visualization",
        "Comprehensive performance metrics",
      ],
      tech: ["Python", "SHAP", "Regression Models", "Data Visualization"],
      icon: <BarChart3 className="w-6 h-6" />,
      featured: false,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/vedant-agnihotri-resume.pdf"
    link.download = "Vedant_Agnihotri_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div
          className={`relative z-10 text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Vedant Agnihotri
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 mb-6">AI Engineer | Computer Vision | Researcher</p>
                <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
                  Final-year Computer Science Engineering student at SASTRA University, passionate about building
                  intelligent systems that solve real-world problems in healthcare and agriculture.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="secondary" className="px-4 py-2 bg-blue-500/20 text-blue-200 border-blue-500/30">
                  <Brain className="w-4 h-4 mr-2" />
                  Deep Learning
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-purple-500/20 text-purple-200 border-purple-500/30">
                  <Eye className="w-4 h-4 mr-2" />
                  Computer Vision
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-green-500/20 text-green-200 border-green-500/30">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Interpretable ML
                </Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent backdrop-blur-sm"
                >
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right Column - Professional Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/my5-ch6IzA768RqEpwc9UnmDKf7Ui5hUay.jpeg"
                      alt="Vedant Agnihotri - Professional headshot"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Driven by curiosity and powered by code, I'm on a mission to make machines see and reason like never
              before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Research</h3>
                <p className="text-gray-300">
                  Specializing in deep learning architectures for medical diagnosis and agricultural applications
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-300">
                  Building real-time systems for object detection, segmentation, and gesture recognition
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interpretable ML</h3>
                <p className="text-gray-300">
                  Creating transparent AI systems with SHAP visualizations and explainable algorithms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-xl text-gray-300">Current roles and research positions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Summer Research Intern</CardTitle>
                    <CardDescription className="text-blue-200 font-semibold">IIT Ropar</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Working on instance segmentation for agricultural datasets using YOLOv8 and COCO-standard annotation
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-300">
                    YOLOv8
                  </Badge>
                  <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-300">
                    Computer Vision
                  </Badge>
                  <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-300">
                    Agriculture
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <Briefcase className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">ML Intern</CardTitle>
                    <CardDescription className="text-purple-200 font-semibold">Elevate Labs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developed a real-time ASL detection system using MediaPipe and CNNs for accessibility applications
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-purple-400/30 text-purple-300">
                    MediaPipe
                  </Badge>
                  <Badge variant="outline" className="text-xs border-purple-400/30 text-purple-300">
                    CNNs
                  </Badge>
                  <Badge variant="outline" className="text-xs border-purple-400/30 text-purple-300">
                    Real-time
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tech Stack & Tools</h2>
            <p className="text-xl text-gray-300">Technologies I work with daily</p>
          </div>

          <div className="space-y-8">
            {Object.entries(techCategories).map(([category, techs]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  {category === "Languages" && <Code className="w-5 h-5 text-blue-400" />}
                  {category === "Frameworks & Tools" && <Brain className="w-5 h-5 text-purple-400" />}
                  {category === "Libraries" && <Database className="w-5 h-5 text-green-400" />}
                  {category === "Concepts" && <Cpu className="w-5 h-5 text-orange-400" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 bg-gray-800/50 text-gray-200 border-gray-600/30 hover:bg-gray-700/50 transition-colors duration-200 flex items-center gap-2"
                    >
                      {tech.icon}
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300">Showcasing my latest work in AI and computer vision</p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="mt-1 bg-yellow-500/20 text-yellow-200 border-yellow-500/30"
                        >
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                              <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-blue-400/30 text-blue-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-gray-500/20 to-gray-600/20">
                        {project.icon}
                      </div>
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-gray-500/30 text-gray-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-gray-300 hover:text-white hover:bg-blue-500/20 transform hover:scale-105 transition-all duration-300 border border-gray-600 hover:border-blue-400"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Research Publications</h2>
            <p className="text-xl text-gray-300">Contributing to the advancement of medical AI</p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Respiratory Sound Classification using Deep Learning
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A comprehensive study on using CNN-LSTM architectures with spectrogram analysis for automated
                    respiratory disease diagnosis, achieving 81.6% accuracy and 92.32% specificity.
                  </p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30">
                      Under Review
                    </Badge>
                    <span className="text-gray-400 text-sm">Medical AI Journal</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">"Making machines see and reason — one project at a time."</p>
            <p className="text-lg text-gray-400">Let's discuss your next AI project or research collaboration</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                      onClick={() => window.open("mailto:09vedanragnihotri@gmail.com", "_blank")}
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      09vedanragnihotri@gmail.com
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                      onClick={() => window.open("https://linkedin.com/in/vedantagnihotri", "_blank")}
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent backdrop-blur-sm"
                      onClick={() => window.open("https://github.com/VED2380", "_blank")}
                    >
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Download Resume</h3>
                  <p className="text-gray-300 mb-4">
                    Get a detailed overview of my experience, skills, and achievements.
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
                    onClick={downloadResume}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 Vedant Agnihotri. Built with Next.js and Tailwind CSS.</p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open("https://github.com/VED2380", "_blank")}
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open("https://linkedin.com/in/vedantagnihotri", "_blank")}
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => window.open("mailto:09vedanragnihotri@gmail.com", "_blank")}
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
