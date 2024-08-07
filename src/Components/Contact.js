function App() {
  return (
    <div className="w-full ">
      <div className="border border-black bg-[#F7AD0C] rounded-[25px] flex justify-around m-20">
        <div className="my-20 w-1/3 items-center">
          <form
            className=" flex flex-col justify-center text-left space-y-6"
            autoComplete="off"
          >
            <input
              className=" border-b border-black bg-[#F7AD0C] outline-none font-nunito font-bold placeholder-black placeholder focus:placeholder-transparent"
              type="text"
              placeholder="Nome"
            ></input>

            <input
              className=" border-b border-black bg-[#F7AD0C] outline-none font-nunito font-bold placeholder-black placeholder focus:placeholder-transparent"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className=" border-b border-black bg-[#F7AD0C] outline-none font-nunito font-bold placeholder-black placeholder focus:placeholder-transparent"
              type="text"
              placeholder="Mensagem"
            ></input>
            <button
              className="bg-black text-[20px] leading-[45px] text-white rounded-[10px] cursor-pointer  "
              type="submit"
              value="Enviar"
            >
              {" "}
              Enviar
            </button>
          </form>
        </div>

        <div className=" text-end">
          <h1 className="text-[50px] leading-[59px] font-fraunces font-bold m-10">
            Entre em contato<br></br> com a gente!
          </h1>
          <p className="font-nunito mx-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            Pellentesque commodo maximus nunc consectetur tempor.<br></br>{" "}
            Aliquam a vehicula magna, vel dictum lorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
