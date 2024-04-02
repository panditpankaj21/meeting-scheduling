import { useState } from "react"
import Calendar from "./Calendar"
import Time from "./Time"
import { times } from "../data/times"
import MeetingDetailForm from "./MeetingDetailForm"


function RightHalf({
    userData,
    handleNextButton,
    handlePrevButton,
    setUserData,
}){
    const [selectDate, setSelectDate]=useState(null)
    const [availableTime, setAvailableTime] = useState(times)

    const handleClickNext = (time) => {
        const date = new Date(selectDate);
        setUserData((prev) => {
            return {
                ...prev,
                time: time,
                date: date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                }),
            }
        })
        handleNextButton();
    }

    return(
        <div className="h-full w-full">
            {
                userData.token===1 && (
                <div className="h-full w-full">
                    <div className="flex h-full">
                        <div className="h-full">
                            <Calendar
                                selectDate={selectDate}
                                setSelectDate={setSelectDate}
                            />
                        </div>
                        {selectDate &&<div className="overflow-auto pr-5 mt-20">
                             {availableTime.map((time) => (
                                <Time 
                                    time={time} 
                                    key={time.id}
                                    setAvailableTime={setAvailableTime}
                                    handleClickNext={handleClickNext}
                                />
                            ))}
                            </div>
                        }
                        
                    </div>

                    <button
                        onClick={handleNextButton}
                    >Next</button>
                </div>)
            }
            {userData.token===2 && (
                <div className="overflow-auto h-full">
                    <MeetingDetailForm
                        handleNextButton={handleNextButton}
                        setUserData={setUserData}
                    />
                </div>
                )
            }

        </div>
    )
}

export default RightHalf;