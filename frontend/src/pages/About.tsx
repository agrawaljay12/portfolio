const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-gray-600 leading-7 mb-4">
            I am a Full Stack Developer specializing in React, TypeScript,
            FastAPI, and modern backend technologies.
          </p>
          <p className="text-gray-600 leading-7">
            I build scalable web applications with clean architecture,
            authentication systems, and role-based access control.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="grid grid-cols-2 gap-4">
            {[
              "React",
              "TypeScript",
              "FastAPI",
              "MongoDB",
              "JWT Auth",
              "Tailwind CSS",
              "Git",
              "REST APIs",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white shadow-md rounded-lg p-4 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export {About};
