import React from 'react';

const Freeshiping = () => {
    const data = [
        {
            id: "1",
            iconClass: "ri-truck-line", // Remix Icon class for truck
            data: "Free Shipping",
            data2: "Free shipping on all orders",
        },
        {
            id: "2",
            iconClass: "ri-secure-payment-line", // Remix Icon class for secure payment
            data: "Secure Payment",
            data2: "100% secure payment",
        },
        {
            id: "3",
            iconClass: "ri-shield-check-line", // Remix Icon class for quality guarantee
            data: "Quality Guarantee",
            data2: "Guaranteed quality products",
        },
        {
            id: "4",
            iconClass: "ri-wallet-line", // Remix Icon class for money back
            data: "Money Back",
            data2: "30-day money-back guarantee",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {data.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
                    {/* Render Icon with <i> tag */}
                    <i className={`${item.iconClass} text-red-600 text-4xl`}></i>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.data}</h3>
                        <p className="text-gray-500">{item.data2}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Freeshiping;
