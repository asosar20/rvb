import { HandCoins, LandPlot, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Title from "../../components/Title";
import Button from "../../components/Button";

const dataHero = {
  direccion: "Alt. km 1.5 carretera a Pimentel",
  areaMinima: 35,
  cuotaDesde: 900,
  videoUrl: "/video/video_presentacion.mp4",
};

const Hero = () => {
  return (
    <section
    //   data-aos="fade-up"
      id="inicio"
      className="min-h-screen bg-[#F3F9F5] w-full flex lg:flex-row flex-col items-center justify-center px-8 gap-8 lg:pt-8 pt-10 pb-2"
    >
      {/* Texto y contenido */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2 w-full text-right"
      >
        <Title className="pt-8 font-title">
          Tu nuevo hogar a solo 10 minutos de Pimentel
        </Title>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-md md:text-lg text-[#364153] pt-8"
        >
          Casas y departamentos modernos diseñados para brindarte comodidad,
          seguridad y una ubicación privilegiada cerca del mar.
        </motion.p>

        {/* Tarjetas de datos */}
        <div className="grid grid-cols-3 gap-4 text-shadow-2x pt-8 text-sm font-body lg:px-16">
          {/* Dirección */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-2 text-center cursor-pointer"
          >
            <MapPin className="text-[#f3f4f6]" size={28} />
            <span className="text-[#f3f4f6] text-sm">{dataHero.direccion}</span>
          </motion.div>

          {/* Área mínima */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center bg-[#ffffff] rounded-xl shadow-md p-2 text-center border-[#0F70B7] border cursor-pointer"
          >
            <LandPlot className="text-[#0F70B7]" size={28} />
            <span className="text-[#0F70B7]">
              Desde {dataHero.areaMinima}m<sup>2</sup>
            </span>
          </motion.div>

          {/* Cuota */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-2 text-center cursor-pointer"
          >
            <HandCoins className="text-[#f3f4f6]" size={28} />
            <span className="text-[#f3f4f6]">
              Cuota desde S/{dataHero.cuotaDesde}
            </span>
          </motion.div>
        </div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center pt-8 gap-4 md:text-lg text-sm font-button"
        >
          <Button href="#contact">Agenda tu visita</Button>
          <Button variant="outline" href="#projects">
            Ver proyectos
          </Button>
        </motion.div>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <video
            src={dataHero.videoUrl}
            autoPlay
            loop
            muted
            controls
            playsInline
            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F70B7]/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
