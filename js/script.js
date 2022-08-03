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

    // $('#clients-carousel').owlCarousel({
    //     items: 1,
    //     margin: 3,
    //     center: true,
    //     dots: true
    // });

    // Mobile view sidemenu toggler
    $('#sideMenuToggler').on('click', function (e) {
        e.stopPropagation();
        $('div#sidebar').toggleClass('active')
        // $('div.shadow-overlay').toggleClass('active');
    });

    $(document).on('click', function(e) {
        if (e.target.id != "sideMenuToggler" && e.target.id != "sidebar") {
            $('#sidebar').removeClass("active");
        }  
    });


    // Show & hide sub-menu on sidemenu item click
    $('li.account-dropdown').on('click', function () {
        $(this).children('.sub-menu').toggleClass('active');
    });
    
    $('#main').on('click', function(e) {
        if ($('.sub-menu').hasClass('active')) {
            $('.sub-menu').removeClass("active");
        }  
    });

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
    $('#category-select').on('click', function() {
        // if ($(this).siblings.hasClass('active')) {
            
        // }
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    $('#sub-category-select').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    $('#brand-select').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
    $('#model-select').on('click', function() {
        $(this).toggleClass('active')
    });

    // sales vs expenses v profits chart
    const salesComparisonData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'],
        datasets: [{
            data: [65, 59, 71, 65, 56, 55, 72],
            label: 'Sales',
            backgroundColor: '#5d39ff',
            borderWidth: 0,
            borderRadius: 50,
            borderSkipped: true
        }, {
            data: [55, 45, 40, 50, 41, 35, 55],
            label: 'Expenses',
            backgroundColor: '#dcdce9',
            borderWidth: 0,
            borderRadius: 50,
            borderSkipped: true
        }, {
            data: [60, 51, 65, 60, 45, 45, 66],
            label: 'Profit',
            backgroundColor: 'rgb(0, 206, 206)',
            borderWidth: 0,
            borderRadius: 50,
            borderSkipped: true
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

    // Traffic breakdown stacked bar chart

    const stackedBarData = {
        labels: ['Organic', 'Instagram', 'Google', 'Facebook', 'youtube'],
        datasets: [{
            data: [45, 59, 75, 26, 56],
            backgroundColor: [
                '#5d39ff',
                '#C13584',
                '#F4B400',
                '#4267B2',
                '#FF0000'
            ],
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 14,
            borderSkipped: false
        },{
            data: [100, 100, 100, 100, 100],
            backgroundColor: '#f4f4f8',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 16,
            borderSkipped: false
        }]
    };

    const stackedBarConfig = {
        type: 'bar',
        data: stackedBarData,
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
                    },
                    stacked: true
                }
            }
        },
    };
    const stackedBarChart = new Chart(
        $('#stackedBarChart'),
        stackedBarConfig
    );

     // All regions traffic doughnut chart
     const allRegionsData = {
        datasets: [{
            label: 'My First Dataset',
            data: [200, 50, 100, 80, 90],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const allRegionsConfig = {
        type: 'doughnut',
        data: allRegionsData,
        options:{
            cutout: 55
        },
    };
    
    const allRegionsChart = new Chart(
        $('#allRegionsChart'),
        allRegionsConfig
    );

    // Overall sales line chart
    // const labels = Utils.months({count: 7});
    var salesCtx = document.getElementById('salesChart').getContext('2d');
    
    var gradient = salesCtx.createLinearGradient(0, 0, 0, 307); 
    gradient.addColorStop(0, 'rgba(93, 57, 255, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');


    const data = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 81, 65, 56, 55, 40, 55, 59, 75, 65, 56],
            backgroundColor: gradient,
            hoverBackgroundColor: '#ff0077',
            fill: true,
            borderColor: '#5d39ff',
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

    const salesChart = new Chart(
        salesCtx,
        config
    );

    // Overall sales bar chart
    // const labels = Utils.months({count: 7});
    const salesBarData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 75, 65, 56, 55, 40, 55, 59, 70, 65, 56],
            backgroundColor: '#5d39ff',
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
            backgroundColor: '#5d39ff',
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
            backgroundColor: '#5d39ff',
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
            backgroundColor: '#5d39ff',
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

    // best sellers horizontal bar chart
    const bestSellersData = {
        labels: ['electronics', 'cosmetics', 'fashion', 'food & drinks', 'art crafts', 'medical & health'],
        datasets: [{
            data: [75, 65, 59, 56, 50, 45],
            backgroundColor: '#5d39ff',
            hoverBackgroundColor: '#ff0077',
            borderWidth: 0,
            borderRadius: 50,
            barThickness: 11,
            borderSkipped: false,
            base:0.5
        }]
    };
    const bestSellersConfig = {
        type: 'bar',
        data: bestSellersData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            indexAxis: 'y',
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
    const bestSellersChart = new Chart(
        $('#bestSellersChart'),
        bestSellersConfig
    );

     // Overall target vs sales bar chart
    const targetData = {
        labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
        datasets: [{
            data: [45, 59, 81, 65, 56, 40, 55, 60, 65, 75, 55, 43],
            label: 'Actual sales',
            backgroundColor: '#5d39ff',
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

    // Traffic Doughnut charts
   

    // const regionsChart = new Chart(
    //     $('#regionsChart'),
    //     allRegionsConfig
    // );

    // europe region traffic doughnut chart
    const europeRegionData = {
        datasets: [{
            label: 'My First Dataset',
            data: [ 50, 200, 80, 90, 100],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const europeRegionConfig = {
        type: 'doughnut',
        data: europeRegionData,
        options:{
            cutout: 55
        },
    };
    
    const europeRegionChart = new Chart(
        $('#europeRegionChart'),
        europeRegionConfig
    );

    // usa region traffic doughnut chart
    const usaRegionData = {
        datasets: [{
            label: 'My First Dataset',
            data: [ 90, 80, 100, 200, 50],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const usaRegionConfig = {
        type: 'doughnut',
        data: usaRegionData,
        options:{
            cutout: 55
        },
    };
    
    const usaRegionChart = new Chart(
        $('#usaRegionChart'),
        usaRegionConfig
    );

    // asia region traffic doughnut chart
    const asiaRegionData = {
        datasets: [{
            label: 'My First Dataset',
            data: [ 50, 80, 90, 100, 200],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const asiaRegionConfig = {
        type: 'doughnut',
        data: asiaRegionData,
        options:{
            cutout: 55
        },
    };
    
    const asiaRegionChart = new Chart(
        $('#asiaRegionChart'),
        asiaRegionConfig
    );

    // africa region traffic doughnut chart
    const africaRegionData = {
        datasets: [{
            label: 'My First Dataset',
            data: [ 80, 50, 200, 80, 90],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const africaRegionConfig = {
        type: 'doughnut',
        data: africaRegionData,
        options:{
            cutout: 55
        },
    };
    
    const africaRegionChart = new Chart(
        $('#africaRegionChart'),
        africaRegionConfig
    );

    // australia region traffic doughnut chart
    const australiaRegionData = {
        datasets: [{
            label: 'My First Dataset',
            data: [ 100, 80, 90, 200, 50],
            backgroundColor: [
                '#5d39ff',
                '#4267B2',
                '#F4B400',
                '#C13584',
                '#FF0000'
            ],
            hoverOffset: 4
        }]
    };
    const australiaRegionConfig = {
        type: 'doughnut',
        data: australiaRegionData,
        options:{
            cutout: 55
        },
    };
    
    const australiaRegionChart = new Chart(
        $('#australiaRegionChart'),
        australiaRegionConfig
    );

})
