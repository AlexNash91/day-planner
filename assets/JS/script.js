$(document).ready(function () {
    // Date block, still need to figure out day of week
    function update() {
        // var isoWeek = require('dayjs/plugin/isoWeek')
        let pDate = dayjs().format('dddd, MMMM DD');
        $('#currentDay').text(pDate);
        }
        
        const time = dayjs().hour()
        console.log(time)



      setInterval(update, 1000);
        // event loop
        const hourArr = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13","hour-14","hour-15","hour-16","hour-17" ]
        for (i=0; i < hourArr.length; i++) {
          let hourId = hourArr[i]
          const setEvents = JSON.parse(localStorage.getItem(hourId))
          // console.log(setEvents)
          $("#" + hourId).children("textarea").val(setEvents);
          let hourNum = +hourId.split("-")[1]
          console.log(hourNum)

          if (time === hourNum) {

          }
          else if (time < hourNum) {

          }

          else {

          }


        }

        

        // todo set a getitem method before the clicker 
        // figure out arguments for getItem
        
        // console.log(hour)
        
        // Event listener block, code passing into all blocks 
        $("button").click(function() {
          // console.log(typeof(hour))
          const hour = $(this).parent().attr('id')
          // console.log("test")
          var event = $("textarea").val()
          localStorage.setItem(hour, JSON.stringify(event))
          
          
        })
      })