import Landing from "../Images/Landing Page teste 2 1.png";
import Instagram from "../Images/instagram 1.svg";
import Facebook from "../Images/facebook 1.svg";
import Linkedin from "../Images/LInkedin 1.svg";
function App() {
  return (
    <div className=" flex justify-center items-center w-full px-12 py-4 ">
      <div className=" text-white  text-left items-center space-y-8 ">
        <h1 className="text-[64px] leading-[79px] font-fraunces font-bold">
          Lorem Ipsum
        </h1>
        <h2 className="text-2xl font-nunito font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h2>
        <p className="text-xl font-nunito ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          commodo maximus nunc consectetur tempor. Aliquam a vehicula magna, vel
          dictum lorem.
        </p>
        <button className="border rounded-[10px] border-black text-[#171717] bg-[#F7AD0C] px-7 py-3">
          Entre em Contato!
        </button>
        <div>
          <a href="https://www.instagram.com/nexumej?igsh=YzF0Y3A3am1xbjNn">
            <button className=" py-4">
              <img src={Instagram}></img>
            </button>
          </a>
          <button className="mx-8 py-4">
            <img src={Facebook}></img>
          </button>
          <button className=" py-4">
            <img src={Linkedin}></img>
          </button>
        </div>
      </div>

      <img src={Landing}></img>
    </div>
  );
}

export default App;
