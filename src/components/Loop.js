import React from 'react';
import { useTranslation } from "react-i18next";

function Loop(props) {

  const { t } = useTranslation();
  let ListOfArticles = props.articles;

  const displayLoop = () => {
    let filter = [];

    if (props.sort === 'desc') {
      ListOfArticles.sort(function (a, b) {
        let dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
      });
    }

    else {
      ListOfArticles.sort(function (a, b) {
        let dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
      });
    }


    if (props.filter === 'news') {
      filter = ListOfArticles.filter((article, key) => {
        return article.tags[0] === t('nyheter');
      });
    }
    else if (props.filter === 'articles') {
      filter = ListOfArticles.filter((article, key) => {
        if (article.tags.length < 2) {
          return article.tags[0] === t('artikel');
        }
        else {
          return article.tags[1] === t('artikel');
        }
      });
    }
    else {
      filter = props.articles;
    }

    return filter.map((content, key) => <div key={key} className="content">
      <h2>{content.title}</h2>
      <a href="#">{content.readmore}</a>
      <h4>{content.author}</h4>
      <div className={`${content.tags.length <= 1 ? 'tag' : 'tags'}`}>
        {loopTags(content.tags)}
      </div>
      <h4>{content.date}</h4>
    </div>
    )
  }

  const loopTags = (tags) => {
    let rows = []
    for (let i = 0; i < tags.length; i++) {
      rows.push(<span>{tags[i]}</span>);
    }

    return rows;
  }

  return (
    <>
      {
        displayLoop()
      }
    </>
  );
}

export default Loop