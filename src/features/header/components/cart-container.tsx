import { makeRequest } from "@/shared/hooks/makeRequest";
import { resetCart } from "@/shared/store/cartSlices";
import { RootState } from "@/shared/store/store";
import { Currency } from "@/shared/utils/currency";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./card-item";

const CartContainer = () => {
  const cartState = useSelector((state: RootState) => state.cart.products);

  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    cartState.forEach((item) => (total += Number(item.price) * item.quantity));

    return total;
  };

  const handleResetItems = () => {
    dispatch(resetCart());
  };

  const stripePromise = loadStripe(
    "pk_test_51Ps5vEBHfjsWklQL16XxFz32YzyIyBUfzhpiL0QIvtbOmL6AnAknCLMlIU3xNphvzKOOjGh8lBhZ2bibbEyNjudT00tyZv8WMI"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products: cartState,
      });

      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full transition">
      <div className="z-50 flex flex-col gap-y-4 absolute w-[400px] py-5 bg-white container lg:right-[-2rem] lg:top-[3.2rem] right-[-1rem] top-[5rem]">
        <h1 className="text-[18px] font-semibold ">Products in the cart</h1>
        {cartState?.map((data) => (
          <CardItem key={data.id} data={data} />
        ))}
        <div className="flex-col flex items-start gap-y-4 w-full">
          <div className="flex justify-between w-full">
            <h1 className=" text-[18px] uppercase font-semibold">subtotal</h1>
            <span>{Currency(totalPrice())}</span>
          </div>
          <div className="flex flex-col items-start gap-y-2">
            <button
              className="bg-blue-600 text-[10px] text-white px-2 h-[30px]"
              onClick={handlePayment}
            >
              Proceed to checkout
            </button>
            <button className="text-red-500" onClick={handleResetItems}>
              Reset Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
