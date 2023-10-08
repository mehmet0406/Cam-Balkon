
import { useState, useEffect } from "react";
import Hizmet2_API from "../api/Hizmet2.json";
import SetHizmet2 from "../Content/SetHizmet2";
export default function Hizmet2() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(Hizmet2_API)
  });
  return (
    <section className="w-full bg-bgGray-0 pt-20">
      <div className="container mx-auto  max-w-screen-2xl px-4 py-8 overflow-hidden">
        <div className="flex items-center gap-12 ">
          <h1 className="font-semibold text-3xl lg:text-4xl">Hizmetlerimiz</h1>
          <div className=" w-full h-0 border-2 border-borderGray-0 "></div>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 py-14 gap-14 " >
          {data && data.map((data, id) =>
            <SetHizmet2 key={id} data={data} />
          )}
        </div>
      </div>
    </section>
  );
};
