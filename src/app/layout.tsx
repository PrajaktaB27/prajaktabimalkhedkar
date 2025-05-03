/* eslint-disable @next/next/no-page-custom-font */
import Link from 'next/link';
import '../../styles/globals.scss';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="navbar">
          <Link href="/" className="home">
            Prajakta B.
          </Link>
          <nav className="links">
            <Link href="/about">about</Link>
            <Link href="/blog">archive</Link>
            <Link href="/contact">say hi!</Link>
          </nav>
        </div>
        <div className="layout">
          <div className="header">
            <span className="start">
              Hi! I’m Prajakta, a&nbsp;
              <span className="role">software engineer</span>
              &nbsp;always on the hunt for a <br /> new side quest.
            </span>
            <br />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
