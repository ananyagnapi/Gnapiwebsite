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

export default async function WhyChooseUs() {
  const items = await getStrapiData("/api/Whychooseuses");
  // console.log('WhyChooseUs items:', items);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">
          Why Choose Us?
        </h2>
        
        <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items?.data?.map((item: any, index: number) => (
            <div key={item.id} className="h-90 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 bg-blue-200 bg-opacity-30 rounded-bl-full flex items-start justify-end pr-2 pt-1">
                <span className="text-sky-500 font-bold text-sm">{item.order || index + 1}</span>
              </div>
      
              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-5">
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