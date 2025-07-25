
import React from 'react';
import { QuoteIcon } from './icons';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Sofía transformó nuestra presencia en redes. Su creatividad y estrategia nos trajeron resultados increíbles en muy poco tiempo. ¡Totalmente recomendada!",
            name: "Ana García",
            company: "Directora de Lopez Inmobiliaria",
        },
        {
            quote: "Trabajar con Sofi es un placer. Entendió a la perfección la voz de nuestra marca y creó una comunidad fiel alrededor de nuestro centro. Es una profesional excepcional.",
            name: "Carlos Vera",
            company: "Fundador de Nimai",
        },
        {
            quote: "Nuestras ventas online aumentaron gracias a la gestión de Sofía. Su contenido es fresco, divertido y conecta con nuestra audiencia. ¡Estamos muy contentos!",
            name: "Lucía Méndez",
            company: "Gerente de Canycat's Pet Shop",
        }
    ];

    return (
        <section 
            id="testimonials" 
            className="py-20 relative overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[30rem] h-[30rem] bg-pink-100 rounded-full blur-3xl opacity-60 z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Lo que dicen mis clientes</h2>
                    <p className="mt-4 text-lg text-gray-600">La confianza es la base de un gran trabajo en equipo.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50/80 backdrop-blur-sm p-8 rounded-xl shadow-md relative border border-gray-200/50">
                            <QuoteIcon className="w-12 h-12 text-pink-200 absolute top-4 right-4" />
                            <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-gray-800">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;