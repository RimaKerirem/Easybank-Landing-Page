import { Container, BlogCard } from "../../components/modules";
import "./blogs.css";
import { blogsData } from "../../data/blogsData";

function Blogs() {
  return (
    <div className="blogs">
      <Container>
        <h1 className="blogs-title">Latest Articles</h1>
        <div className="blogs-container">
          {blogsData.map((elt) => (
            <BlogCard key={elt.id} elt={elt} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Blogs;
