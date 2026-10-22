import './Footer.css';
import { PROFILE_LINKS } from '../../links';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='inner'>
        <p className='footer__name'>Mario Gutiérrez</p>
        <ul className='footer__links'>
          {PROFILE_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
