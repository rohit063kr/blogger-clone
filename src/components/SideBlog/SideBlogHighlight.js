import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SideBlogHighlight = function (props) {
  const { inView, ref } = useInView({ threshold: 1, rootMargin: "-10px" });
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    setShowHighlight(inView);
  }, [inView]);

  return (
    <span
      href="#"
      className={`btn btn--round side-blog__category-btn ${
        !showHighlight && "side-blog__category-btn-hidden"
      }`}
      ref={ref}
    >
      <a href="#">{props.lable}</a>
      <p>{props.count}</p>
    </span>
  );
};

export default SideBlogHighlight;
