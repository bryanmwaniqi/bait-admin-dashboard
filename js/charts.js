$(function () {

    // sales vs expenses v profits chart
    const salesComparisonData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
            data: [65, 59, 71, 65, 56, 55, 72],
            label: 'Sales',
            backgroundColor: '#6630e6',
            borderWidth: 0,
            borderRadius: 50
        }, {
            data: [55, 45, 40, 50, 41, 35, 55],
            label: 'Expenses',
            backgroundColor: '#dcdce9',
            borderWidth: 0,
            borderRadius: 50
        }, {
            data: [60, 51, 65, 60, 45, 45, 66],
            label: 'Profit',
            backgroundColor: 'rgb(0, 206, 206)',
            borderWidth: 0,
            borderRadius: 50
        }]
    };
    const salesComparisonConfig = {
        type: 'bar',
        data: salesComparisonData,
        options: {
            categoryPercentage: 0.3,
            barPercentage: 0.6,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    barValueSpacing: 20,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
    const salesComparisonChart = new Chart(
        $('#salesComparisonChart'),
        salesComparisonConfig
    );

    // Overall sales bar chart
    const salesBarData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 75, 65, 56, 55, 40, 55, 59, 70, 65, 56],
            backgroundColor: '#6630e6',
            hoverBackgroundColor: '#ff0077',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 6,
            borderSkipped: false
        }]
    };
    const salesBarConfig = {
        type: 'bar',
        data: salesBarData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
    const salesBarChart = new Chart(
        $('#salesBarChart'),
        salesBarConfig
    );

    // Orders bar chart
    const ordersData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 75, 65, 56, 55, 40, 55, 59, 70, 65, 56],
            backgroundColor: '#6630e6',
            hoverBackgroundColor: '#ff0077',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 6,
            borderSkipped: false
        }]
    };
    const ordersConfig = {
        type: 'bar',
        data: ordersData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
    const ordersChart = new Chart(
        $('#ordersChart'),
        ordersConfig
    );

    // Invoices bar chart
    const invoicesData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 75, 65, 56, 55, 40, 55, 59, 70, 65, 56],
            backgroundColor: '#6630e6',
            hoverBackgroundColor: '#ff0077',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 6,
            borderSkipped: false
        }]
    };
    const invoicesConfig = {
        type: 'bar',
        data: invoicesData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
    const invoicesChart = new Chart(
        $('#invoicesChart'),
        invoicesConfig
    );

    // Returns bar chart
    const returnsData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 75, 65, 56, 55, 40, 55, 59, 70, 65, 56],
            backgroundColor: '#6630e6',
            hoverBackgroundColor: '#ff0077',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 6,
            borderSkipped: false
        }]
    };
    const returnsConfig = {
        type: 'bar',
        data: returnsData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
    const returnsChart = new Chart(
        $('#returnsChart'),
        returnsConfig
    );

    // Apex best sellers radial chart
    var options1 = {
        chart: {
          height: 280,
          type: "radialBar",
        },
        series: [67, 84, 97, 55],
        colors: ["#6630e6",  "#00cece", "#F4B400", "#ff0077"],
        plotOptions: {
          radialBar: {
            hollow: {
                margin: 35,
                size: "55%"
            },
            dataLabels: {
                name: {
                    offsetY: -1,
                    show: true,
                    color: "#000",
                    fontSize: "25px"
                },
                value: {
                    color: "#888",
                    fontSize: "15px",
                    show: true
                },
                total: {
                    color: "#000",
                    fontSize: "20px",
                    show: true,
                    label: 'Total'
              }
            }
          }
        },
        stroke: {
            lineCap: "round",
        },
        labels: ['Fashion', 'Cosmetics', 'Electronics', 'Food & Drinks'],
        responsive: [{
            breakpoint: undefined,
            options: {},
        }]
      };
      
    new ApexCharts(document.querySelector("#bestSellersChart"), options1).render();

    // Overall sales line chart
    var lineGradientCtx = document.getElementById('lineGradientChart').getContext('2d');

    var gradient2 = lineGradientCtx.createLinearGradient(0, 0, 0, 307); 
    gradient2.addColorStop(0, 'rgba(93, 57, 255, 0.55)');
    gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)');


    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 81, 65, 56, 55, 40, 55, 59, 75, 65, 56],
            backgroundColor: gradient2,
            hoverBackgroundColor: '#ff0077',
            fill: true,
            borderColor: '#6630e6',
            tension: 0.3,
            hitRadius: 15,
            pointRadius: 0,
            borderWidth: 4,
            pointBorderWidth: 0,
            borderJoinStyle: 'round',
            hoverRadius: 12,
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };
 
    const lineGradientChart = new Chart(
        lineGradientCtx,
        config
    );

    // conversion rate line chart
    var conversionGradientCtx = document.getElementById('conversionChart').getContext('2d');

    var conversionGradient = conversionGradientCtx.createLinearGradient(0, 0, 0, 307); 
    conversionGradient.addColorStop(0, 'rgba(93, 57, 255, 0.65)');
    conversionGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    const conversionData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
          data: [25, 89, 50, 30, 55, 30, 45],
          backgroundColor: conversionGradient,
          fill: true,
          tension: 0.3,
          borderColor: '#6630e6',
          hoverBackgroundColor: '#6630e6',
          pointRadius: 0,
          hitRadius: 8,
          hoverRadius: 8,
        }]
    };

    const conversionConfig = {
        type: 'line',
        data: conversionData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y:{
                    grid: {
                        drawBorder: false
                    },
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false,
                        stepSize: 50,
                        max: 100
                    }
                },
                x:{
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                }
            }
        },
    };

    const conversionChart = new Chart(
        conversionGradientCtx,
        conversionConfig
    );

    // Cart Abandonment Rate Chart
    var abandonmentGradientCtx = document.getElementById('cartAbandonmentChart').getContext('2d');

    var abandonmentGradient = abandonmentGradientCtx.createLinearGradient(0, 0, 0, 307); 
    abandonmentGradient.addColorStop(0, 'rgba(93, 57, 255, 0.65)');
    abandonmentGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    const cartAbandonmentData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
          data: [45, 30, 55, 30, 55, 89, 25],
          backgroundColor: abandonmentGradient,
          fill: true,
          borderColor: '#6630e6',
          tension: 0.3,
          hoverBackgroundColor: '#6630e6',
          pointRadius: 0,
          hitRadius: 8,
          hoverRadius: 8,
        }]
    };

    const cartAbandonmentConfig = {
        type: 'line',
        data: cartAbandonmentData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y:{
                    grid: {
                        drawBorder: false
                    },
                    beginAtZero: true,
                    ticks: {
                        autoSkip: false,
                        stepSize: 50,
                        max: 100
                    }
                },
                x:{
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        },
    };

    const cartAbandonmentChart = new Chart(
        abandonmentGradientCtx,
        cartAbandonmentConfig
    );

    // sales v target comparison chart
    // const targetComparisonData = {
    //     labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
    //     datasets: [{
    //         data: [65, 59, 71, 65, 56, 55, 72],
    //         fill: true,
    //         tension: 0.3,
    //         label: 'Target',
    //         backgroundColor: '#6630e6'
    //     }, {
    //         data: [55, 45, 40, 50, 41, 35, 55],
    //         label: 'Sales',
    //         fill: true,
    //         tension: 0.3,
    //         backgroundColor: '#dcdce9'
    //     }]
    // };

    // const targetComparisonConfig = {
    //     type: 'line',
    //     data: targetComparisonData,
    //     options: {
    //         plugins: {
    //             legend: {
    //                 display: false
    //             }
    //         },
    //         scales: {
    //             y:{
    //                 grid: {
    //                     drawBorder: false
    //                 },
    //                 beginAtZero: true,
    //                 ticks: {
    //                     autoSkip: false
    //                 }
    //             },
    //             x:{
    //                 grid: {
    //                     display: false,
    //                     drawBorder: false
    //                 }
    //             }
    //         }
    //     },
    // };

    // const targetComparisonChart = new Chart(
    //     $('#targetComparisonChart'),
    //     targetComparisonConfig
    // );

})