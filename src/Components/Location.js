import Instagram from "../Images/instagram 2.svg";
import Facebook from "../Images/facebook 2.svg";
import Linkedin from "../Images/linkedin 2.svg";
function App() {
  return (
    <div className=" flex justify-center items-center w-full  bg-[#F7AD0C] mb-6 ">
      <div className=" text-[#171717]  text-left items-center">
        <h1 className="text-[64px] leading-[79px] font-fraunces font-bold">
          Onde estamos?
        </h1>
        <div className="space-y-1 mt-10">
          <h2 className="font-nunito font-bold text-2xl">Endereço</h2>
          <p className="font-nunito text-base">
            Avenida Senador Salgado Filho, 1610 - Lagoa Nova, Natal - Rio Grande
            do Norte
          </p>
          <h2 className="font-nunito font-bold text-2xl">Telefone</h2>
          <p className="font-nunito text-base">(84)9999-9999</p>
          <h2 className="font-nunito font-bold text-2xl">Email</h2>
          <p className="font-nunito text-base">nexumcjunior@gmail.com</p>
        </div>
        <div className="space-y-2 mt-20">
          <h2 className="font-nunito font-bold text-xl">Nos siga também em:</h2>
          <div>
            <a href="https://www.instagram.com/nexumej?igsh=YzF0Y3A3am1xbjNn">
              <button className=" ">
                <img src={Instagram}></img>
              </button>
            </a>
            <button className="mx-6 ">
              <img src={Facebook}></img>
            </button>
            <button className=" ">
              <img src={Linkedin}></img>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          className=" h-[450px] w-[480px] m-10 border rounded-[20px] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.29257695266!2d-35.20852839106065!3d-5.814292557311353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2fff078a448af%3A0x2940929cd12bc0b6!2sUniversidade%20Potiguar!5e0!3m2!1spt-BR!2sbr!4v1719589863591!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
