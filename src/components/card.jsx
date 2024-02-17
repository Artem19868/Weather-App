import React from "react";
import "../styles/hourForecast.css";

let date = new Date();
let hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let time = date.getHours();
export class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let month = Number(date.getMonth()) < 9 ? "0" + date.getMonth() : date.getMonth();
    let day = Number(date.getDate()) < 9 ? "0" + date.getDate() : date.getDate();
    if (this.props.day === 1) {
      if(day < 31){
        day++;
      }else if(day === 31){
        day = 1;
        month++;
      }else if(day === 31 && month === 12){
        day = 1;
        month = 1;
      }
      return (
        <div className="card">
          <div>{month}.{day}</div>
          <p>{hours[this.props.number]}</p>
          <div className="card-info">
          <img src={this.props.hourNextDay?.[this.props.number]?.condition?.icon} alt="Weather icon"/><br />
          <p>{this.props.hourNextDay?.[this.props.number]?.temp_c}°C</p>
          </div>
        </div>);
    }
    return (
      <div className="card">
        <div>{month}.{day}</div>
        <p>{hours[this.props.number]}</p>
        <div className="card-info">
        <img src={this.props.hour?.[this.props.number]?.condition?.icon} alt="Weather icon"/><br />
        <p>{this.props.hour?.[this.props.number]?.temp_c}°C</p>
        </div>
      </div>);
  }
}
export default Card;