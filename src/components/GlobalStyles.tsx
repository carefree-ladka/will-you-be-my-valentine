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
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-float {
      animation: float 2s ease-in-out infinite;
    }
  `}</style>
);