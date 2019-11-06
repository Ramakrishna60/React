import React, { Component } from 'react'
import axios from 'axios';
// import chart from './chart';
// import Highcharts from 'highcharts'
import './weather.css';
import { Line, Bar } from 'react-chartjs-2';
class Weather extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    chart: null,
    chartOptions:{},
      dates: [],
      temps: [],
      loading: false,
      errored: false,
      info: null,
      city: '',
      show: '',
    }
    this.getData2 = this.getData2.bind(this)
    this.getData = this.getData.bind(this)
  }
  temp() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.city +
          "&APPID=7fecff555d03787322e5aa20232870c7&units=metric"
      )
      .then(response => {

        console.log(response);
        console.log(response.data.list[0].main.temp)
        // this.state.show = response.data.main.temp;
      });
  }
  componentDidMount(){
    
        axios
          .get(
            "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=7fecff555d03787322e5aa20232870c7"
          )
          .then(response => {
            this.hours = response.data;
          });
      
  }
  getData(e) {
    e.preventDefault();
  this.loading = true;

  if (this.state.chart != null) {
      this.state.chart.destroy();
  }

  axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
          q: this.state.city,
          units: 'imperial',
          appid: '7fecff555d03787322e5aa20232870c7'
      }
  })
  .then(response => {
    console.log(response)
    console.log(response.data.list[0].main.temp)

   var dates = response.data.list.map(list => {
      return list.main.temp
  })
  console.log(dates)

  this.setState({
      chartOptions1:{
          labels: ['sunday', 'monday' ,'tuesday','wednesday','thursday','friday','saturday'],
          datasets:[
              {
                data: dates,
                backgroundColor: 'blue',
                borderColor: 'maroon',
                fill: false,
              }
          ]
      }
  })

  this.temps = response.data.list.map(list => {
      return list.main.temp;
  })
})
  
  
  .catch(error => {
      console.log(error);
      this.errored = true;
  })
  .finally(() => this.loading = false)
}
getData2(e){
    e.preventDefault();
  this.loading = true;

  
  axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      
      params: {
          q: this.state.city,
          units: 'imperial',
          appid: '7fecff555d03787322e5aa20232870c7'
      }
  })
  .then(response => {
        console.log(response)
        console.log(response.data.list[0].main.temp)

       var dates = response.data.list.map(list => {
          return list.main.temp
      })
      console.log(dates)

      this.setState({
          chartOptions:{
              labels: ['sunday', 'monday' ,'tuesday','wednesday','thursday','friday','saturday'],
              datasets:[
                  {
                    data: dates,
                    backgroundColor: 'blue',
                    borderColor: 'maroon',
                    fill: false,
                  }
              ]
          }
      })

      this.temps = response.data.list.map(list => {
          return list.main.temp;
      })
  })
  .catch(error => {
      console.log(error);
      this.errored = true;
  })
  .finally(() => this.loading = false)
}
handleChangeweather = (event) => {
    this.setState({
        city:event.target.value
    })
}
render(){
return(
  
    <div>
        <center>
     <a href="https://icons8.com/icon/49461/partly-cloudy-day"></a>
    <center />
      <h2>WEATHER FORECAST</h2>
    <img src="https://img.icons8.com/nolan/96/000000/partly-cloudy-day.png" />
    <button className="btn btn-success" onClick={() => this.temp()}>Temp</button>
   </center>
    
     <div className="container2">
                <form>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="input-group">
                             <h5> City</h5>  <input type="text" className="form-control" value={this.state.city} onChange={this.handleChangeweather}/>
                                <div className="input-group-append">
                                    <a href="https://icons8.com/icon/43987/clock"></a>
                                    <button onClick={this.getData2}><img src="https://img.icons8.com/nolan/35/000000/clock.png" />Hour</button>
                                    <button onClick={this.getData}><img src="https://img.icons8.com/nolan/35/000000/google-calendar.png" />Day</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
         <Bar data={this.state.chartOptions}  options={{}} width={600} />
         <Line data={this.state.chartOptions1}  options={{}} width={1000} />
            </form>
      </div>
      
      </div>
  
  )
}
}
export default Weather