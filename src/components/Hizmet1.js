import { useState, useEffect } from "react";
import Hizmet1_API from "../api/Hizmet1.json";
import SetHizmet1 from "../Content/SetHizmet1";

export default function Hizmet1() {
  const [hizmet1, setHizmet1] = useState([])
  useEffect(() => {
    setHizmet1(Hizmet1_API);
  });
  return (
    <section className="w-full bg-bgGray-0 pt-20" id="Hizmetlerimiz">
      <div className="container mx-auto  max-w-screen-2xl px-4  overflow-hidden">
        <div className="flex justify-center font-semibold text-3xl md:text-4xl"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-delay="5000"><h1>Hizmetlerimiz</h1></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-14  py-24" >
          {hizmet1 && hizmet1.map((hizmet1, id) =>
            <SetHizmet1 key={id} hizmet1={hizmet1} />
          )}
        </div>
      </div>
    </section>
  );
};
