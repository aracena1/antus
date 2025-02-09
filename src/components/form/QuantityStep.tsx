
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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

interface QuantityStepProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const QuantityStep = ({ quantity, onQuantityChange, onBack, onSubmit }: QuantityStepProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const quantities = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm w-full max-w-md mx-auto">
      <Button
        variant="ghost"
        className="mb-6 hover:bg-transparent p-0 hover:opacity-70"
        onClick={onBack}
      >
        <ArrowLeft className="h-6 w-6 text-[#1C999F]" />
      </Button>

      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-medium mb-2">Cantidad</h1>
            <p className="text-gray-500">
              Indica las unidades de desodorantes que pediste
            </p>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="w-full h-16 text-xl border-2 rounded-xl text-left px-4 flex items-center justify-between text-[#1C999F] border-[#1C999F]"
              >
                <span>{quantity}</span>
                <ChevronRight className="h-6 w-6" />
              </button>
            </DialogTrigger>
            <DialogContent className="w-full h-full max-w-full p-0 border-none bg-white">
              <div className="relative min-h-screen">
                <div className="px-8 py-6 border-b">
                  <DialogTitle className="text-2xl font-medium">
                    Selecciona la cantidad
                  </DialogTitle>
                </div>
                <ScrollArea className="h-[calc(100vh-100px)]">
                  <div className="space-y-2">
                    <RadioGroup value={quantity.toString()} onValueChange={(value) => {
                      onQuantityChange(parseInt(value));
                      setIsOpen(false);
                    }}>
                      {quantities.map((num) => (
                        <div
                          key={num}
                          className="flex items-center space-x-4 w-full border-b py-4 px-8 hover:bg-gray-50 transition-colors"
                        >
                          <RadioGroupItem
                            value={num.toString()}
                            id={`quantity-${num}`}
                            className="text-[#1C999F] border-[#1C999F]"
                          />
                          <Label
                            htmlFor={`quantity-${num}`}
                            className="text-2xl font-normal flex-1 cursor-pointer"
                          >
                            {num}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-8">
          <Button
            type="submit"
            className="w-full bg-[#1C999F] text-white rounded-xl h-14 text-xl hover:bg-[#1C999F]/90 transition-colors"
          >
            Continuar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuantityStep;
