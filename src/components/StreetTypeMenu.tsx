
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
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
    if (selectedType && value !== "elige-tipo-de-via") {
      onStreetTypeSelect(value);
      setIsOpen(false);
    }
  };

  const getDisplayStreetType = () => {
    const type = streetTypes.find(
      type => type.toLowerCase().replace(/,?\s+/g, '-') === selectedStreetType
    );
    return type || "Calle, Carrera, Manzana...";
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
        <div className="relative min-h-screen">
          <div className="px-8 py-6 border-b">
            <DialogTitle className="text-2xl font-medium">¿Cómo empieza tu dirección?</DialogTitle>
          </div>
          <ScrollArea className="h-[calc(100vh-100px)]">
            <div className="space-y-2">
              <RadioGroup 
                defaultValue="elige-tipo-de-via"
                value={selectedStreetType}
                onValueChange={handleStreetTypeSelect}
              >
                {streetTypes.slice(1).map((type) => (
                  <div 
                    key={type} 
                    className="flex items-center space-x-4 w-full border-b py-4 px-8 hover:bg-gray-50 transition-colors"
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
