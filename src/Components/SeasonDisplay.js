import "./SeasonDisplay.css";
import React from "react";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessge";
const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: "sun",
  },
  winter: {
    text: `Burr it's cold!`,
    iconName: "snowflake",
  },
};
class SeasonDisplay extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }
  renderContent() {
    const season = this.getSeason(this.state.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return !this.state.lat && !this.state.errorMessage ? (
      <Loader message="Please allow access to your geolocation to continue" />
    ) : this.state.errorMessage ? (
      <ErrorMessage error={this.state.errorMessage} />
    ) : (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
      </div>
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export { SeasonDisplay };
