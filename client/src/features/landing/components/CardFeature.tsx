import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  picture,
  segmentationPicture,
  automationPicture,
  collaborationPicture,
  metricsPicture,
} from '@/assets';
const features = [
  {
    image: picture,
    title: 'Integracion nativa con WhatsApp y correo',
    description: 'No más pantallas abiertas. Todo fluye en un mismo lugar.',
  },
  {
    image: segmentationPicture,
    title: 'Segamentacion Automatica',
    description:
      'El CRM clasifica contactos por estado o nivel de interés. Sabes de inmediato quién necesita atención urgente y quién requiere un seguimiento más suave.',
  },
  {
    image: collaborationPicture,
    title: 'Colaboracion Real',
    description:
      'Comentarios internos, asignación de tareas y visibilidad compartida. Tu equipo trabaja alineado sin depender de reuniones eternas.',
  },
  {
    image: automationPicture,
    title: 'Automatizaciones simples',
    description:
      'Recordatorios, seguimientos y mensajes clave programados para que tu equipo responda siempre a tiempo, incluso trabajando de forma asincrónica.',
  },
  {
    image: metricsPicture,
    title: 'Paneles de métricas',
    description:
      'Datos claros, sin tecnicismos. Entiendes qué está pasando, cuántos leads se están moviendo y cómo responde el equipo.',
  },
];

export function FeaturesSlider() {
  return (
    <section className="container mx-auto px-5 py-5">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Card className="h-96 w-full border border-gray-200 shadow-lg">
              <CardContent>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mb-4 h-48 w-full rounded object-cover"
                />
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
