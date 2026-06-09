const FOOTER_LINKS = {
  Product: ["Features", "Pricing", "Templates", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
};


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 px-6 lg:px-16 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <span className="text-xl font-extrabold text-white">DigiTools</span>
            <p className="text-sm text-gray-500 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group} className="space-y-3">
              <h4 className="text-white font-semibold text-sm">{group}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-purple-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Social Links</h4>
            <div className="flex gap-2">
              {["tw", "fb", "ig"].map((s) => (
                <button key={s} className="btn btn-sm btn-circle bg-gray-700 hover:bg-purple-600 border-none text-white text-xs">
                  {s === "tw" ? "𝕏" : s === "fb" ? "f" : "▶"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 flex flex-col lg:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>©2026 DigiTools. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Cookie</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;