import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import './index.css';

function Hero() {
  return (<div className="boxes">

      <div className="box">
        <div className="text">
          <h3 className="title"><Translate>Introduction</Translate></h3>
          <p className="description">
            <Translate>Dive into our API and acquire fundamental knowledge about it.</Translate>
          </p>
          <span className="more"><Translate>Learn now</Translate></span>
        </div>
        <Link to="/docs/API/tutorial/intro" className="link">
          Read More
        </Link>
      </div>

      <div className="box">
        <div className="text">
          <h3 className="title"><Translate>Modules</Translate></h3>
          <p className="description">
            <Translate>Unlock the full potential of our modules through exploration.</Translate>
          </p>
          <span className="more"><Translate>Visit us now</Translate></span>
        </div>
        <Link to="/docs/API/modules/intro" className="link">
          Read More
        </Link>
      </div>

    </div>
  );
}

export default Hero;