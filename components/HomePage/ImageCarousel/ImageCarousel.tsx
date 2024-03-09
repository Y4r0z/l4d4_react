'use client'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Image} from '@nextui-org/react';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImageCarousel()
{
    const data : [string, string, string][] = [
        ["/slides/ds.png", "https://discord.com/invite/tdrRDat", "Ссылка на дискорд"],
        ["/slides/vk.png", "https://vk.com/endurancel4d2", "Ссылка на ВК"],
        ["/slides/tg.png", "https://t.me/EnduranceSupport_bot'", "Ссылка на телегу"],
        ["/slides/boosty.png", "https://boosty.to/endurancel4d2", "Ссылка на бусти"]
    ]
    return(
        <div className='w-full'>
            <CarouselProvider
                isPlaying={true}
                infinite={true}
                dragEnabled={true}
                playDirection='forward'
                className='relative rounded-xl overflow-hidden'
                naturalSlideHeight={1}
                naturalSlideWidth={1}
                totalSlides={data.length}>
                <Slider>
                    {data.map((x, idx) => {
                        return <Slide key={idx} index={idx}>
                            <a href={x[1]} target="_blank">
                                <Image
                                    className='w-full h-full object-cover'
                                    alt={x[2]}
                                    src={x[0]}
                                    width={550}
                                    height={550}
                                    radius='sm'
                                />
                            </a>
                        </Slide>
                    })}
                </Slider>
                <ButtonBack className='absolute left-0 top-0 bottom-0 hover:bg-white p-2 hover:bg-opacity-20'><FontAwesomeIcon icon={faChevronLeft}/></ButtonBack>
                <ButtonNext className='absolute right-0 top-0 bottom-0 hover:bg-white p-2 hover:bg-opacity-20'><FontAwesomeIcon icon={faChevronRight}/></ButtonNext>
            </CarouselProvider>
        </div>
    )
}