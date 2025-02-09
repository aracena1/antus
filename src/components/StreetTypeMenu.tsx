
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface StreetTypeMenuProps {
  onStreetTypeSelect: (value: string) => void;
  selectedStreetType: string;
}

const StreetTypeMenu = ({ onStreetTypeSelect, selectedStreetType }: StreetTypeMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const streetTypes = [
    "Elige tipo de vía",
    "Calle",
    "Carrera",
    "Circunvalar",
    "Diagonal",
    "Transversal"
  ];

  const handleStreetTypeSelect = (value: string) => {
    const selectedType = streetTypes.find(
      type => type.toLowerCase().replace(/,?\s+/g, '-') === value
    );
    if (selectedType) {
      onStreetTypeSelect(value);
      setIsOpen(false);
    }
  };

  const getDisplayStreetType = () => {
    const type = streetTypes.find(
      type => type.toLowerCase().replace(/,?\s+/g, '-') === selectedStreetType
    );
    return type || "Elige tipo de vía";
  };

  const isSelected = selectedStreetType !== "elige-tipo-de-via";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button 
          className={`w-full h-16 text-xl border-2 rounded-xl text-left px-4 flex items-center justify-between ${
            isSelected 
              ? "text-[#1C999F] border-[#1C999F]" 
              : "text-gray-400 border-gray-200"
          }`}
        >
          <span>{getDisplayStreetType()}</span>
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-full p-0 border-none bg-white">
        <DialogTitle className="sr-only">Seleccionar Tipo de Vía</DialogTitle>
        <div className="relative min-h-screen">
          <DialogClose className="absolute right-2 top-2 z-10">
            <div className="bg-[#1C999F]/40 rounded-full p-4 hover:bg-[#1C999F]/60 transition-colors">
              <X className="h-6 w-6 text-white" />
            </div>
          </DialogClose>
          <ScrollArea className="h-[calc(100vh-32px)] px-8 pt-6">
            <div className="space-y-2">
              <RadioGroup 
                value={selectedStreetType}
                onValueChange={handleStreetTypeSelect}
              >
                {streetTypes.map((type) => (
                  <div 
                    key={type} 
                    className="flex items-center space-x-4 w-full border-b py-4 px-2 hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem 
                      value={type.toLowerCase().replace(/,?\s+/g, '-')} 
                      id={type} 
                      className="text-[#1C999F] border-[#1C999F]"
                    />
                    <Label 
                      htmlFor={type} 
                      className="text-2xl font-normal flex-1 cursor-pointer"
                    >
                      {type}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StreetTypeMenu;
