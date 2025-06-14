
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronDown, ArrowRight } from "lucide-react";
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
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [complement, setComplement] = useState("");
  const streetTypes = ["Calle", "Carrera", "Circunvalar", "Diagonal", "Transversal"];

  const getDisplayStreetType = () => {
    return streetTypes.find(
      type => type.toLowerCase() === selectedStreetType
    ) || selectedStreetType;
  };

  const isFormComplete = () => {
    return streetNumber && address1 && address2;
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
          <h1 className="text-[40px] leading-[1.15] font-normal mb-8">
            ¿Y en qué parte de Medellín?
          </h1>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-4">
          <div>
            <label className="block text-[#666666]/80 text-lg mb-1">
              Tipo de vía
            </label>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex-1 h-12 px-4 text-xl text-left border rounded-xl hover:border-[#1C999F] transition-colors">
                  <div className="flex items-center justify-between">
                    <span>{getDisplayStreetType()}</span>
                    <ChevronDown className="ml-2 h-5 w-5" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                  {streetTypes.map((type) => (
                    <DropdownMenuItem 
                      key={type}
                      className="text-lg py-2 cursor-pointer"
                    >
                      {type}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="w-px h-8 bg-[#1C999F]" />

              <div className="flex-1">
                <Input
                  type="text"
                  value={streetNumber}
                  onChange={(e) => setStreetNumber(e.target.value)}
                  className="h-12 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#1C999F] focus:ring-[#1C999F] transition-all bg-white pl-4 placeholder:text-[#666666]/40"
                  placeholder="30A"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[#666666]/80 text-lg mb-1">
              Segunda parte de tu dirección
            </label>
            <div className="flex gap-4 items-center">
              <span className="text-[#1C999F] text-xl font-medium">#</span>
              <Input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="h-12 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#1C999F] focus:ring-[#1C999F] transition-all bg-white pl-4 placeholder:text-[#666666]/40"
                placeholder="10B"
              />
              <span className="text-[#1C999F] text-xl font-medium">-</span>
              <Input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="h-12 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#1C999F] focus:ring-[#1C999F] transition-all bg-white pl-4 placeholder:text-[#666666]/40"
                placeholder="30"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#666666]/80 text-lg mb-1">
              Completa tu dirección (opcional)
            </label>
            <Input
              type="text"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              className="h-12 text-xl font-normal rounded-xl border border-[#E5E7EB] focus:border-[#1C999F] focus:ring-[#1C999F] transition-all bg-white pl-4 placeholder:text-[#666666]/40"
              placeholder="Casa 5, apto 204"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormComplete()}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
            ${isFormComplete() 
              ? 'bg-[#1C999F] hover:bg-[#1C999F]/90 text-white' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default StreetDetailsStep;

