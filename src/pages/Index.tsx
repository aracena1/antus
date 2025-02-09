import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import PhoneStep from "@/components/form/PhoneStep";
import NameStep from "@/components/form/NameStep";
import CedulaStep from "@/components/form/CedulaStep";
import AddressStep from "@/components/form/AddressStep";
import StreetTypeStep from "@/components/form/StreetTypeStep";
import StreetDetailsStep from "@/components/form/StreetDetailsStep";
import QuantityStep from "@/components/form/QuantityStep";
import PaymentMethodStep from "@/components/form/PaymentMethodStep";
import TransferPhotoStep from "@/components/form/TransferPhotoStep";
import OrderSourceStep from "@/components/form/OrderSourceStep";

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
  "bogota-dc": ["Bogotá"],
  "valle-del-cauca": [
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
  santander: ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja"],
  cundinamarca: ["Soacha", "Facatativá", "Zipaquirá", "Chía", "Mosquera", "Madrid"],
  bolivar: ["Cartagena", "Magangué", "Carmen de Bolívar", "Turbaco", "Arjona"],
  risaralda: ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia"],
  caldas: ["Manizales", "Villamaría", "Chinchiná", "La Dorada"],
  tolima: ["Ibagué", "Espinal", "Melgar", "Honda", "Mariquita"],
};

const Index = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    cedula: "",
    departamento: "",
    ciudad: "",
    barrio: "",
    tipoVia: "",
    direccionDetalle: {
      numero: "",
      segundaParte: "",
      complemento: ""
    },
    metodoPago: "",
    fotoTransferencia: null as File | null,
    fuenteOrden: ""
  });
  const { toast } = useToast();

  const validatePhone = (value: string) => {
    const cleanedValue = value.replace(/\D/g, "").slice(0, 10);
    setPhone(cleanedValue);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
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
      setStep(5);
    }
  };

  const handleStreetTypeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.tipoVia && formData.tipoVia !== "elige-tipo-de-via") {
      setStep(6);
    }
  };

  const handleStreetDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(7);
  };

  const handleQuantitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(8);
  };

  const handlePaymentMethodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.metodoPago) {
      if (formData.metodoPago === "transfer") {
        setStep(9);
      } else {
        setStep(10);
      }
    }
  };

  const handleTransferPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(10);
  };

  const handleOrderSourceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fuenteOrden) {
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

  const handleDepartmentChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      departamento: value,
      ciudad: ''
    }));
  };

  const availableCities = formData.departamento ? departmentCities[formData.departamento] || [] : [];
  const isCitySelected = formData.ciudad !== "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            {step === 1 && (
              <PhoneStep
                phone={phone}
                validatePhone={validatePhone}
                onSubmit={handlePhoneSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 2 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 2 && (
              <NameStep
                nombreCompleto={formData.nombreCompleto}
                onBack={() => setStep(1)}
                onChange={handleInputChange}
                onSubmit={handleNameSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 3 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 3 && (
              <CedulaStep
                cedula={formData.cedula}
                onBack={() => setStep(2)}
                onChange={handleInputChange}
                onSubmit={handleCedulaSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 4 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 4 && (
              <AddressStep
                formData={formData}
                availableCities={availableCities}
                isCitySelected={isCitySelected}
                onBack={() => setStep(3)}
                onDepartmentChange={handleDepartmentChange}
                onChange={handleInputChange}
                onCityChange={(value) => setFormData(prev => ({ ...prev, ciudad: value }))}
                onSubmit={handleAddressSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 5 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 5 && (
              <StreetTypeStep
                streetType={formData.tipoVia}
                onBack={() => setStep(4)}
                onStreetTypeChange={(value) => setFormData(prev => ({ ...prev, tipoVia: value }))}
                onSubmit={handleStreetTypeSubmit}
                selectedCity={formData.ciudad}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 6 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 6 && (
              <StreetDetailsStep
                selectedStreetType={formData.tipoVia}
                onBack={() => setStep(5)}
                onSubmit={handleStreetDetailsSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 7 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 7 && (
              <QuantityStep
                quantity={quantity}
                onQuantityChange={setQuantity}
                onBack={() => setStep(6)}
                onSubmit={handleQuantitySubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 8 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 8 && (
              <PaymentMethodStep
                selectedMethod={formData.metodoPago}
                onMethodChange={(value) => setFormData(prev => ({ ...prev, metodoPago: value }))}
                onBack={() => setStep(7)}
                onSubmit={handlePaymentMethodSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 9 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 9 && formData.metodoPago === "transfer" && (
              <TransferPhotoStep
                onBack={() => setStep(8)}
                onSubmit={handleTransferPhotoSubmit}
              />
            )}
          </div>

          <div
            className={`absolute w-full transition-all duration-500 transform ${
              step === 10 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            {step === 10 && (
              <OrderSourceStep
                selectedSource={formData.fuenteOrden}
                onSourceChange={(value) => setFormData(prev => ({ ...prev, fuenteOrden: value }))}
                onBack={() => setStep(formData.metodoPago === "transfer" ? 9 : 8)}
                onSubmit={handleOrderSourceSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
