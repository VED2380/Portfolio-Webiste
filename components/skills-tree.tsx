"use client"

export function SkillsTree() {
  const skillCategories = {
    languages: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML/CSS"],
    mlFrameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "YOLOv8", "ResNet", "CNN", "LSTM"],
    webFrameworks: ["React", "Node.js", "Flask", "FastAPI", "Next.js"],
    dataTools: ["pandas", "NumPy", "Matplotlib", "ChromaDB", "LangChain"],
    devTools: ["Git", "Docker", "VS Code", "PyCharm", "Google Cloud", "Roboflow", "MediaPipe"],
    expertise: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Instance Segmentation"],
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Central Skills Header */}
      <div className="flex justify-center mb-12">
        <div className="relative">
          <div className="bg-slate-800 border-2 border-teal-400 rounded-lg px-8 py-4">
            <h3 className="text-2xl font-bold text-white text-center">MY SKILLS</h3>
          </div>
          {/* Connecting lines */}
          <div className="absolute top-full left-1/2 w-0.5 h-8 bg-teal-400 transform -translate-x-0.5"></div>
          <div className="absolute top-full left-1/2 w-96 h-0.5 bg-teal-400 transform -translate-x-1/2 translate-y-8"></div>
          <div className="absolute top-full left-12 w-0.5 h-8 bg-teal-400 translate-y-8"></div>
          <div className="absolute top-full right-12 w-0.5 h-8 bg-teal-400 translate-y-8"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Programming Languages */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-teal-400 text-center mb-6">Programming Languages</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.languages.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-teal-400 hover:text-teal-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* ML/AI Frameworks */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400 text-center mb-6">ML/AI Frameworks</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.mlFrameworks.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Data Science Tools */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-400 text-center mb-6">Data Science Tools</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.dataTools.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Web Development */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400 text-center mb-6">Web Development</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.webFrameworks.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-green-400 hover:text-green-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Developer Tools */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400 text-center mb-6">Developer Tools</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.devTools.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-pink-400 text-center mb-6">Areas of Expertise</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {skillCategories.expertise.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-2 text-sm text-slate-300 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom connecting elements */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="text-slate-400">
            <div className="text-2xl font-bold gradient-text">6+</div>
            <div className="text-sm">Languages</div>
          </div>
          <div className="text-slate-400">
            <div className="text-2xl font-bold gradient-text">15+</div>
            <div className="text-sm">Frameworks</div>
          </div>
          <div className="text-slate-400">
            <div className="text-2xl font-bold gradient-text">10+</div>
            <div className="text-sm">Tools</div>
          </div>
        </div>
      </div>
    </div>
  )
}
