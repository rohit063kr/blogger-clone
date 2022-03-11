import featureImg1 from "../../assets/img/Blog-post/post-1.jpg";
import featureImg2 from "../../assets/img/Blog-post/post-2.jpg";
import featureImg3 from "../../assets/img/Blog-post/post-3.jpg";
import FeatureCard from "./FeatureCard";

const Feature = function () {
  return (
    <section className="feature">
      <FeatureCard
        transitionClassName="feature-card__transition-1"
        img={featureImg1}
        title="London Fashion week's continued the evolution"
        linkTitle="Fashion"
        time="2 minute"
      />

      <FeatureCard
        transitionClassName="feature-card__transition-2"
        img={featureImg2}
        title="London Fashion week's continued the evolution"
        linkTitle="Fashion"
        time="2 minute"
      />

      <FeatureCard
        transitionClassName="feature-card__transition-3"
        img={featureImg3}
        title="London Fashion week's continued the evolution"
        linkTitle="Fashion"
        time="2 minute"
      />
    </section>
  );
};

export default Feature;
