import React from "react";
import Logo from "../../assets/logo.png";

const quickLinks = [
  { label: "Shop", url: "https://www.flenjorfoods.com/s1/home" },
  { label: "The Kitchen", url: "https://flenjor-foods.netlify.app/" },
  { label: "Wholesale", url: "#wholesale" },
  { label: "The Bakery", url: "#bakery" },
];

const Footer = () => {
  return (
    <footer className="bg-white  pt-16 pb-8 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MOBILE LAYOUT ── */}
        <div className="lg:hidden">
          {/* Logo — full width */}
          <div className="mb-10 flex justify-start sm:justify-start">
            <a href="/">
              <img src={Logo} alt="Flenjor Foods Logo" className="w-[100px]" />
            </a>
          </div>

          {/* Quick Links + Contact Us — 2 columns side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-gray-900 font-bold font-['Poppins'] mb-6 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#dd6639] text-[15px] transition-colors duration-200 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-gray-900 font-bold font-['Poppins'] mb-6 text-lg">
                Contact Us
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  (902) 555-0100
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  Flenjorfoods@gmail.com
                </li>
                <li className="flex items-start gap-3 text-[15px] text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  123 Culinary Lane, Food City, FC 12345
                </li>
              </ul>
            </div>
          </div>

          {/* Connect with Us — full width */}
          <div className="mb-8">
            <h4 className="text-gray-900 font-bold font-['Poppins'] mb-6 text-lg">
              Connect with Us
            </h4>
            <div className="flex items-center gap-4 mb-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#fff5ee] p-2.5 rounded-lg text-gray-900 hover:text-[#dd6639] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#fff5ee] p-2.5 rounded-lg text-gray-900 hover:text-[#dd6639] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
                </svg>
              </a>
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed max-w-[250px]">
              Follow us for updates, tips, and community highlights.
            </p>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <a href="/">
              <img src={Logo} alt="Flenjor Foods Logo" className="w-[140px]" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold font-['Poppins'] mb-6 text-[15px]">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#dd6639] text-[15px] transition-colors duration-200 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-gray-900 font-semibold font-['Poppins'] mb-6 text-[15px]">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[15px] text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (902) 555-0100
              </li>
              <li className="flex items-start gap-3 text-[15px] text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Flenjorfoods@gmail.com
              </li>
              <li className="flex items-start gap-3 text-[15px] text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                123 Culinary Lane, Food City, FC 12345
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-gray-900 font-semibold font-['Poppins'] mb-6 text-[15px]">
              Connect with Us
            </h4>
            <div className="flex items-center gap-4 mb-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-[#fff5ee] p-2.5 rounded-lg text-gray-900 hover:text-[#dd6639] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-[#fff5ee] p-2.5 rounded-lg text-gray-900 hover:text-[#dd6639] transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
                </svg>
              </a>
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Follow us for updates, tips,
              <br />and community highlights.
            </p>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-100 pt-8 mt-4">
          <p className="text-center text-[13px] text-gray-500">
            &copy; 2025 Flenjor Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
