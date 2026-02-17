const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            I am a Full Stack Developer focused on building scalable,
            secure, and high-performance web applications using modern
            technologies.
          </p>

          <p className="text-gray-600 leading-7">
            I specialize in clean architecture, authentication systems,
            RESTful APIs, and responsive frontend interfaces.
          </p>
        </div>

        {/* Right Side - Roles */}
        <div className="space-y-6">

          <div className="bg-white shadow-sm rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Backend Development
            </h3>
            <p className="text-gray-600 text-sm">
              Building secure and scalable server-side applications using
              Node.js and Python (FastAPI), including authentication,
              JWT-based authorization, and database integration.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Frontend Development
            </h3>
            <p className="text-gray-600 text-sm">
              Developing responsive and dynamic user interfaces using
              React.js, modern hooks, routing, and Tailwind CSS.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              API Development
            </h3>
            <p className="text-gray-600 text-sm">
              Designing and implementing RESTful APIs with proper
              validation, error handling, and role-based access control.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-6 border hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Testing & Debugging
            </h3>
            <p className="text-gray-600 text-sm">
              Performing API testing using tools like Postman and
              ThunderClient, ensuring reliability and performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export { About };
