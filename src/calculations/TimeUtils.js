


export function TimeUtils(timeString){

const [hoursString, minutesString] = timeString.split(':');

const hours = parseInt(hoursString, 10);
const minutes = parseInt(minutesString, 10);

const time = new Date();
time.setHours(hours);
time.setMinutes(minutes);

time.setMinutes(time.getMinutes() + 45);

const newHours = time.getHours();
const newMinutes = time.getMinutes();

const newTimeString = `${newHours < 10 ? '0' : ''}${newHours}:${newMinutes < 10 ? '0' : ''}${newMinutes}`;

return newTimeString;

}