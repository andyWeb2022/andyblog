import Link from 'next/link';

interface HeaderProps {
  doNotShowButton?: boolean;
}

const Header = ({doNotShowButton}:HeaderProps) => {
  return (
    <header className="py-6 flex items-center justify-between">
      <Link href="/" className="text-7xl font-bold">
      𝒶𝓃𝒹𝓎 𝒲𝑒𝒷
      </Link>
      {!doNotShowButton?
        <nav className="mt-4">
          <Link href="/" className="mr-4 font-medium text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/About" className="mr-4 font-medium text-gray-700 hover:text-gray-900">
            About
          </Link>
        </nav>:
        <div></div>
    }
      
    </header>
  );
};

export default Header;
