import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

// import Link from 'e:Link';
// import Pic from 'e:Pic';

export default decl({
  block: 'card',
  tag: 'article',
  mods({ size }) {
    return { size };
  }
});



