import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 relative">
              <Image src="/logo.png" alt="The Way Logo" width={40} height={40} className="object-contain" />
            </div>
            <span className="text-xl font-serif font-bold text-white">The Way</span>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <Link 
              href="/vision" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              Vision
            </Link>
            <a 
              href="https://theway.masterymade.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Launch App
            </a>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} The Way. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
