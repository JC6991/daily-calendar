$(document).ready(function() {

    // set the date to the currentDay id
    setInterval(function() {        
        $("#currentDay").text(moment().format("dddd, Do MMMM YYYY"));

    }, 1000);

    // create an array for the business hours in a day
    const businessHours = ['9am', '10am', '11m', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
    

    businessHours.forEach(function (hour) {
        // create rtime block and append to container div
        let timeBlock = $('<div>');        
        timeBlock.addClass('time-block row');                
        $('.container').append(timeBlock);

        // create time div (2 columns) and append to time block
        let hourOfDay = $('<div>');
        hourOfDay.addClass('hour col-2')
        hourOfDay.text(hour);
        timeBlock.append(hourOfDay);

        // create text area and append to time block
        let textArea = $('<textarea>');
        textArea.addClass('col-8')        
        timeBlock.append(textArea);

        // create save button
        let saveButton = $('<button>');
        saveButton.addClass('saveBtn col-2');
        timeBlock.append(saveButton);

    }) 

    $('.container').children('p').addClass('hour');

});
