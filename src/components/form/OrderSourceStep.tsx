
import React from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
          value={selectedSource}
          onValueChange={onSourceChange}
          className="gap-4"
        >
          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedSource === "publicidad"
                  ? "bg-[#FDE1D3] border-2 border-[#1C999F]"
                  : "bg-[#FDE1D3]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="publicidad" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">Una publicidad</span>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedSource === "recomendacion"
                  ? "bg-[#E5DEFF] border-2 border-[#1C999F]"
                  : "bg-[#E5DEFF]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="recomendacion" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">Me lo recomendaron</span>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedSource === "compra_anterior"
                  ? "bg-[#D3E4FD] border-2 border-[#1C999F]"
                  : "bg-[#D3E4FD]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="compra_anterior" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">Ya he comprado antes</span>
          </label>
        </RadioGroup>

        {selectedSource && (
          <button
            type="submit"
            disabled={!selectedSource}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
              ${
                selectedSource
                  ? "bg-[#1C999F] hover:bg-[#1C999F]/90 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        )}
      </form>
    </>
  );
};

export default OrderSourceStep;

