
import React, { useState } from "react";
import { ChevronLeft, ArrowRight, Square, Triangle, Circle, Star } from "lucide-react";
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
    setShowSuccess(true);
    onSubmit(e);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="fixed inset-0 pointer-events-none">
          {/* Left side confetti */}
          <Square className="w-3 h-3 text-[#8B5CF6] animate-confetti-slow absolute left-[5%] -top-20" />
          <Triangle className="w-4 h-4 text-[#D946EF] animate-confetti-medium absolute left-[15%] -top-20" />
          <Circle className="w-2 h-2 text-[#F97316] animate-confetti-fast absolute left-[25%] -top-20" />
          <Star className="w-5 h-5 text-[#0EA5E9] animate-confetti-slow absolute left-[35%] -top-20" />
          <Square className="w-3 h-3 text-[#ea384c] animate-confetti-medium absolute left-[45%] -top-20" />
          
          {/* Right side confetti */}
          <Triangle className="w-4 h-4 text-[#8B5CF6] animate-confetti-fast absolute right-[5%] -top-20" />
          <Circle className="w-3 h-3 text-[#D946EF] animate-confetti-slow absolute right-[15%] -top-20" />
          <Square className="w-5 h-5 text-[#F97316] animate-confetti-medium absolute right-[25%] -top-20" />
          <Star className="w-2 h-2 text-[#0EA5E9] animate-confetti-fast absolute right-[35%] -top-20" />
          <Triangle className="w-4 h-4 text-[#ea384c] animate-confetti-slow absolute right-[45%] -top-20" />

          {/* Second wave */}
          <Circle className="w-3 h-3 text-[#8B5CF6] animate-confetti-slow-2 absolute left-[10%] -top-20" />
          <Square className="w-4 h-4 text-[#D946EF] animate-confetti-medium-2 absolute left-[20%] -top-20" />
          <Triangle className="w-2 h-2 text-[#F97316] animate-confetti-fast-2 absolute left-[30%] -top-20" />
          <Star className="w-5 h-5 text-[#0EA5E9] animate-confetti-slow-2 absolute left-[40%] -top-20" />
          <Circle className="w-3 h-3 text-[#8B5CF6] animate-confetti-medium-2 absolute right-[10%] -top-20" />
          <Square className="w-4 h-4 text-[#F97316] animate-confetti-fast-2 absolute right-[20%] -top-20" />
          <Triangle className="w-2 h-2 text-[#D946EF] animate-confetti-slow-2 absolute right-[30%] -top-20" />
          <Star className="w-5 h-5 text-[#ea384c] animate-confetti-medium-2 absolute right-[40%] -top-20" />

          {/* Third wave */}
          <Square className="w-3 h-3 text-[#8B5CF6] animate-confetti-slow-3 absolute left-[7%] -top-20" />
          <Triangle className="w-4 h-4 text-[#D946EF] animate-confetti-medium-3 absolute left-[17%] -top-20" />
          <Circle className="w-2 h-2 text-[#F97316] animate-confetti-fast-3 absolute left-[27%] -top-20" />
          <Star className="w-5 h-5 text-[#0EA5E9] animate-confetti-slow-3 absolute left-[37%] -top-20" />
          <Square className="w-3 h-3 text-[#8B5CF6] animate-confetti-medium-3 absolute right-[7%] -top-20" />
          <Triangle className="w-4 h-4 text-[#F97316] animate-confetti-fast-3 absolute right-[17%] -top-20" />
          <Circle className="w-2 h-2 text-[#D946EF] animate-confetti-slow-3 absolute right-[27%] -top-20" />
          <Star className="w-5 h-5 text-[#ea384c] animate-confetti-medium-3 absolute right-[37%] -top-20" />

          {/* Center confetti */}
          <Square className="w-3 h-3 text-[#8B5CF6] animate-confetti-slow absolute left-[50%] -top-20" />
          <Circle className="w-4 h-4 text-[#F97316] animate-confetti-medium-2 absolute left-[55%] -top-20" />
          <Triangle className="w-2 h-2 text-[#D946EF] animate-confetti-fast-3 absolute left-[60%] -top-20" />
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
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto bg-[#1C999F] hover:bg-[#1C999F]/90 text-white"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default OrderSourceStep;

