import { useRef, useState } from 'react'
import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'
import { useLanguage } from '../../context/LanguageContext';

const Carousel = ({ images = [], options = {} }) => {
  const { language, changeLanguage } = useLanguage();

  const [selectedImage, setSelectedImage] = useState(null)
  const normalizedOptions = options ?? {}
  const { delay, ...emblaOptions } = normalizedOptions
  const autoplayDelay = delay ?? 3000
  const autoplay = useRef(
    Autoplay({
      playOnInit: true,
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  )

  return (
    <div>
    { (language === 'en') ? <h2 id='carouselTitle'>Photos</h2> : <h2 id='carouselTitle'>Fotos</h2> }
    <section className="gallery-carousel">
      <MantineCarousel
        withIndicators
        slideSize="33%"
        slideGap="lg"
        align="start"
        height={320}
        emblaOptions={{ loop: true, ...emblaOptions }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={{
          root: 'gallery-carousel__root',
          controls: 'gallery-carousel__controls',
          indicator: 'gallery-carousel__indicator'
        }}
      >
        {images.map((image, index) => (
          <MantineCarousel.Slide key={`${image}-${index}`}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              radius="md"
              className="gallery-carousel__image"
              onClick={() => setSelectedImage(image)}
            />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>

      {selectedImage && (
        <div
          className="gallery-carousel__lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-carousel__lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedImage} alt="Selected slide" />
          </div>
        </div>
      )}
    </section>
    </div>
  )
}

export default Carousel
