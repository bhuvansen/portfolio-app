// import { projects } from "@/data/projects";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map(p => (
//             <div
//               key={p.title}
//               className="rounded-xl border border-white/10 p-6 hover:bg-white/5"
//             >
//               <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
//               <p className="text-gray-400">{p.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { projectList } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import "./Projects.css"
const Projects = () => {
    return (
        <section id="projects" className="projects-section py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="my-3 section-header">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {projectList &&
                        projectList.map((project, index) => {
                            return (
                                <div className="mt-5 flex flex-col justify-start" key={index}>
                                    <ProjectCard project={project} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Projects
