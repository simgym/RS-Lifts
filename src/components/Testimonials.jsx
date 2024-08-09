import "./Testimonials.css";
import test1 from "../assets/test1.jpeg";
import test2 from "../assets/test2.jpeg";
import test3 from "../assets/test3.jpeg";
import test4 from "../assets/test4.jpeg";
import test5 from "../assets/test5.jpeg";
import test6 from "../assets/test6.jpeg";
import test7 from "../assets/test7.jpeg";

const Testimonials = () => {
  const testimonialList = [
    {
      img: test1,
      review: "Rohit’s program transformed my body and boosted my confidence!",
    },
    {
      img: test2,
      review: "In just 90 days, I achieved results I never thought possible!",
    },
    {
      img: test3,
      review:
        "This coaching changed my life - stronger, leaner, and healthier!",
    },
    {
      img: test4,
      review:
        "The personalized plan made all the difference in my transformation!",
    },
    {
      img: test5,
      review:
        "I’m in the best shape of my life, thanks to this incredible program!",
    },
    {
      img: test6,
      review: "Finally, a fitness plan that actually delivers real results!",
    },
    {
      img: test7,
      review:
        "Rohit’s guidance helped me achieve my fitness goals beyond expectations!",
    },
  ];
  const duplicatedTestimonials = [...testimonialList, ...testimonialList];

  return (
    <div className="testWrap">
      <div className="testHead">Testimonials</div>
      <div className="testFoot">
        {duplicatedTestimonials.map((item, index) => (
          <div key={index} className="testimonial">
            <div className="testImgCont">
              <img src={item.img} alt={`testimonial-${item.name}`} />
            </div>
            <div className="testRevCont">
              <p className="testRev">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
