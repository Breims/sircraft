const MenuFlotante = () => {
  
  return (
    <aside className={`absolute xl:fixed xl:top-[4.6rem] left-0 xl:mt-2 xl:mx-6 xl:p-6 mx-4 xl-mx-auto p-2 w-1/4 2xl:w-auto mt-28 overflow-y-auto border shadow-lg bg-slate-50`}>
      <h1 className="uppercase text-sm xl:text-base font-bold xl:tracking-wide p-1 xl:p-2">
        ¿ En qué te podemos ayudar ?
      </h1>
      <ul className="divide-y-2 divide-purple-300">
        <li className="py-1 font-semibold">Creaciones personalizadas</li>
        <li className="py-1 font-semibold">Publicidad</li>
        <li className="py-1 font-semibold">Capacitaciones</li>
        <li className="py-1 font-semibold">Sublimación</li>
      </ul>
    </aside>
   
  );
};

export default MenuFlotante;