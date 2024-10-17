import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-10 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">
            <Link href="/" className="hover:text-accent transition-colors">
                Open Source UI Components
            </Link>
            </h1>
            <nav>
            <ul className="flex space-x-6 text-lg">
                <li><Link href="https://github.com/melanyss/ui-components" target="_blank" className="hover:text-accent transition-colors">GitHub</Link></li>
                <li><Link href="https://melanys.me/?ref=uicollections&utm_source=uicollections&utm_medium=header&utm_campaign=uicollections" target="_blank" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link href="mailto:hello@melanys.me" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
            </nav>
        </div>
        </header>
  );
}