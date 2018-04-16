import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Pic from 'e:Pic';

export default decl({
  block: 'logo',
  elem: 'link',
  tag: 'a',
  attrs: {
    href: '/',
    title: 'логотип Дзен'
  },
  content({}) {
    return (
        <Pic/>
    )
  }
})