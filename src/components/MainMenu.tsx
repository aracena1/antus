
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ChevronRight, X } from "lucide-react";

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
        <div className="relative min-h-screen p-8">
          <DialogClose className="absolute right-8 top-8 bg-[#F3EDF7] rounded-full p-4 hover:bg-[#E8DEF8] transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          
          <div className="mt-20 space-y-6">
            <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
              Antioquia
            </button>
            <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
              Bogotá, D.C.
            </button>
            <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
              Valle del Cauca
            </button>
            <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
              Atlántico
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainMenu;
