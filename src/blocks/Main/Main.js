import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import data from '../data';
import Card from 'b:Card m:size=s m:size=m m:size=l';

/**
 * Определим, какая именно картинка нужна в зависимости от размера экрана
 */
const screenSize = window.screen.availWidth;

const getUrl = (url, size) => {
  const picUrl = url.split('/')[1];
  const picName = picUrl.split('.')[0];

  if (size < 325) {
    return require(`../img/${picName}.png`);
  } else if(size < 769 ) {
    return require(`../img/${picName}@2x.png`);
  } else {
    return require(`../img/${picName}@3x.png`);
  }
}

const cutter = (text) => {
  if (text.length > 250) {
    text = text.substr( 0, 246 ) + ' ...';
  }
  return text;
}

const createCard = (item, i) => {
  let desc;
  if (item.description) {
    desc = cutter(item.description);
  } else {
    desc = null;
  }

  if (item.image) {
    const picUrl = getUrl(item.image, screenSize);
    return (
      <Card
        key = { i }
        size = { item.size }
        title = { item.title }
        color = { item.titleColor }
        url = { picUrl }
        desc = { desc }
      />
    )
  } else {
    return (
      <Card
        key = { i }
        size = { item.size }
        title = { item.title }
        color = { item.titleColor }
        url = { null }
        desc = { desc }
      />
    )
  }

}

const makeCards = (data) => {
  return data.map((item, i) => createCard(item, i));
}

export default decl({
  block: 'main',
  tag: 'main',
  content() {
    return (
      makeCards(data)
    )
  }
});
/**
 *  title: "Civilization VI: Rise and Fall review: A few turns closer to a Golden Age",
    titleColor: '#576433',
    image: "img/1.png",
    description: "Every Civilization game since Civilization IV has followed the same trajectory: the initial release remixes and reinterprets some base systems from the previous game, but franchise veterans deem it anemic because it has fewer systems and features than its fully expanded predecessor. From there, new expansions gradually reintroduce the complexity that was lost in the move to a new game until many of those players conclude that it is the best game in the series yet.",
    size: "m",
 */


 /**
  * <Fragment>
        {
          data.map((item, i) => {
            let url;
            if (item.image) {
              console.log ('pic ', getUrl(item.image, screenSize), 'item N', i );
            }
            if (!item.image) {
              //console.log('item N', i);
            }
            
            if (item.hasOwnProperty('image')) {
              //console.log(1)
              //url = getUrl(item.image, screenSize);
            } else {
              //console.log(2)
              //url = null;
            }
            //console.log(url);
            // const url = getUrl(item.image, screenSize) || null;
            // console.log(url);
            return(
              <Card
                  key = { i }
                  title = { item.title }
                  color = { item.titleColor }
                  pic = { item.image }
                  desc = { item.description }
                  size = { item.size }
              />
            )
          })
        }
      </Fragment>
  */