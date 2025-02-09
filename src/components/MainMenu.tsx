
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <ScrollArea className="h-screen px-8">
            <div className="mt-20 space-y-6 pb-8">
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
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Santander
              </button>
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Cundinamarca
              </button>
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Bolívar
              </button>
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Risaralda
              </button>
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Caldas
              </button>
              <button className="w-full text-left px-4 py-6 hover:bg-gray-50 rounded-lg transition-colors border-b text-4xl font-normal">
                Tolima
              </button>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MainMenu;
