$(document).ready(function() {
  var stats;
  var chartReady;

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(function() {
    chartReady = true;
    if (stats) {
      drawChart();
    }
  });

  function reloadData() {
    $.ajax({
      type: 'GET',
      url: 'https://pay.voicybot.com/stats',
    })
    .done(function(data) {
      $("#stats").empty();
      $("#stats").append("So far <a href=\"https://telegram.me/voicybot\">@voicybot</a> was added to " + data.chatCount + " chats and recognized " + data.voiceCount + " voice messages resulting in " + data.duration + " seconds of speech.");
      stats = data;
      if (chartReady) {
        drawChart();
      }
      $("#words").empty();
      var words = [];
      var arr = data.wordCount;
      for (i in arr) {
        words.push(arr[i].word + " (" + arr[i].count + ")");
      }
      $("#words").append(words.join(", ") + ".");
      
    });
  }
  reloadData();
  setInterval(reloadData, 20000);

  function resize () {
    drawChart();
  }
  if (window.addEventListener) {
    window.addEventListener('resize', resize);
  }
  else {
    window.attachEvent('onresize', resize);
  }

  function drawChart() {;
    if (!stats) { return; }
    var array = [['Voice messages', 'Chats']];
    array = array.concat(stats.voiceStats.map(function(obj) {
      return [obj._id, obj.count];
    }));
    var data = google.visualization.arrayToDataTable(array);

    var options = {
      title: 'Number of voice messages recognized vs number of chats with such number of voice messages recognized',
      vAxis: {title: "# of chats"},
      hAxis: {title: "# of voice messages"},
      legend: 'none',
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('curve_chart2'));

    var newArray = [['Time', 'Voice messages']];
    newArray = newArray.concat(stats.hourlyStats.map(function(obj) {
      return [new Date(new Date().getTime() - (obj._id * 60 * 60 * 1000)), obj.count];
    }));
    var newData = google.visualization.arrayToDataTable(newArray);

    var newOptions = {
      title: 'Number of voice messages recognized per hour',
      vAxis: { title: "# of voice messages" },
      hAxis: { title: "Time" },
      legend: 'none',
    };
    var chart2 = new google.visualization.ColumnChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
    chart2.draw(newData, newOptions);
  }
});