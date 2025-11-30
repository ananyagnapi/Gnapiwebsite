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

export default async function Geospecialise() {
  let geoData = null;
  
  try {
    const items = await getStrapiData("/api/geospecialises?populate=*");
    // console.log('Geospecialize items:', items);
    geoData = items?.data?.[0]; // Get first item
    // console.log('Geospecialize data:', geoData);
  } catch (error) {
    console.error('Error fetching geospecialize data:', error);
  }

  return (
    <div style={{
      backgroundColor: 'white',
      color: 'black',
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)'
    }}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(2rem, 4vw, 4rem)',
          flexDirection: 'row'
        }} className="responsive-flex">
          <div style={{
            flex: '1',
            paddingLeft: '2rem',
            width: '100%'
          }} className="responsive-padding">
            <div>
              <div>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                  fontWeight: 600,
                  marginTop: 0,
                  lineHeight: 1.2,
                  color: '#252525',
                  marginBottom: '1rem'
                }}>
                  {geoData?.title}
                </h2>
                <div style={{marginBottom: '2rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)'}} dangerouslySetInnerHTML={{ __html: geoData?.description || geoData?.des || '' }} />
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }} className="responsive-images">
                <img alt="About Images" style={{
                  height: 'clamp(10rem, 20vw, 15rem)',
                  width: '100%',
                  maxWidth: '15rem',
                  objectFit: 'cover',
                  flex: '1'
                }} src={`http://localhost:1337${geoData?.Image?.url || geoData?.image || ''}`} />
                <img alt="About Images" style={{
                  height: 'clamp(10rem, 20vw, 15rem)',
                  width: '100%',
                  maxWidth: '15rem',
                  objectFit: 'cover',
                  flex: '1'
                }} src={`http://localhost:1337${geoData?.Img2[0]?.url || geoData?.img2 || ''}`} />
              </div>
            </div>
          </div>
          <div style={{
            flex: '1',
            paddingLeft: '2rem',
            width: '100%'
          }} className="responsive-padding">
            <div>
              <img alt="About Images" style={{
                width: '100%',
                height: 'clamp(20rem, 40vw, 30rem)',
                objectFit: 'cover',
                borderRadius: '12px'
              }} src={`http://localhost:1337${geoData?.Img3[0]?.url || geoData?.img3 || ''}`} />
              <div style={{
                position: 'relative',
                marginTop: 'clamp(-6rem, -10vw, -8rem)',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} className="responsive-overlay">
                  <img alt="About Images" style={{
                    height: 'clamp(3rem, 6vw, 4rem)',
                    width: 'clamp(3rem, 6vw, 4rem)',
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }} src={`http://localhost:1337${geoData?.Img4[0]?.url || geoData?.img4 || ''}`} />
                  <div>
                    <h3 style={{
                      margin: '0',
                      color: '#ffb900',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      fontWeight: 700
                    }}>30+</h3>
                    <span style={{
                      color: '#070707ff',
                      fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
                      fontWeight: 700
                    }}>Years of Geospatial expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}