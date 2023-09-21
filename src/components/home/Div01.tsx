import React from 'react';


const handleClick = () => {
  alert('Ícone clicado!');
};
export default function Home() {
  return (
    <div className="relative w-500 h-screen my-[2rem] mx-[6rem] bg-slate-400 shadow-md shadow-slate-500 rounded-lg">

      <div className="absolute h-[15rem] w-[35rem] -right-[3rem] mt-[20rem]
       bg-emerald-800 shadow-md shadow-slate-500 rounded-lg">
        skils

        <div className="absolute h-[3rem] w-[15rem] -right-[-10rem] mt-[-3rem]
         bg-emerald-400 shadow-md shadow-slate-500 rounded-lg">
          <h1 className="text-center uppercase font-bold mt-3">Skils</h1>
        </div>
      </div>

      <div className="absolute h-[15rem] w-[5rem] -left-[2rem] mt-[10rem]
       bg-emerald-800 shadow-md shadow-slate-500 rounded-lg">
      </div>

      <div className="absolute h-[4rem] w-[30rem] -right-[-2rem] mt-[-1rem]
       bg-emerald-800 shadow-md shadow-slate-500 rounded-lg pl-4 pt-4">
      <h1>email: kaiomax01@gmail.com / whats: (xx) x xxxx-xxxx</h1>
      </div>

    </div>
  );
}
