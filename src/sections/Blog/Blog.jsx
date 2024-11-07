import "./blog.css";
import "../../components/EmblaBlog/emblaBlog.css";

import { EmblaCarouselBlog } from "../../components";

import { data } from "../../constants";

import { ImAirplane } from "react-icons/im";
import { TbLocationFilled } from "react-icons/tb";

const getBlogs = () => {
  return data.blogs.map((item) => (
    <div key={item.title} className="blog-container embla-blog__slide">
      <div className="blog__collection embla-blog__slide__number">
        <div className="blog__collection-content">
          <p className="blog-date">{item.date}</p>
          <h3 className="blog-title">{item.title}</h3>
          <p className="blog-description">{item.blog}</p>

          <div className="blog-views_read">
            <p>{item.views} views</p>
            
            <a href="#readmore">Read More</a>
          </div>

          <div className="blog-image">
            <img src={item.image} alt="Blog preview"/>
          </div>
        </div>

        <div className="blog__collection-images">
          <ImAirplane className="airplane-icon"/>
          
          <div className="image">
            <img src={item.image1} alt="Blog item"/>
          </div>

          <div className="image">
            <img src={item.image2} alt="Blog item"/>
          </div>

          <div className="more-blog">
            <TbLocationFilled className="loc-icon"/>
            <a href="#gotoblog">GO TO<br />BLOG</a>
          </div>
        </div>
      </div>
    </div>
  ))
}

const Blog = () => {
  return (
    <section className="blog section__padding">
      <h2>BLOG</h2>
      <p className="blog-title_description">
        We collect for you the most top news from the world of tourism
      </p>

      <EmblaCarouselBlog getSlides={getBlogs()}/>
    </section>
  )
}

export default Blog;