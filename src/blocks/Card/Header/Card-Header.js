import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'card',
  elem: 'header',
  tag: 'h2',
  content() {
    return (
      this.props.text
    )
  }
});