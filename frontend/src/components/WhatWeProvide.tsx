async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { data: [] };
  }
}

export default async function WhatWeProvide() {
  const items = await getStrapiData("/api/whatweprovide2s?populate=*");
  
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
          What we Provide
        </h2>
        
        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items?.data?.map((item: any) => (
            <div key={item.id} className="h-90 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img 
                  src={`http://localhost:1337${item.image?.url || item.pic}`} 
                  alt={item.title}
                  className="object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-800 text-md leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: item.description || item.des || '' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}