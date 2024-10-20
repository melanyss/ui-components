import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-card-bg text-white py-20 mb-12 rounded-lg shadow-2xl">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6 leading-tight">Open Source Copy-Paste UI & Web Design Components</h1>
        <h2 className="text-2xl mb-8 font-light">Explore and copy ready-to-use UI components for your next project</h2>
        <p className="text-lg mb-10 max-w-3xl mx-auto">
          This open-source repository is a curated collection of UI components and design assets.
          Whether you're a developer or designer, you'll find ready-to-use components to speed up your workflow.
          Feel free to use, modify, and contribute to our growing library!
        </p>
        <Link href="https://github.com/melanyss/ui-components" target="_blank" rel="noopener noreferrer" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors text-lg shadow-md">
          Star the Project on GitHub
        </Link>
      </div>
    </section>
  );
}

/* bg-gradient-to-br from-primary via-secondary to-accent */