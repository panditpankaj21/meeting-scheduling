import { useState } from "react"
import Calendar from "./Calendar"
import Time from "./Time"
import { times } from "../data/times"
import MeetingDetailForm from "./MeetingDetailForm"
import {format} from "date-fns"
import TimeZoneDropdown from "./TimeZoneDropdown"


function RightHalf({
    userData,
    handleNextButton,
    setUserData,
}){
    const [selectDate, setSelectDate]=useState(null)
    const [availableTime, setAvailableTime] = useState(times)
    console.log(selectDate)

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
                    <div className="lg:flex h-full overflow-auto"
                    >
                        <div className="">
                            <h1 className="text-lg font-bold mt-5 ml-5">Select a Date & Time</h1>
                            <Calendar
                                selectDate={selectDate}
                                setSelectDate={setSelectDate}
                            />
                            <TimeZoneDropdown setUserData={setUserData}/>
                        </div>
            
                        {selectDate &&
                        <div className="w-full sm:overflow-auto sm:mt-5 lg:mt-10 px-10 mt-4 sm:px-5 lg:px-0 ">
                            <p className="pb-3">{format(selectDate, 'PPP')}</p>
                             {availableTime.map((time) => (
                                <Time 
                                    time={time} 
                                    key={time.id}
                                    setAvailableTime={setAvailableTime}
                                    handleClickNext={handleClickNext}
                                    selectDate={selectDate}
                                />
                            ))}
                            </div>
                        }
                        
                    </div>
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