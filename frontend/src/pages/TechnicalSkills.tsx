import { useState } from "react";

const skillsData = {
  Frontend: ["React.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python (FastAPI)", "JWT Authentication", "REST APIs"],
  Database: ["MongoDB", "SQL Server"],
  Tools: ["Git", "Postman", "ThunderClient"],
};

const TechnicalSkills = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <section id="technical-skills" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading + Toggle */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold tracking-wide">
            Technical Skills
          </h2>

          <button
            onClick={() => setIsGrid(!isGrid)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg 
                       hover:bg-blue-700 transition"
          >
            {isGrid ? "Switch to Detailed View" : "Switch to Grid View"}
          </button>
        </div>

        {/* Grid View */}
        {isGrid ? (
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-blue-600 text-xs 
                                 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed View */
          <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="bg-white p-8 rounded-2xl shadow-sm border"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {category}
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export { TechnicalSkills };
