const Cta = () => {
    return (
        <section className="bg-purple-600 py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-3xl lg:text-4xl font-extrabold">Ready To Transform Your Workflow?</h2>
          <p className="text-purple-200 text-sm">
            Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="btn bg-white text-purple-700 hover:bg-gray-100 border-none rounded-full px-7">Explore Products</button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-700 rounded-full px-7">View Pricing</button>
          </div>
          <p className="text-purple-300 text-xs">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>
    );
};

export default Cta;