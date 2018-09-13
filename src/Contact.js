import React from 'react';
import {
  InfoWindow,
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

/*Contact Page Content*/
const Contact = () => (
  <main>
    <h1>Contact Us</h1>
    <div id="contact-info">
      <ContactForm />
      <Map
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div id="map-container" />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  </main>
);

/*Contact Form*/
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

/*Google Map*/
const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.82048, lng: -1.25199 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 53.82048, lng: -1.25199 }}>
          <InfoWindow>
            <address>
              <span>YourHealth Ltd.</span>
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
