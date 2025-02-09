
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronRight, Search, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface MainMenuProps {
  onDepartmentSelect: (value: string) => void;
}

const MainMenu = ({ onDepartmentSelect }: MainMenuProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("elige-un-departamento");
  const [isOpen, setIsOpen] = useState(false);
  
  const departments = [
    "Elige un departamento",
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

  const handleDepartmentSelect = (value: string) => {
    const selectedDept = departments.find(
      dept => dept.toLowerCase().replace(/,?\s+/g, '-') === value
    );
    if (selectedDept) {
      setSelectedDepartment(value);
      onDepartmentSelect(value);
      setIsOpen(false);
    }
  };

  const getDisplayDepartment = () => {
    const dept = departments.find(
      dept => dept.toLowerCase().replace(/,?\s+/g, '-') === selectedDepartment
    );
    return dept || "Elige un departamento";
  };

  const isSelected = selectedDepartment !== "elige-un-departamento";

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
          <span>{getDisplayDepartment()}</span>
          <ChevronRight className="h-6 w-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full h-full max-w-full p-0 border-none bg-white">
        <DialogTitle className="sr-only">Seleccionar Departamento</DialogTitle>
        <div className="relative min-h-screen">
          <DialogClose className="absolute right-6 top-6 z-10">
            <div className="bg-[#1C999F] rounded-full p-4 hover:opacity-90 transition-colors">
              <X className="h-6 w-6 text-white" />
            </div>
          </DialogClose>
          <div className="sticky top-0 bg-white px-8 pt-6 pb-4 border-b z-10">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar departamento..."
                className="pl-10 pr-4 py-2 w-full border-2 rounded-xl focus:outline-none focus:border-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-100px)] px-8">
            <div className="space-y-2 mt-4">
              <RadioGroup 
                value={selectedDepartment}
                onValueChange={handleDepartmentSelect}
              >
                {filteredDepartments.map((department) => (
                  <div 
                    key={department} 
                    className="flex items-center space-x-4 w-full border-b py-4 px-2 hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem 
                      value={department.toLowerCase().replace(/,?\s+/g, '-')} 
                      id={department} 
                      className="text-[#1C999F] border-[#1C999F]"
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
