import logo from "../Images/Logo.svg";
function App() {
  return (
    <header className=" w-full top-0 shadow-md flex justify-around bg-[#171717] text-white  items-center">
      <img src={logo} />
      <ul className="flex space-x-6 text-xl font-nunito ">
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Casos </a>
        </li>
        <li>
          <a href="">Depoimentos </a>
        </li>
        <li>
          <a href="">Contato </a>
        </li>
        <li>
          <a href="">Localização </a>
        </li>
      </ul>
      <button className="rounded-full border border-[#F7AD0C] hover:bg-[#F7AD0C] px-5 py-2 text-xl">
        Whatsapp
      </button>
    </header>
  );
}

export default App;
