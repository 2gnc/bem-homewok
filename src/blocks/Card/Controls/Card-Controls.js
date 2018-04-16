import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'controls',
  content() {
    return (
      <Fragment>
        {123}
      </Fragment>
    )
  }
});