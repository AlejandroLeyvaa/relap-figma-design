import React, { useEffect } from 'react';

import Footer from './Footer';
import pattern from '../assets/images/abstract-pattern.svg';

const Contact = () => {
  useEffect(() => {
    const contact = document.querySelector('.contact');
    contact.style.backgroundImage = `url('${pattern}')`;
  }, []);

  return (
    <section className='contact'>
      <h3>Contact Us</h3>
      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas.
      </p>
      <form>
        <input type='text' placeholder='Your email' />
        <button className='button' type='button'>
          Send
        </button>
      </form>

      <hr />

      <ul className='list'>
        <li className='section'>
          <p>Consectetur</p>
        </li>
        <li>Adipiscing</li>
        <li>Elit</li>
        <li>Eiusmod</li>
        <li className='section'>
          <p>Tempor</p>
        </li>
        <li>Incididunt</li>
        <li>Labore</li>
        <li>Dolore</li>
        <li className='section'>
          <p>Magna</p>
        </li>
        <li>Aliqua</li>
        <li>Minim</li>
        <li>Veniam</li>
      </ul>
      <Footer />
    </section>
  );
};

export default Contact;
