
import React, { useState } from "react";
import { ChevronLeft, Upload, ArrowRight } from "lucide-react";

interface TransferPhotoStepProps {
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TransferPhotoStep = ({ onBack, onSubmit }: TransferPhotoStepProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <>
      <div className="relative w-full">
        <button
          type="button"
          onClick={onBack}
          className="absolute -left-4 -top-12 p-2 text-black/60 hover:text-black transition-colors"
        >
          <ChevronLeft size={36} strokeWidth={1.5} />
        </button>

        <div className="text-left">
          <div className="flex items-baseline gap-2">
            <h1 className="text-[40px] leading-[1.15] font-normal text-black mb-8">
              Foto del comprobante
            </h1>
            <span className="text-[#FF3366] text-2xl">*</span>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="w-full">
          <label
            className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-all
              ${
                selectedFile
                  ? "bg-[#D3E4FD] border-[#1C999F]"
                  : "bg-[#D3E4FD]/50 border-[#1C999F]/30 hover:border-[#1C999F]"
              }`}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload
                className={`w-12 h-12 mb-3 ${
                  selectedFile ? "text-[#1C999F]" : "text-[#1C999F]/60"
                }`}
              />
              <p className="mb-2 text-lg text-[#1C999F]">
                {selectedFile ? selectedFile.name : "Sube tu comprobante"}
              </p>
              <p className="text-sm text-[#1C999F]/60">
                {selectedFile
                  ? "Haz clic para cambiar la imagen"
                  : "PNG, JPG o JPEG (máx. 10MB)"}
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={!selectedFile}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ease-in-out mt-4 ml-auto
            ${
              selectedFile
                ? "bg-[#1C999F] hover:bg-[#1C999F]/90 text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </form>
    </>
  );
};

export default TransferPhotoStep;
