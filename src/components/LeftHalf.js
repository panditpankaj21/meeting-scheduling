import logoImage from "../images/webLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function LeftHalf(){
    return(
        <div className="flex sm:flex-col h-full">
            <div className="sm:w-full w-1/2">
                <img 
                    src={logoImage} 
                    alt="logo" 
                    className="h-full sm:h-44  sm:w-full sm:object-contain sm:border-gray-400 sm:border-b-[1px]" 
                />
                
            </div>
            <div 
                className="sm:w-full w-1/2 p-3 sm:px-5 grid place-content-center border-gray-400 border-l-[1px]"
            >
                <div className="h-[70%] ">
                    <h1 className="font-bold sm:text-xl">
                        Fibery Demo
                    </h1>
                    <p 
                        className="sm:my-3 text-gray-500 font-semibold"
                    >
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        45 min
                    </p>
                </div>
                <p 
                    className="font-light text-sm"
                >
                    Book a meeting with your Fibery team. Talk to a real person about how to get your processes set up with us 🦄 or not 💩 
                </p>
            </div>
        </div>
    )
}
export default LeftHalf;