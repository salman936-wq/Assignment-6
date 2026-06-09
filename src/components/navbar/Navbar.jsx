const Navbar = ({ buyNowArray }) => {
  return (
    <div className="sticky bg-white top-0 z-50">

      <nav className="navbar md:w-10/12 w-full mx-auto md:px-6 lg:px-0 ">

        <div className="navbar-start">
          <div className="dropdown lg:hidden text-black  ">
            <label tabIndex={0} className="btn btn-ghost p-0 pr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-[#4F39F6] rounded-box w-52">
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <span className="text-2xl font-extrabold text-purple-600">DigiTools</span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">

            <li><a className="text-gray-600 hover:text-purple-600 font-medium text-sm">Products</a></li>
            <li><a className="text-gray-600 hover:text-purple-600 font-medium text-sm">Features</a></li>
            <li><a className="text-gray-600 hover:text-purple-600 font-medium text-sm">Pricing</a></li>
            <li><a className="text-gray-600 hover:text-purple-600 font-medium text-sm">Testimonials</a></li>
            <li><a className="text-gray-600 hover:text-purple-600 font-medium text-sm">FAQ</a></li>

          </ul>
        </div>

        <div className="navbar-end gap-2">
          <span className="relative">

            <span className={`text-black absolute bg-red-600/70 px-1.5 rounded-full -top-2 right-3 md:-top-2 md:-right-4 ${buyNowArray.length == 0 ? "hidden" : "flex"}`}>{buyNowArray.length}</span>
            <i className="fa-solid fa-bag-shopping text-black"></i>
          </span>
          <button className="btn btn-sm bg-transparent text-black border-none shadow-none font-medium hidden md:flex">Login</button>
          <button className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none rounded-full px-5 hidden md:flex">Get Started</button>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;