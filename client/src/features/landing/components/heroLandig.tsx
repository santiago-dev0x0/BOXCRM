//import previsualizeDashboard from '@/assets/previsualizeDashboard.png';
import { Button } from '@/components/ui';
import WhatsappIcon from '@/assets/whatsapp.svg?react';
import GmailIcon from '@/assets/gmail.svg?react';
import mobileDashboardKomo from '@/assets/mobile-dashboard-komo.webp';
import tabletDashboardKomo from '@/assets/tablet-dashboard-komo.webp';
import desktopDashboardKomo from '@/assets/desktop-dashboard-komo.webp';
export function HeroLandig() {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 md:relative">
      <div className="flex h-fit flex-col">
        {/* Icono decorativo Whatsapp */}
        <div className="hidden justify-start md:flex">
          <WhatsappIcon className="size-20 lg:size-[120px]" />
        </div>
        {/* texto prin del hero*/}
        <div className="text-center">
          <p className="text-xl text-[#391461] md:text-2xl lg:text-4xl">
            CRM de gestión de conversaciones en tiempo real
          </p>
          <h2 className="text-3xl font-black text-[#391461] md:text-6xl lg:text-8xl">
            Transforma contactos en grandes clientes
          </h2>
        </div>
        {/* Boton CTA del hero */}
        <div className="mt-4 flex items-center justify-center">
          <Button className="cursor-pointer rounded-full p-6 text-xl md:p-8 md:text-4xl lg:p-12 lg:text-6xl">
            Solicitar Demo
          </Button>
        </div>
        {/* Icono decorativo Gmail */}
        <div className="hidden justify-end md:flex">
          <GmailIcon className="size-20 lg:size-[120px]" />
        </div>
      </div>
      <div className="mt-5 md:h-[122px] lg:h-[325px]">
        {/* <div className='size-full md:h-[350px] w-full bg-blue-400'></div> */}
        <picture>
          {/* imagen webp desktop lg */}
          <source media="(min-width: 1024px)" srcSet={desktopDashboardKomo} />
          {/* imagen webp tablet md */}
          <source media="(min-width: 768px)" srcSet={tabletDashboardKomo} />
          {/* imagen webp pord deafult mobile */}
          <img
            src={mobileDashboardKomo}
            alt="mobileDashboardKomo"
            className="size-full rounded-md object-cover md:h-[244px] lg:h-[650px] lg:rounded-3xl"
          />
        </picture>
      </div>
    </section>
  );
}
