import { Button } from '@/components/ui';
import humanoFeliz from '@/assets/humano-fliz.png';
export function Section4() {
  return (
    <section className="container mx-auto px-5 pt-5">
      <h2 className="text-center text-3xl font-bold text-[#391461]">
        Empieza hoy a gestionar tus clientes de forma más humana, más simple y
        más inteligente.
      </h2>
      <div className="mt-5 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
        <Button className="cursor-pointer rounded-full p-6 text-xl md:p-8 md:text-3xl">
          Solicitar Demo
        </Button>
        <Button
          variant="outline"
          className="cursor-pointer rounded-full p-6 text-xl md:p-8 md:text-3xl"
        >
          Crear Cuenta
        </Button>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={humanoFeliz}
          alt="Humano feliz"
          className="mt-5 aspect-video h-96 object-contain"
        />
      </div>
    </section>
  );
}
