import '../../../styles/globals.scss';

export default function About() {
  return (
    <div>
      <p className="about-p1">
        I work as a frontend developer at{' '}
        <span className="highlight">American Tire Distributors.</span>{' '}
        Previously, I completed my Master&apos;s degree in Computer Science with
        a specialization in Software Engineering at{' '}
        <span className="highlight">Seattle University.</span>
      </p>
      <div className="about-p2">
        <p>Here are some technologies I have been working with:</p>
        <ul className="list">
          <li>Typescript</li>
          <li>Angular with NgRx for state management</li>
          <li>Python</li>
          <li>Golang</li>
          <li>Javascript ES6+</li>
        </ul>
      </div>
      <p className="about-p3">Check out my resume.</p>

      <p className="about-p4">
        Outside of work, I cycle through interests. Currently I&apos;m learning
        how to make my own robot. What is it going to do, you ask? Be cute and
        exist :) I also read a lot of books and then read more stories other
        people write about said books because I can&apos;t let go of that
        universe yet...
      </p>
    </div>
  );
}
