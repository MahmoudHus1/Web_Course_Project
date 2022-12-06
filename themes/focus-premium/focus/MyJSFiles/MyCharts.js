google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
    var x = 70;
      var data = google.visualization.arrayToDataTable([
        ['devices', 'Laptops', 'Mobiles'],
        ['msi,iphone', 50, 12],
        ['lenovo,samsung', 25,13],
        ['hp,hawawi', 13,25],
        ['dell,mi', 12,50]
      ]);

      var materialOptions = {
          'height':287,
        hAxis: {
          title: 'Sales Ratio %',
          minValue: 0,
        },
        vAxis: {
          title: 'Devices'
        },
        bars: 'virtical'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);
    }