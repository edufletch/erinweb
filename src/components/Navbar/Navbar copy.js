import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import namePlate from '../images/name5a0001.svg';

class Navbar extends Component {
  render() {
    return (
      <div id='navbarMainDiv'>
        <div id='namePlateDiv'>
          <Link to='/home'>
            <img
              id='namePlate'
              src={namePlate}
              alt='Erin Fletcher'
              width='300'
              height='24.5'
            />
          </Link>
        </div>
        <div id='navDiv'>
          <nav>
            <ul>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/blogPage'>Blog</Link>
              </li>
              <li>
                <Link to='/resources'>Resources</Link>
              </li>
              <li>
                <Link to='/connect'>Connect</Link>
              </li>
              <li>
                <Link to='/subscribe'>Subscribe</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
