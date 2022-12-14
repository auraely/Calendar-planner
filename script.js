var currentDay = moment().format('MMMM Do, YYYY');
$("#currentDay").text(currentDay);
var currentHour = moment().hour();
//console.log(currentHour)
var input = $("#text").text();  // the value in textarea
var textarea=$("#text");
var timeblock=$(".time-block")
var container=$(".container");


var calendarHour = moment('09', 'HH');    
//console.log(calendarHour)
while (calendarHour.hour() < 18)  {
   // create elements for each time-block
    container.append(`
    <div id="calendar-hour" class="row time-block">
        <div class="col-md-1 hour">${calendarHour.hour()}</div>
        <textarea id ="text" name="text" class="col-md-10"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
    </div>


    `)  
    // event listener to button
    var storage = [];
    var saveBtn = $("#saveBtn");
    saveBtn.on("click", function (event) {
    var input = $("#text").val();
    storage.push(input);
    localStorage.setItem("text", input);
    unhide();
  });

  function getText() {
    var value = localStorage.getItem("text");

  }

   window.onload = getText();

   function unhide() {
    $(".hide").show();
    setTimeout(function () {
      $("section").hide();
    }, 1000);
  }

  

    calendarHour.add(1, 'hours')   //  it increments to the next hour
    
    
  
    if (currentHour === calendarHour.hour())  {
        textarea.addClass("present")
    }
        else if (currentHour < calendarHour.hour())  {
            textarea.addClass("future")
    }   else if (currentHour > calendarHour.hour())  {
            textarea.addClass("past")
    } 
    
    
}