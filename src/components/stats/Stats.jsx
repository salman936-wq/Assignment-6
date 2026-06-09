const Stats = () => {
    return (
        <section className="bg-purple-600 py-10">
            <div className="w-10/12 mx-auto grid grid-cols-3 gap-4 text-center text-white">

                <div>

                    <div className="text-3xl lg:text-4xl font-extrabold">
                        50K+
                    </div>
                    <div className="text-purple-200 text-sm mt-1">
                        Active Users
                    </div>

                </div>

                <div>

                    <div className="text-3xl lg:text-4xl font-extrabold">
                        200+
                    </div>
                    <div className="text-purple-200 text-sm mt-1">
                        Premium Tools
                    </div>

                </div>

                <div>

                    <div className="text-3xl lg:text-4xl font-extrabold">
                        4.9
                    </div>


                    <div className="text-purple-200 text-sm mt-1">
                        Rating
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Stats;