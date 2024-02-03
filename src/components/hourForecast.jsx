import React from 'react';
import "../styles/hourForecast.css"

let date = new Date();

let hours = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];

class HourForecast extends React.Component{
  constructor(props){
    super(props)
  }
  getTime(){
    let last_updated = this.props.data?.current?.last_updated;
    if(last_updated){
      let dateTime;
      let stringArr = last_updated.split(" ");
      let date = stringArr[0];
      let time = stringArr[1].split(":");
      time[1] = ":00";
      dateTime = date + " " + time[0] + time[1];
      console.log(dateTime);
      return dateTime;
    }
    
  }
  render(){
    let time= this.getTime();
    let card
    let month = Number(date.getMonth()) < 9? "0" + date.getMonth() : date.getMonth();
    let day = Number(date.getDate()) < 9 ? "0" + date.getDate() : date.getDate();
    for(let i = 0; i < 24; i++){
      if(time === this.props.data?.forecast?.forecastday?.[0]?.hour?.[i].time){
        return(<div id='hourForecast'>
          <p>Forecast</p>
          <div>{month}.{day}</div>
        </div>);
      }
    }
    
  }
}
export default HourForecast;