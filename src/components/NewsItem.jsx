import PropTypes from 'prop-types';

const NewsItem = ({ title, description, src, url, date, source }) => {
    return (
        <div className="card">
            <img src={src || "default-image.jpg"} className="card-img-top" alt="News" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{source} | {new Date(date).toLocaleString()}</small></p> 
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string,  // ✅ Add PropTypes for date
    source: PropTypes.string // ✅ Add PropTypes for source
};

export default NewsItem;
