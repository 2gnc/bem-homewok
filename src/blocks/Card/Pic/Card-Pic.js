import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'pic',
  tag: 'img',
  attrs({url}){
    return {
      alt: 'test',
      src: url,
    }
  },
});
