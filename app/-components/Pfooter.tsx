import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white pt-[50px] pb-[20px]">
      <div className="container mx-auto px-6">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] mb-[30px]">
          
          {/* Column 1: About */}
          <div className="footer-column">
            <h3 className="text-[1.3rem] mb-5 relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:height-[2px] after:bg-[#FFD700]">
              SGCST
            </h3>
            <p className="mb-[10px] text-[#ecf0f1] text-sm leading-relaxed">
              Providing world-class education in science and technology since 2009.
            </p>
            <div className="flex gap-[15px] mt-[15px]">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                <Link
                  key={icon}
                  href="#"
                  className="w-10 h-10 bg-[#34495e] rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#FFD700] hover:text-[#2c3e50]"
                >
                  <i className={`fab fa-${icon}`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="footer-column">
            <h3 className="text-[1.3rem] mb-5 relative pb-[10px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:height-[2px] after:bg-[#FFD700]">
              Contact Us
            </h3>
            <ul className="space-y-[10px] text-[#ecf0f1] text-sm">
              <li><i className="fas fa-phone mr-2"></i> (046) 432-1680 / (046)526-4628</li>
              <li><i className="fas fa-envelope mr-2"></i> SG2015gregorians@gmail.com</li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i> 
                2nd/3rd Floor Saint Michael Bldg., Alejandro st. Manila-Cavite Blvd. 
                Sta. Cruz, Cavite City
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </footer>
  );
}