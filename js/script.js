$(function () {
    // Dashboard features carousel
    $('#features-slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true
    });

    // sidemenu text toggler
    // let sideToggler = $('.toggle-input')
    // $('.sidemenu-toggle').on('click', function () {
    //     if (sideToggler.is(':checked')) {
    //         $('#sidebar').toggleClass('menu-verbose')
    //         $('.toggler-nav').toggleClass('active')
    //         setTimeout(() => {
    //             $('.menu-link').toggleClass('d-none')
    //         }, 100);
    //     }
    // });

    // Mobile view sidemenu toggler
    $('#sideMenuToggler').on('click', function () {
        $('div#sidebar').toggleClass('active')
    });

    // show scrollbar on hover
    $('#sideMenuToggler').on('click', function () {
        $('').toggleClass('d-none')
    });

    // Overall sales bar chart
    // const labels = Utils.months({count: 7});
    const data = {
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
    const config = {
        type: 'bar',
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
                        display: false,
                        // drawBorder: false
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
        $('#salesChart'),
        config
    );

    // Instagram bar chart
    const igData = {
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
    const igConfig = {
        type: 'bar',
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
                        display: false,
                        // drawBorder: false
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
    const igChart = new Chart(
        $('#igChart'),
        igConfig
    );

    // facebook bar chart
    const fbData = {
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
    const fbConfig = {
        type: 'bar',
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
                        display: false,
                        // drawBorder: false
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
    const fbChart = new Chart(
        $('#fbChart'),
        fbConfig
    );

    // Youtube bar chart
    const ytData = {
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
    const ytConfig = {
        type: 'bar',
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
                        display: false,
                        // drawBorder: false
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
    const ytChart = new Chart(
        $('#ytChart'),
        ytConfig
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
                        // drawBorder: false
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
})
