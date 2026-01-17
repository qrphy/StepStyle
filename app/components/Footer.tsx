export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">StepStyle</h3>
          <p className="text-gray-400 text-sm">
            Premium footwear for every occasion. Step into style with our exclusive collection of high-quality shoes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Collection</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">New Arrivals</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Sale</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
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
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Email: <a href="mailto:info@stepstyle.com" className="hover:text-white transition-colors">info@stepstyle.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a></p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">f</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 mt-8 pt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 StepStyle. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
