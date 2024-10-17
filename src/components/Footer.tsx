import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-card-bg text-white text-lg">
        <p>
        &copy; {new Date().getFullYear()} <Link className="footer-brand" target="_blank" href="/">UI & Web Design Collections</Link>
        </p>
        <p>
        Coded with ❤️ by <Link href="https://melanys.me/?ref=uicollections&utm_source=uicollections&utm_medium=footer&utm_campaign=uicollections" target="_blank" className="name-link">Melanys</Link>
        </p>
    </footer>
  );
}
