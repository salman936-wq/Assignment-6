

const Buttons = ({activeTab, setActiveTab, buyNowArray}) => {
    return (
        <div className="flex justify-center gap-2 mt-4">

                        <button onClick={()=> setActiveTab(true)} className={`btn btn-sm rounded-full hover:bg-white px-5 ${activeTab ? "bg-purple-600 text-white border-none hover:text-black" : "btn-outline border-gray-200 text-gray-500"}`}>
                                Products
                        </button>

                        <button onClick={()=> setActiveTab(false)} className={`btn btn-sm hover:bg-white rounded-full px-5 ${!activeTab ? "bg-purple-600 text-white border-none hover:text-black" : "btn-outline border-gray-200 text-gray-500"}`}>
                                Cart ({buyNowArray.length})
                        </button>



        </div>
    );
};

export default Buttons;