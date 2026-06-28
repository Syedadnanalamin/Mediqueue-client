import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "🎓",
            title: "Verified Tutors",
            description: "All our tutors are thoroughly vetted for qualification and teaching experience, ensuring premium quality."
        },
        {
            icon: "📅",
            title: "No Time Conflicts",
            description: "Our digital booking system prevents double-booking, ensuring your slot is reserved exclusively for you."
        },
        {
            icon: "💻",
            title: "Flexible Class Modes",
            description: "Choose between Online, Offline, or hybrid modes based on your location and preference."
        },
        {
            icon: "🎟️",
            title: "Digital Session Tokens",
            description: "Get a digital token generated automatically for each booking to track and manage your schedules."
        }
    ];

    return (
        <section className="py-16 bg-base-200/50">
            <div className="container mx-auto px-6 lg:px-20 text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose MediQueue?</h2>
                <p className="text-base-content/70 max-w-xl mx-auto mb-12">
                    We simplify tutor booking and scheduling to provide a hassle-free, smooth, and organized learning journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-base-100 p-8 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition duration-300 text-center flex flex-col items-center">
                            <div className="text-4xl mb-4 p-4 rounded-2xl bg-primary/10 text-primary">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-base-content/70 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
