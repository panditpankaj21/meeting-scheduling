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

    console.log(userData.date, "pankaj")

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
                className={`bg-white sm:h-3/4 sm:w-[65%] h-3/5 w-3/4 rounded-lg sm:flex sm:justify-between sm:overflow-hidden overflow-auto shadow-lg `}
            >
                <div 
                    className={`w-full sm:h-full sm:w-1/2 sm:border-gray-400 sm:border-r-[1px]`}
                >
                    <LeftHalf 
                        userData={userData}
                        handlePrevButton={handlePrevButton}
                    />
                </div>
                <div   
                    className={`w-full sm:h-full sm:w-[60%] `} 
                >
                    <RightHalf 
                        userData={userData}
                        handleNextButton={handleNextButton}
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

// ${userData.date==="" ? "sm:w-1/2":"sm:w-[60%]"}
// ${userData.date ? "sm:w-1/2" : "sm:w-[500px]"}
