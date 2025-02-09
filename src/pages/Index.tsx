import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft, Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const departmentCities: { [key: string]: string[] } = {
  antioquia: [
    "Medellín",
    "Abejorral",
    "Abriquí",
    "Alejandría",
    "Amagá",
    "Amalfi",
    "Andes",
    "Bello",
    "Envigado",
    "Itagüí",
    "Rionegro",
  ],
  bogota: ["Bogotá"],
  valle: [
    "Cali",
    "Palmira",
    "Buenaventura",
    "Buga",
    "Tuluá",
    "Cartago",
    "Jamundí",
    "Yumbo",
  ],
  atlantico: [
    "Barranquilla",
    "Soledad",
    "Malambo",
    "Sabanalarga",
    "Puerto Colombia",
    "Galapa",
  ],
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    departamento: "",
    ciudad: "",
    barrio: "",
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
      setStep(2);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nombreCompleto) {
      setStep(3);
    }
  };

  const handleCedulaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.cedula) {
      setStep(4);
    }
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.departamento && formData.ciudad && formData.barrio) {
      toast({
        title: "¡Registro exitoso!",
        description: "Te avisaremos cuando tu desodorante esté en camino",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'nombreCompleto') {
      if (value.endsWith(' ')) {
        const words = value.split(' ');
        const lastWord = words[words.length - 2];
        if (lastWord) {
          words[words.length - 2] = lastWord.charAt(0).toUpperCase() + lastWord.slice(1).toLowerCase();
          const newValue = words.join(' ');
          setFormData(prev => ({
            ...prev,
            [name]: newValue
          }));
          return;
        }
      }
    } else if (name === 'cedula') {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, name: string) => {
    if (name === 'departamento') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        ciudad: '' // Reset ciudad when departamento changes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const isNameComplete = formData.nombreCompleto;
  const isCedulaComplete = formData.cedula.length > 0;
  const isAddressComplete = formData.departamento && formData.ciudad && formData.barrio;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Phone step */}
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
            )}
          </div>

          {/* Name step */}
          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 2 && (
              <>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
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

                <form onSubmit={handleNameSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleInputChange}
                        style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                        className={`block w-full h-20 font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                          formData.nombreCompleto ? 'text-[#1C999F]' : 'text-gray-900'
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
            )}
          </div>

          {/* Cedula step */}
          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 3 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 3 && (
              <>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="absolute -left-4 -top-16 p-2 text-black/60 hover:text-black transition-colors"
                  >
                    <ChevronLeft size={36} strokeWidth={1.5} />
                  </button>
                  
                  <div className="text-left mb-4 mt-4">
                    <h1 className="text-3xl font-medium text-black mb-2 leading-tight">
                      Tu número de cédula
                    </h1>
                  </div>
                </div>

                <form onSubmit={handleCedulaSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="tel"
                      name="cedula"
                      value={formData.cedula}
                      onChange={handleInputChange}
                      style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}
                      className={`block w-full h-20 font-medium rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 placeholder:text-3xl placeholder:font-medium ${
                        formData.cedula ? 'text-[#1C999F]' : 'text-gray-900'
                      }`}
                      placeholder="Escribe tu cédula"
                      required
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>

                  <Button
                    type="submit"
                    className={`w-full h-14 text-lg ${
                      isCedulaComplete
                        ? "bg-[#1C999F] hover:bg-[#158589]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white rounded-xl transition-all duration-200 ease-in-out mt-4`}
                    disabled={!isCedulaComplete}
                  >
                    Continuar
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Address step */}
          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 4 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 4 && (
              <>
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
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

                <form onSubmit={handleAddressSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-600 mb-2 text-lg">Departamento</label>
                      <Select
                        onValueChange={(value) => handleSelectChange(value, 'departamento')}
                        value={formData.departamento}
                      >
                        <SelectTrigger 
                          className={`w-full h-16 text-xl font-normal rounded-xl ${
                            formData.departamento ? 'text-black border-[#1C999F]' : 'text-gray-400'
                          }`}
                        >
                          <SelectValue placeholder="Elige un departamento" />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-white p-0 rounded-2xl border-none shadow-lg"
                          style={{ width: 'var(--radix-select-trigger-width)' }}
                        >
                          <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100">
                            <p className="text-lg font-semibold text-black">Elige el departamento</p>
                          </div>
                          <div className="p-2 max-h-[300px] overflow-y-auto">
                            <SelectItem value="antioquia" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Antioquia</SelectItem>
                            <SelectItem value="bogota" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Bogotá, D.C.</SelectItem>
                            <SelectItem value="valle" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Valle del Cauca</SelectItem>
                            <SelectItem value="atlantico" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Atlántico</SelectItem>
                            <SelectItem value="cundinamarca" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Cundinamarca</SelectItem>
                            <SelectItem value="santander" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Santander</SelectItem>
                            <SelectItem value="bolivar" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Bolívar</SelectItem>
                            <SelectItem value="risaralda" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Risaralda</SelectItem>
                            <SelectItem value="caldas" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Caldas</SelectItem>
                            <SelectItem value="tolima" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Tolima</SelectItem>
                            <SelectItem value="norte-santander" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Norte de Santander</SelectItem>
                            <SelectItem value="magdalena" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Magdalena</SelectItem>
                            <SelectItem value="huila" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Huila</SelectItem>
                            <SelectItem value="boyaca" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Boyacá</SelectItem>
                            <SelectItem value="cesar" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Cesar</SelectItem>
                            <SelectItem value="cauca" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Cauca</SelectItem>
                            <SelectItem value="meta" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Meta</SelectItem>
                            <SelectItem value="narino" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Nariño</SelectItem>
                            <SelectItem value="cordoba" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Córdoba</SelectItem>
                            <SelectItem value="quindio" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Quindío</SelectItem>
                            <SelectItem value="sucre" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Sucre</SelectItem>
                            <SelectItem value="amazonas" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Amazonas</SelectItem>
                            <SelectItem value="arauca" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Arauca</SelectItem>
                            <SelectItem value="caqueta" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Caquetá</SelectItem>
                            <SelectItem value="casanare" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Casanare</SelectItem>
                            <SelectItem value="choco" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Chocó</SelectItem>
                            <SelectItem value="guainia" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Guainía</SelectItem>
                            <SelectItem value="guaviare" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Guaviare</SelectItem>
                            <SelectItem value="guajira" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">La Guajira</SelectItem>
                            <SelectItem value="putumayo" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Putumayo</SelectItem>
                            <SelectItem value="san-andres" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">San Andrés y Providencia</SelectItem>
                            <SelectItem value="vaupes" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Vaupés</SelectItem>
                            <SelectItem value="vichada" className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal">Vichada</SelectItem>
                          </div>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2 text-lg">Ciudad o pueblo</label>
                      <Select
                        onValueChange={(value) => handleSelectChange(value, 'ciudad')}
                        value={formData.ciudad}
                      >
                        <SelectTrigger 
                          className={`w-full h-16 text-xl font-normal rounded-xl ${
                            formData.ciudad ? 'text-black border-[#1C999F]' : 'text-gray-400'
                          }`}
                        >
                          <SelectValue placeholder="Elige una ciudad" />
                        </SelectTrigger>
                        <SelectContent 
                          className="bg-white p-0 rounded-2xl border-none shadow-lg"
                          style={{ width: 'var(--radix-select-trigger-width)' }}
                        >
                          <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100">
                            <p className="text-lg font-semibold text-black">Elige la ciudad</p>
                          </div>
                          <div className="p-2 max-h-[300px] overflow-y-auto">
                            {formData.departamento && departmentCities[formData.departamento]?.map((city) => (
                              <SelectItem 
                                key={city} 
                                value={city.toLowerCase()}
                                className="py-3 px-4 text-lg font-normal hover:bg-gray-50 rounded-lg focus:bg-gray-50 focus:text-black focus:font-normal"
                              >
                                {city}
                              </SelectItem>
                            ))}
                          </div>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-gray-600 mb-2 text-lg">Barrio</label>
                      <Input
                        type="text"
                        name="barrio"
                        value={formData.barrio}
                        onChange={handleInputChange}
                        className={`block w-full h-16 text-xl font-normal rounded-xl border-2 focus:border-[#1C999F] focus:ring-[#1C999F] transition-all placeholder:text-gray-400 ${
                          formData.barrio ? 'text-black border-[#1C999F]' : 'text-gray-900'
                        }`}
                        placeholder="Escribe tu barrio"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full h-14 text-lg ${
                      isAddressComplete
                        ? "bg-[#1C999F] hover:bg-[#158589]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white rounded-xl transition-all duration-200 ease-in-out mt-4`}
                    disabled={!isAddressComplete}
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
