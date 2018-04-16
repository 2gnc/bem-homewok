import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'pic',
  tag: 'img',
  attrs({url, picName}){
    const s2x = require(`../../img/${picName}@2x.png`);
    const s3x = require(`../../img/${picName}@3x.png`);
    const srcset = `${s2x} 2x, ${s3x} 3x`;
    return {
      alt: 'test',
      src: url,
      srcSet: { srcset },
    }
  },
});
