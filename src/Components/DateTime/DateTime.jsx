


const DateTime = (time) => {
    
    let currTime = `${time.getHours()}:${time.getMinutes()}`
    let date = `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`
    
    return ( 
        
        `Posted on ${date} at ${currTime}`
        
     );
}
 
export default DateTime;