function timeConversion(s) {
    // Write your code here
    let hrs = s.slice(0,2)
    let min = s.slice(3,5)
    let sec = s.slice(6,8)
    let amPm = s.slice(8,10)
    
   if( amPm === 'PM'){
       hrs = parseInt(hrs)
       if(hrs < 12){
           hrs = hrs + 12
       }
   } else if (amPm === "AM"){
       if (hrs === '12'){
           hrs = '00'
       }
   }
   return `${hrs}:${min}:${sec}`
}