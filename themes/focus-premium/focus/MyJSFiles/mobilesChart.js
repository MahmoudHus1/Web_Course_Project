google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMobilesChart);

function drawMobilesChart() {
    var x = 70;
      var data = google.visualization.arrayToDataTable([
        ['devices', 'Mobiles'],
        ['iphone', 50],
        ['samsung', 25],
        ['hawawi', 13],
        ['mi', 6]
      ]);

      var materialOptions = {
          'width':620,
        hAxis: {
          title: 'Sales Ratio %',
          minValue: 0,
          maxValue: 100
        },
        vAxis: {
          title: 'Devices'
        },
        bars: 'virtical'
      };
      var materialChart = new google.charts.Bar(document.getElementById('mobiles-chart'));
      materialChart.draw(data, materialOptions);
    }