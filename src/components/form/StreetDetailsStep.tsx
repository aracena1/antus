
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [streetNumber, setStreetNumber] = useState("");
  const streetTypes = ["Calle", "Carrera", "Circunvalar", "Diagonal", "Transversal"];

  const getDisplayStreetType = () => {
    return streetTypes.find(
      type => type.toLowerCase() === selectedStreetType
    ) || selectedStreetType;
  };

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

        <div className="text-left mb-12">
          <h1 className="text-4xl font-medium text-black mb-2 leading-tight">
            ¿Y en qué parte de Medellín?
          </h1>
          <p className="text-xl text-[#666666]/80">
            Danos la dirección completa para que el desodorante sí llegue
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="space-y-8">
          <div>
            <label className="block text-[#666666]/80 text-lg mb-2">
              Tipo de vía
            </label>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex-1 h-14 px-4 text-xl text-left border rounded-xl hover:border-[#9b87f5] transition-colors">
                  <div className="flex items-center justify-between">
                    <span>{getDisplayStreetType()}</span>
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  {streetTypes.map((type) => (
                    <DropdownMenuItem 
                      key={type}
                      className="text-lg py-3 cursor-pointer"
                    >
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="w-px h-8 bg-[#9b87f5]" />

              <div className="flex-1">
                <Input
                  type="text"
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                  className="h-14 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#9b87f5] focus:ring-[#9b87f5] transition-all bg-white pl-4"
                  placeholder="30A"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#666666]/80 text-lg mb-2">
              Segunda parte de tu dirección
            </label>
            <div className="flex gap-4 items-center">
              <span className="text-[#9b87f5] text-xl font-medium">#</span>
              <Input
                type="text"
                className="h-14 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#9b87f5] focus:ring-[#9b87f5] transition-all bg-white pl-4"
                placeholder="10B"
              />
              <span className="text-[#9b87f5] text-xl font-medium">-</span>
              <Input
                type="text"
                className="h-14 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#9b87f5] focus:ring-[#9b87f5] transition-all bg-white pl-4"
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#666666]/80 text-lg mb-2">
              Completa tu dirección
            </label>
            <Input
              type="text"
              className="h-14 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#9b87f5] focus:ring-[#9b87f5] transition-all bg-white pl-4"
              placeholder="Casa 5, apto 204"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-14 text-lg bg-[#9b87f5] hover:bg-[#7E69AB] text-white rounded-xl transition-all duration-200 ease-in-out mt-8"
        >
          Continuar
        </Button>
      </form>
    </>
  );
};

export default StreetDetailsStep;
