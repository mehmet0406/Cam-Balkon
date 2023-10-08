import Slider from "react-slick";
import bg1 from "../../src/images/bg-1.jpeg";
import bg2 from "../../src/images/bg2.jpeg";
import bg3 from "../../src/images/bg3.png";
export default function FirstSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <section className="h-screen relative   before:bg-gradient-to-r  before:w-full before:h-vh before:opacity-60 before:bg-griBg-0 before:absolute before:inset-0  before:z-10 " id="Anasayfa">
      <Slider {...settings} className="h-full">
        <div >
          <img className="w-full  h-screen object-cover" src={bg2} alt="" />
        </div>
        <div >
          <img className="w-full h-screen  object-cover" src={bg3} alt="" />
        </div>
        <div >
          <img className="w-full h-screen  object-cover" src={bg1} alt="" />
        </div>
      </Slider>
      <div className="absolute top-24 w-full  h-screen  z-10">
        <div className="flex flex-col justify-center font-semibold items-center h-full text-white  ">
          <h1 className=" text-6xl md:text-7xl lg:text-8xl  w-full flex justify-center items-center max-[520px]:text-5xl"
            data-aos="fade-down"
            data-aos-once="false"
            data-aos-duration="1000" >Evim Cam Balkon</h1>
          <div className="flex justify-center text-lg pt-10 md:text-xl lg:text-2xl "
            data-aos="zoom-in"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="350">Yüksek kalite ve ustalığı bir araya getirerek</div>
          <div className="flex justify-center text-lg pt-2 md:text-xl lg:text-2xl "
            data-aos="zoom-in"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="350">balkonunuzu yeniliyoruz.</div>
          <div className="pt-12"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            data-aos-delay="600">
            <a href="https://api.whatsapp.com/send?phone=905458933898" target="_blank" ><button className="bg-white text-black px-8 md:px-12 py-4 rounded-xl  text-lg md:text-2xl bg-gradient-to-r from-white to-grey-0 hover:bg-gradient-to-r transition-all duration-300  hover:scale-105" >Bizimle Tanışın</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};