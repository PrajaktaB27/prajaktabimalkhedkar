import Image from 'next/image';
import './home.scss';

export default function Home() {
  return (
    <main>
      <div>
        <div className="container">
          <div className="info">
            <p className="about-p1">
              Currently its trying my hand at Next.js with this website and
              learning the foundations of ML/AI into it, tomorrow I could just
              be hyperfixating on making a list of the very best fanfics on ao3
              (just kidding, that will never ever see the light of day)
              <br />
              Find me on <span className="github">github icon here</span>,{' '}
              <span className="linkedin"> linkedin icon here </span>, and look
              away if its anywhere else pls and ty!!
            </p>
            <div className="about-p2">
              <p>Writing</p>
              <ul className="list">
                <li>Typescript</li>
                <li>Angular with NgRx for state management</li>
                <li>Python</li>
                <li>Golang</li>
                <li>Javascript ES6+</li>
              </ul>
            </div>

            <div className="about-p3">
              <p>Projects</p>
              <ul className="list">
                <li>Typescript</li>
                <li>Angular with NgRx for state management</li>
                <li>Python</li>
                <li>Golang</li>
                <li>Javascript ES6+</li>
              </ul>
            </div>
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
      </div>
    </main>
  );
}
