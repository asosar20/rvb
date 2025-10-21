import Button from "./Button";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-[#0F70B7] rounded-xl pt-16 text-[#ffffff] px-8 pb-16 md:pb-16 md:px-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex-1 flex flex-col items-start md:items-start gap-3">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#F6B800] text-[#016630] font-bold px-4 py-1 rounded-full inline-block mb-4 text-lg font-title"
          >
            VISÍTANOS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold font-title pb-4"
          >
            ¡Coordina una Visita guiada!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-base md:text-lg font-title pb-4"
          >
            Recorre el proyecto con nosotros
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="#contact" variant="secondary">
            Agendar Visita
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
