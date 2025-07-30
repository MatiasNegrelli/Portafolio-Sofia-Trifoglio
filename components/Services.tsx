import React from 'react';
// Asegúrate de que CheckCircleIcon esté disponible o importado correctamente
// import { CheckCircleIcon } from './icons'; // Si 'icons' es un archivo local
// Si CheckCircleIcon es de Heroicons, asegúrate de importarlo así:
import { CheckCircleIcon } from '@heroicons/react/24/outline';


interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  gradient: string;
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, gradient, isFeatured }) => (
  <div className={`relative bg-gray-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col z-10 ${isFeatured ? 'transform scale-105 ring-4 ring-pink-400' : ''}`}>
    <div className={`absolute top-0 left-8 -translate-y-1/2 px-6 py-2 rounded-full text-lg font-bold text-white ${gradient}`}>
      Plan {plan}
    </div>
    <div className="flex-grow">
      <ul className="space-y-4 mt-8 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-pink-400 mr-3 mt-1 flex-shrink-0">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="text-center">
      <p className="text-4xl font-extrabold">{price}</p>
      <p className="text-gray-400">precio mensual</p>
      <a href="#contact" className={`mt-6 inline-block w-full text-center font-bold py-3 px-8 rounded-full text-white transition-transform duration-300 hover:scale-105 ${gradient}`}>
        Contratar
      </a>
    </div>
  </div>
);

const Services = () => {
  const plans = [
    {
      plan: 'Básico',
      price: '$203.500',
      features: [
        '4 publicaciones en Instagram y en Facebook',
        'Historias 8 veces al mes (aprox 24 historias)',
      ],
      gradient: 'bg-gradient-to-r from-pink-500 to-orange-400',
    },
    {
      plan: 'Estándar',
      price: '$280.500',
      features: [
        '8 publicaciones en Instagram y en Facebook',
        'Historias 12 veces al mes (aprox 36 historias)',
      ],
      gradient: 'bg-gradient-to-r from-fuchsia-500 to-pink-500',
      isFeatured: true,
    },
    {
      plan: 'PRO',
      price: '$401.500',
      features: [
        '16 publicaciones en Instagram y en Facebook',
        'Historias 16 veces al mes (aprox 60 historias)',
      ],
      gradient: 'bg-gradient-to-r from-purple-500 to-fuchsia-500',
    },
  ];

  const includedFeatures = [
    'Calendario Mensual',
    'Planificación y publicación del contenido',
    'Optimización de la biografía',
    'Optimización de historias destacadas',
    'Copywriting estratégico para cada posteo',
    'Edición del contenido',
    'Gestión de comentarios',
  ];

  const otherServices = [
    {
      title: 'Creación de Contenido',
      features: ['Creación de ideas de contenido', 'Creación de guiones', 'Producción del contenido'],
      gradient: 'bg-gradient-to-r from-pink-500 to-orange-400',
    },
    {
      title: 'Publicidad en RRSS',
      features: ['Configuración de Administrador comercial de Meta Ads', 'Creación de campañas publicitarias'],
      gradient: 'bg-gradient-to-r from-fuchsia-500 to-pink-500',
    }
  ];

  return (
    <section id="plans" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 bg-fuchsia-100 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 w-[40rem] h-[40rem] bg-orange-100 rounded-full blur-3xl opacity-40 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Planes para tus redes sociales</h2>
          <p className="mt-4 text-lg text-gray-600">Mejora tu presencia digital con asesoría profesional.</p>
        </div>
        
        {/* CAMBIO: Contenedor de planes de grid a flex-wrap justify-center */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.plan} 
              className={`
                w-full /* Por defecto, ocupa todo el ancho en móvil */
                sm:w-[calc(100%-theme(gap.12))] /* Ajuste para gap en pantallas pequeñas si hay 1 columna */
                md:w-[calc(50%-theme(gap.12)/2)] /* En md, 2 columnas, ajustando el gap */
                lg:w-[calc(33.333%-theme(gap.8)*2/3)] /* En lg, 3 columnas, ajustando el gap */
              `}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl">
                   <h3 className="text-center text-3xl font-bold mb-6">TODOS LOS PAQUETES INCLUYEN:</h3>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                       {includedFeatures.map((feature, index) => (
                           <li key={index} className="flex items-center">
                               <CheckCircleIcon className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                               <span>{feature}</span>
                           </li>
                       ))}
                   </ul>
            </div>
        </div>

        <div className="text-center my-20 pt-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Otros Servicios</h2>
          <p className="mt-4 text-lg text-gray-600">Impulsá tu presencia online con contenido único y publicidad dirigida.</p>
        </div>

        {/* Este contenedor ya usaba grid-cols-1 md:grid-cols-2 y max-w-4xl mx-auto, lo que ya lo centra bien para 2 elementos.
            No necesita el cambio a flexbox a menos que quieras más de 2 columnas en algún punto.
            Si quieres que la última fila de "Otros Servicios" también se centre si hay un número impar de elementos,
            entonces también aplicaríamos flexbox aquí. Por ahora, lo dejaré como está, ya que solo hay 2.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 max-w-4xl mx-auto">
          {otherServices.map((service, index) => (
              <div key={index} className="relative bg-gray-900 text-white p-8 rounded-3xl shadow-2xl flex flex-col z-10">
                  <div className={`absolute top-0 left-8 -translate-y-1/2 px-6 py-2 rounded-full text-lg font-bold text-white ${service.gradient}`}>
                    {service.title}
                  </div>
                  <ul className="space-y-4 mt-8 mb-8 flex-grow">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-pink-400 mr-3 mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center mt-4">
                      <p className="text-2xl font-bold">Precio a coordinar</p>
                      <p className="text-gray-400">precio único</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;