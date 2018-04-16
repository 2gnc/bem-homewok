import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import { declMod } from 'bem-react-core';

import Link from 'e:Link';
import Pic from 'e:Pic';
import Desc from 'e:Desc';
import Controls from 'e:Controls';

export default declMod({ size : 'l' }, {
  block : 'card',
  content({title, color, url, desc}) {
      return (
        <Fragment>
          <Pic
            url = {url}
          />
          <Link
            text = { title }
            color = { color }
          />
          <Desc
            desc = { desc }
          />
          <Controls/>
        </Fragment>
      )
  }
});
