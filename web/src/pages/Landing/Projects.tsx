import { ChevronDown } from "lucide-react";
import {useRef, useState } from "react";
import SubTitle from "../../components/SubTitle";
import Button from "../../components/Button";
import { motion, AnimatePresence } from "framer-motion";
// Tipos base
interface Imagen {
  src: string;
  title: string;
}

interface Caracteristica {
  titulo: string;
  descripcion: string;
}

interface Subtipo {
  id: string;
  titulo: string;
  areaConstruida: string;
  areaTerreno: string;
  precioContado: string;
  cuotaDesde: string;
  separacion: string;
  imagenes: Imagen[];
  caracteristicas: Caracteristica[];
}

interface TipoCasa {
  id: string;
  titulo?: string;
  areaConstruida?: string;
  areaTerreno?: string;
  precioContado?: string;
  cuotaDesde?: string;
  separacion?: string;
  imagenes?: Imagen[];
  caracteristicas?: Caracteristica[];
  subtipo?: Subtipo[];
}

interface DataProjects {
  tipos: TipoCasa[];
}

// Datos
const dataProjects: DataProjects = {
  tipos: [
    {
      id: "2pisos",
      titulo: "Casa de 2 pisos",
      areaConstruida: "81.8 m²",
      areaTerreno: "80 m²",
      precioContado: "S/ 232,200",
      cuotaDesde: "S/ 1,489 (30% inicial)",
      separacion: "S/ 300",
      imagenes: [
        { src: "https://placehold.co/600x400?text=Fachada+2+pisos", title: "Fachada principal" },
        { src: "https://placehold.co/600x400?text=Sala+2+pisos", title: "Sala comedor" },
        { src: "https://placehold.co/600x400?text=Cocina+2+pisos", title: "Cocina equipada" },
      ],
      caracteristicas: [
        { titulo: "General", descripcion: "Casa moderna de 2 pisos con buena iluminación natural." },
        { titulo: "Sala, comedor y cocina", descripcion: "Ambiente integrado con cocina tipo americana." },
        { titulo: "Baños", descripcion: "Baño en primer piso y compartido en segundo." },
        { titulo: "Lavandería", descripcion: "Lavandería techada con conexión para lavadora." },
        { titulo: "No incluye", descripcion: "Closets y cocina equipada son opcionales." },
      ],
    },
    {
      id: "1piso",
      subtipo: [
        {
          id: "tipoA",
          titulo: "Casa de 1 piso - Tipo A",
          areaConstruida: "65 m²",
          areaTerreno: "80 m²",
          precioContado: "S/ 189,500",
          cuotaDesde: "S/ 1,200 (30% inicial)",
          separacion: "S/ 300",
          imagenes: [
            { src: "https://placehold.co/600x400?text=Fachada+1+piso+A", title: "Fachada Tipo A" },
            { src: "https://placehold.co/600x400?text=Sala+1+piso+A", title: "Sala comedor Tipo A" },
            { src: "https://placehold.co/600x400?text=Dormitorio+1+piso+A", title: "Dormitorio Tipo A" },
          ],
          caracteristicas: [
            { titulo: "General", descripcion: "Casa funcional Tipo A ideal para familias pequeñas." },
            { titulo: "Sala comedor", descripcion: "Ambiente integrado para sala y comedor." },
            { titulo: "Cocina", descripcion: "Cocina cerrada con conexión para gas." },
            { titulo: "Baño", descripcion: "Baño completo bien distribuido." },
            { titulo: "Lavandería", descripcion: "Lavandería posterior con área techada." },
          ],
        },
        {
          id: "tipoB",
          titulo: "Casa de 1 piso - Tipo B",
          areaConstruida: "65 m²",
          areaTerreno: "80 m²",
          precioContado: "S/ 199,000",
          cuotaDesde: "S/ 1,280 (30% inicial)",
          separacion: "S/ 300",
          imagenes: [
            { src: "https://placehold.co/600x400?text=Fachada+1+piso+B", title: "Fachada Tipo B" },
            { src: "https://placehold.co/600x400?text=Sala+1+piso+B", title: "Sala comedor Tipo B" },
            { src: "https://placehold.co/600x400?text=Dormitorio+1+piso+B", title: "Dormitorio Tipo B" },
          ],
          caracteristicas: [
            { titulo: "General", descripcion: "Casa funcional Tipo B con mayor área social." },
            { titulo: "Sala comedor", descripcion: "Sala y comedor amplios, con mejor ventilación." },
            { titulo: "Cocina", descripcion: "Cocina abierta estilo americano." },
            { titulo: "Baño", descripcion: "Baño completo, ideal para familias medianas." },
            { titulo: "Lavandería", descripcion: "Lavandería posterior techada y patio pequeño." },
          ],
        },
      ],
    },
  ],
};

