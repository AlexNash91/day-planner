$(function () {
    // Date block, still need to figure out day of week
    function update() {
        // var isoWeek = require('dayjs/plugin/isoWeek')
        let pDate = dayjs().format('MMMM DD');
        $('#currentDay').text(pDate);
        }
    
      setInterval(update, 1000);
        // todo set a getitem method before the clicker 
        // figure out arguments for getItem
        const setEvents = JSON.parse(localStorage.getItem(''))
        $('textarea').text(setEvents);
        // Event listener block, code passing into all blocks 
        $("button").click(function() {
          const hour = $(this).parent().attr('id')
          console.log(typeof(hour))
          console.log(hour)
          console.log("test")
          var event = $("textarea").val()
          localStorage.setItem(hour, JSON.stringify(event))
        
    })
})