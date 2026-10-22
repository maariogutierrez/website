import './Header.css';
import { PROFILE_LINKS } from '../../links';

export default function Header() {
  return (
    <header className='section hero'>
      <h1 className='hero__name'>Mario Gutiérrez</h1>
      <p className='hero__location'>Madrid, Spain</p>
      <p className='hero__bio'>
        I am a data engineer. I build pipelines that turn raw data into decisions.
        I am particularly interested in Artificial Intelligence and Machine Learning.
      </p>
      <ul className='hero__links'>
        {PROFILE_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
