import React from 'react';
import '../styles/forecast.css'

let date = new Date();
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let Months = ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December'];
let day = date.getDate();
let dayOfWeek = daysOfWeek[date.getDay()];
let Month = Months[date.getMonth()];

class Forecast extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    console.log(this.props.data);
    return(<div id='forecast'>
      <div className='location'>{this.props.data?.location?.name}, {this.props.data?.location?.country}</div>
      <div className='date'>{dayOfWeek} {day} {Month}</div>
      <div className='overlay'>
        <div>{this.props.data?.forecast?.forecastday?.[0]?.day?.maxtemp_c}°C <br/>Hight</div>
        <div>{this.props.data?.current?.wind_kph}kph <br/> Wind</div>
        <div>{this.props.data?.forecast?.forecastday?.[0]?.astro?.sunrise} <br/> Sunrise</div> <br/>
        <div>{this.props.data?.forecast?.forecastday?.[0]?.day?.mintemp_c}°C <br/>Low</div>
        <div>{this.props.data?.current?.humidity}% <br/> Humidity</div>
        <div>{this.props.data?.forecast?.forecastday?.[0]?.astro?.sunset} <br/>Sunset</div>
      </div>
      <div className='information'>
        <img src={this.props.data?.current?.condition?.icon} alt='Weather Icon' className='weather-icon'/>
        <div className='weather-info'>
          <div className='temp'>{this.props.data?.current?.temp_c}°C</div><br/> {this.props.data?.current?.condition?.text}</div>
      </div>
      
    </div>);
  }
}
export default Forecast;