'use client';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo + Primary Links */}
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src="/logo.png" alt="Practo Logo" width={120} height={40} />
          </Link>

          <nav className="flex gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600">Find Doctors</Link>
            <Link href="/" className="hover:text-blue-600">Video Consult</Link>
            <Link href="/" className="hover:text-blue-600">Surgeries</Link>
          </nav>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <div className="relative">
            <button className="hover:text-blue-600">
              <span className="bg-red-500 text-white text-xs px-1 rounded mr-1">NEW</span>
              For Corporates ▾
            </button>
          </div>

  
          <div className="relative">
            <button className="hover:text-blue-600">
              For Providers ▾
            </button>
          </div>


          <div className="relative">
            <button className="hover:text-blue-600">
              Security & Help ▾
            </button>
          </div>


          <Link href="/login" className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50">
            Login / Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
