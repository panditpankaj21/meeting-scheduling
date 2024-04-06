import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { differenceInCalendarDays } from 'date-fns';
import { Row} from 'react-day-picker';

function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) <0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const css = `
  .my-selected:not([disabled]) { 
    font-weight: 500;
    color: white;
    background-color: rgb(37 99 235);
  }
  .my-selected:hover:not([disabled]) { 
    // color: blue;
  }
  .my-today { 
    color: gray;
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
          mode="single"
          selected={selectDate}
          onSelect={setSelectDate}
          styles={style}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today'
          }}
          fromDate={new Date()}
          components={{ Row: OnlyFutureRow }}
        />
      </>
    );
}

export default Calendar;