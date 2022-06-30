import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState(
    { name: '', email: '', message: '' }
    );
  
  const { name, email, message } = formState;
  
  // setFormState updates the formState value for key property, assigned with e.target.value
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
     
      if(!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }

    setFormState({ ...formState, [e.target.name]: e.target.value });

    // console.log('errorMessage', errorMessage);

    // formState will only change if all form data has passed validations (no error message)
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section>
      <h1 data-testid='h1tag'>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
        </div>
        {/* this will only render if form data is invalid (errorMessage exists) / && used as short circuit */}
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button data-testid='button' type='submit'>Submit</button>
      </form>
    </section>
  )
};

export default ContactForm;