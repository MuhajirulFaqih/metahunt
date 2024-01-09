// Get the current date
var currentDate = new Date();

// List of event dates and names (assumed format: YYYY-MM-DD)
var eventDetails = [
  { date: '2023-12-20', name: 'Event 1', location: '' },
  { date: '2023-12-30', name: 'Event 2', location: '' },
];

// Display the calendar for 3 consecutive months
showCalendar(currentDate.getFullYear(), currentDate.getMonth() - 1, "calendar-1");
showCalendar(currentDate.getFullYear(), currentDate.getMonth(), "calendar-2");
showCalendar(currentDate.getFullYear(), currentDate.getMonth() + 1, "calendar-3");

function showCalendar(year, month, idName) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Ensure that month index is within the valid range
  if (month < 0) {
    month = 11;
    year--;
  } else if (month > 11) {
    month = 0;
    year++;
  }

  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0);
  var daysInMonth = lastDay.getDate();
  var startingDay = firstDay.getDay();

  var calendarHtml = '<div class="calendar-month">';
  calendarHtml += '<div class="text-center calendar-month-title">' + monthNames[firstDay.getMonth()] + ' ' + year + '</div>';
  calendarHtml += '<table class="table table-bordered">';
  calendarHtml += '<thead><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead><tbody>';

  // Fill empty cells before the first day of the month
  for (var i = 0; i < startingDay; i++) {
    var prevMonthDay = new Date(year, month, -i).getDate();
    calendarHtml += '<td class="disable" onclick="resetText()">' + prevMonthDay + '</td>';
  }

  // Fill the calendar with the current month's dates
  for (var i = 1; i <= daysInMonth; i++) {
    var currentDate = new Date();
    var isPastDate = new Date(year, month, i) < currentDate;
    var cellClass = '';
    var eventDetail = getEventDetail(getFormattedDate(year, month + 1, i));

    if (eventDetail) {
      cellClass += ' event-date';
      calendarHtml += '<td class="' + cellClass + '" onclick="handleDateClick(this, ' + year + ', ' + (month + 1) + ', ' + i + ')">' + i + '</td>';
    } else {
        calendarHtml += '<td class="' + cellClass + '" onclick="resetText()">' + i + '</td>';
    }


    // Move to a new row every Saturday
    if ((i + startingDay) % 7 === 0) {
      calendarHtml += '</tr><tr>';
    }
  }

  // Fill empty cells after the last day of the month
  var remainingDays = 7 - ((daysInMonth + startingDay) % 7);
  for (var i = 1; i <= remainingDays; i++) {
    calendarHtml += '<td class="disable" onclick="resetText()">' + i + '</td>';
  }

  calendarHtml += '</tr></tbody></table></div>';

  // Display the calendar in the div with id "calendar"
  $(`#${idName}`).append(calendarHtml);
}

// Function to format date as YYYY-MM-DD
function getFormattedDate(year, month, day) {
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}

// Function to get event details for a specific date
function getEventDetail(date) {
  return eventDetails.find(event => event.date === date);
}

// Function to handle date click
function handleDateClick(cell, year, month, day) {
  if ($(cell).hasClass('event-date')) {
    var date = getFormattedDate(year, month, day);
    var eventDetail = getEventDetail(date);
    var longDay = new Date(date).toLocaleString('en-us', {weekday:'long'})
    var dateNumber = new Date(date).getDate()
    var monthLong = new Date(date).toLocaleString('en-us', {month:'long'})
    $(".calendar-text").html(`<div>${longDay}, ${monthLong} ${dateNumber}, ${year} </div><span>\nEvent: ${eventDetail.name} + </span>`);
  }
}

function resetText () {
    $(".calendar-text").html("")
}

// Initialize Owl Carousel
$('.owl-calendar').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  loop: false,
  navText: ["<div class='arrow'><img src='assets/icons/arrow-left.svg' class='w-100'></div>", "<div class='arrow'><img src='assets/icons/arrow-right.svg' class='w-100'></div>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});