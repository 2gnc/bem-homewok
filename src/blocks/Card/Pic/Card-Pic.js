import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'pic',
  tag: 'img',
  attrs({url, picName, title}){
    const s2x = require(`../../../resources/img/${picName}@2x.png`);
    const s3x = require(`../../../resources/img/${picName}@3x.png`);
    const srcset = `${s2x} 2x, ${s3x} 3x`;
    return {
      alt: title,
      src: url,
      srcSet: srcset,
    }
  },
});
