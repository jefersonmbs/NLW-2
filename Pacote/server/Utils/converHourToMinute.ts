export default function convertHoursToMinutes(hours: string){

    const [hour, minutes] = hours.split(":").map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes;

}