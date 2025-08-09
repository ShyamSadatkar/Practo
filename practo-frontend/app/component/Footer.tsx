import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#28328c] text-white-700 mt-7 py-6 px-6">
      <div className="border-gray-700 mt-1 pt-6 text-center text-sm text-gray-400">
        <div className="flex justify-center items-center gap-3 mb-3">
          <Image
            src="/white_logo.svg"
            alt="Practo logo"
            width={100}
            height={30}
          />
        </div>
        <p>© 2017 Practo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
