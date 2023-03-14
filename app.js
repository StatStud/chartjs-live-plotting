const data_count = 60;

function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
      randomArray.push(randomNumber);
    }
    return randomArray;
}

function generateIncrementingArray(length) {
    const result = [];
  
    for (let i = 1; i <= length; i++) {
      result.push(i);
    }
  
    return result;
  }  

const ctx = document.getElementById("myChart");

const chartData = {
  labels: generateIncrementingArray(data_count),
  datasets: [{
    label: '# of votes',
    data: [],
    borderwidth: 1
  }]
};

const chartOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  pan: {
    enabled: true,
    mode: 'xy',
    rangeMax: {
        x: 4000
    },
    rangeMin: {
        x: 0
    }
    },
    zoom: {
        enabled: true,
        mode: 'xy',
        rangeMax: {
            x: 20000
        },
        rangeMin: {
            x: 1000
        }
    }
};

const chart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: chartOptions
});

const data = generateRandomArray(data_count, 1, 20); // Generate an array of 6 random numbers between 1 and 20
let dataIndex = 0;

function streamData(timeDelay) {
  setInterval(() => {
    chartData.datasets[0].data.push(data[dataIndex]);
    chart.update();
    dataIndex++;

    if (dataIndex >= data.length) {
      clearInterval();
    }
  }, timeDelay);
}

document.getElementById('resetZoom').addEventListener('click', function () {
	chart.resetZoom();
});

// Call streamData function with a time delay of 0.1 second
streamData(100);



