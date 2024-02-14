import Image from "next/image";

type CartListProps = {
  data: any;
  increaseQuantity: any;
  decreaseQuantity: any;
};

const CartList = ({
  data,
  increaseQuantity,
  decreaseQuantity,
}: CartListProps) => {
  const { image, name, quantity, price } = data;

  return (
    <>
      <div
        className="bg-white text-dark shadow-lg w-full md:w-3/4 mx-auto py-2 px-6 
    flex flex-col md:flex-row items-center justify-between rounded-3xl "
      >
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full md:w-1/4 h-auto rounded-3xl"
        />

        <div
          className=" font-bold text-2xl w-2/4 text-center md:text-left
          mt-2 md:mt-0 md:flex-grow"
        >
          {name}
        </div>

        <div
          className="mx-4 md:mx-0 mt-2 md:mt-0 flex items-center gap-2
          font-bold underline decoration-RED "
        >
          Qty: <span className="text-RED">{quantity}</span>
          <div className="flex gap-2 mt-2 md:mt-0 ">
            <button
              className="shadow-xl text-white border-2 border-RED px-2.5 py-1.5 rounded-full font-bold bg-RED
          scale-105 duration-100"
              onClick={increaseQuantity}
            >
              <i className="bi bi-caret-up-fill"></i>
            </button>
            <button
              className="shadow-xl text-white border-2 border-RED px-2.5 py-1.5] rounded-full  font-bold bg-RED
           scale-105 duration-100"
              onClick={decreaseQuantity}
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </div>

        <div className="text-3xl font-bold mt-2 md:mt-0 w-1/4 ml-0 md:ml-24 mr-5 h-auto text-center">
          ${price * quantity}
        </div>
      </div>
    </>
  );
};

export default CartList;
