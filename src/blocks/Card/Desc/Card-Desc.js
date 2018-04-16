import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'desc',
  tag: 'p',
  content({desc}) {
    return (
      desc
    )
  }
});