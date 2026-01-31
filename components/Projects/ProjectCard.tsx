"use client"
import { Project } from "@/data/projects"
import Image from "next/image"

const ProjectCard = ({ project }: { project: Project }) => {
    const openProject = (link : string) => {
        window.open(link, "_blank")
    }
    return (
        <div className="project-card pb-12 cursor-pointer" onClick={() => openProject(project.link)}>
            <div>
                <Image className="project-image" src={project.logoImage} alt="" />
            </div>
            <div className="project-details">
                <h5 className="text-left my-4">{project.name}</h5>
                <p className="text-left font-word-details">{project.description}</p>
                <p className="text-sm italic mt-5">{project.note}</p>
            </div>
        </div>
    )
}

export default ProjectCard
