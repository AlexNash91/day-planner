$(document).ready(function () {
    
    function update() {
        
        let pDate = dayjs().format('dddd, MMMM DD');
        $('#currentDay').text(pDate);
        }
        setInterval(update, 1000);

      })
        
const time = dayjs().hour()
console.log(time)
     
// event loop
const hourArr = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13","hour-14","hour-15","hour-16","hour-17" ]
  for (i=0; i < hourArr.length; i++) {

    let hourId = hourArr[i]
    const setEvents = JSON.parse(localStorage.getItem(hourId))
          
    $("#" + hourId).children("textarea").val(setEvents);
          
    let hourNum = +hourId.split("-")[1]
          

    if (time === hourNum) {

      $("#" + hourId).attr('class', 'row time-block present')
  }

    else if (time > hourNum) {

      $("#" + hourId).attr('class', 'row time-block past')
  }

    else {
      $("#" + hourId).attr('class', 'row time-block future')
  }

}
        
        
// Event listener block, code passing into all blocks 
$("button").click(function() {
  const hour = $(this).parent().attr('id')          
  var event = $("textarea").val()
  localStorage.setItem(hour, JSON.stringify(event))         
})

      