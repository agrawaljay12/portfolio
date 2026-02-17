const projects = [
  {
    title: "Furniture Rental System",
    description:
      "Full-stack web application for renting and purchasing furniture with role-based authentication.",
    tech: ["React", "FastAPI", "MongoDB"],
  },
  {
    title: "Weather Forecast App",
    description:
      "Search-based weather application with dynamic UI changes based on weather conditions.",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Book Management System",
    description:
      "CRUD-based management system with ASP.NET and SQL Server.",
    tech: ["ASP.NET", "SQL Server"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 
                         shadow-sm hover:shadow-lg 
                         hover:-translate-y-2 
                         transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-600 
                               text-xs font-medium 
                               px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { Projects };
