import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import data from '../../resources/data';
import Card from 'b:Card m:size=s m:size=m m:size=l';

/**
 * Генерирует url картинки
 * @param {String} url url картинки из объекта data
 * @returns {String} адрес картинки для элемета Pic
 */
const picUrl = (url) => {
  const picUrl = url.split('/')[1];
  const picName = picUrl.split('.')[0];
  return require(`../../resources/img/${picName}@2x.png`);
}

/**
 * Возвращает номер картинки, из которого потом будет составлен srcset
 * @param {String} url url картинки из объекта data
 * @returns {String} номер картинки
 */
const picName = (url) => {
  const picUrl = url.split('/')[1];
  const picName = picUrl.split('.')[0];
  return picName;
}

/**
 * Сокращает описание
 * @param {String} text Полное описание из объекта data
 * @returns {String} Сокращенное описание
 */
const cutter = (text) => {
  if (text.length > 250) {
    text = text.substr( 0, 246 ) + ' ...';
  }
  return text;
}

/**
 * Создает компонент Card
 */
const createCard = (item, i) => {
  let desc;
  if (item.description) {
    desc = cutter(item.description);
  } else {
    desc = null;
  }

  if (item.image) {
    const picU = picUrl(item.image);
    const picN = picName(item.image);
    return (
      <Card
        key = { i }
        size = { item.size }
        title = { item.title }
        color = { item.titleColor }
        url = { picU }
        desc = { desc }
        picName = { picN }
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
        picName = { null }
      />
    )
  }

}

/**
 * Пробегается по data и для каждого элемента вызывает создание карточки
 * @param {*} data Исходные данные (считаем, что они хорошие и лишнее не проверям)
 */
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