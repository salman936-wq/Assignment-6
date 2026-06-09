

const Steps = () => {
    return (
        <section className="py-20 px-6 lg:px-16 bg-gray-50">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-14 space-y-3">
                    <h2 className="text-3xl font-extrabold text-gray-900">Get Started In 3 Steps</h2>
                    <p className="text-gray-500 text-sm">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                    <div className="flex flex-col items-center text-center space-y-4 relative bg-white p-6 w-full md:w-95 h-70 justify-center rounded-2xl shadow md:h-95">

                        <img className="bg-[#F2E9FE] p-4 rounded-full" src="/src/assets/user.png" alt="" />

                        <span className=" absolute top-4 right-3 w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">01</span>

                        <h3 className="font-bold text-[#001931] text-[24px]">Create Account</h3>
                        <p className="text-[#627382] text-center text-[16px] leading-6">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4 relative bg-white p-6 w-full md:w-95 h-70 justify-center rounded-2xl shadow md:h-95">

                        <img className="bg-[#F2E9FE] p-4 rounded-full" src="/src/assets/package.png " alt="" />

                        <span className=" absolute top-4 right-3 w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">02</span>

                        <h3 className="font-bold text-[#001931] text-[24px]">Choose Products</h3>
                        <p className="text-[#627382] text-center text-[16px] leading-6">Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    <div className="flex flex-col items-center text-center space-y-4 relative bg-white p-6 w-full md:w-95 h-70 justify-center rounded-2xl shadow md:h-95">

                        <img className="bg-[#F2E9FE] p-4 rounded-full" src="/src/assets/rocket.png " alt="" />

                        <span className=" absolute top-4 right-3 w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">03</span>

                        <h3 className="font-bold text-[#001931] text-[24px]">Start Creating</h3>
                        <p className="text-[#627382] text-center text-[16px] leading-6">Download and start using your premium tools immediately.</p>
                    </div>



                </div>

            </div>

        </section>
    );
};

export default Steps;