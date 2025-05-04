import { useState } from 'react';

export default function LoadingInvite({ children }) {
  const [loading, setLoading] = useState(true);
  const [explode, setExplode] = useState(false);

  const handleStart = () => {
    // Explosión visual
    setExplode(true);

    // Iniciar música si existe el audio
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch(err => {
        console.log("Autoplay bloqueado, el usuario debe interactuar:", err);
      });
      playPauseBtn.textContent = "🔊";
    }

    // Esperar animación y mostrar contenido
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  if (loading) {
    return (
      <div className="items-center justify-center h-screen w-screen flex flex-col text-center relative overflow-hidden">
        <div
          className={`text-6xl transition-transform duration-700 ease-out z-0 ${
            explode ? 'scale-[10] opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <div className="animate-ping [animation-duration:3s]">Nuestra <br /> Boda</div>
        </div>

        {!explode && (
          <button
            id="playPauseBtn"
            onClick={handleStart}
            className="z-10 mt-12 px-6 py-3 text-white bg-blue-300 font-serif rounded-full animate-blue-glow hover:scale-105 transition-all duration-300"
          >
            Ver invitación
          </button>
        )}

        <style jsx>{`
          @keyframes blue-glow {
            0%, 100% {
              box-shadow: 0 0 10px #3B82F6, 0 0 20px #3B82F6, 0 0 30px #3B82F6;
            }
            50% {
              box-shadow: 0 0 20px #60A5FA, 0 0 40px #60A5FA, 0 0 60px #60A5FA;
            }
          }
          .animate-blue-glow {
            animation: blue-glow 2s infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap h-screen animate-fadeIn">
      {children}
    </div>
  );
}
