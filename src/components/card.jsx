import React from "react";
import "../styles/hourForecast.css";

let date = new Date();
let hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
let count = 0;
let time = date.getHours();
export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    }
    this.cardRender = this.cardRender.bind(this);
  }
  componentDidMount() {
    if (this.props.data) {
       this.cardRender();
    }
  }
  
  getTime() {
    const last_updated = this.props.data?.current?.last_updated;
    if (last_updated) {
      const dateTime = last_updated.split(" ");
      if (dateTime[0] && dateTime[1]) {
        const hoursAndMinutes = dateTime[1].split(":");
        return `${dateTime[1]} ${hoursAndMinutes[0]}:00`;
      }
    }
    return 0;
  }
  cardRender() {
    if (this.props.data) {
      for (let i = 0; i < 24; i++) {
        return (
          <div id="card">
            <div>{Number(date.getMonth() + 1)}.{date.getDate()}</div>
            <div>
              <img src={this.props.hour?.[time]?.condition?.icon} alt="Weather icon"/><br />
              <p>{this.props.hour?.[time]?.temp_c}</p>
            </div>
          </div>
        );
      }
    }
  }

  // cardRender(){
  //   let cards = [];
  //   for (let i = time; i <= 24; i++) {
  //     if(count === 24){
  //       break;
  //     }
  //       count++;
  //       cards.push(this.render(i));
  //       for (let j = i; j <= 24; j++) {
  //         if(j === 24){
  //           for(let k = 0; k < 24; k++){
  //             if(count === 24){
  //               break;
  //             }

  //           }
  //         }
  //         cards.push(this.render(j + 1));
  //         if(count === 24){
  //           break;
  //         }
  //         count++
  //       }
  //     }   
  //       return cards;
  //   }
    

  
  render() {
    let month = Number(date.getMonth()) < 9 ? "0" + date.getMonth() : date.getMonth();
    let day = Number(date.getDate()) < 9 ? "0" + date.getDate() : date.getDate();
    let time = date.getHours();
    if (this.props.day == 1) {
      if(day < 31){
        day++;
      }else if(day == 31){
        day = 1;
        month++;
      }else if(day == 31 && month == 12){
        day = 1;
        month = 1;
      }
      return (
        <div className="card">
          <div>{month}.{day}</div>
          <div>
          <img src={this.props.hourNextDay?.[this.props.number]?.condition?.icon} alt="Weather icon"/><br />
          <p>{this.props.hourNextDay?.[this.props.number]?.temp_c}°C</p>
          </div>
        </div>);
    }
    return (
      <div className="card">
        <div>{month}.{day}</div>
        <div>
        <img src={this.props.hour?.[this.props.number]?.condition?.icon} alt="Weather icon"/><br />
        <p>{this.props.hour?.[this.props.number]?.temp_c}°C</p>
        </div>
      </div>);
  }
}
export default Card;