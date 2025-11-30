import Specialise from '../components/Specialise';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import WhatWeProvide from '../components/WhatWeProvide';
import Geospecialise from '../components/Geospecialise';

async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {

  return (
    <>
      <Specialise />
       <Geospecialise />
      <WhatWeProvide />
     
      <HowWeWork />
      <WhyChooseUs />
    </>
  );
}