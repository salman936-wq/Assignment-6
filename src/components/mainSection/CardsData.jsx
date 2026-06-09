const CardsData = ({playerDatas}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playerDatas.map((p) => (
                    <div key={p.name} className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-2xl">
                        <div className="card-body p-6 space-y-3">
                            <div className="flex justify-between items-start">
                                <span className="text-2xl">{p.icon}</span>
                                <span className={`badge ${p.badgeColor} text-xs font-semibold`}>{p.badge}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">{p.name}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-extrabold text-gray-900">{p.price}</span>
                                <span className="text-gray-400 text-sm">{p.period}</span>
                            </div>
                            <ul className="space-y-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn w-full bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl mt-2">Buy Now</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CardsData;