import martelo from "../Images/martelo-legal 1.svg";
function App() {
  return (
    <div className="w-full items-center text-center">
      <h1 className="text-[64px] leading-[79px] font-fraunces font-bold text-white">
        Nossos Serviços
      </h1>
      <div className=" flex justify-end mr-10">
        <img src={martelo}></img>
      </div>

      <ul className="flex justify-around text-white">
        <li className="border-2 border-[#F7AD0C] rounded-[25px] flex-col  mr-4">
          <h1 className="font-nunito text-[48px] leading-[65px] font-bold mt-10 mb-40">
            Serviço 1
          </h1>
          <p className="my-20 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>

        <li className="border-2 border-[#F7AD0C] rounded-[25px] flex-col justify-around mr-4">
          <h1 className="font-nunito text-[48px] leading-[65px] font-bold mt-10 mb-40">
            Serviço 2
          </h1>
          <p className="my-20 mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>
        <li className="border-2 border-[#F7AD0C] rounded-[25px] flex-col justify-around mr-4">
          <h1 className="font-nunito text-[48px] leading-[65px] font-bold mt-10 mb-40">
            Serviço 3
          </h1>
          <p className="my-20 mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>
      </ul>
    </div>
  );
}
/* Rectangle 5 */

export default App;
