

const HeroSection = () => {
    return (
       <section className="px-6 w-10/12 lg:px-0 py-16 flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto">
        <div className="flex-1 space-y-6">
          <div className="badge badge-outline border-purple-300 text-purple-600 bg-purple-50 gap-1 py-3 px-3 text-xs font-medium">
            <span className="text-purple-500">✦</span> New: AI-Powered Tools Available
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your<br />Digital Workflow
          </h1>
          <p className="text-gray-500 text-base max-w-md">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. <span>Explore Products</span>
          </p>
          
          <div className="flex gap-3 flex-wrap">
            <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-full px-6">Explore Products</button>
            <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img className="w-full ml-40" src="/src/assets/banner.png" alt="" />
        </div>
      </section>
    );
};

export default HeroSection;