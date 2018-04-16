import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Logo from 'b:Logo';
import Main from 'b:Main';

export default decl({
  block: 'container',
  content() {
    return (
      <Fragment>
        <Logo/>
        <Main/>
      </Fragment>
    );
  }
});
