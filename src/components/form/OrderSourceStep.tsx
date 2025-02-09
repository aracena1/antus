
import React, { useState } from "react";
import { ChevronLeft, ArrowRight, Square, Triangle, Circle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface OrderSourceStepProps {
  onBack: () => void;
  selectedSource: string;
  onSourceChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const OrderSourceStep = ({
  onBack,
  selectedSource,
  onSourceChange,
  onSubmit,
}: OrderSourceStepProps) => {
  const [instagram, setInstagram] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (instagram.trim()) {
      setShowSuccess(true);
      onSubmit(e);
    }
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Green confetti - Left side */}
          <Square className="w-4 h-4 text-[#1C999F] animate-confetti-slow absolute left-[10%] top-full" />
          <Triangle className="w-5 h-5 text-[#F2FCE2] animate-confetti-medium absolute left-[20%] top-full" />
          <Circle className="w-3 h-3 text-[#1C999F] animate-confetti-fast absolute left-[30%] top-full" />
          <Square className="w-6 h-6 text-[#F2FCE2] animate-confetti-slow absolute left-[40%] top-full" />
          <Triangle className="w-4 h-4 text-[#1C999F] animate-confetti-medium absolute left-[50%] top-full" />
          
          {/* Orange confetti - Right side */}
          <Square className="w-5 h-5 text-[#F97316] animate-confetti-fast absolute right-[10%] top-full" />
          <Circle className="w-4 h-4 text-[#FEF7CD] animate-confetti-slow absolute right-[20%] top-full" />
          <Triangle className="w-6 h-6 text-[#F97316] animate-confetti-medium absolute right-[30%] top-full" />
          <Square className="w-3 h-3 text-[#FEF7CD] animate-confetti-fast absolute right-[40%] top-full" />
          <Circle className="w-5 h-5 text-[#F97316] animate-confetti-slow absolute right-[50%] top-full" />

          {/* Additional confetti pieces */}
          <Square className="w-4 h-4 text-[#1C999F] animate-confetti-slow-2 absolute left-[15%] top-full" />
          <Triangle className="w-5 h-5 text-[#F2FCE2] animate-confetti-medium-2 absolute left-[25%] top-full" />
          <Circle className="w-3 h-3 text-[#F97316] animate-confetti-fast-2 absolute left-[35%] top-full" />
          <Square className="w-6 h-6 text-[#FEF7CD] animate-confetti-slow-2 absolute left-[45%] top-full" />
          <Triangle className="w-4 h-4 text-[#1C999F] animate-confetti-medium-2 absolute right-[15%] top-full" />
          <Circle className="w-5 h-5 text-[#F97316] animate-confetti-fast-2 absolute right-[25%] top-full" />
          <Square className="w-3 h-3 text-[#FEF7CD] animate-confetti-slow-2 absolute right-[35%] top-full" />
          <Triangle className="w-4 h-4 text-[#1C999F] animate-confetti-medium-2 absolute right-[45%] top-full" />
        </div>
        <div className="animate-scale-in relative z-10">
          <h1 className="text-[40px] leading-[1.15] font-normal text-black text-center">
            ¡Felicitaciones!
          </h1>
          <p className="text-gray-500 text-xl text-center max-w-md mt-4">
            Tu desodorante está agendado. Coméntale a tu asesor en Instagram.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full">
        <button
          type="button"
          onClick={onBack}
          className="absolute -left-4 -top-12 p-2 text-black/60 hover:text-black transition-colors"
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <div className="text-left">
          <div className="flex items-baseline gap-2">
            <h1 className="text-[40px] leading-[1.15] font-normal text-black mb-8">
              Cómo te encontramos en instagram?
            </h1>
            <span className="text-[#FF3366] text-2xl">*</span>
          </div>
          <p className="text-gray-500 text-lg mb-8">
            (Si no logramos comunicarnos contigo vía celular, te escribiremos por este medio)
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="@usuario"
            className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#1C999F] focus:ring-0 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={!instagram.trim()}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
            ${
              instagram.trim()
                ? "bg-[#1C999F] hover:bg-[#1C999F]/90 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default OrderSourceStep;
