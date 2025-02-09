
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

const MainMenu = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full h-16 text-xl border-2 rounded-xl text-gray-400 text-left px-4 flex items-center justify-between">
          <span>Elige un departamento</span>
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[400px] p-0">
        <div className="p-4">
          <h2 className="text-xl font-medium">Selecciona un departamento</h2>
          <div className="mt-4 space-y-2">
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
              Antioquia
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
              Bogotá, D.C.
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
              Valle del Cauca
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors">
              Atlántico
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainMenu;
