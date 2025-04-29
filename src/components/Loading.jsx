import { useState, useEffect } from 'react';

export default function LoadingInvite({ children }) {
  const [loading, setLoading] = useState(true);
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExplode(true); // Inicia la explosión del corazón
      setTimeout(() => {
        setLoading(false); // Luego de la explosión, muestra contenido
      }, 800); // tiempo de explosión
    }, 5000); // tiempo de carga inicial
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="items-center justify-center h-screen w-screen flex flex-col ">
        <div className={`text-6xl transition-transform  duration-700 ease-out ${explode ? 'scale-[10] opacity-0' : 'scale-100 opacity-100'}`}>
            <div className=" text-6xl animate-ping [animation-duration:3s]">Nuestra <br/> Boda</div>
        </div>
      </div>
    );
  }

  // Cuando ya terminó la explosión, carga el contenido
  return (
    <div className="animate-fadeIn ">
      {children}
    </div>
  );
}