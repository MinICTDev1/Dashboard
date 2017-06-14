google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawLineChart);

window.data

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Budget Item', 'Annual Expenditure'],
        ['July', 11],
        ['August', 2],
        ['September', 2],
        ['October', 2],
        ['November', 7],
        ['December', 2],
        ['January', 2],
        ['February', 2],
        ['March', 2],
        ['April', 2],
        ['May', 2],
        ['June', 2],
    ]);

    var options = {
        title: 'Annual Expenditure',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}


function drawLineChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'BudgetItem');
    data.addColumn('number', 'Guardians of the Galaxy');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 69.5, 32.4],
        [3, 25.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 11.9, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11, 5.3, 7.9, 4.7],
        [12, 6.6, 8.4, 5.2],
        [13, 4.8, 6.3, 3.6],
        [14, 4.2, 6.2, 3.4],
        [15, 2.3, 5.6, 4.5]
    ]);

    var options = {
        chart: {
            title: 'Ministry Of ICT spending during the financial year 2017/2018 in Uganda Shillings (UGX)'
        },
        width: 900,
        height: 500
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}

$(document).ready(function(){
    $(".dropdown-menu li a").on("click",function(){
	 var iddiv =  $(this).attr("id") ;
         $(".box").hide();
         $("."+iddiv).show();
            });
 });