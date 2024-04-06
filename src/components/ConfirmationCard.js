import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faEarthAmericas, faVideo} from "@fortawesome/free-solid-svg-icons";
import {faCalendar, faUser} from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { TimeUtils } from "../calculations/TimeUtils";
import IconText from "./IconText";
import SignUpButton from "./SignUpButton";

function ConfirmationCard({
    userData,
}){
    return(
        <div className="bg-white pb-5 w-[95%] lg:w-[65%] rounded-lg flex flex-col items-center overflow-auto">
            <div className="overflow-hidden rounded-full h-20 w-20 mt-5">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"
                className="h-20 w-20"
                />
            </div>
            <div className="flex justify-center items-center sm:mt-4 mt-2 gap-2">
                <FontAwesomeIcon icon={faCheck} className=" rounded-full p-1 text-xs text-white bg-green-700 font-bold"/>
                <h1 className="text-2xl font-bold">You are scheduled</h1>
            </div>
            <p className="font-light sm:mt-3 mt-2 text-sm sm:px -0 px-2">A calendar invitation has been sent to your email address.</p>
            <div className="border-gray-200 border-2 sm:w-1/2 rounded-lg p-3">
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
                        text={userData.timeZone}
                    />
                    <IconText 
                        icon={faVideo} 
                        text="Web conferencing details to follow" 
                    />
                </div>
                
            </div>
            <div className="border-gray-200 border-[1.2px]  sm:w-1/2 w-3/4 mt-5 "></div>
            <p className="font-bold sm:mt-3 mt-2 text-sm sm:px -0 px-2">schedule you own meetings with calendly for free</p>
            <p className="font-light mt-1 text-sm sm:px -0 px-2">Eliminate the back-and-forth emails for finding time.</p>
            <div className="flex mt-3 gap-3 mx-3 sm:mx-0">
                <SignUpButton icon={faGoogle} text="Sign up with Google"/>
                <SignUpButton icon={faMicrosoft} text="Sign up with Google"/>
            </div>
        </div>
    )
}

export default ConfirmationCard;