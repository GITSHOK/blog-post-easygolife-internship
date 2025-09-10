import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import '../index.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgvkgvk");
  
  useEffect(() => {
    if (state.succeeded) {
      alert("Your message was sent successfully. Kindly wait for the response. Thank you!");
    }
  }, [state.succeeded]);

  return (
    <div className="contact-page">
      <div className='contact-header'>
        <h1>Get in Touch With Us</h1>
        <p>Feel free to contact us regarding any issue, feedback or review (or just to have a little talk!) We'd love to hear from you and typically respond within 24 hours.</p>
      </div>
      
      <div className="contact-content">
  
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              placeholder="Your full name"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            
            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="Your email address"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Yeah whats' up!"
              rows="5"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            
            <button type="submit" disabled={state.submitting}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;