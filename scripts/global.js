$(document).ready(function() {
  var stats
  var chartReady

  google.charts.load('current', { packages: ['corechart'] })
  google.charts.setOnLoadCallback(function() {
    chartReady = true
    if (stats) {
      drawChart()
    }
  })

  function reloadData() {
    $.ajax({
      type: 'GET',
      url: 'https://pay.voicybot.com/statsfornikita',
    }).done(function(data) {
      $('#stats').empty()
      $('#stats').append(
        'So far <a href="https://telegram.me/voicybot">@voicybot</a> was added to ' +
          data.chatCount +
          ' chats and recognized ' +
          data.voiceCount +
          ' voice messages resulting in ' +
          (data.duration / 60 / 60 / 24 / 365).toFixed(4) +
          ' years of speech.'
      )
      stats = data
      if (chartReady) {
        drawChart()
      }
    })
  }
  reloadData()
  setInterval(reloadData, 20000)

  function resize() {
    drawChart()
  }
  if (window.addEventListener) {
    window.addEventListener('resize', resize)
  } else {
    window.attachEvent('onresize', resize)
  }

  function drawChart() {
    if (!stats) {
      return
    }

    var newArray = [['Time', 'Voice messages']]
    newArray = newArray.concat(
      stats.hourlyStats.map(function(obj) {
        return [
          new Date(new Date().getTime() - obj._id * 24 * 60 * 60 * 1000),
          obj.count,
        ]
      })
    )
    var newData = google.visualization.arrayToDataTable(newArray)

    var newOptions = {
      title: 'Number of voice messages recognized per day',
      vAxis: { title: '# of voice messages' },
      hAxis: { title: 'Time' },
      legend: 'none',
    }
    var chart = new google.visualization.ColumnChart(
      document.getElementById('curve_chart')
    )

    chart.draw(newData, newOptions)

    // Second chart

    var newArray = [['Time', 'Messages']]
    newArray = newArray.concat(
      stats.messageStats.map(function(obj) {
        return [new Date(obj.date), obj.count]
      })
    )
    var newData = google.visualization.arrayToDataTable(newArray)

    var newOptions2 = {
      title: 'Number of messages recognized per day',
      vAxis: { title: '# of messages' },
      hAxis: { title: 'Time' },
      legend: 'none',
    }
    var chart2 = new google.visualization.LineChart(
      document.getElementById('curve_chart2')
    )

    chart2.draw(newData, newOptions2)

    // Third chart

    var newArray3 = [['Time', 'Chats']]
    var count = 0
    newArray3 = newArray3.concat(
      stats.chatDailyStats.map(function(obj) {
        count += obj.count
        return [
          new Date(new Date().getTime() - obj._id * 24 * 60 * 60 * 1000),
          count,
        ]
      })
    )
    var newData3 = google.visualization.arrayToDataTable(newArray3)

    var newOptions3 = {
      title: 'Number of chats per day',
      vAxis: { title: '# of chats' },
      hAxis: { title: 'Time' },
      legend: 'none',
    }
    var chart3 = new google.visualization.LineChart(
      document.getElementById('curve_chart3')
    )

    chart3.draw(newData3, newOptions3)

    // Fourth chart

    var newArray4 = [['Time', 'Chats']]
    newArray4 = newArray4.concat(
      stats.chatDailyStats.map(function(obj) {
        return [
          new Date(new Date().getTime() - obj._id * 24 * 60 * 60 * 1000),
          obj.count,
        ]
      })
    )
    var newData4 = google.visualization.arrayToDataTable(newArray4)

    var newOptions4 = {
      title: 'Number of chats created per day',
      vAxis: { title: '# of chats' },
      hAxis: { title: 'Time' },
      legend: 'none',
    }
    var chart4 = new google.visualization.ColumnChart(
      document.getElementById('curve_chart4')
    )

    chart4.draw(newData4, newOptions4)

    // Fifth chart
    var newArray5 = [['Time', 'Response time']]
    newArray5 = newArray5.concat(
      Object.keys(stats.responseTime).map(k => [
        new Date(k * 1000),
        stats.responseTime[k],
      ])
    )
    var newData5 = google.visualization.arrayToDataTable(newArray5)

    var newOptions5 = {
      title: 'Average response delay',
      vAxis: { title: 'Delay, s' },
      hAxis: { title: 'Time' },
      legend: 'none',
    }
    var chart5 = new google.visualization.LineChart(
      document.getElementById('curve_chart5')
    )

    chart5.draw(newData5, newOptions5)
  }
})
