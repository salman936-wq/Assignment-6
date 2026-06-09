import { useState } from "react";

const CardsData = ({ toolsDatas, setBuyNowArray, buyNowArray }) => {

    const handelCartItems = (newCartItem) => {
        const isExist = buyNowArray.find((item) => item.name === newCartItem.name);

        if (isExist) return; // prevent duplicate

        const cartItem = [...buyNowArray, newCartItem];
        setBuyNowArray(cartItem);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {toolsDatas.map((p) => {

                const isAdded = buyNowArray.find((item) => item.name === p.name);

                return (
                    <div key={p.name} className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl">

                        <div className="card-body p-6 space-y-3">

                            <div className="flex justify-between items-start">
                                <span className="text-2xl">{p.icon}</span>
                                <span className={`badge ${p.badgeColor} text-xs font-semibold`}>
                                    {p.badge}
                                </span>
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>

                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-extrabold text-gray-900">
                                    {p.price}
                                </span>
                                <span className="text-gray-400 text-sm">{p.period}</span>
                            </div>

                            <ul className="space-y-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                        ✔ {f}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handelCartItems(p)}
                                disabled={isAdded}
                                className={`btn w-full text-white border-none rounded-xl mt-2 ${
                                    isAdded
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-purple-600 hover:bg-purple-700"
                                }`}
                            >
                                {isAdded ? "Added to Cart" : "Buy Now"}
                            </button>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardsData;