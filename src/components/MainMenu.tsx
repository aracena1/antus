
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { X, ChevronDown, ArrowRight } from "lucide-react";

const MainMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2">Menu</button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 bg-white">
        <div className="min-h-screen flex flex-col">
          {/* Header with logo and close button */}
          <div className="flex justify-between items-center p-6">
            <div className="text-[#9b87f5] text-4xl font-bold">
              nu
            </div>
            <Sheet.Close className="rounded-full p-3 bg-[#f5f0ff] hover:bg-[#ede5ff] transition-colors">
              <X className="h-6 w-6 text-[#1A1F2C]" />
            </Sheet.Close>
          </div>

          {/* Menu items */}
          <nav className="flex-1 px-6">
            <ul className="space-y-8 mt-12">
              <li>
                <a href="/" className="text-[#1A1F2C] text-4xl font-bold hover:text-[#9b87f5] transition-colors flex items-center">
                  Inicio
                </a>
              </li>
              <li>
                <button className="text-[#1A1F2C] text-4xl font-bold hover:text-[#9b87f5] transition-colors flex items-center justify-between w-full group">
                  Para ti
                  <ChevronDown className="h-8 w-8 text-[#1A1F2C] group-hover:text-[#9b87f5] transition-colors" />
                </button>
              </li>
              <li>
                <a href="/nosotros" className="text-[#1A1F2C] text-4xl font-bold hover:text-[#9b87f5] transition-colors flex items-center justify-between group">
                  Nosotros
                  <ArrowRight className="h-8 w-8 text-[#1A1F2C] group-hover:text-[#9b87f5] transition-colors" />
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[#1A1F2C] text-4xl font-bold hover:text-[#9b87f5] transition-colors flex items-center justify-between group">
                  Blog
                  <ArrowRight className="h-8 w-8 text-[#1A1F2C] group-hover:text-[#9b87f5] transition-colors" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MainMenu;
