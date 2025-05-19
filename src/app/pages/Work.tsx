import AnimatedText from "../components/text/AnimatedText";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "A secure and user-friendly mobile banking application with real-time transactions.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "#"
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      category: "Data Science",
      description: "Advanced analytics platform with machine learning capabilities for business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      id: 4,
      title: "Smart Home Dashboard",
      category: "IoT",
      description: "Centralized control system for smart home devices with voice integration.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MQTT", "WebSocket"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen sm:px-4 ">
      <AnimatedText lines={[
        "The design and product partner", 
        "for your startup, built for the" ,
        "speed and flexibility you need."
      ]}/>
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Header */}
        <div className=" mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Our Work</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Explore our latest projects and case studies</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap   gap-2 sm:gap-4 mb-8 sm:mb-12">
          <button className="px-4 sm:px-6 py-2 rounded-full bg-black text-white hover:bg-black text-sm sm:text-base">
            All
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            Web Development
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            Mobile
          </button>
          <button className="px-4 sm:px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 text-sm sm:text-base">
            Data Science
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <span className="px-2 sm:px-3 py-1 bg-black text-white text-xs sm:text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-black hover:text-black mt-auto text-sm sm:text-base"
                >
                  View Case Study
                  <svg
                    className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-20 bg-white rounded-xl shadow-lg p-4 sm:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 text-xs sm:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">30+</div>
              <div className="text-gray-600 text-xs sm:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">5+</div>
              <div className="text-gray-600 text-xs sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-black mb-1 sm:mb-2">100%</div>
              <div className="text-gray-600 text-xs sm:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-8">
            Let's create something amazing together
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-black transition-colors text-sm sm:text-base">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
