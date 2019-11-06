import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import './xyStyle.css';

function Dasboard() {
  const options1 = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }
  const options2 = {
    title: {
      text: 'Monthly Average Temperature',
      x: -20 //center
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      x: -20
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: '°C'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'New York',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
      name: 'Berlin',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  }
  const options3={
    chart: {
     type: 'pie'
 },



 title: {
     text: 'Desktop screen readers'
 },

 subtitle: {
     text: 'Click on point to visit official website'
 },

 plotOptions: {
     series: {
         dataLabels: {
             enabled: true,
             connectorColor: Highcharts.getOptions().colors[0],
             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
         },
         point: {
             events: {
                 click: function () {
                     window.location.href = this.website;
                 }
             }
         },
         cursor: 'pointer'
     }
 },

 series: [{
     name: 'Percentage usage',
     borderColor: Highcharts.getOptions().colors[0],
     data: [{
         name: 'JAWS',
         y: 30.2,
         website: 'https://www.freedomscientific.com/Products/Blindness/JAWS',
         color: 'url(#highcharts-default-pattern-0)',
         accessibility: {
             description: 'This is the most used desktop screen reader'
         }
     }, {
         name: 'ZoomText',
         y: 22.2,
         website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader',
         color: 'url(#highcharts-default-pattern-1)'
     }, {
         name: 'Window-Eyes',
         y: 20.7,
         website: 'http://www.gwmicro.com/window-eyes',
         color: 'url(#highcharts-default-pattern-2)'
     }, {
         name: 'NVDA',
         y: 14.6,
         website: 'https://www.nvaccess.org',
         color: 'url(#highcharts-default-pattern-4)'
     }, {
         name: 'VoiceOver',
         y: 7.6,
         website: 'http://www.apple.com/accessibility/osx/voiceover',
         color: 'url(#highcharts-default-pattern-3)'
     }, {
         name: 'System Access To Go',
         y: 1.5,
         website: 'https://www.satogo.com',
         color: 'url(#highcharts-default-pattern-7)'
     }, {
         name: 'ChromeVox',
         y: 0.3,
         website: 'http://www.chromevox.com',
         color: 'url(#highcharts-default-pattern-6)'
     }, {
         name: 'Other',
         y: 2.9,
         website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php',
         color: 'url(#highcharts-default-pattern-5)'
     }]
 }]


  }
  const options4= {
    chart: {
type: 'area',
inverted: true
},
title: {
text: 'Average fruit consumption during one week'
},
subtitle: {
style: {
  position: 'absolute',
  right: '0px',
  bottom: '10px'
}
},
legend: {
layout: 'vertical',
align: 'right',
verticalAlign: 'top',
x: -150,
y: 100,
floating: true,
borderWidth: 1,
backgroundColor:
  Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
},
xAxis: {
categories: [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]
},
yAxis: {
title: {
  text: 'Number of units'
},
allowDecimals: false,
min: 0
},
plotOptions: {
area: {
  fillOpacity: 0.5
}
},
series: [{
name: 'John',
data: [3, 4, 3, 5, 4, 10, 12]
}, {
name: 'Jane',
data: [1, 3, 4, 3, 3, 5, 4]
}]
    // series: [
    //   {
    //     data: [1, 2, 3] // sample data
    //   }
    // ]
  }
  const options5={   
       
    chart: {
      type: "line"
    },
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie"
    },
    title: {
      text: "Browser market shares in January, 2018"
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %"
        }
      }
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 61.41,
            sliced: true,
            selected: true
          },
          {
            name: "Internet Explorer",
            y: 11.84
          },
          {
            name: "Firefox",
            y: 10.85
          },
          {
            name: "Edge",
            y: 4.67
          },
          {
            name: "Safari",
            y: 4.18
          },
          {
            name: "Sogou Explorer",
            y: 1.64
          },
          {
            name: "Opera",
            y: 1.6
          },
          {
            name: "QQ",
            y: 1.2
          },
          {
            name: "Other",
            y: 2.61
          }
        ]
      }
    ]

  }
  return (

    <div>
      <nav className="navbar">
        <form className="form-inline">
          <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Dashboard</a>
            <router-link to="/Weather" button id="button-style" class="btn btn-success" type="button">Weather</router-link>
            {/* <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> --> */}
            <ul className="navbar-nav px-3">
              <li className="nav-item text-nowrap">
                <a className="nav-link" href="#">Sign out</a>
              </li>
            </ul>
          </nav>
        </form>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <a href="https://icons8.com/icon/43609/dashboard">Dashboard </a>
          <nav className="col-md-2 d-none d-md-block bg-light sidebar" id="sid">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Sigin">
                    <span data-feather="file"></span>
                    <img src="https://img.icons8.com/nolan/100/000000/sign-up.png" />
                    Sigin
                </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="Logn">
                    <span data-feather="file"></span>
                    <img src="https://img.icons8.com/nolan/100/000000/login-rounded-right.png" />
                    Logn
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="https://img.icons8.com/nolan/100/000000/dashboard.png" /> Dashboard <span data-feather="file-text"></span>


                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Weathers">
                    <span data-feather="file-text"></span>
                    <img src="https://img.icons8.com/nolan/100/000000/partly-cloudy-day.png" />
                    Weathers
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Weather">
                    <span data-feather="file-text"></span>
                    <img src="https://img.icons8.com/nolan/100/000000/clock.png" />
                    Day/Hour
                </a>
                </li>

              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span></span>

              </h6>
              <ul className="nav flex-column mb-2">


              </ul>
            </div>
          </nav>
    </div>
        </div>


        {/* <div className="sidenav">
          <div className="col"><HighchartsReact
            highcharts={Highcharts}
            options={options1}
          /></div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options1}
          /> */}

        {/* </div> */}
        {/* <div className="container">
          <div className="row 1">
            <div className="col-lg-4">
              <HighchartsReact
                highcharts={Highcharts}
                options={options2}
              />
            </div>

            <div className="col-lg-4">
              <HighchartsReact
                highcharts={Highcharts}
                options={options1}
              />
            </div>
            <div className="col-lg-4">
              <HighchartsReact
                highcharts={Highcharts}
                options={options1}
              />
            </div>
            <div className="w-100">

              <div className="col"><HighchartsReact
                highcharts={Highcharts}
                options={options1}
              /></div>

              <div className="col"> <HighchartsReact
                highcharts={Highcharts}
                options={options1}
              /></div>

            </div>
          </div>
        </div>
      </div> */}

      <div className="container1"> 
          <div className="row">
              <div className="col-lg-4">
              <HighchartsReact
            highcharts={Highcharts}
            options={options1} />
              </div>
              <div className="col-lg-4">
              <HighchartsReact
            highcharts={Highcharts}
            options={options2} />
              </div>
              <div className="col-lg-4">
              <HighchartsReact
            highcharts={Highcharts}
            options={options3} />
              </div>
          </div>
          <div className="row">
              <div className="col-lg-6">
              <HighchartsReact
            highcharts={Highcharts}
            options={options4} />
              </div>
              <div className="col-lg-6">
              <HighchartsReact
            highcharts={Highcharts}
            options={options5} />
              </div>
          </div>
      </div>
      </div>



  );
}

export default Dasboard



