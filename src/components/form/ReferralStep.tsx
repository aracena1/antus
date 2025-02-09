
import React from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ReferralStepProps {
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedReferral: string;
  onReferralChange: (value: string) => void;
}

const ReferralStep = ({
  onBack,
  onSubmit,
  selectedReferral,
  onReferralChange,
}: ReferralStepProps) => {
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
              Esta orden es gracias a
            </h1>
            <span className="text-[#FF3366] text-2xl">*</span>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <RadioGroup
          value={selectedReferral}
          onValueChange={onReferralChange}
          className="gap-4"
        >
          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedReferral === "publicidad"
                  ? "bg-[#FFE5D9] border-2 border-[#1C999F]"
                  : "bg-[#FFE5D9]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="publicidad" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">UNA PUBLICIDAD</span>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedReferral === "recomendacion"
                  ? "bg-[#E9E3FF] border-2 border-[#1C999F]"
                  : "bg-[#E9E3FF]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="recomendacion" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">ME LO RECOMENDARON</span>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedReferral === "comprado_antes"
                  ? "bg-[#D3E4FD] border-2 border-[#1C999F]"
                  : "bg-[#D3E4FD]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="comprado_antes" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">YA HE COMPRADO ANTES</span>
          </label>
        </RadioGroup>

        <button
          type="submit"
          disabled={!selectedReferral}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
            ${
              selectedReferral
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

export default ReferralStep;
