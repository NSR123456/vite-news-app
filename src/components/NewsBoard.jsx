import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=Bangladesh&apiKey=${import.meta.env.VITE_API_KEY}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status !== "ok") {
          console.error("API Error:", data);
          return;
        }
        setArticles(data.articles || []);  // Prevent undefined error
      })
      .catch(error => console.error("Fetch error:", error));
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="row">
        {articles?.length > 0 ? (
          articles.map((news, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <NewsItem 
                title={news.title} 
                description={news.description} 
                src={news.urlToImage} 
                url={news.url} 
                date={news.publishedAt}  
                source={news.source?.name || "Unknown Source"}  
              />
            </div>
          ))
        ) : (
          <p className="text-center">No news articles found.</p>
        )}
      </div>
    </div>
  );
  
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;
