import React, { Component } from 'react';
import {
  InfoWindow,
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

class Contact extends Component {
  render() {
    return (
      <main>
        <h1>Contact Us</h1>
        <div id="contact-info">
          <ContactForm />
          <Map
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `calc(100vh - 220px)`, width: `50%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </main>
    );
  }
}

const ContactForm = () => (
  <form>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="message" />
    </div>
    <div id="button">
      {/*preventDefault() called to stop form from submitting*/}
      <button type="submit" onClick={e => e.preventDefault()}>
        Send
      </button>
    </div>
  </form>
);

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 53.82048, lng: -1.25199 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 53.82048, lng: -1.25199 }}>
          <InfoWindow>
            <address>
              YourHealth Ltd.
              <br />
              Common Rd,
              <br />
              Tadcaster
              <br />
              LS24 9UN,
              <br />
              UK
              <br />
            </address>
          </InfoWindow>
        </Marker>
      )}
    </GoogleMap>
  ))
);

export default Contact;
