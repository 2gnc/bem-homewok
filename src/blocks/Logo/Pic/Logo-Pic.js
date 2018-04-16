import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import logo3x from './zen_logo@3x.png';
import logo2x from './zen_logo@2x.png';

export default decl({
  block: 'logo',
  elem: 'pic',
  tag: 'img',
  attrs: {
    src: `$${logo2x}`,
    srcSet: `${logo2x} 2x, ${logo3x} 3x`,
    alt: 'логотип Дзен'
  }
})