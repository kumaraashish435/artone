import AnimatedText from "../components/text/AnimatedText";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "10+ years of experience in product design and development"
    },
    {
      name: "Michael Chen",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Award-winning designer with a passion for user experience"
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Full-stack developer specializing in modern web technologies"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace new technologies to create cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in everything we do, from code to customer service.",
      icon: "✨"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "We continuously learn and evolve to stay ahead in the ever-changing tech landscape.",
      icon: "🌱"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      
        <AnimatedText
            lines={[
              "Built by designers who've lived",
              "the startup grind and know how",
              "to move with it."
            ]}
          />
          <p className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed">
            We're a team of passionate designers and developers who understand the challenges of building and scaling products. Our experience in the startup world has taught us how to move fast while maintaining quality and attention to detail.
          </p>
      

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold  mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">30+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create something amazing together. We're here to help you bring your vision to life.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;