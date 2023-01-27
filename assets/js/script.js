$(document).ready(function() {

    // set the date to the currentDay id
    setInterval(function() {
        let today = moment();
        $("#currentDay").text(today.format("dddd, Do MMMM YYYY"));

    }, 1000);

    // create an array for the business hours in a day
    const businessHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

    

});
