$(function () {
    // Date block, still need to figure out day of week
    function update() {
        // var isoWeek = require('dayjs/plugin/isoWeek')
        let pDate = dayjs().format('MMMM DD');
        $('#currentDay').text(pDate);
        }
    
      setInterval(update, 1000);
        // todo set a getitem method before the clicker
        
        // Event listener blcok, code not passing data into local storage, will fix later
        $("button").click(function() {
            console.log("test")
            var event = $("textarea").val()
            localStorage.setItem("Event", JSON.stringify(event))
        
    })
})