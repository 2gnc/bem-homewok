import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import Header from 'e:Header';

export default decl({
  block: 'card',
  elem: 'link',
  tag: 'a',
  attrs() {
    return {
      href: '/',
    }
  },
  style({color}) {
    return {
      color: color,
    }
  }
    ,
  content() {
    return (
      <Header 
        text = { this.props.text }
      />
    )
  }
})