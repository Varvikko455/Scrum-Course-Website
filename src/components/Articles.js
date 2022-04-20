import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loop from './Loop';
import '../scss/components/_articles.scss';
import Loader from './Loader';

import { useTranslation } from "react-i18next";

function Articles(props) {

  const { t, i18n } = useTranslation();

  const [articles, updateArticles] = useState(null);
  
  const [isMounted, updateIsMounted] = useState(true);
  const [filter, updateFilter] = useState('');
  const [sort, updateSort] = useState('');


  const FetchArticlesData = async () => {
    try {
      let path = `json/article-${i18n.language}.json`;
      const articlePosts = await Axios.get(path);

      updateArticles(articlePosts.data.articles);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    if (!isMounted) {
      return
    }
    // Här hämtar vi data och sparar ner det/uppdaterar till vår useState 
    FetchArticlesData();

    i18n.on('languageChanged', lang => {
      FetchArticlesData();
    })

    // Stäng av vår loader.
    updateIsMounted(false);
    
  }, [])

  return (
    <section id="article" className="articles" style={{ background: "url('/assets/img/article-bg.png') center/cover no-repeat" }}>
      <h2 className="center">{t("Nyheter & Artiklar")}</h2>
      <div className="filter-sort-container">
        <div className="filter center">
          <button className="btn btn-news" onClick={() => updateFilter('news')}>{t("nyheter")}</button>
          <button className="btn btn-articles" onClick={() => updateFilter('articles')}>{t("artikel")}</button>
        </div>
        <div className="sort center">
          <button className="btn btn-asc" onClick={() => updateSort('asc')}>{t("senaste")}</button>
          <button className="btn btn-desc" onClick={() => updateSort('desc')}>{t("äldst")}</button>
        </div>

      </div>
      {isMounted && <Loader />}
      {
        articles !== null &&
        <div className="container-articles">
          <Loop filter={filter} articles={articles} sort={sort} />
        </div>
      }
    </section>
  );
}

export default Articles;