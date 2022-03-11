import blogImg1 from "../../assets/img/Blog-post/blog1.png";
import blogImg2 from "../../assets/img/Blog-post/blog2.png";
import blogImg3 from "../../assets/img/Blog-post/blog3.png";
import blogImg4 from "../../assets/img/Blog-post/blog4.png";
import MainBlogCard from "./MainBlogCard";

const MainBlog = function () {
  return (
    <section className="main-blog">
      <MainBlogCard
        title="Why should boys have all the fun? it's the women who are making india an alcohol-loving contry "
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum,
          tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam
          architecto fugit. Eligendi quidem ipsam ducimus minus magni illum
          similique veniam tempore unde?"
        img={blogImg1}
      />
      <MainBlogCard
        title=" Why should boys have all the fun? it's the women who are making india
        an alcohol-loving contry"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum,
          tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam
          architecto fugit. Eligendi quidem ipsam ducimus minus magni illum
          similique veniam tempore unde?"
        img={blogImg2}
      />

      <MainBlogCard
        title=" Why should boys have all the fun? it's the women who are making india
        an alcohol-loving contry"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum,
          tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam
          architecto fugit. Eligendi quidem ipsam ducimus minus magni illum
          similique veniam tempore unde?"
        img={blogImg3}
      />

      <MainBlogCard
        title=" Why should boys have all the fun? it's the women who are making india
      an alcohol-loving contry"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
        voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum,
        tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam
        architecto fugit. Eligendi quidem ipsam ducimus minus magni illum
        similique veniam tempore unde?"
        img={blogImg4}
      />
    </section>
  );
};

export default MainBlog;
