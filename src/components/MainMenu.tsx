
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronRight, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const MainMenu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full h-16 text-xl border-2 rounded-xl text-gray-400 text-left px-4 flex items-center justify-between">
          <span>Elige un departamento</span>
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-full p-0 border-none bg-white">
        <div className="relative min-h-screen">
          <DialogClose className="absolute right-6 top-6 z-10">
            <div className="bg-[#D6BCFA] rounded-full p-4 hover:bg-[#9b87f5] transition-colors">
              <X className="h-6 w-6" />
            </div>
          </DialogClose>
          <ScrollArea className="h-screen px-8">
            <div className="mt-20 space-y-2">
              <RadioGroup defaultValue="antioquia">
                {[
                  "Antioquia",
                  "Bogotá, D.C.",
                  "Valle del Cauca",
                  "Atlántico",
                  "Santander",
                  "Cundinamarca",
                  "Bolívar",
                  "Risaralda",
                  "Caldas",
                  "Tolima",
                ].map((department) => (
                  <div 
                    key={department} 
                    className="flex items-center space-x-4 w-full border-b py-4 px-2 hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem value={department.toLowerCase()} id={department} className="text-[#9b87f5] border-[#9b87f5]" />
                    <Label htmlFor={department} className="text-2xl font-normal flex-1 cursor-pointer">
                      {department}
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

export default MainMenu;
