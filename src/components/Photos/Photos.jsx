import './Photos.css'

const PHOTOS = [
  {
    src: '/media/gallery/madrid_open_vol1.jpg',
    width: 1080,
    height: 723,
    alt: 'Mario with his teammates and the Madrid Open Vol.1 organizers in front of a screen that reads Madrid Open Champion',
    caption: 'Madrid Open Vol.1 hackathon winners, with the organizers, Madrid, Oct 2026'
  },
  {
    src: '/media/gallery/talent_arena.jpg',
    width: 1600,
    height: 1200,
    alt: 'Two attendees standing in front of the Talent Arena sign',
    caption: 'Talent Arena, Barcelona, Mar 2026'
  },
  {
    src: '/media/gallery/indesiahack_group_winners.jpg',
    width: 1600,
    height: 1290,
    alt: "Four team members holding the IndesiaHack challenge winner's cheque and a glass trophy",
    caption: 'IndesiaHack challenge winners, Madrid, Nov 2025'
  },
  {
    src: '/media/gallery/first_year_award.jpg',
    width: 1280,
    height: 817,
    alt: 'Mario receiving a diploma on stage at an award ceremony at Universidad Politécnica de Madrid',
    caption: 'Highest academic record in the first year of the Data Engineering and Systems degree, ETSIT, Universidad Politécnica de Madrid, May 2024'
  }
]

function Photos() {
  return (
    <section className='section' aria-labelledby='photosTitle'>
      <h2 id='photosTitle' className='section__title'>Photos</h2>
      <ul className='photos section__body'>
        {PHOTOS.map((photo) => (
          <li key={photo.src}>
            <figure className='photo'>
              <img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading='lazy' />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Photos
