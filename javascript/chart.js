// Get the canvas element
const ctx = document.getElementById('trendChart').getContext('2d');

// Create the chart
const trendChart = new Chart(ctx, {
  type: 'line', // Line chart type
  data: {
    labels: [' ','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], // X-axis labels
    datasets: [
      {
        label: 'Average Sale Price',
        data: [10, 30,  30, 20, 50, 70, 40, 33, 90, 100], // Correct data points for "Average Sale Price"
        borderColor: '#004080', // Line color
         backgroundColor: 'transparent', // Fill under the line
        borderWidth: 2,
        tension: 0.4, // Smooth curves
        fill: true,
        pointRadius: 5,
        // pointRadius: function(context) {
        //     // Hide the point at index 2 (value: 50)
        //     const index = context.dataIndex;
        //     return index === 2 ? 0 : 5;
        //   },
        pointBackgroundColor: '#004080',
      },
      {
        label: 'Number of Sales',
        data: [0, 20, 40, 70, 90, 60, 30, 33, 80, 100], // Correct data points for "Number of Sales"
        borderColor: '#008000', // Line color
        backgroundColor: 'rgba(0, 128, 0, 0.3)', // Fill under the line
        borderWidth: 0,
        tension: 0.5, // Smooth curves
        fill: true,
        pointRadius: 0,
        pointBackgroundColor: '#008000',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Ensures it stretches with the container
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#4a4a4a',
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Light gray grid lines
        },
        ticks: {
            color: '#004080',
            font: {
                size: 12,
            },
        },
    },
    y: {
        grid: {
            color: 'rgba(0, 0, 0, 0.1)', // Light gray grid lines
            display:false
        },
        ticks: {
          color: '#004080',
          font: {
            size: window.innerWidth < 768 ? 8 : 12, // Adjust font size for small screens
          },
          stepSize: 10, // Steps of 10 from 0 to 100
          beginAtZero: true,
        },
      },
    },
    layout: {
      padding: 20,
    },
  },
});
//   ===== 3 time change happen need to undo 2 time