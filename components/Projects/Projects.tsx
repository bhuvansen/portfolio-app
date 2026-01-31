import { projectList } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import "./Projects.css"
const Projects = () => {
    return (
        <section id="projects" className="projects-section py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="my-3 section-header">Projects</h2>
                <span className="text-sm text-gray-400 "> Go to github to get project links or click on card</span> 
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {projectList &&
                        projectList.map((project, index) => {
                            return (
                                <div className="mt-5 flex flex-col justify-start" key={index} >
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
