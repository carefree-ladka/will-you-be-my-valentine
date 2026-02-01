export const GlobalStyles: React.FC = () => (
  <style>{`
    @keyframes heartbeat {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-50px) scale(0.8);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-20px) rotate(5deg);
      }
      50% {
        transform: translateY(-10px) rotate(-5deg);
      }
      75% {
        transform: translateY(-15px) rotate(3deg);
      }
    }

    @keyframes sparkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .animate-sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }

    .animate-slide-in-right {
      animation: slide-in-right 0.7s ease-out forwards;
    }
  `}</style>
);