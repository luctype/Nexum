import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../customSwiper.css";
import avanc from "../Images/botao-avançar.svg";
import prev from "../Images/botao-voltar.svg";
import juri from "../Images/justica 1.svg";
import estrela from "../Images/estrela 1.svg";
function App() {
  return (
    <div className="w-full  items-center justify-center text-center my-20">
      <div className="flex flex-col">
        <div className="my-10 flex flex-col text-center w-1/2 m-auto">
          <h1 className="text-[64px] leading-[79px] font-fraunces font-bold text-white mb-10">
            Depoimentos
          </h1>
          <p className="text-base font-nunito text-white mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </div>
        <div className=" flex items-center ">
          <div className="mx-10">
            <img src={prev}></img>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="mx-2"
          >
            <SwiperSlide>
              <div className=" bg-[#F7AD0C]  h-[15rem] rounded-[10px] p-3 text-left  gap-10 grid ">
                <div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque commodo maximus nunc consectetur tempor.
                    Aliquam a vehicula magna, vel dictum lorem."
                  </p>

                  <ul className="flex  items-center space-x-1">
                    <p className>5.0</p>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <div className="inline-block"></div>
                  <span className="px-2  font-bold">Matthew L. Williford</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#F7AD0C]  h-[15rem] rounded-[10px] p-3 text-left  gap-10 grid ">
                <div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque commodo maximus nunc consectetur tempor.
                    Aliquam a vehicula magna, vel dictum lorem."
                  </p>

                  <ul className="flex  items-center space-x-1">
                    <p className>5.0</p>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <div className="inline-block"></div>
                  <span className="px-2  font-bold">Matthew L. Williford</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#F7AD0C]  h-[15rem] rounded-[10px] p-3 text-left  gap-10 grid ">
                <div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque commodo maximus nunc consectetur tempor.
                    Aliquam a vehicula magna, vel dictum lorem."
                  </p>

                  <ul className="flex  items-center space-x-1">
                    <p className>5.0</p>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <div className="inline-block"></div>
                  <span className="px-2  font-bold">Matthew L. Williford</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" bg-[#F7AD0C]  h-[15rem] rounded-[10px] p-3 text-left  gap-10 grid ">
                <div>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque commodo maximus nunc consectetur tempor.
                    Aliquam a vehicula magna, vel dictum lorem."
                  </p>

                  <ul className="flex  items-center space-x-1">
                    <p className>5.0</p>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                    <li>
                      <img src={estrela}></img>
                    </li>
                  </ul>
                </div>
                <div className="self-end">
                  <div className="inline-block"></div>
                  <span className="px-2  font-bold">Matthew L. Williford</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center mx-10">
            <img src={avanc}></img>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={juri}></img>
      </div>
    </div>
  );
}

export default App;
