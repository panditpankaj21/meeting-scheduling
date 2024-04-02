import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function Calendar({
    setSelectDate,
    selectDate,
}){
    
    return (
      <DayPicker
        mode="single"
        selected={selectDate}
        onSelect={setSelectDate}
      />
    );
}

export default Calendar;