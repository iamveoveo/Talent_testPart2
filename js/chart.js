const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Tổng thuế', 'Net pay'],
        datasets: [{
            label: '',
            data: [15, 85],
            backgroundColor: [
                '#9DE9F6',
                '#691f74'
            ]
        }]
    },
    options: {
        responsive: true
    }
})

const ctx1 = document.getElementById('compareChart').getContext('2d');
const compartChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
            label: 'set 1',
            data: [250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500],
            fill: true,
            borderColor: '#b8eff9',
            backgroundColor: '#cff4fa44'
        },{
            label: 'set 2',
            data: [250, 480, 700, 920, 1150, 1360, 1580, 1800, 2020, 2240],
            fill: true,
            borderColor: '#bc9dc3',
            backgroundColor: '#d7cbdf'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                display: false
            }
        }
    }
})