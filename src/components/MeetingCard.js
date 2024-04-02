import { useState } from "react";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-regular-svg-icons";
import { TimeUtils } from "../calculations/TimeUtils";

function MeetingCard(){
    const [userData, setUserData] = useState({
        date: "",
        time: "",
        token: 1,
    })

    console.log(userData)

    const handleNextButton = ()=>{
        setUserData((prev) => {
            return {
                ...prev, 
                token: prev.token + 1,
            }
        })
    }

    const handlePrevButton = ()=>{
        setUserData((prev) => {
            return {
                ...prev,
                token: prev.token - 1,
            }
        })
    }

    return(
        <>
            {userData.token < 3 && <div 
                className={`bg-white sm:h-3/4 sm:w-[65%] h-3/5 w-3/4 rounded-lg sm:flex sm:justify-between overflow-hidden`}
            >
            <div 
                    className={`h-[50%] w-1/2 sm:h-full sm:w-[60%] sm:border-gray-400 sm:border-r-[1px]`}
                >
                    <LeftHalf 
                        userData={userData}
                        handlePrevButton={handlePrevButton}
                    />
                </div>
                <div   
                    className={`h-full w-1/2 sm:h-full ${userData.date ? "sm:w-[800px]" : "sm:w-[500px] "}`} 
                >
                    <RightHalf 
                        userData={userData}
                        handleNextButton={handleNextButton}
                        handlePrevButton={handlePrevButton}
                        setUserData={setUserData}
                    />
                </div>
            </div>}
            {
                userData.token === 3 && 
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
                            <p 
                                className="mb-2 text-gray-500 font-semibold text-sm"
                            >
                                <FontAwesomeIcon icon={faCalendar}className="mr-2"/>
                                {/* TODO:day is also required */}
                                {userData.time}-{TimeUtils(userData.time)}, {userData.date}
                            </p>
                            <p>what your are doing</p>
                            <p>what your are doing</p>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
export default MeetingCard;