import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'

const Carousel = (props) => {
  const { images, options } = props
  const [selectedImage, setSelectedImage] = useState(null)
  const [Ref, _] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, 
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true })
  ])

  return (
    <div>
        <h2>Gallery</h2>
        <div className="embla">
        <div className="embla__viewport" ref={Ref}>
            <div className="embla__container">
            {images.map((image, index) => (
                <div className="embla__slide" key={index}>
                <img src={image} alt={`Slide ${index + 1}`} onClick={() => setSelectedImage(image)} />
                </div>
            ))}
            </div>
        </div>
        </div>
        {selectedImage && (
          <div className="embla__lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
            <div className="embla__lightbox__content" onClick={(event) => event.stopPropagation()}>
              <img src={selectedImage} alt="Selected slide" />
            </div>
          </div>
        )}
    </div>
  )
}

export default Carousel
