$(document).ready(function() {

    // set the date to the currentDay id
    setInterval(function() {        
        $("#currentDay").text(moment().format("dddd, Do MMMM YYYY"));

    }, 1000);

    // start business hours at 9
    let businessHours = moment().hour(9).format('h');
    console.log(businessHours);       

    // businessHours.forEach(function (hour) {
    for(i = 9; i < 18; i++) {
        // create time block and append to container div
        let timeBlock = $('<div>');        
        timeBlock.addClass('time-block row');
        timeBlock.attr('id', i);
        $('.container').append(timeBlock);

        // create time div (2 columns) and append to time block
        let hourOfDay = $('<div>');
        hourOfDay.addClass('hour col-1')        
        timeBlock.append(hourOfDay);        

        // create text area and append to time block
        let textArea = $('<textarea>');
        textArea.addClass('col-10')   
        textArea.attr('input');
        timeBlock.append(textArea);

        // create save button
        let saveButton = $('<button><i class="fas fa-save"></i></button>');
        saveButton.addClass('saveBtn col-1');
        timeBlock.append(saveButton);
    };

    $('.hour').each(function() {        
        $(this).text(businessHours + ":00");
        console.log('bus hour: ', businessHours);

        let timeCheck = parseInt($(this).parent().attr('id'));
        console.log('id: ', timeCheck);
        console.log(typeof timeCheck);

        businessHours++;
        // businessHours.add(1, 'h').format('k');
        // console.log(businessHours);
        
        // get the current hour of the day
        let currentHour = parseInt(moment().format('k'));
        console.log('current: ', currentHour);
        console.log(typeof currentHour);
        
        if(currentHour < timeCheck) { 
            $(this).next().addClass('future');
        }
        else if(currentHour === timeCheck) { 
            $(this).next().addClass('present');
        }
        else if(currentHour > timeCheck){ 
            $(this).next().addClass('past');
        }        

        // let getData = $(this).parent().attr('id')
        // console.log("Test: ", getData);
        // // $(this).next() = localStorage.getItem(getData);
    }); 

  

    // save user input in local storage
    $('.saveBtn').on('click', function() {
        let userInput = {
            time: "",
            input: "",
         }; 

        // get the time by targeting the id of the timeblock div        
        userInput.time = $(this).parent().attr('id');
        // set the user input to the input variable
        userInput.input = $(this).prev().val();
        
        // store user input in local storage
        let savedData = $(this).parent().attr('id');
        localStorage.setItem(savedData, JSON.stringify(userInput));
    });

    // getCalendarInput();

});
