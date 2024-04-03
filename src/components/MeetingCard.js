import { useState } from "react";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import ConfirmationCard from "./ConfirmationCard";

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
                <ConfirmationCard userData={userData} />
            }
        </>
    )
}
export default MeetingCard;