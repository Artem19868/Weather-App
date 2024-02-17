import React from 'react';
import Forecast from './components/forecast.jsx';
import Header from './components/header.jsx';
import Search from './components/search.jsx';
import HourForecast from './components/hourForecast.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      rLatitude: 0,
      rLongitude: 0,
      hour: null,
      hourNextDay: null,
      cityInput: ''
    }
  }

  searchCity = () => {
    let input = document.getElementById("cityInput");
    if (input) {
      this.setState({ cityInput: input.value.trim() });
      this.Request(this.state.cityInput);
    }
  }

  Request = (q) => {
    const baseUrl = 'http://api.weatherapi.com/v1/forecast.json';
    const apiKey = '4c8030ceac034bc5b58150255231212';
    const completeUrl = `${baseUrl}?key=${apiKey}&q=${q}&days=2&aqi=no&alerts=no`;

    fetch(completeUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data }, () => {
          // Проверяем, что data не равно null перед деструктуризацией
          if (this.state.data && this.state.data.forecast && this.state.data.forecast.forecastday) {
            let { forecast } = this.state.data;
            let { forecastday } = forecast;
            let hour = forecastday[0].hour;
            let hourNextDay = forecastday[1].hour;
            this.setState({hour,hourNextDay})
          }
        });
      })
      .catch((error) => {
        console.error('Error fetching forecast data:', error);
      });
  };
  
  componentDidMount() {
    this.getMyLocation();
  }

  render() {
    return (
      <div>
        <Header />
        <Search onSearch={this.searchCity} />
        <Forecast data={this.state.data} />
        <HourForecast hour = {this.state.hour} hourNextDay = {this.state.hourNextDay} />
      </div>
    );
  }
  getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocation)
    }
  }
  getLocation = (position) => {
    if (position && position.coords) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const rLatitude = latitude.toFixed(4);
      const rLongitude = longitude.toFixed(4);
      this.setState({ rLatitude: rLatitude, rLongitude: rLongitude }, () => {
        if (this.state.rLatitude && this.state.rLongitude !== 0) {
          this.Request(`${this.state.rLatitude},${this.state.rLongitude}`);
        }
      });
    }
  }
}

export default App;