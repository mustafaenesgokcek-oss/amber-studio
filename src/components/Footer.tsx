export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-amber-400 font-bold text-lg">Amber Studio</span>
          <p className="text-gray-600 text-sm mt-1">AI Consulting & Strategy</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Amber Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
