import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  tag: 'article',
  mods({ size }) {
    return { size };
  }
});



