import ShoeSite from "../Assets/Projects/ShoeSite.jpg"
import PortfolioSite from "../Assets/Projects/PortfolioSite.png"
import ExpenseSharing from "../Assets/Projects/ExpenseSharing.png"
import type { StaticImageData } from "next/image"

export type Project = {
  name: string
  description: string
  logoImage: StaticImageData
  link: string
  note?: string
}
export const projectList :Project[] = [
    {
        name: "E-Commerce",
        description: "It's a personal project made for selling shoes using MERN Stack",
        logoImage: ShoeSite,
        link:"https://github.com/bhuvansen/shoe-site-frontend",
        note: "This project is not hosted"
    },
    {
        name: "Expense Sharing App",
        description:
            "It's a full stack web application made for sharing expenses among friends using Spring Boot and Next",
        logoImage: ExpenseSharing,
        link: "https://splitwise-ui.vercel.app/"
    },
    {
        name: "Portfolio",
        description: "It's a personal portfolio website made for showcasing my work",
        logoImage: PortfolioSite,
        link: "https://github.com/bhuvansen/portfolio-app"
    },
]
