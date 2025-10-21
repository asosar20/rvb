import Button from "./Button"

const Banner = () => {
    return (
        <section  data-aos="fade-up"
            className="bg-[#0F70B7] rounded-xl pt-16 text-[#ffffff] px-8 pb-16 md:pb-16 md:px-20 text-center"
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 flex flex-col items-start md:items-start gap-3">
                    <span className="bg-[#F6B800] text-[#016630] font-bold px-4 py-1 rounded-full inline-block mb-4 text-lg font-title">
                        VISÍTANOS
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-title pb-4">
                        ¡Coordina una Visita guiada!
                    </h2>
                    <p className="text-white text-base md:text-lg font-title pb-4">
                        Recorre el proyecto con nosotros
                    </p>
                </div>
                <div>
                    <Button href="#contact" variant="secondary">Agendar Visita</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner