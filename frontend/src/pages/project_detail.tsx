import type { FC } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  features: string[];
}

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: FC<Props> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/70 backdrop-blur-sm
        p-4
      "
    >
      {/* Modal Container */}
      <div
        className="
          relative bg-white rounded-2xl shadow-2xl
          w-full max-w-4xl
          max-h-[90vh]
          overflow-hidden
          animate-in fade-in zoom-in duration-300
        "
      >

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">

          {/* Sticky Header */}
          <div
            className="
              sticky top-0 z-10
              bg-white border-b
              flex items-center justify-between
              px-6 py-4
            "
          >
            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="
                flex items-center justify-center
                w-10 h-10 rounded-full
                bg-gray-100 hover:bg-gray-200
                text-xl font-bold
                transition
              "
            >
              ✕
            </button>
          </div>

          {/* Project Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover"
          />

          {/* Content */}
          <div className="p-6">

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-7">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="
                      bg-blue-100 text-blue-700
                      px-4 py-2 rounded-full
                      text-sm font-medium
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-3">
                Key Features
              </h3>

              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="
                      flex items-start gap-3
                      text-gray-700
                    "
                  >
                    <span className="text-green-500 mt-1">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-gray-900 text-white
                    px-6 py-3 rounded-lg
                    hover:bg-black
                    transition
                  "
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-blue-600 text-white
                    px-6 py-3 rounded-lg
                    hover:bg-blue-700
                    transition
                  "
                >
                  Live Demo
                </a>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;