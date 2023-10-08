

export default function SetHizmet2({data : {img,title,desc,id}}) {
  const windowWidth = window.innerWidth;
  const extraAos = windowWidth > 640 ? 'zoom-in' : id % 2 === 0 ? 'fade-left' : 'fade-right';
  return (
    <div className="bg-white flex px-4 shadow-xl max-w-[400px] gap-5"
    data-aos={`${extraAos}`}
    data-aos-once="true"
    data-aos-delay="5000">
    <div className="max-w-[60%] py-4 " >
    <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>
    <p className="text-gray-500 pt-3 text-base">{desc}</p>
    </div>
    <div className=" flex items-center text-borderGray-0 justify-center w-[40%]">
      <img className="h-14 w-14 object-fitt" src={img} alt="" />
    </div>
  </div>

  )
}
