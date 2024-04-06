import { useState } from "react";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import ConfirmationCard from "./ConfirmationCard";

function MeetingCard(){
    const [userData, setUserData] = useState({
        date: "",
        time: "",
        timeZone: "UK, Ireland, Libson Time (16:55)",
        token: 1,
    })

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
                className={`bg-white min-[837px]:h-3/4 min-[837px]:w-[65%] h-3/5 w-3/4 rounded-lg min-[837px]:flex min-[837px]:justify-between min-[837px]:overflow-hidden overflow-auto shadow-min-[837px] `}
            >
                <div 
                    className={`w-full min-[837px]:h-full min-[837px]:w-1/2 min-[837px]:border-gray-400 min-[837px]:border-r-[1px]`}
                >
                    <LeftHalf 
                        userData={userData}
                        handlePrevButton={handlePrevButton}
                    />
                </div>
                <div   
                    className={`w-full min-[837px]:h-full ${userData.date ? "min-[1212px]:w-[70%]" : "min-[837px]:w-1/2"}`} 
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

// ${userData.date==="" ? "min-[837px]:w-1/2":"min-[837px]:w-[60%]"}
// ${userData.date ? "min-[837px]:w-1/2" : "min-[837px]:w-[500px]"}
