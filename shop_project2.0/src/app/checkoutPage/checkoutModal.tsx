"use client";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");
export default function CheckoutModal() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
      });

      const session = await response.json();

      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };
  return (
    <>
      <Button
       type="submit" role="link"
        onClick={() => setOpenModal(true)}
        className="shadow-xl text-white font-bold !border-none focus:!ring-0 my-2 rounded-full bg-RED
      hover:scale-105 duration-150"
      >
        Checkout
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <div className="text-dark flex justify-end items-center px-6 pt-6">
          <button onClick={() => setOpenModal(false)}>
            <i
              className="bi bi-x-circle-fill 
            text-2xl hover:text-RED scale-105 duration-150"
            ></i>
          </button>
        </div>
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-RED" />
            <h3 className="mb-5 text-lg font-normal text-dark">
              Are you sure you want to proceed purchase?
            </h3>
            <div className="flex justify-center gap-4">
                <form action="/api/checkout_sessions" method="POST">
                    <Button
                     type="submit" role="link"
                     onClick={handleCheckout}
                        className="!border-none focus:!ring-0 rounded-full font-bold 
                                bg-RED hover:!bg-RED hover:scale-110 duration-150">
                        {"Yes, I'm sure"}
                    </Button>
                </form>

              <Button
                onClick={() => setOpenModal(false)}
                className="!border-none focus:!ring-0 rounded-full font-bold 
                bg-dark text-white hover:scale-110 duration-150">
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
