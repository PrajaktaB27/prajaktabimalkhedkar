const Contact = () => {
    return (
      <div>
        <h1>Contact Me</h1>
        <form action="mailto:your-email@example.com" method="post" encType="text/plain">
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  