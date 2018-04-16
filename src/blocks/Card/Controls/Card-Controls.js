import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Heart from 'b:Heart';
import Dots from 'b:Dots';

export default decl({
  block: 'card',
  elem: 'controls',
  content() {
    return (
      <Fragment>
        <Dots/>
        <Heart/>
      </Fragment>
    )
  }
});