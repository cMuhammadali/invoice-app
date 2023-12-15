export default function InvoiceCenter({ oneInvoice }) {
  return (
    <div className="w-full bg-white px-10 py-8 rounded-md shadow-box">
      <div>
        <span className="font-spartan text-ink text-xl">#</span>
        <span className="font-spartan text-xl">{oneInvoice.userId}</span>
        <div className="text-ink text-lg">{oneInvoice.description}</div>
      </div>

      <div className="mt-12 flex">
        <div className="flex-auto">
          <div className="font-spartan text-ink text-base">Invoice Date</div>
          <span className="font-spartan font-bold text-xl">
            {oneInvoice.createdDate.slice(0, 10)}
          </span>
        </div>

        <div className="flex-auto">
          <div className="font-spartan text-ink text-base">Bill To</div>
          <span className="font-spartan font-bold text-xl">
            {oneInvoice.to}
          </span>
        </div>

        <div className="flex-auto">
          <div className="font-spartan text-ink text-base">Sent to</div>
          <span className="font-spartan font-bold text-xl">
            {oneInvoice.email}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="font-spartan text-ink text-base">Payment Due</div>
        <span className="font-spartan font-bold text-xl">
          {oneInvoice.dueDate}
        </span>
      </div>

      <div className="w-full mt-8 px-8 py-4 items-center flex justify-between rounded-md bg-darkFooter">
        <p className="text-ink font-spartan text-base">Amount Due</p>
        <h1 className="font-bold font-spartan text-white text-3xl">
          £ {oneInvoice.price}
        </h1>
      </div>
    </div>
  );
}
