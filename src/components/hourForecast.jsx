import React, { useEffect, useState } from 'react';
import Card from './card';
import "../styles/hourForecast.css";

let date = new Date();
let time = date.getHours();
const HourForecast = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newCards = [];
    let count = 0;
    for (let i = new Date().getHours(); i <= 24 && count < 24; i++) {
      if (count === 24) {
        break;
      }
      if (i < 24) {
        newCards.push(<Card key={count} number={i} hour={props.hour} hourNextDay={props.hourNextDay} day={0} />);
        count++;
      } else {
        for (let j = 0; j < 24; j++) {
          if (count === 24) {
            break;
          }
          newCards.push(<Card key={count} number={j} hour={props.hour} hourNextDay={props.hourNextDay} day={1} />);
          count++;
        }

      }

    }
    setCards(newCards);
  }, [props.hour, props.hourNextDay]);

  return (
    <div>
      <p className='hourForecast-paragraph'>Forecast</p>
      <div id='hourForecast'>{cards}</div>
    </div>
  );
}

export default HourForecast;