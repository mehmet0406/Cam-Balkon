import { MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="w-full bg-footerBG-0">
      <div className="container mx-auto  max-w-screen-2xl  ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2  gap-11 ">
          <div className="h-64 sm:h-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.1549009903406!2d32.79307127631443!3d39.982643571512696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34be390158cdd%3A0xe0f72f3bbbfda2ab!2sEvim%20Cam%20Balkon!5e0!3m2!1str!2str!4v1695735309380!5m2!1str!2str" height="100%" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          <div className="py-10" >
            <div className="flex justify-center">
              <a href="https://api.whatsapp.com/send?phone=905458933898" target="_blank">   <button className="  font-semibold text-3xl bg-white rounded-xl py-4 px-16 hover:bg-gray-100">Fiyat Alın</button></a>
            </div>
            <div className="flex justify-start pt-8 px-4">
              <ul className=" flex flex-col gap-5">
                <li> <span className="flex justify-center font-semibold text-2xl text-white tracking-wider"><i>Yaşar Öksüz</i></span></li>
                <li className="flex gap-3">
                  <span ><MdPhone size={28} /></span>
                  <span className="flex items-center text-xl text-white font-semibold tracking-wider hover:text-gray-100"> <a href="tel:+905458933898">+90 (545) 893 38 98</a> </span>
                </li>
                <li className="flex gap-3">
                  <span ><MdPhone size={28} /></span>
                  <span className="flex items-center text-xl text-white font-semibold tracking-wider  hover:text-gray-100"> <a href="tel:+903123321330">+90 (312) 332 13 30 </a> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};