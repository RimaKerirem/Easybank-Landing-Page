import "./blog-card.css";

function BlogCard({ elt }) {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={elt.image} alt="" />
      </div>
      <div className="blog-content">
        <span className="blog-author">{elt.author}</span>
        <a href="/#" className="blog-title">
          {elt.title}
        </a>
        <p className="blog-description">{elt.description}</p>
      </div>
    </div>
  );
}

export default BlogCard;
