
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

interface NameStepProps {
  nombreCompleto: string;
  onBack: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const NameStep = ({ nombreCompleto, onBack, onChange, onSubmit }: NameStepProps) => {
  // Ahora el botón se habilitará con cualquier entrada de texto
  const isNameComplete = nombreCompleto.trim().length > 0;

  return (
    <>
      <div className="relative w-full">
        <button
          type="button"
          onClick={onBack}
          className="absolute -left-4 -top-16 p-2 text-black/60 hover:text-black transition-colors"
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <div className="text-left mb-4 mt-4">
          <h1 className="text-3xl font-medium text-black mb-2 leading-tight">
            Tu Nombre y Apellido
          </h1>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Input
              type="text"
              name="nombreCompleto"
              value={nombreCompleto}
              onChange={onChange}
              style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}
              className={`block w-full h-20 font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                nombreCompleto ? "text-[#1C999F]" : "text-gray-900"
              }`}
              placeholder="Nombre y Apellido"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full h-14 text-lg ${
            isNameComplete
              ? "bg-[#1C999F] hover:bg-[#158589]"
              : "bg-gray-300 cursor-not-allowed"
          } text-white rounded-xl transition-all duration-200 ease-in-out mt-4`}
          disabled={!isNameComplete}
        >
          Continuar
        </Button>
      </form>
    </>
  );
};

export default NameStep;
