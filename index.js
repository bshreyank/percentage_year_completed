window.onload = function() {
    // Get the current date
    var currentDate = new Date();
    
    // Get the number of days elapsed since the start of the year
    var dayOfYear = Math.floor((currentDate - new Date(currentDate.getFullYear(), 0, 0)) / 86400000);
    
    // Calculate the total number of days in the year
    var totalDays = currentDate.getFullYear() % 4 == 0 ? 366 : 365;
    
    // Calculate the percentage of the year completed
    var percentageCompleted = (dayOfYear / totalDays * 100).toFixed(1);
    
    // Display the result
    document.getElementById("percentage").innerHTML = percentageCompleted + "%";

  }
  