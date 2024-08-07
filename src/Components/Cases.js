import governanca from "../Images/governanca 2.svg";
import retangle1 from "../Images/Rectangle 12.svg";
import retangle2 from "../Images/Rectangle 13.svg";
function App() {
  return (
    <div className="w-full py-20">
      <div className="flex justify-around text-white ">
        <h1 className="text-[64px] leading-[79px] font-fraunces font-bold">
          Casos de sucesso
        </h1>
        <img src={governanca}></img>
      </div>
      <ul className="flex justify-center items-center space-x-4">
        <li className="">
          <img src={retangle1}></img>
        </li>
        <li className="">
          <img src={retangle2}></img>
        </li>
        <li className="text-white text-left w-1/3 ">
          <h1 className="font-nunito font-bold text-[40px] leading-[55px]">
            Titulo
          </h1>
          <p className="font-nunito">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>
      </ul>
      <ul className="flex justify-center items-center space-x-4 my-4 ">
        <li className="text-white text-left w-[500px]  mb-[80px]">
          <h1 className="font-nunito font-bold text-[40px] leading-[55px] ">
            Titulo
          </h1>
          <p className="font-nunito">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>
        <li className="">
          <img src={retangle2}></img>
        </li>
        <li className="text-white text-left w-1/3 ">
          <h1 className="font-nunito font-bold text-[40px] leading-[55px]">
            Titulo
          </h1>
          <p className="font-nunito">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque commodo maximus nunc consectetur tempor. Aliquam a
            vehicula magna, vel dictum lorem.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default App;
