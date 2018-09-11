import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <main>
        <h1>Contact Us</h1>
        <ContactForm />
        <address>
          YourHealth Ltd.<br />
          Common Rd,<br />
          Tadcaster<br />
          LS24 9UN,<br />
          UK<br />
        </address>
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
    <textarea id="message" name="message"></textarea>
  </div>
  <div id="button">
    {/*preventDefault() called to stop form from submitting*/}
    <button type="submit" onClick={e => e.preventDefault()}>
      Send
    </button>
  </div>
</form>
)

export default Contact;
