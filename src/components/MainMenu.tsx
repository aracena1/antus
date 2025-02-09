
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const MainMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const departments = [
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
  ];

  const filteredDepartments = departments.filter(dept =>
    dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="sticky top-0 bg-white px-8 pt-6 pb-4 border-b z-10">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar departamento..."
                className="pl-10 pr-4 py-2 w-full border-2 rounded-xl focus:outline-none focus:border-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-100px)] px-8">
            <div className="space-y-2">
              <RadioGroup defaultValue="antioquia">
                {filteredDepartments.map((department) => (
                  <div 
                    key={department} 
                    className="flex items-center space-x-4 w-full border-b py-4 px-2 hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem 
                      value={department.toLowerCase()} 
                      id={department} 
                      className="text-gray-600 border-gray-400"
                    />
                    <Label 
                      htmlFor={department} 
                      className="text-2xl font-normal flex-1 cursor-pointer"
                    >
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
