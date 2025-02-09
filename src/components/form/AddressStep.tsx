
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import MainMenu from "@/components/MainMenu";
import CityMenu from "@/components/CityMenu";

interface AddressStepProps {
  formData: {
    departamento: string;
    ciudad: string;
    barrio: string;
  };
  availableCities: string[];
  isCitySelected: boolean;
  onBack: () => void;
  onDepartmentChange: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCityChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddressStep = ({
  formData,
  availableCities,
  isCitySelected,
  onBack,
  onDepartmentChange,
  onChange,
  onCityChange,
  onSubmit,
}: AddressStepProps) => {
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

        <div className="text-left mb-8 mt-8">
          <h1 className="text-3xl font-medium text-black mb-2 leading-tight">
            ¿A dónde quieres que llegue tu desodorante?
          </h1>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-600 mb-2 text-lg">
              Departamento
            </label>
            <MainMenu onDepartmentSelect={onDepartmentChange} />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 text-lg">
              Ciudad o pueblo
            </label>
            <CityMenu 
              onCitySelect={onCityChange}
              availableCities={availableCities}
              selectedCity={formData.ciudad}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 text-lg">Barrio</label>
            <Input
              type="text"
              name="barrio"
              value={formData.barrio}
              onChange={onChange}
              className={`block w-full h-16 text-xl font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                formData.barrio
                  ? "text-[#1C999F] border-[#1C999F]"
                  : "text-gray-900 border-gray-200"
              }`}
              placeholder="Escribe tu barrio"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className={`w-full h-14 text-lg ${
            formData.departamento && formData.ciudad && formData.barrio
              ? "bg-[#1C999F] hover:bg-[#158589]"
              : "bg-gray-300 cursor-not-allowed"
          } text-white rounded-xl transition-all duration-200 ease-in-out mt-4`}
          disabled={!formData.departamento || !formData.ciudad || !formData.barrio}
        >
          Continuar
        </Button>
      </form>
    </>
  );
};

export default AddressStep;
