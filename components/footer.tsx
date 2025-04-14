import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JOLOJ Water Systems</h3>
            <p className="text-sky-100 mb-4">
              Leading solution provider in Bangladesh for environment, water & waste water treatment with over 10 years
              of experience.
            </p>
            <p className="text-sky-100 font-semibold">"PURITY Is Our PRIORITY"</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sky-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sky-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sky-100 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sky-100 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sky-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic text-sky-100 space-y-2">
              <p>House: 01 Level: 02 Shastitala, Jashore</p>
              <p>(Opposite of Fire Brigade Office)</p>
              <p>Phone: 01759-142647</p>
              <p>Email: jolojwatersystems@gmail.com</p>
              <p>Website: www.jolojwatersystems.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-sky-800 mt-8 pt-8 text-center text-sky-100">
          <p>&copy; {new Date().getFullYear()} JOLOJ Water Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
