
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

interface StreetDetailsStepProps {
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedStreetType: string;
}

const StreetDetailsStep = ({
  onBack,
  onSubmit,
  selectedStreetType,
}: StreetDetailsStepProps) => {
  return (
    <>
      <div className="relative w-full">
        <button
          type="button"
          onClick={onBack}
          className="absolute -left-4 -top-16 p-2 text-black/60 hover:text-black transition-colors"
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <div className="text-left mb-8 mt-8">
          <h1 className="text-3xl font-medium text-black mb-2 leading-tight">
            ¿Y en qué parte de Medellín?
          </h1>
          <p className="text-xl text-gray-500">
            Danos la dirección completa para que la tarjeta sí llegue
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2 text-lg">
              {selectedStreetType}
            </label>
            <Input
              type="text"
              className="h-16 text-xl font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all"
              placeholder="30A"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 text-lg">
              Segunda parte de tu dirección
            </label>
            <div className="flex gap-4">
              <span className="flex items-center text-xl font-medium text-[#1C999F]">#</span>
              <Input
                type="text"
                className="h-16 text-xl font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all"
                placeholder="10B"
              />
              <span className="flex items-center text-xl font-medium text-[#1C999F]">-</span>
              <Input
                type="text"
                className="h-16 text-xl font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all"
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 mb-2 text-lg">
              Completa tu dirección
            </label>
            <Input
              type="text"
              className="h-16 text-xl font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all"
              placeholder="Casa 5, apto 204"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-14 text-lg bg-[#1C999F] hover:bg-[#158589] text-white rounded-xl transition-all duration-200 ease-in-out mt-4"
        >
          Continuar
        </Button>
      </form>
    </>
  );
};

export default StreetDetailsStep;
