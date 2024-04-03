import logoImage from "../images/webLogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { TimeUtils } from "../calculations/TimeUtils";
import IconText from "./IconText";

function LeftHalf({
    userData,
    handlePrevButton,
}){
    return(
        <div className="flex sm:flex-col h-full relative">
            {userData.token === 2 && <FontAwesomeIcon 
                icon={faArrowLeftLong}
                onClick={handlePrevButton}
                className=" absolute text-xl text-blue-700 top-5 left-5 border-gray-300 border-[1.2px] hover:bg-blue-50 hover rounded-3xl p-2 cursor-pointer" 
            />}
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
                    <IconText
                        icon={faClock}
                        text="45 min"
                    />
                    
                    { userData.token===2 && 
                        <IconText 
                            icon={faCalendar} 
                            text={`${userData.time}-${TimeUtils(userData.time)}, ${userData.date}`} 
                        />
                    }
                    {/* TODO: add time zone when userData.token===2 */}
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