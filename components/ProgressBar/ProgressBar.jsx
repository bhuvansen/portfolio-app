"use client"
import { useEffect } from "react"
import "./ProgressBar.css"
import "react-circular-progressbar/dist/styles.css"
import ToolTip from "./ToolTip"
import Image from "next/image"

const ProgressBar = ({ imgLogo, percentage, id = 0, message }) => {
    let counter = 0
    useEffect(() => {
        progressPerc()
    }, [])

    const progressPerc = () => {
        let number = document.getElementById(`number${id}`)
        let interval = setInterval(function () {
            if (counter === percentage) {
                clearInterval(interval)
            } else {
                counter += 1
                number.innerHTML = counter + " %"
            }
        }, 500 / percentage)
    }

    return (
        <>
            <style>
                {`
        
          .colored-circle${id}{
            fill:none;
            stroke: url(#GradientColor);
            stroke-width: 15px;
            stroke-dasharray: 437;
            stroke-dashoffset: 437;
            animation: anim${id} 1s linear forwards;
          }
          @keyframes anim${id} {
            100% {
              stroke-dashoffset:${437 - (percentage / 100) * 437};
            }
          }`}
            </style>
            <div className="progress-box">
                <ToolTip message={message} />
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <div>
                                <Image src={imgLogo} alt={message}  className="skill-image" />
                                <div className="text-white" id={`number${id}`}></div>
                            </div>
                        </div>
                    </div>

                    <svg
                        className="svg-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="160px"
                        height="160px"
                    >
                        <defs>
                            <linearGradient id={`GradientColor`}>
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle className={`colored-circle${id}`} cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default ProgressBar
