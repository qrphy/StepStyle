export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 md:py-12 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold">StepStyle</h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Premium footwear for every occasion. Step into style with our exclusive collection of high-quality shoes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-base md:text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-xs md:text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Collections</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h4 className="text-base md:text-lg font-semibold">Support</h4>
          <ul className="space-y-2 text-xs md:text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Shipping Info</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-base md:text-lg font-semibold">Connect</h4>
          <div className="space-y-2 text-xs md:text-sm text-gray-400">
            <p><a href="mailto:info@stepstyle.com" className="hover:text-white transition-colors break-all">info@stepstyle.com</a></p>
            <p><a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></p>
          </div>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Facebook">f</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-6 md:mt-8 pt-6 md:pt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>&copy; 2026 StepStyle. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
