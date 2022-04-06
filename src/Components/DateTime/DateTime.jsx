


const DateTime = (props) => {
    let dateTime = new Date();
    let time = `${dateTime.getHours}:${dateTime.getMinutes}`
    let date = `${dateTime.getDay}/${dateTime.getMonth}/${dateTime.getFullYear}`
    
    return ( 
        `Posted on ${date} at ${time}`
     );
}
 
export default DateTime;