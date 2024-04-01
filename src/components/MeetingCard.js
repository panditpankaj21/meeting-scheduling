import LeftHalf from "./LeftHalf";
import RightHalf from "./RightHalf";

function MeetingCard(){
    return(
        <div 
            className="bg-white sm:h-3/4 sm:w-[65%] h-3/5 w-3/4 rounded-lg overflow-hidden
            sm:flex"
        >
            <div 
                className="h-[50%] sm:h-full sm:w-[60%] sm:border-gray-400 sm:border-r-[1px]"
            >
                <LeftHalf/>
            </div>
            <div   
                className=" h-full sm:h-full sm:w-[500px]"
            >
                <RightHalf/>
            </div>
        </div>
    )
}
export default MeetingCard;