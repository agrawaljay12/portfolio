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
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm px-4"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl
                   w-full max-w-3xl overflow-hidden
                   animate-in fade-in zoom-in duration-300"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-100
                     hover:bg-gray-200 rounded-full
                     w-10 h-10 text-lg font-bold transition"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6">

          <h2 className="text-3xl font-bold mb-4">
            {project.title}
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700
                             px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold mb-3">
              Key Features
            </h3>

            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-center gap-2"
                >
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white
                           px-5 py-3 rounded-lg
                           hover:bg-black transition"
              >
                GitHub
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white
                           px-5 py-3 rounded-lg
                           hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;