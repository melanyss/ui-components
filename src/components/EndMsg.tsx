import Link from "next/link"
import { TfiGithub } from "react-icons/tfi";

export default function EndMsg() {
  return (
    <section className="bg-transparent text-end-msg-text p-8 rounded-lg mt-12 text-center mb-12 flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-6 text-primary">Contribute to the Project</h3>
        
        <p className="text-lg mb-8 text-primary">
            We're always looking for new components and improvements.<br />If you'd like to contribute, check out our GitHub repository!
        </p>
        <TfiGithub className="text-primary text-4xl mb-6" />
            <Link 
            href="https://github.com/melanyss/ui-components" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg shadow-md ease-in-out hover:scale-110 hover:bg-opacity-90 transition-colors mb-4"
            >
            Contribute on GitHub
            </Link>
    </section>
  )
}