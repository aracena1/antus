
import React from "react";
import { ChevronLeft, ArrowRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentMethodStepProps {
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedMethod: string;
  onMethodChange: (value: string) => void;
}

const PaymentMethodStep = ({
  onBack,
  onSubmit,
  selectedMethod,
  onMethodChange,
}: PaymentMethodStepProps) => {
  const handleMethodChange = (value: string) => {
    onMethodChange(value);
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
              Método de Pago
            </h1>
            <span className="text-[#FF3366] text-2xl">*</span>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <RadioGroup
          value={selectedMethod}
          onValueChange={handleMethodChange}
          className="gap-4"
        >
          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedMethod === "transfer"
                  ? "bg-[#D3E4FD] border-2 border-[#1C999F]"
                  : "bg-[#D3E4FD]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="transfer" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">Ya pagué por transferencia</span>
          </label>

          <label
            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all
              ${
                selectedMethod === "cash"
                  ? "bg-[#F2FCE2] border-2 border-[#1C999F]"
                  : "bg-[#F2FCE2]/50 border-2 border-transparent hover:border-[#1C999F]/30"
              }`}
          >
            <RadioGroupItem value="cash" className="data-[state=checked]:border-[#1C999F] data-[state=checked]:text-[#1C999F]" />
            <span className="text-xl">Voy a pagar contraentrega</span>
          </label>
        </RadioGroup>

        {selectedMethod && (
          <button
            type="submit"
            disabled={!selectedMethod}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
              ${
                selectedMethod
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

export default PaymentMethodStep;