const Projects = () => {
  const [tipoCasa, setTipoCasa] = useState<"2pisos" | "1piso">("2pisos");
  const [subtipo1Piso, setSubtipo1Piso] = useState<"tipoA" | "tipoB">("tipoA");
  const [tab, setTab] = useState<Record<string, "galeria" | "caracteristicas">>({
    "2pisos": "galeria",
    "1piso": "galeria",
  });
  const [activeAccordion, setActiveAccordion] = useState<Record<string, string | null>>({});
  const [currentImage, setCurrentImage] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement | null>(null);
  const toggleAccordion = (key: string, titulo: string) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [key]: prev[key] === titulo ? null : titulo,
    }));
  };

  // Subcomponente interno
  const TabsGaleriaCaracteristicas = ({
    data,
    tipoKey,
  }: {
    data: Subtipo | TipoCasa;
    tipoKey: string;
  }) => {
    const currentIdx = currentImage[tipoKey] || 0;

    if (!data.imagenes || !data.caracteristicas) return null;

    return (
      <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col rounded-xl shadow-2xl">
        <div className="flex px-20 gap-4">
          {["galeria", "caracteristicas"].map((t) => (
            <div
              key={t}
              onClick={() => setTab((prev) => ({ ...prev, [tipoCasa]: t as "galeria" | "caracteristicas" }))}
              className={`cursor-pointer flex-1 text-center py-3 font-title md:text-base relative text-sm
                ${tab[tipoCasa] === t ? "text-[#0F70B7] font-semibold" : "text-[#6a7282]"}`}
            >
              {t === "galeria" ? "Galería" : "Características"}
              {tab[tipoCasa] === t && <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0F70B7]" />}
            </div>
          ))}
        </div>

        {tab[tipoCasa] === "galeria" && (
          <div className="relative flex flex-col items-center justify-center p-3">
            <div className="w-full h-56 overflow-hidden rounded-lg">
              <img
                src={data.imagenes[currentIdx].src}
                alt={data.imagenes[currentIdx].title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-sm text-[#4a5565] font-title">{data.imagenes[currentIdx].title}</span>
            <div className="flex gap-2 mt-2">
              {data.imagenes.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage((prev) => ({ ...prev, [tipoKey]: index }))}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all
                    ${index === currentIdx ? "bg-[#0F70B7]" : "bg-[#d1d5dc]"}`}
                />
              ))}
            </div>
          </div>
        )}

        {tab[tipoCasa] === "caracteristicas" && (
          <div className="py-3">
            <ul className="divide-y divide-[#d1d5dc]">
              {data.caracteristicas.map((item) => (
                <li key={item.titulo} className="py-2">
                  <button
                    onClick={() => toggleAccordion(tipoKey, item.titulo)}
                    className="w-full flex justify-between items-center font-title text-[#1e2939]"
                  >
                    <span className="pl-5">{item.titulo}</span>
                    <ChevronDown
                      className={`h-5 w-5 mr-5 transition-transform
                        ${activeAccordion[tipoKey] === item.titulo ? "rotate-180 text-[#0F70B7]" : "text-[#99a1af]"}`}
                    />
                  </button>
                  {activeAccordion[tipoKey] === item.titulo && (
                    <div className="mt-2 text-sm text-[#4a5565] transition-all  text-start px-5">{item.descripcion}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const tipo2Pisos = dataProjects.tipos.find((t) => t.id === "2pisos")!;
  const tipo1Piso = dataProjects.tipos.find((t) => t.id === "1piso")!;
  const subtipoSeleccionado = tipo1Piso.subtipo?.find((s) => s.id === subtipo1Piso)!;

  return (
    <section id="projects" data-aos="fade-up" ref={sectionRef} className="px-8 gap-8 lg:pt-8 pt-2 pb-12 text-center bg-[#ffffff]">
      <div className="max-w-7xl mx-auto pb-8 md:pb-0">
        <SubTitle>Nuestros proyectos</SubTitle>

        <div className="flex justify-center gap-3 mb-6 lg:py-4">
          {[
            { id: "2pisos", label: "Casa de 2 pisos" },
            { id: "1piso", label: "Casa de 1 piso" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setTipoCasa(btn.id as "2pisos" | "1piso")}
              className={`border px-6 py-4 rounded-xl font-numbers transition-colors duration-300 cursor-pointer
                ${tipoCasa === btn.id
                  ? "bg-[#0F70B7] text-[#ffffff] border-[#0F70B7]"
                  : "border-[#0F70B7] text-[#0F70B7] hover:bg-[#0F70B7] hover:text-[#ffffff]"}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* CASA DE 2 PISOS */}
        <AnimatePresence mode="wait">
        {tipoCasa === "2pisos" && tipo2Pisos && (
          <motion.div
            key="2pisos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between gap-6"
          >
            <div className="flex-1 flex flex-col items-start gap-3 text-start">
              <span className="font-title font-bold text-2xl">{tipo2Pisos.titulo}</span>
              <span className="border-b w-full pb-4 text-[#364153] border-[#d1d5dc] font-title">
                Casa de: {tipo2Pisos.areaConstruida} | Terreno de: {tipo2Pisos.areaTerreno}
              </span>
              <div className="flex justify-between w-full text-[#1e2939] border-b pb-4 border-[#d1d5dc]">
                <span className="font-title">Precio al contado desde</span>
                <span className="font-semibold font-numbers md:text-2xl text-xl">
                  {tipo2Pisos.precioContado}
                </span>
              </div>
              <div className="flex justify-between w-full gap-4 pb-2">
                <div className="flex flex-col">
                  <span className="pb-2 font-title">Cuota desde</span>
                  <span className="font-numbers text-sm md:text-lg">{tipo2Pisos.cuotaDesde}</span>
                  <span className="text-[#0F70B7] border-[#0F70B7] border font-bold text-center py-1 rounded-full w-36 mt-2 text-xs font-title">
                    SEPARA CON {tipo2Pisos.separacion}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <Button href="#contact">Me interesa</Button>
                </div>
              </div>
            </div>
            <TabsGaleriaCaracteristicas data={tipo2Pisos} tipoKey="2pisos" />
          </motion.div>
        )}

        {/* CASA DE 1 PISO */}
        {tipoCasa === "1piso" && tipo1Piso && subtipoSeleccionado && (
          <motion.div
              key="1piso"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col gap-6"
            >
            <div className="flex w-full justify-center">
              {tipo1Piso.subtipo?.map((st) => (
                <div
                  key={st.id}
                  onClick={() => setSubtipo1Piso(st.id as "tipoA" | "tipoB")}
                  className={`cursor-pointer flex-1 max-w-[150px] text-center py-2 font-title text-base relative
                    ${subtipo1Piso === st.id ? "text-[#0F70B7] font-semibold" : "text-[#6a7282]"}`}
                >
                  {st.id === "tipoA" ? "Tipo A" : "Tipo B"}
                  {subtipo1Piso === st.id && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0F70B7]"></span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1 flex flex-col items-start gap-3 text-start">
                <span className="font-title font-bold text-2xl">{subtipoSeleccionado.titulo}</span>
                <span className="border-b w-full pb-4 text-[#364153] border-[#d1d5dc] font-title">
                  Casa de: {subtipoSeleccionado.areaConstruida} | Terreno de: {subtipoSeleccionado.areaTerreno}
                </span>
                <div className="flex justify-between w-full text-[#1e2939] border-b pb-4 border-[#d1d5dc]">
                  <span className="font-title">Precio al contado desde</span>
                  <span className="font-semibold font-numbers md:text-2xl text-xl">
                    {subtipoSeleccionado.precioContado}
                  </span>
                </div>
                <div className="flex justify-between w-full gap-4 pb-2">
                  <div className="flex flex-col">
                    <span className="pb-2 font-title">Cuota desde</span>
                    <span className="font-numbers text-sm md:text-lg">{subtipoSeleccionado.cuotaDesde}</span>
                    <span className="text-[#0F70B7] border-[#0F70B7] border font-bold text-center py-1 rounded-full w-36 mt-2 text-xs font-title">
                      SEPARA CON {subtipoSeleccionado.separacion}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Button href="#contact">Me interesa</Button>
                  </div>
                </div>
              </div>

                            <TabsGaleriaCaracteristicas data={subtipoSeleccionado} tipoKey={`1piso-${subtipoSeleccionado.id}`} />
                        </div>
                    </motion.div>
                )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects