import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Find Your Tutor",
            description: "Explore from our pool of qualified tutors. Filter by subject, available days, and fee structure."
        },
        {
            number: "2",
            title: "Book a Session",
            description: "Fill out the simple booking form with your contact details. Our system blocks the slot for you."
        },
        {
            number: "3",
            title: "Start Learning",
            description: "Receive your digital session token and coordinate with your tutor for an engaging class."
        }
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-6 lg:px-20 text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-4">How It Works</h2>
                <p className="text-base-content/70 max-w-xl mx-auto mb-12">
                    Start learning in three simple steps. We take care of scheduling conflicts so you can focus on studies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center p-6 relative">
                            {/* Number circle */}
                            <div className="w-16 h-16 rounded-full bg-primary text-primary-content text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                            <p className="text-base-content/70 max-w-xs leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
