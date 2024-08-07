import logo from "../Images/Logo.svg";
function App() {
  return (
    <header className=" w-full bottom-0 shadow-md flex justify-around bg-[#171717] text-white  items-center text-12px font-nunito">
      <img src={logo} />
      <p className="text-xs"> 2024 Desenvolvido com ❤ por GTI Engenharia Jr </p>
      <ul className="flex space-x-6 text-sm">
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
    </header>
  );
}

/* 2024 Desenvolvido com ❤ por GTI Engenharia Jr */

export default App;
