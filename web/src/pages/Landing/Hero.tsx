import { HandCoins, LandPlot, MapPin } from "lucide-react"
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
            id="inicio"
            className="min-h-screen bg-[#F3F9F5] w-full flex lg:flex-row flex-col items-center justify-center px-8 gap-8 lg:pt-8 pt-16 pb-2">
                <div className="lg:w-1/2 w-full">
                    
                    <Title className="pt-8"> Tu nuevo hogar a solo 10 minutos de Pimentel</Title>

                    <p className="text-md md:text-lg text-[#364153] pt-8">
                        Casas y departamentos modernos diseñados para brindarte comodidad,
                        seguridad y una ubicación privilegiada cerca del mar.
                    </p>

                    <div className="grid grid-cols-3 gap-4 text-shadow-2x pt-8 md:text-lg text-sm">

                        <div className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-2 text-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <MapPin className="text-[#f3f4f6]" size={28} />
                            <span className="text-[#f3f4f6]">
                                {dataHero.direccion}
                            </span>
                        </div>

                        <div
                            className="flex flex-col items-center justify-center bg-[#ffffff] rounded-xl shadow-md p-2 text-center border-[#0F70B7] border transition-transform duration-300 hover:scale-105  cursor-pointer">
                            <LandPlot className="text-[#0F70B7]" size={28} />
                            <span className="text-[#0F70B7]">
                                Desde {dataHero.areaMinima}m<sup>2</sup>
                            </span>
                        </div>

                        <div
                            className="flex flex-col items-center justify-center bg-[#0F70B7] rounded-xl shadow-md p-2 text-center transition-transform duration-300 hover:scale-105  cursor-pointer">
                            <HandCoins className="text-[#f3f4f6]" size={28} />
                            <span className="text-[#f3f4f6]">
                                Cuota desde S/{dataHero.cuotaDesde}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-8 gap-4 md:text-lg text-sm">
                      <Button href="#contacto">Agenda tu visita</Button>
                      <Button variant="outline" href="#proyectos">Ver proyectos</Button>
                    </div>
                </div>

                <div className="relative w-full lg:w-1/2">
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
                </div>

        </section>
    )
}

export default Hero