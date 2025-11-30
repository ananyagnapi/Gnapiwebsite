import Link from 'next/link';

async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    console.log(response , "response");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Navbar() {
  const navData = await getStrapiData("/api/navbars");
  const appLogoData = await getStrapiData("/api/brand-logo?populate=*");
  console.log(appLogoData , "appLogoData");
  const navItems = navData?.data || [];
  const appLogo = appLogoData?.data;

  const getHref = (title: string) => {
    return '/' + title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <nav className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-around">
          {/* Logo/Icon */}
          <Link href="/" className="flex items-center space-x-2">
            {appLogo?.logo ? (
              <img 
                src={`http://localhost:1337${appLogo.logo.url || appLogo.logo}`}
                alt="App Logo"
                className="w-80 h-35 object-contain"
              />
            ) : (
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            )}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: any) => (
              <Link 
                key={item.id} 
                href={getHref(item.title)} 
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}