
import React, { useState } from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (instagram.trim()) {
      onSubmit(e);
    }
  };

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
