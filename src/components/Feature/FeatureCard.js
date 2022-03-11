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
      <span className="feature-card__time-update mb-sm">{props.time}</span>
    </div>
  );
};

export default FeatureCard;
