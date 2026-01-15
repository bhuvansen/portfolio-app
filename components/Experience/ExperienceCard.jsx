import "./Experience.css"

import Image from "next/image"

const ExperienceCard = ({ companyDetails }) => {
    return (
        <div className="experience-card shrink-0 p-4">
            <div className="flex flex-col items-center gap-4">
                <Image src={companyDetails.logoImage} alt="" width={80} height={80} className="object-contain" />
                <div className="text-center">
                    <p className="company-name">{companyDetails.companyName}</p>
                    <p className="font-word-details">{companyDetails.tenure}</p>
                    <p className="text-sm">{companyDetails.workProfile}</p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
