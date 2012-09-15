var chart;
$(document).ready(function() {
    $('.bigtext').bigtext();

    // Set the default colors to yallow and blue from color scheme
    Highcharts.getOptions().colors = ['#185BD6', '#F4BC00'];

    // Map the colors to a radial form
    Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function(color) {
                return {
                    radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                    ]
                };
            });

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chartContainer',
            plotBackgroundColor: '#F0F0F0',
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Winners and slackers'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                {
                    name: 'Winners!',
                    y: 41,
                    sliced: true,
                    selected: true
                },
                {
                    name: 'Slackers.',
                    y: 59
                }
            ]
        }]
    });
});
