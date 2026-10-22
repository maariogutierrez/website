import { useRef, useState } from 'react'
import { Carousel as MantineCarousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'

const Carousel = ({ images = [], options = {} }) => {

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
    <section className='section' aria-labelledby='carouselTitle'>
    <h2 id='carouselTitle' className='section__title'>Photos</h2>
    <div className="gallery-carousel section__body">
      <MantineCarousel
        withIndicators
        slideSize="33%"
        slideGap="lg"
        align="start"
        emblaOptions={{ loop: true, ...emblaOptions }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        classNames={{
          root: 'gallery-carousel__root',
          slide: 'gallery-carousel__slide',
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
    </div>
    </section>
  )
}

export default Carousel
