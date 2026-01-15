import Image from "next/image"

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card pb-12">
      <div>
        <Image className="project-image" src={project.logoImage} alt="" />
      </div>
      <div className="project-details">
        <h5 className="text-left my-4">{project.name}</h5>
        <p className="text-left font-word-details">{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
