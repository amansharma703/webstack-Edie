import { links, socialIcons } from "../constant";

export const Footer = () => {
    return (
        <footer className='footer' id='contact'>
            <div className='container small'>
                <div className='footer-grid'>
                    <div className='footer-links'>
                        {links.map((link, ind) => (
                            <a href={link.to} className='footer-link' key={ind}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className='socials'>
                        <h1 className='footer-logo'>Edie</h1>
                        {socialIcons.map((icon, ind) => (
                            <a href='#' className='social-link' key={ind}>
                                <img src={icon.src} alt={icon.alt} className='social-icon'  />
                            </a>
                        ))}
                    </div>
                    <div className='footer-form'>
                        <p className='join-small light'>Want us to contact you?</p>
                        <div  className='form'>
                            <input type='text' className='email' id='email' placeholder='Email' />
                            <button type='submit' className='btn-submit'>
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

