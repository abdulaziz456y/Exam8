import Marquee from "react-fast-marquee";
import Reklam1 from '../assets/images/Reklam1.png'
import Reklam2 from '../assets/images/Reklam2.png'
import Reklam3 from '../assets/images/Reklam3.png'
import Reklam4 from '../assets/images/Reklam4.png'

const Reklam = () => {
  return (
    <div className="w-[100%] h-[690px] bg-[#E5E4ED]">
      <h1 className="mt-[165px] ml-[77px] absolute text-3xl font-[500] max-md:ml-[25px] max-md:mt-[100px]" >Наши клиенты</h1>
      <h1 className="mt-[100px] ml-[800px] absolute text-5xl font-[600px] max-md:ml-[450px]">БОЛЕЕ 5000 <br />УСПЕШНЫХ <br /> ПРОЕКТОВ</h1>
      <Marquee  className="h-[690px]">
        <div className=" h-[280px] w-[320px] rounded-[10px] border bg-[#F8F7F3] shadow-xl mt-[300px] ml-[20px]">
          <a href="">
           <div className="w-[318px] h-[196px] bg-white mt-[-10px] rounded-[5px]">
           <img
              className=" my-3 h-[104px] w-[169px] rounded-[10px] mt-[46px] absolute ml-[71px] "
              src={Reklam1}
            />
           </div>
          </a>
          <h1 className="mt-[20px] ml-[25px] font-[500]">НМИЦ онкологии им. Н.Н. <br /> Блохина</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px] border bg-[#F8F7F3] shadow-xl mt-[300px] ml-[20px]">
          <a href="">
          <div className="w-[318px] h-[196px] bg-white mt-[-10px] rounded-[5px]">
           <img
              className=" my-3 h-[80px] w-[196px] rounded-[10px] absolute mt-[58px] ml-[69px] "
              src={Reklam2}
            />
           </div>
          </a>
          <h1 className="mt-[20px] ml-[25px] font-[500]">НМИЦ онкологии им. Н.Н. <br /> Блохина</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px] border bg-[#F8F7F3] shadow-xl mt-[300px] ml-[20px]">
          <a href="">
          <div className="w-[318px] h-[196px] bg-white mt-[-10px] rounded-[5px]">
           <img
              className=" my-3 h-[146px] w-[146px] rounded-[10px] absolute mt-[25px] ml-[87px] "
              src={Reklam3}
            />
           </div>
          </a>
          <h1 className="mt-[20px] ml-[25px] font-[500]">НМИЦ онкологии им. Н.Н. <br /> Блохина</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px] border bg-[#F8F7F3] shadow-xl mt-[300px] ml-[20px]">
          <a href="">
          <div className="w-[318px] h-[196px] bg-white mt-[-10px] rounded-[5px]">
           <img
              className=" my-3 h-[106px] w-[173px] rounded-[10px] absolute mt-[46px] ml-[73px] "
              src={Reklam4}
            />
           </div>
          </a>
          <h1 className="mt-[20px] ml-[25px] font-[500]">НМИЦ онкологии им. Н.Н. <br /> Блохина</h1>
        </div>
        <div className=" h-[280px] w-[320px] rounded-[10px] border bg-[#F8F7F3] shadow-xl mt-[300px] ml-[20px]">
          <a href="">
          <div className="w-[318px] h-[196px] bg-white mt-[-10px] rounded-[5px]">
           <img
              className="my-3 h-[146px] w-[146px] rounded-[10px] absolute mt-[25px] ml-[87px] "
              src={Reklam3}
            />
           </div>
          </a>
          <h1 className="mt-[20px] ml-[25px] font-[500]">НМИЦ онкологии им. Н.Н. <br /> Блохина</h1>
        </div>
      </Marquee>
    </div>
  );
};

export default Reklam;