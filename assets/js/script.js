// THIS IS THE CODE THAT INTERACTS WITH THE DOM IN A CALL TO JQUERY TO ENSURE THAT THE 
// THE CODE DOESN'T RUN UNTIL THE BROSWER  HAS FINISHED RENDERING ALL THE ELEMENTS IN THE HTML.
  $(document).ready(function () {

// THIS IS THE CODE TO DISPLAY THE CURRENT DATE AND TIME IN THE HEADER OF THE PAGE, WHICH IS USING MOMENT.JS
  $("#currentDay").text(moment().format("dddd, MMM DD, YYYY - h:mm:ss a")); 
  
// THIS IS THE CODE FOR CLICK LISTENER WHEN USER HITS THE "saveBtn" button. 
  $(".saveBtn").on("click", function () {
    var content = $(this).siblings(".description").val(); 
    var timeStamp = $(this).parent().attr("id");

// THIS IS THE CODE TO GET ANY USER INPUT THAT WAS SAVE IN LOCALE STORAGE AND WILL 
// SET THE VALUES OF THE CORRESPONDING TEXT AREA ELEMENTS//.
  localStorage.setItem(timeStamp, content);
  })
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));

// THIS IS THE CODE THAT WILL APPLY PAST, PRESENT AND/OR FUTURE CLASS TO
// EACH TIME BLOCK BY COMPARING THE ID TO THE CURRENT YEAR.
  function trackTime() {
  // VARIABLE TO GET THE CUURENT HOUR, USING MOMEMT.JS
  var currentHour = moment().hour(); 

// FOR EACH LOOP AT EVERY HOUR
  $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

// IF STATEMENTS FOR WHEN THE TIME HAS PAST THE PRESENT HOUR, COLOUR BLOCK ACCORDINGLY
  if (timeBlock < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
    }
  else if (timeBlock === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
    }
      })
  }
//REPEAT THE TRACKER
  trackTime(); 
})
