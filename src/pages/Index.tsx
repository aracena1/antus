
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { toast } = useToast();

  const validatePhone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleanedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isPhoneValid = phone.length === 10;
    setIsValid(isPhoneValid);
    
    if (isPhoneValid) {
      toast({
        title: "Número registrado",
        description: "Te contactaremos pronto",
      });
    }
  };

  const formatPhone = (value: string) => {
    if (!value) return "(57) 3195650368";
    return `(57) ${value}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Bienvenida, necesitamos tu celular
          </h1>
          <p className="text-gray-600">
            Lo necesitamos para avisarte de la entrega de tu tarjeta.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Input
                type="tel"
                value={formatPhone(phone)}
                onChange={(e) => validatePhone(e.target.value.slice(5))}
                className={`block w-full h-14 text-lg pl-4 pr-10 rounded-xl border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all ${
                  phone ? 'text-emerald-500' : 'text-gray-400'
                }`}
                placeholder="(57) Ingresa tu número"
              />
              {phone && !isValid && (
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                  !
                </span>
              )}
            </div>
            
            {phone && !isValid && (
              <p className="text-red-500 text-sm mt-1">
                Por favor ingresa un número válido de 10 dígitos
              </p>
            )}
            {!phone && (
              <p className="text-gray-400 text-sm mt-1">
                ¿Ese sí es tu celular? revísalo para seguir
              </p>
            )}
          </div>

          <Button
            type="submit"
            className={`w-full h-14 text-lg ${
              phone.length === 10
                ? "bg-emerald-500 hover:bg-emerald-600"
                : "bg-gray-300 hover:bg-gray-400"
            } text-white rounded-xl transition-all duration-200 ease-in-out`}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
