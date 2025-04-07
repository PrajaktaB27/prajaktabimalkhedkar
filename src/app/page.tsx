import Link from "next/link";
import "./globals.scss";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <nav>
          <Link href="/about">About Me</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
