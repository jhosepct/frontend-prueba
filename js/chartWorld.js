var ctx4 = document.getElementById('myChart4').getContext('2d');

function callService(bodyResponse, textStatus, jqXHR) {
    var continente = [];
    var casos = [];


    for (var i = 0; i < bodyResponse.length; i++) {
        var ciudad = bodyResponse[i];
        continente[i] = ciudad.continent;
        casos[i] = ciudad.totalCases;
    }

    var myPieChart = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: continente,
            datasets: [{
                label: '# de infectados en el mundo',
                data: casos,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(75,255,18,0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(75,255,18,1)'
                ],
                borderWidth: 1
            }]
        }
    });
};

$.getJSON('http://127.0.0.1:5000/continent', {}, callService);
