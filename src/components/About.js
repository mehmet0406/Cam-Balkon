import Cam from "../images/Cam2.png";

export default function About() {

  return (
    <section className="pt-32 pb-20" id="Hakkimizda"  >
      <div className="flex justify-center w-full"
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000" >
        <h1 className="text-3xl md:text-4xl font-semibold "  >Biz Kimiz ?</h1></div>
      <section className="px-4 container mx-auto max-w-screen-2xl flex gap-9 justify-between pt-11 md:pt-20 flex-col md:flex-row">
        <article className=" flex justify-center items-center md:w-1/2 md:max-w-xl  ">
          <ul className="list-disc text-lg md:text-xl font-semibold leading-8 px-4 ">
            <li
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <span >Evim Cam Balkon, Ankara'da cam balkon sistemleri konusunda uzmanlaşmış bir firmadır.</span>
            </li>
            <br />
            <li
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <span>Yılların deneyimiyle evlerinizi ve balkonlarınızı estetikle buluşturmak, kullanım alanlarınızı genişletmek ve mevsimlerin tadını çıkarmanızı sağlamak için buradayız.</span>
            </li>
          </ul>
        </article>
        <article className=" md:max-w-[380px] w-full">
          <figure className="flex justify-center w-full    ">
            <img src={Cam} className="object-cover w-7/12  md:w-full " alt="" />
          </figure>
        </article>
      </section>
    </section>
  );
};