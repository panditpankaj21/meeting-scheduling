import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function TimeZoneDropdown({
    setUserData
}) {
  const timeZones = ["UK, Ireland, Libson Time (16:55)","Asia/Calcutta"];

  const handleSelectChange = (event) => {
    setUserData((prev) => {
        return {
            ...prev,
            timeZone: event.target.value,
        }
    })
  }

  return (
    <div className='ml-7 '>
        <FontAwesomeIcon 
            icon={faEarthAmericas}
        />
        <select className="mt-1 rounded font-light" onChange={handleSelectChange}>
        {timeZones.map((zone, index) => (
            <option key={index}>{zone}</option>
        ))}
        </select>
    </div>
  );
}

export default TimeZoneDropdown;