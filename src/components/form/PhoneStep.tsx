
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PhoneStepProps {
  phone: string;
  validatePhone: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const PhoneStep = ({ phone, validatePhone, onSubmit }: PhoneStepProps) => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Bienvenida</h1>
        <p className="text-gray-600 text-lg">
          Necesitamos tu celular para avisarte de la entrega del desodorante.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <div className="relative">
            <div
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl pointer-events-none font-medium"
              style={{ color: "#1C999F" }}
            >
              (57)
            </div>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => validatePhone(e.target.value)}
              style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}
              className={`block w-full h-20 font-medium pl-24 pr-10 rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                phone ? "text-[#1C999F]" : "text-gray-900"
              }`}
              placeholder="319 565 0368"
              autoFocus
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full h-14 text-lg ${
            phone.length === 10
              ? "bg-[#1C999F] hover:bg-[#158589]"
              : "bg-gray-300 hover:bg-gray-400"
          } text-white rounded-xl transition-all duration-200 ease-in-out`}
        >
          Continuar
        </Button>
      </form>
    </>
  );
};

export default PhoneStep;

