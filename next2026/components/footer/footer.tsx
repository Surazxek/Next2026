export const Footer = () => {
    return (
      <footer className="bg-slate-950 text-white mt-16">
  
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
  
            {/* Logo & About */}
            <div>
  
              <a href="/" className="flex items-center gap-3">
  
                <img
                  src="https://mcqmate.com/public/images/logos/60x60.png"
                  alt="Logo"
                  className="w-10 h-10"
                />
  
                <h2 className="text-2xl font-bold">
                  TechStore
                </h2>
  
              </a>
  
              <p className="text-slate-300 mt-5 leading-7 text-sm">
                Discover premium laptops, electronics, fashion products,
                and accessories at affordable prices. Built for modern
                shopping experiences with fast delivery and trusted quality.
              </p>
  
            </div>
  
            {/* Quick Links */}
            <div>
  
              <h3 className="text-lg font-semibold mb-5">
                Quick Links
              </h3>
  
              <ul className="space-y-3 text-slate-300">
  
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
  
                <li>
                  <a href="/products" className="hover:text-white transition">
                    Products
                  </a>
                </li>
  
                <li>
                  <a href="/categories" className="hover:text-white transition">
                    Categories
                  </a>
                </li>
  
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
  
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Categories */}
            <div>
  
              <h3 className="text-lg font-semibold mb-5">
                Top Categories
              </h3>
  
              <ul className="space-y-3 text-slate-300">
  
                <li>
                  <a href="/category/laptops" className="hover:text-white transition">
                    Laptops
                  </a>
                </li>
  
                <li>
                  <a href="/category/smartphones" className="hover:text-white transition">
                    Smartphones
                  </a>
                </li>
  
                <li>
                  <a href="/category/fashion" className="hover:text-white transition">
                    Fashion
                  </a>
                </li>
  
                <li>
                  <a href="/category/accessories" className="hover:text-white transition">
                    Accessories
                  </a>
                </li>
  
                <li>
                  <a href="/category/electronics" className="hover:text-white transition">
                    Electronics
                  </a>
                </li>
  
              </ul>
  
            </div>
  
            {/* Contact */}
            <div>
  
              <h3 className="text-lg font-semibold mb-5">
                Contact Us
              </h3>
  
              <div className="space-y-4 text-slate-300 text-sm">
  
                <p>
                  Kathmandu, Nepal
                </p>
  
                <p>
                  +977 9800000000
                </p>
  
                <p>
                  support@techstore.com
                </p>
  
              </div>
  
              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
  
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  F
                </a>
  
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  I
                </a>
  
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  X
                </a>
  
              </div>
  
            </div>
  
          </div>
  
          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
  
            <p className="text-sm text-slate-400">
              © 2026 TechStore. All rights reserved.
            </p>
  
            <div className="flex items-center gap-6 text-sm text-slate-400">
  
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
  
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
  
            </div>
  
          </div>
  
        </div>
  
      </footer>
    );
  };