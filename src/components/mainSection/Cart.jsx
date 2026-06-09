import { useEffect, useState } from "react";

const Cart = ({ buyNowArray, setBuyNowArray }) => {

  const [cartItems, setCartItems] = useState(buyNowArray);

  useEffect(() => {
    setCartItems(buyNowArray);
  }, [buyNowArray]);

  const totalSum = cartItems.reduce(
    (sum, item) => sum + (Number(item.price) || 0),
    0
  );

  const handelRemove = (removeItem) => {
    const filterCart = buyNowArray.filter(
      (item) => item.name !== removeItem.name
    );

    setBuyNowArray(filterCart);
  };

  return (
    
    
    <div className="text-black">

      

      {buyNowArray.length == 0 ? <div className="w-full flex justify-center items-center h-[30vh] shadow border-gray-50 rounded-2xl text-2xl">Your cart is empty 😣</div> : <div className="max-w-5xl mx-auto mt-14">
        <div className="card border border-base-300/10 shadow-sm">

          <div className="card-body p-8">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

            {/* CART ITEMS */}
            {cartItems.map((carts, index) => (
              <div key={index} className="space-y-4">

                <div className="flex items-center justify-between rounded-2xl p-5 bg-[#F9FAFC] shadow">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl border border-base-300/10">
                      {carts.icon}
                    </div>

                    <div>
                      <h3 className="font-semibold text-xl">
                        {carts.name}
                      </h3>
                      <p>${carts.price}</p>
                    </div>

                  </div>

                  <button
                    onClick={() => handelRemove(carts)}
                    className="btn btn-ghost text-pink-500 hover:bg-transparent border-none"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

            {/* TOTAL */}
            <div className="flex justify-between items-center mt-8">
              <span className="text-lg">Total:</span>
              <span className="text-4xl font-bold">
                ${totalSum}
              </span>
            </div>

            {/* CHECKOUT */}
            <button className="btn mt-6 h-14 rounded-full text-white text-lg bg-linear-to-r from-violet-600 to-fuchsia-600">
              Proceed To Checkout
            </button>

          </div>

        </div>
      </div>}

    </div>
  );
};

export default Cart;