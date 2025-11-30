import SpecialiseClient from './SpecialiseClient';

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

export default async function Specialise() {
  const bannerData = await getStrapiData("/api/whatweprovides?populate=*");
  
  return <SpecialiseClient bannerData={bannerData?.data || []} />;
}