import React, { Component } from "react";
import '../currentInfo/getCurrentAddress.css';


class GetCurrentAddress extends Component {
    constructor(props) {
      super(props);
      this.state = {
        add: ''
      };
    }
  
    componentDidMount() {
      navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`;
        fetch(url)
          .then(res => res.json())
          .then(data => this.setState({ add: data.address }));
      });
    }
  
    render() {
      const { add } = this.state;
  
      return (
        <div className="currentInfo">
          <h2>Current Position Info</h2>
          <h4>Street: {add.road}</h4>
          <h4>City: {add.city}</h4>
          <h4>Country: {add.country}</h4>
        </div>
      );
    }
}

export default GetCurrentAddress;