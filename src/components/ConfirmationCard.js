import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faEarthAmericas, faVideo} from "@fortawesome/free-solid-svg-icons";
import {faCalendar, faUser} from "@fortawesome/free-regular-svg-icons";
import { TimeUtils } from "../calculations/TimeUtils";
import IconText from "./IconText";

function ConfirmationCard({
    userData,
}){
    return(
        <div className="bg-white h-3/4 w-[65%] rounded-lg flex flex-col items-center">
            <div className="overflow-hidden rounded-full h-16 w-16 mt-5">
                <img src="https://exchange4media.gumlet.io/news-photo/130758-big-2023-11-02T083612.037.jpg?w=400&dpr=2.6" alt="profile"
                className="h-16 w-16"
                />
            </div>
            <div className="flex justify-center items-center mt-4 gap-2">
                <FontAwesomeIcon icon={faCheck} className=" rounded-full p-1 text-xs text-white bg-green-700 font-bold"/>
                <h1 className="text-2xl font-bold">You are scheduled</h1>
            </div>
            <p className="font-light mt-3 text-sm">A calendar invitation has been sent to your email address.</p>
            <div className="border-gray-200 border-2 w-1/2 rounded-lg p-3">
                <h1 className="text-xl font-bold">Fibery Demo</h1>
                <div className="mt-2">
                    <IconText
                        icon={faUser}
                        text={userData.name}
                    />
                    <IconText 
                        icon={faCalendar} 
                        text={`${userData.time}-${TimeUtils(userData.time)}, ${userData.date}`} 
                    />
                    <IconText 
                        icon={faEarthAmericas} 
                        text="UK, Ireland, Libson Time" 
                    />
                    <IconText 
                        icon={faVideo} 
                        text="Web conferencing details to follow" 
                    />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationCard;