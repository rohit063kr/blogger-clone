import { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const MainBlogCard = function (props) {
  const { inView, ref } = useInView({ threshold: 0.15 });
  const [showBlog, setShowBlog] = useState(false);

  useEffect(() => {
    setShowBlog(inView);
  }, [inView]);

  return (
    <Fragment>
      <div
        className={`main-blog-item ${!showBlog && "main-blog-item__hidden"}`}
        ref={ref}
      >
        <img
          src={props.img}
          alt="Blog_related_img"
          className="main-blog-item__img"
        />
        <h2 className="heading-secondary">{props.title}</h2>
        <p className="paragraph">{props.description}</p>
        <a href="#" className="btn btn-sm">
          Read More<i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <hr />
    </Fragment>
  );
};

export default MainBlogCard;
