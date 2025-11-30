'use client';
import { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function SpecialiseClient({ bannerData }: { bannerData: any[] }) {
    const emblaRef = useRef<HTMLDivElement>(null);
    // console.log(bannerData , "bannerData in client");

    useEffect(() => {
        if (emblaRef.current && bannerData.length > 0) {
            const embla = EmblaCarousel(emblaRef.current, { loop: true }, [Autoplay({ delay: 4000 })]);
            return () => embla.destroy();
        }
    }, [bannerData]);

    return (
        <div style={{height: '70vh', overflow: 'hidden'}}>
            <div ref={emblaRef} style={{height: '100%'}}>
                <div style={{display: 'flex', height: '100%'}}>
                    {bannerData.map((item, index) => (
                        <div key={index} style={{
                            flex: '0 0 100%',
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            height: '100%'
                        }}>
                            <img 
                                src={`http://localhost:1337${item.image[0]?.url || item.image}`}
                                alt={item.title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    zIndex: 1
                                }}
                            />
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                maxWidth: '1200px',
                                padding: '0 70px',
                                textAlign: 'left',
                                color: 'white'
                            }}>
                                <h1 style={{
                                    fontSize: '4rem',
                                    fontWeight: 'bold',
                                    margin: '0',
                                    lineHeight: '1.2',
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                                }}>{item.title}</h1>
                                <p style={{
                                    fontSize: '1.2rem',
                                    marginTop: '2rem',
                                    lineHeight: '1.6',
                                    maxWidth: '800px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                                }} dangerouslySetInnerHTML={{ __html: item.Description || item.des || '' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}