import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FeatureCard = function (props) {
  const { inView, ref } = useInView({ threshold: 0.5 });
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (inView) setShowCard(inView);
  }, [inView]);

  return (
    <div
      className={`feature-card ${!showCard && props.transitionClassName}`}
      ref={ref}
    >
      <img className="feature-card__img" src={props.img} />
      <h5 className="heading-5 heading--black mb-li">{props.heading}</h5>
      <a href="#" className="btn btn-sm btn--round mb-li">
        {props.linkTitle}
      </a>
      <p className="feature-card__text feature-card__time-update mb-sm">
        turies, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      {/* <span className="feature-card__time-update mb-sm">{props.time}</span> */}
    </div>
  );
};

export default FeatureCard;
