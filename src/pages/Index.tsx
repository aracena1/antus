
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const validatePhone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleanedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = phone.length === 10;
    
    if (isValid) {
      toast({
        title: "Número registrado",
        description: "Te contactaremos pronto",
      });
    } else {
      toast({
        title: "Número inválido",
        description: "Por favor ingresa un número válido de 10 dígitos",
        variant: "destructive"
      });
    }
  };

  const formatPhone = (value: string) => {
    if (!value) return "(57) ";
    return `(57) ${value}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Tu celular
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <div className="relative">
              <Input
                type="tel"
                value={formatPhone(phone)}
                onChange={(e) => validatePhone(e.target.value.slice(5))}
                className="block w-full h-14 text-lg pl-4 pr-10 rounded-xl border-gray-200 focus:border-green-500 focus:ring-green-500 transition-all"
                placeholder="(57) Ingresa tu número"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-200 ease-in-out"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Index;
