import { useValentineStore } from "../store/valentineStore";

export const LoveLetter: React.FC = () => {
  const { saidYes } = useValentineStore();

  if (!saidYes) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/letter-to-her.pdf";
    link.download = "My-Love-Letter-To-Shruti.pdf";
    link.click();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/70 backdrop-blur-sm pointer-events-auto p-4">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-4 md:p-6 w-full h-full max-w-7xl shadow-2xl border-4 border-amber-300 overflow-hidden flex flex-col">
        <div className="text-center mb-3">
          <h2
            className="text-3xl md:text-4xl font-bold text-amber-900 mb-1"
            style={{ fontFamily: "Georgia, serif" }}
          >
            💌 A Letter From My Heart 💌
          </h2>
          <p className="text-amber-700 text-base md:text-lg">For you, Shruti</p>
        </div>

        <div className="flex-1 overflow-auto mb-3 border-4 border-amber-200 rounded-xl bg-white">
          <iframe
            src="/letter-to-her.pdf"
            className="w-full h-full"
            title="Love Letter"
          />
        </div>

        <button
          onClick={handleDownload}
          className="w-full py-3 md:py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.6)",
          }}
        >
          📥 Download My Letter
        </button>
      </div>
    </div>
  );
};
