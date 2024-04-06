import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const css = `
  .my-selected:not([disabled]) { 
    font-weight: 500;
    color: white;
    background-color: rgb(37 99 235);
  }
  .my-today { 
    color: gray;
  }
  .rdp-head_cell {
    font-weight:400;
    color:rgb(30 41 59);
  }
  .rdp-cell {
    padding:5px;
    border-radius: 100%;
  }
  .rdp-day {
    color:rgb(37 99 235);
    background-color:rgb(239 246 255);
    font-weight:bold;
  }
  .rdp-caption_label {
    font-weight:400;
    color:rgb(30 41 59);
  }
  .rdp-nav_button {
    color:gray;
  }
  .rdp-nav_button:hover {
    color:rgb(96 165 250);
  }  
`;

function Calendar({
    setSelectDate,
    selectDate,
}){
  


  const style = {
    head_cell: {
      width:"55px",
    },
    table: {
      maxWidth: "none",
    },
    day: {
      margin: "auto",
      fontSize: "14px",
    },
  }
    
    return (
      <>
      <style>{css}</style>
        <DayPicker
          weekStartsOn={1}
          formatters={{
            formatWeekdayName: (day) => day?.toLocaleDateString('en-US', { weekday: 'short' }),
          }}
          mode="single"
          selected={selectDate}
          onSelect={setSelectDate}
          styles={style}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today'
          }}   
          fromDate={new Date()}
          disabled={new Date()}
        />
      </>
    );
}

export default Calendar;