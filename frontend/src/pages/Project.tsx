const projects = [
  {
    title: "Furniture Rental System",
    description:
      "Full-stack web application for renting and purchasing furniture with role-based authentication.",
    tech: "React, FastAPI, MongoDB",
  },
  {
    title: "Weather Forecast App",
    description:
      "Search-based weather application with dynamic UI change based on weather conditions.",
    tech: "React, Tailwind CSS",
  },
  {
    title: "Book Management System",
    description:
      "CRUD-based management system with ASP.NET and SQL Server.",
    tech: "ASP.NET, SQL Server",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              <span className="text-blue-500 text-sm font-medium">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export {Projects};
