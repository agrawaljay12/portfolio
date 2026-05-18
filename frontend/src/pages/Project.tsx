import { useState } from "react";
import ProjectModal from "./project_detail";

const projects = [
  {
    id: "smart-service-platform",
    title: "Smart Local Service Platform",
    description:
      `
      I developed a Smart Local Service Platform that connects users with local service providers.
      The frontend is built using React with TypeScript, and the backend uses FastAPI.
      Users can search, book, and track services, while providers manage bookings.
      A key highlight of this project is that I used my own reusable FastAPI backend template,
      which follows a modular and scalable architecture.
      This helped in faster development and ensured the system is production-ready
    `,
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "MongoDB"
    ],
    image: "/projects/servicehub.png",
    github: "https://github.com/agrawaljay12/servicehub",
    live: "https://servicehub-blush.vercel.app",
    features: [
      "payment system",
      "Authentication",
      "Role-based Access",
      "Email Notifications",
      "File Upload",
    ],
  },

  {
    id: "furniturestore",
    title: "Furniture Store",
    description: `description:
      A modern full-stack furniture rental and purchasing platform designed to simplify the process of exploring, renting, and buying furniture online. The system allows users to browse a wide range of furniture products including sofas, tables, beds, office furniture, dining sets, and home decor items through a responsive and user-friendly interface. Users can either purchase furniture permanently or rent it for flexible durations based on their needs, making the platform suitable for students, working professionals, startups, and families relocating to new cities.
      The frontend of the application is developed using React, Vite, and TypeScript to provide a fast, scalable, and highly interactive user experience with responsive layouts and reusable component architecture. The backend is built using Python FastAPI with MongoDB as the database, enabling high-performance RESTful APIs, efficient data handling, and scalable backend operations.
      The platform includes features such as product listings, detailed furniture pages, category-based filtering, search functionality, rental duration management, shopping cart system, order placement, image handling, and responsive UI design. Users can explore furniture based on categories, pricing, rental plans, and availability, making the browsing experience smooth and efficient.
      The application architecture follows clean coding practices and modular development principles for maintainability and scalability. Backend APIs are structured efficiently for handling product management, order processing, and customer interactions. MongoDB is used for flexible and scalable data storage of products, users, orders, and rental details.
      Additionally, the platform focuses on performance optimization, reusable components, clean UI/UX design, API integration, and proper state management to ensure smooth user interaction across devices. The project demonstrates practical implementation of full-stack development concepts including frontend-backend integration, REST API development, database management, and scalable application architecture using modern technologies.`,
    technologies: ["Vite Typescript","MongoDB Database","Python FASTAPI","Tailwind CSS"],
    image: "/projects/furniturestore.png",
    github: "https://github.com/agrawaljay12/furniturestore",
    live: "https://furnspace.vercel.app",
    features: [
      "Secure authentication and authorization",
      "Product image upload and management",
      "Wishlist and favorites system",
      "Order and rental management",
      "User profile management",
      "Admin dashboard for furniture and user management",
      "Search and filtering functionality",
      "Responsive and modern UI design",
      "API validation and error handling",
      "Scalable RESTful API architecture",
      "Performance optimization and reusable code structure"
  ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
          My Projects
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white
                         border border-gray-200 rounded-2xl
                         overflow-hidden shadow-sm
                         hover:shadow-xl hover:-translate-y-2
                         transition-all duration-300"
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover
                             group-hover:scale-105
                             transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export { Projects };