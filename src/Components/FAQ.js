import mais from "../Images/+.svg";
function App() {
  return (
    <div className="w-full items-center my-28 text-white">
      <div className=" flex flex-col items-center justify-center text-center my-24">
        <h1 className="text-[64px] leading-[79px] font-fraunces font-bold text-white mb-10">
          Perguntas Frequentes
        </h1>
        <p className="text-base font-nunito w-1/2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          commodo maximus nunc consectetur tempor. Aliquam a vehicula magna, vel
          dictum lorem.
        </p>
      </div>
      <section className=" flex flex-col mx-32 space-y-4">
        <details className="border-b border-[#F7AD0C] font-nunito">
          <summary className="list-none flex justify-between my-3 mx-5">
            <p> What payment methods do you accept?</p>
            <img className="hover:cursor-pointer" src={mais}></img>
          </summary>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            purus massa, suscipit ut risus sed, hendrerit maximus libero.
            Praesent rhoncus dolor at dapibus viverra. Quisque facilisis
            interdum nisi aliquet mattis.
          </p>
        </details>
        <details className="border-b border-[#F7AD0C] font-nunito">
          <summary className="list-none flex justify-between my-3 mx-5">
            <p> What payment methods do you accept?</p>
            <img className="hover:cursor-pointer" src={mais}></img>
          </summary>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            purus massa, suscipit ut risus sed, hendrerit maximus libero.
            Praesent rhoncus dolor at dapibus viverra. Quisque facilisis
            interdum nisi aliquet mattis.
          </p>
        </details>
        <details className="border-b border-[#F7AD0C] font-nunito">
          <summary className="list-none flex justify-between my-3 mx-5">
            <p> What payment methods do you accept?</p>
            <img className="hover:cursor-pointer" src={mais}></img>
          </summary>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            purus massa, suscipit ut risus sed, hendrerit maximus libero.
            Praesent rhoncus dolor at dapibus viverra. Quisque facilisis
            interdum nisi aliquet mattis.
          </p>
        </details>
        <details className="border-b border-[#F7AD0C] font-nunito">
          <summary className="list-none flex justify-between my-3 mx-5">
            <p> What payment methods do you accept?</p>
            <img className="hover:cursor-pointer" src={mais}></img>
          </summary>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            purus massa, suscipit ut risus sed, hendrerit maximus libero.
            Praesent rhoncus dolor at dapibus viverra. Quisque facilisis
            interdum nisi aliquet mattis.
          </p>
        </details>
        <details className="border-b border-[#F7AD0C] font-nunito">
          <summary className="list-none flex justify-between my-3 mx-5 ">
            <p> What payment methods do you accept?</p>

            <img className="hover:cursor-pointer" src={mais}></img>
          </summary>
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            purus massa, suscipit ut risus sed, hendrerit maximus libero.
            Praesent rhoncus dolor at dapibus viverra. Quisque facilisis
            interdum nisi aliquet mattis.
          </p>
        </details>
      </section>
    </div>
  );
}

export default App;
