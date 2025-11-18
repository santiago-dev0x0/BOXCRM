import humanoCelular from '@/assets/humano-con-celular.png';
export function SectionTwo() {
  return (
    <div className="bg-primary">
      <section className="container mx-auto px-5 py-5">
        {/* contenedor humano con celular y texto */}
        <div className="flex flex-col gap-2 md:mt-[122px] md:flex-row md:pt-5 lg:mt-[325px]">
          {/* contenedor humano con celular */}
          <div className="flex-1">
            <img
              src={humanoCelular}
              alt="Humano con celular"
              className="aspect-video h-96 object-contain lg:h-[650px]"
            />
          </div>
          {/* contenedor texto */}
          <div className="flex flex-1 flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl font-extrabold lg:text-6xl">
              Un CRM inteligente para conectar con tus clientes
            </h2>
            <p className="text-xl lg:text-2xl">
              Gestiona WhatsApp, correo y seguimientos desde un solo lugar.
              Simple, rápido y colaborativo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
