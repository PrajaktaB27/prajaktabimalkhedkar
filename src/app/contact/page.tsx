import Image from 'next/image';
import './contact.scss';

const Contact = () => {
  return (
    <div className="container">
      <div className="info">
        <p className="about-p1">
          I work as a frontend developer at{' '}
          <span className="highlight">American Tire Distributors.</span>{' '}
          Previously, I completed my Master&apos;s degree in Computer Science
          with a specialization in Software Engineering at{' '}
          <span className="highlight">Seattle University.</span>
        </p>
        <p className="about-p2">Check out my resume.</p>
        <p className="about-p3">
          I am open to considering new opportunities as a software engineer -
          Frontend / Backend / Full Stack, in USA.
        </p>

        <p className="about-p4">
          Connect with me on LinkedIn, or send me an Email if you’re hiring,
          want to talk about my posts or even to discuss books and chat!
        </p>
      </div>
      <div className="img">
        {' '}
        <Image
          src="/assets/vector.svg"
          alt="Vector graphic"
          width={289}
          height={226}
        />
      </div>
    </div>
  );
};

export default Contact;
