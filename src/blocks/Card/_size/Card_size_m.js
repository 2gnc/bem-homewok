import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import { declMod } from 'bem-react-core';

import Link from 'e:Link';
import Pic from 'e:Pic';
import Desc from 'e:Desc';
import Controls from 'e:Controls';

export default declMod({ size : 'm' }, {
  block : 'card',
  content({title, color, url, desc}) {
    return (
      <Fragment>
        <Link
          text = { title }
          color = { color }
        />
        <Pic
          url = {url}
        />
        <Desc
          desc = { desc }
        />
        <Controls/>
      </Fragment>
    )
  }
});