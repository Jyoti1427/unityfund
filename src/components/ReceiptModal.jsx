import React from "react";

const ReceiptModal = ({ receipt, onClose }) => {
  //   const downloadReceipt = () => {
  //     const element = document.createElement("a");
  //     const file = new Blob([JSON.stringify(receipt, null, 2)], {
  //       type: "application/json",
  //     });
  //     element.href = URL.createObjectURL(file);
  //     element.download = `receipt_${receipt.paymentId}.json`;
  //     document.body.appendChild(element);
  //     element.click();
  //     document.body.removeChild(element);
  //   };

  const downloadReceipt = (receipt) => {
    const content = `
      Donation Receipt
      ----------------------
      Payment ID: ${receipt.paymentId}
      Amount: $${receipt.amount}
      Date: ${new Date(receipt.date).toLocaleString()}
      
      ${receipt.message}
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Donation_Receipt.txt";
    link.click();
  };

  return (
    <div
      className="fixed inset-0 p-10 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Bar */}
        <div
          className="absolute top-0 left-0 w-full h-2 rounded-t-lg"
          style={{ backgroundColor: "#f7b400" }}
        />

        <h2 className="text-xl font-bold mb-4 text-center text-[#f7b400]">
          Donation Receipt
        </h2>

        <div className="bg-gray-50 border border-[#f7b400] p-4 rounded text-sm max-h-60 overflow-auto text-black">
          <p>
            <strong>Receipt ID:</strong> {receipt.paymentId}
          </p>
          <p>
            <strong>Amount:</strong> ${receipt.amount}
          </p>
          <p>
            <strong>Date:</strong> {new Date(receipt.date).toLocaleString()}
          </p>
          {receipt.message && (
            <p className="mt-2">
              <strong>Message:</strong> {receipt.message}
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={downloadReceipt}
            className="px-4 py-2 bg-[#f7b400] text-white rounded hover:brightness-110 transition"
          >
            Download
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#f7b400] text-[#f7b400] rounded hover:bg-[#f7b400] hover:text-white transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
