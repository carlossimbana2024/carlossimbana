import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import { certificates } from "../../data/certificates";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <section id="certificates" className="overflow-hidden bg-ivory px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Certificados"
          title="Formación continua y actualización profesional."
          description="Certificaciones y cursos que fortalecen mi perfil técnico y mi capacidad para desarrollar mejores soluciones digitales."
        />
      </div>

      <div className="relative mx-auto max-w-6xl overflow-hidden">
        <div className="certificate-track flex w-max gap-6">
          {duplicatedCertificates.map((certificate, index) => (
            <button
              key={`${certificate.title}-${index}`}
              type="button"
              onClick={() => setSelectedCertificate(certificate)}
              className="w-72 shrink-0 cursor-pointer rounded-[2rem] border border-nude bg-offwhite p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-nude">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-3">
                <h3 className="text-lg font-bold text-obsidian">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-obsidian/60">
                  {certificate.issuer}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/80 px-6 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl rounded-[2rem] bg-offwhite p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-obsidian px-4 py-2 text-sm font-bold text-offwhite"
            >
              Cerrar
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="max-h-[80vh] w-full rounded-[1.5rem] object-contain"
            />

            <div className="px-2 pt-4">
              <h3 className="text-xl font-bold text-obsidian">
                {selectedCertificate.title}
              </h3>
              <p className="text-sm text-obsidian/60">
                {selectedCertificate.issuer}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;