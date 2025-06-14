
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import StreetTypeMenu from "@/components/StreetTypeMenu";

interface StreetTypeStepProps {
  streetType: string;
  onBack: () => void;
  onStreetTypeChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  selectedCity: string;
}

const StreetTypeStep = ({
  streetType,
  onBack,
  onStreetTypeChange,
  onSubmit,
  selectedCity,
}: StreetTypeStepProps) => {
  const handleStreetTypeSelect = (value: string) => {
    onStreetTypeChange(value);
  };

  const isSelected = streetType !== "" && streetType !== "elige-tipo-de-via";

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
            ¿Y en qué parte de {selectedCity}?
          </h1>
          <p className="text-xl text-gray-500">
            Danos la dirección completa para que el desodorante sí llegue
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-600 mb-2 text-lg">
            Tipo de vía
          </label>
          <StreetTypeMenu 
            onStreetTypeSelect={handleStreetTypeSelect}
            selectedStreetType={streetType}
          />
        </div>

        {isSelected && (
          <Button 
            type="submit"
            className="w-full h-14 text-lg bg-[#1C999F] hover:bg-[#1C999F]/90"
          >
            Continuar
          </Button>
        )}
      </form>
    </>
  );
};

export default StreetTypeStep;

