import { use } from "react";
import Buttons from "./Buttons";
import CardsData from "./CardsData";
import Cart from "./Cart";


const MainSection = ({ fetchProductData, setActiveTab, activeTab, buyNowArray, setBuyNowArray}) => {
    const okPlayerDatas = use(fetchProductData)
    const toolsDatas = okPlayerDatas.PRODUCTS;


    return (

        <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">


            <div className="text-center mb-10 space-y-3">

                <h2 className="text-3xl font-extrabold text-gray-900">Premium Digital Tools</h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>

                <Buttons buyNowArray={buyNowArray} activeTab={activeTab} setActiveTab={setActiveTab}></Buttons>

            </div>



            
            {
                activeTab ? <CardsData setBuyNowArray={setBuyNowArray} buyNowArray={buyNowArray} toolsDatas={toolsDatas}></CardsData> : <Cart buyNowArray={buyNowArray} setBuyNowArray={setBuyNowArray}></Cart>
            }
            



        </section>

    );
};

export default MainSection;