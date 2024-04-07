import { useState } from "react";
import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";
import ConfirmationCard from "./ConfirmationCard";

function MeetingCard(){
    const [userData, setUserData] = useState({
        date: null,
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
                className={`bg-white desktop:h-3/4 desktop:w-[65%] h-3/5 w-3/4 rounded-lg desktop:flex desktop:justify-between desktop:overflow-hidden overflow-auto`}
            >
                <div 
                    className={`w-full desktop:w-1/2 desktop:border-gray-400 desktop:border-r-[1px]`}
                >
                    <LeftHalf 
                        userData={userData}
                        handlePrevButton={handlePrevButton}
                    />
                </div>
                <div   
                    className={`w-full ${userData.date ? "min-[1212px]:w-[70%]" : "desktop:w-1/2"}`} 
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

