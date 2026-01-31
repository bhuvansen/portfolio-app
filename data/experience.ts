import TcsLogo from "../Assets/Experience/TcsLogo.svg"
import PrincipalLogo from "../Assets/Experience/PrincipalLogo.svg"
import type { StaticImageData } from "next/image"

export type Experience = {
  companyName: string
  tenure: string
  workProfile: string
  logoImage: StaticImageData
}

export const experience: Experience[] = [
    {
        companyName: "Tata Consultancy Services",
        tenure: "2021-2024",
        workProfile: "Web Developer",
        logoImage: TcsLogo,
    },
     {
        companyName: "Principal Global Services",
        tenure: "2024-Present",
        workProfile: "Software Developer",
        logoImage: PrincipalLogo,
    },
]
