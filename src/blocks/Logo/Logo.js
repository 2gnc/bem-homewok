import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Link from 'e:Link';

export default decl({
  block: 'logo',
  tag: 'header',
  content() {
    return (
      <Link/>
    );
  }
});
