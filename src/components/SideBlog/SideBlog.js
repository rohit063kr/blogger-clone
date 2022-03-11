import mBlog1 from "../../assets/img/popular-post/m-blog-1.jpg";
import mBlog2 from "../../assets/img/popular-post/m-blog-2.jpg";
import mBlog3 from "../../assets/img/popular-post/m-blog-3.jpg";
import mBlog4 from "../../assets/img/popular-post/m-blog-4.jpg";
import mBlog5 from "../../assets/img/popular-post/m-blog-5.jpg";
import SideBlogHighlight from "./SideBlogHighlight";

const SideBlog = function () {
  return (
    <section className="side-blog">
      <div className="side-blog-item">
        <div className="side-blog__catgory mb-hg">
          <h4 className="side-blog__h4 heading-4 mb-sm">Category</h4>
          <div className="side-blog__category-items">
            <SideBlogHighlight lable="Software" count="(05)" />
            <SideBlogHighlight lable="Technology" count="(02)" />
            <SideBlogHighlight lable="Lifestyle" count="(07)" />
            <SideBlogHighlight lable="Shopping" count="(01)" />
            <SideBlogHighlight lable="Food" count="(08)" />
          </div>
        </div>
      </div>

      <div className="side-blog-item">
        <div className="side-blog__pop-post mb-hg">
          <h4 className="heading-4 side-blog__h4 mb-sm">Popular Post</h4>
          <div className="side-blog__box">
            <figure className="side-blog__img">
              <img src={mBlog1} />
              <figcaption className="side-blog__img-details">
                <span className="side-blog__date">
                  <i className="fas fa-calendar-alt text-gray"></i>
                  January 14,2019
                </span>
                <span className="side-blog__comment"> 2 Comments </span>
              </figcaption>
            </figure>

            <h2 className="heading-secondary heading-sm">
              New data recording system to better analysis road accident
            </h2>
          </div>

          <div className="side-blog__box">
            <figure className="side-blog__img">
              <img src={mBlog2} />
              <figcaption className="side-blog__img-details">
                <span className="side-blog__date">
                  <i className="fas fa-calendar-alt text-gray"></i>
                  January 14,2019
                </span>
                <span className="side-blog__comment"> 2 Comments </span>
              </figcaption>
            </figure>

            <h2 className="heading-secondary heading-sm">
              New data recording system to better analysis road accident
            </h2>
          </div>

          <div className="side-blog__box">
            <figure className="side-blog__img">
              <img src={mBlog3} />
              <figcaption className="side-blog__img-details">
                <span className="side-blog__date">
                  <i className="fas fa-calendar-alt text-gray"></i>
                  January 14,2019
                </span>
                <span className="side-blog__comment"> 2 Comments </span>
              </figcaption>
            </figure>

            <h2 className="heading-secondary heading-sm">
              New data recording system to better analysis road accident
            </h2>
          </div>

          <div className="side-blog__box">
            <figure className="side-blog__img">
              <img src={mBlog4} />
              <figcaption className="side-blog__img-details">
                <span className="side-blog__date">
                  <i className="fas fa-calendar-alt text-gray"></i>
                  January 14,2019
                </span>
                <span className="side-blog__comment"> 2 Comments </span>
              </figcaption>
            </figure>

            <h2 className="heading-secondary heading-sm">
              New data recording system to better analysis road accident
            </h2>
          </div>

          <div className="side-blog__box">
            <figure className="side-blog__img">
              <img src={mBlog5} />
              <figcaption className="side-blog__img-details">
                <span className="side-blog__date">
                  <i className="fas fa-calendar-alt text-gray"></i>
                  January 14,2019
                </span>
                <span className="side-blog__comment"> 2 Comments </span>
              </figcaption>
            </figure>

            <h2 className="heading-secondary heading-sm">
              New data recording system to better analysis road accident
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="side-blog__item">
        <div className="side-blog__new-letter">
          <h4 className="heading-4 side-blog__h4">Newsletter</h4>

          <form className="side-blog__input-box">
            <input type="text" className="side-blog__input" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div> */}
    </section>
  );
};

export default SideBlog;
