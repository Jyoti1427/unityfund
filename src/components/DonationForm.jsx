import React, { useState } from "react";
import axios from "axios";
import ReceiptModal from "./ReceiptModal";

const DonationForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    amount: 1,
  });

  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    const name = e.target.name;
    setData((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
      };
    });
  };

  const handleAmountClick = (val) => {
    setData((prev) => ({ ...prev, amount: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, amount } = data;
    if (!name || !email || !amount || amount <= 0) {
      alert("Please fill in all fields and enter a valid donation amount.");
      return; //Dont't proceed if validation fails.
    }

    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/donate", {
        amount,
      });

      const { success, receipt, message } = res.data;

      if (success) {
        setReceipt(receipt); //save receipt in state
        setShowModal(true); // show the popup model

        // Reset form data
        setData({ name: "", email: "", amount: 1 });
      } else {
        alert("Payment failed." + message);
      }
    } catch (error) {
      alert("Something went wrong. please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[400px] mx-auto p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl shadow-md"
      >
        <div>
          <h1 className="text-lg text-center font-semibold">
            Quick Donation Form
          </h1>
          <div className="flex items-center justify-center gap-8 py-4">
            {[1, 5, 10, 99].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountClick(amount)}
                className="button-square"
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* input fields */}
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              id="amount"
              onChange={handleClick}
              value={data.amount}
              min={1}
              max={100}
              className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
            />
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleClick}
              placeholder="Name"
              className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
            />

            <input
              type="email"
              name="email"
              id="email"
              onChange={handleClick}
              placeholder="Email"
              className="w-full border dark:border-gray-800 px-4 py-2 rounded-lg dark:bg-black"
            />

            <button
              type="submit"
              className="btn-primary w-full rounded-full"
              disabled={loading}
            >
              {loading ? "Processing..." : "Donate Now"}
            </button>
          </div>
        </div>
      </form>

      {/* show the receipt modal if showModal is true */}
      {showModal && receipt && (
        <ReceiptModal receipt={receipt} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default DonationForm;
