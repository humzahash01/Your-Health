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



export default Contact;
