
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    nombres: "",
    primerApellido: "",
  });
  const { toast } = useToast();

  const validatePhone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleanedValue);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isPhoneValid = phone.length === 10;
    setIsValid(isPhoneValid);
    
    if (isPhoneValid) {
      toast({
        title: "Número registrado",
        description: "Te contactaremos pronto",
      });
      setStep(2);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombres && formData.primerApellido) {
      toast({
        title: "Datos registrados",
        description: "Gracias por completar el formulario",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isNameFormComplete = formData.nombres && formData.primerApellido;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="relative w-full">
          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            {step === 1 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Bienvenida
                  </h1>
                  <p className="text-gray-600 text-lg">
                    Necesitamos tu celular para avisarte de la entrega del desodorante.
                  </p>
                </div>

                <form onSubmit={handlePhoneSubmit} className="mt-8 space-y-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-3xl pointer-events-none font-medium" style={{ color: '#1C999F' }}>
                        (57)
                      </div>
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => validatePhone(e.target.value)}
                        style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                        className={`block w-full h-20 font-medium pl-24 pr-10 rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                          phone ? 'text-[#1C999F]' : 'text-gray-900'
                        }`}
                        placeholder="319 565 0368"
                        autoFocus
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
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 2 && (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Tu nombre completo
                  </h1>
                </div>

                <form onSubmit={handleNameSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xl font-medium text-gray-900 mb-2">
                        Nombre
                      </label>
                      <Input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleInputChange}
                        style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                        className={`block w-full h-20 font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                          formData.nombres ? 'text-[#1C999F]' : 'text-gray-900'
                        }`}
                        placeholder="Escribe tu nombre"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xl font-medium text-gray-900 mb-2">
                        Apellido
                      </label>
                      <Input
                        type="text"
                        name="primerApellido"
                        value={formData.primerApellido}
                        onChange={handleInputChange}
                        style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                        className={`block w-full h-20 font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                          formData.primerApellido ? 'text-[#1C999F]' : 'text-gray-900'
                        }`}
                        placeholder="Escribe tu apellido"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full h-14 text-lg ${
                      isNameFormComplete
                        ? "bg-[#1C999F] hover:bg-[#158589]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white rounded-xl transition-all duration-200 ease-in-out mt-4`}
                    disabled={!isNameFormComplete}
                  >
                    Continuar
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
