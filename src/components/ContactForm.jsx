import React from 'react';

const ContactForm = () => (

<div className='ui container segment'>
<div className="ui form">
  <div className="field">
    <label>Your Email</label>
    <input type="text" name="email" placeholder="Email Address" />
  </div>
  <div className="field">
    <label>Message</label>
    <textarea placeholder="Message"></textarea>
  </div>
</div>
</div>

)

export default ContactForm;
