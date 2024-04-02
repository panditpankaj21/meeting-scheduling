
function Time({
    time,
    setAvailableTime,
    handleClickNext
}){
    const handleClick = () => {
        setAvailableTime(prev =>{
            const newArr = prev.map(item => {
                if(item.id === time.id){
                    return {...item, isSelected: !item.isSelected}
                }
                return {...item, isSelected: false}
            })
            return newArr;
        })
    }


    return(
        <div 
            className={` ${time.isSelected ? "" : "py-2 px-14 border-blue-300 border-[1.3px]" } rounded-sm mb-2 text-blue-500 bg-white font-semibold hover:bg-blue-50 cursor-pointer text-center`}
            onClick={handleClick}
        >
            {
                time.isSelected ? (
                    <div className="flex justify-between">
                        <div 
                            className=" rounded-sm bg-gray-500 text-white font-semibold hover:bg-gray-600 cursor-pointer text-center py-2 px-[16px]"
                        >
                            {time.time}
                        </div>
                        <div 
                            className=" rounded-sm bg-blue-500 text-white font-semibold hover:bg-blue-600 cursor-pointer text-center py-2 px-[16px]"
                            onClick={() => handleClickNext(time.time)}
                        >
                            Next
                        </div>
                    </div>
                ) : `${time.time}`
            }
        </div>
        
    )
}

export default Time;