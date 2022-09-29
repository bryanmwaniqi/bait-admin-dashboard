$(function () {
    // Owl carousel sliders
    // Dashboard features carousel
    $('#features-slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true
    });

    // Mobile view sidemenu toggler
    $('#sideMenuToggler').on('click', function (e) {
        e.stopPropagation();
        $('div#sidebar').toggleClass('active')
        setTimeout(function(){
            $('.overlay').toggleClass('enabled')
        },100);
        
    });

    $(document).on('click', function(e) {
        if (e.target.id != "sideMenuToggler" && e.target.id != "sidebar") {
            $('#sidebar').removeClass("active");
            setTimeout(function(){
                $('.overlay').removeClass('enabled')
            },100);
        }  
    });


    // Show & hide sub-menu on sidemenu item click
    // $('li.account-dropdown').on('click', function () {
    //     $(this).children('.sub-menu').toggleClass('active');
    // });
    
    // $('#main').on('click', function(e) {
    //     if ($('.sub-menu').hasClass('active')) {
    //         $('.sub-menu').removeClass("active");
    //     }  
    // });

    // show scrollbar on hover
    $('#sideMenuToggler').on('click', function () {
        $('').toggleClass('d-none')
    });

    // email list item onclick logic
    $('li.email-item').on('click', function () {
        $('#email-tab').toggleClass('d-none');
        $('#read-email-tab').toggleClass('d-none');
    });

    // read email back-to-email list arrow
    $('#back-to-email').on('click', function () {
        $('#email-tab').toggleClass('d-none');
        $('#read-email-tab').toggleClass('d-none');
    });

    // Regional Sales Traffic distribution toggle logic
    $('#all').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#all-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#europe').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#europe-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#usa').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#usa-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#asia').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#asia-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#africa').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#africa-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#australia').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#australia-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });

    // Toggling product select-dropdown filters
    // $('#category-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#sub-category-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#brand-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#model-select').on('click', function() {
    //     $(this).toggleClass('active')
    // });


    // conversion rate line chart
    const conversionData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
          data: [38, 59, 45, 40, 45, 40, 45],
          fill: false,
          borderColor: '#6630e6',
          hoverBackgroundColor: '#6630e6',
          pointRadius: 4,
          hitRadius: 8,
          hoverRadius: 8,
          tension: 0.1
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
            }
        },
    };

    const conversionChart = new Chart(
        $('#conversionChart'),
        conversionConfig
    );

    // Cart Abandonment Rate Chart
    const cartAbandonmentData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
          data: [45, 40, 45, 40, 45, 59, 38],
          fill: false,
          borderColor: '#6630e6',
          hoverBackgroundColor: '#6630e6',
          pointRadius: 4,
          hitRadius: 8,
          hoverRadius: 8,
          tension: 0.1
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
            }
        },
    };

    const cartAbandonmentChart = new Chart(
        $('#cartAbandonmentChart'),
        cartAbandonmentConfig
    );

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

    // Apex sale distribution radial chart
    var options1 = {
        chart: {
          height: 340,
          type: "radialBar",
        },
        series: [67, 84, 97, 55, 61],
        colors: ["#6630e6", "#4267B2", "#F4B400", "#00cece", "#C13584"],
        plotOptions: {
          radialBar: {
            hollow: {
                margin: 75,
                size: "45%"
            },
            dataLabels: {
                name: {
                    offsetY: -1,
                    show: true,
                    color: "#888",
                    fontSize: "10px"
                },
                value: {
                    color: "#888",
                    fontSize: "20px",
                    show: true
                },
                total: {
                    show: true,
                    label: 'TOTAL'
              }
            }
          }
        },
        stroke: {
            lineCap: "round",
        },
        labels: ['Americas', 'Europe', 'Asia', 'Africa'],
        responsive: [{
            breakpoint: undefined,
            options: {},
        }]
      };
      
    new ApexCharts(document.querySelector("#salesDistroChart"), options1).render();


    // Overall sales line chart
    var lineGradientCtx = document.getElementById('lineGradientChart').getContext('2d');

    var gradient = lineGradientCtx.createLinearGradient(0, 0, 0, 307); 
    gradient.addColorStop(0, 'rgba(93, 57, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');


    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 81, 65, 56, 55, 40, 55, 59, 75, 65, 56],
            backgroundColor: gradient,
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

     // Overall target vs sales bar chart
    const targetData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 81, 65, 56, 40, 55, 60, 65, 75, 55, 43],
            label: 'Actual sales',
            backgroundColor: '#6630e6',
            barThickness: 20,
            borderWidth: 0,
            borderRadius: 50,
            borderSkipped: false
        }, {
            data: [60, 81, 115, 80, 70, 65, 68, 95, 115, 81, 69, 60],
            label: 'Target Sales',
            backgroundColor: '#f4f4f8',
            borderWidth: 0,
            barThickness: 20,
            borderRadius: 50,
            borderSkipped: false
        }]
    };
    const targetConfig = {
        type: 'bar',
        data: targetData,
        options: {
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
                    },
                    stacked: true
                }
            }
        },
    };
    const targetSalesChart = new Chart(
        $('#targetSalesChart'),
        targetConfig
    ); 
      
    $('#sales-map').vectorMap({
        map: 'world_mill',
        backgroundColor: '#f4f4f8'
    });
})
