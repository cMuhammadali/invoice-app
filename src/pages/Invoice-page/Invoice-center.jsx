export default function InvoiceCenter() {
  return (
    <div className="w-full bg-white px-10 py-8 rounded-md shadow-box">
      <div>
        <span className="font-spartan font-bold text-ink">#</span>
        <span className="font-spartan font-bold">XM9141</span>
        <div className="text-ink">Graphic Design</div>
      </div>

      <div className="mt-12 flex">
        <div className="flex-auto">
          <div className="font-spartan text-ink">Invoice Date</div>
          <span className="font-spartan font-bold text-xl">21 Aug 2021</span>
        </div>

        <div className="flex-auto">
          <div className="font-spartan text-ink">Bill To</div>
          <span className="font-spartan font-bold text-xl">Alex Grim</span>
        </div>

        <div className="flex-auto">
          <div className="font-spartan text-ink">Sent to</div>
          <span className="font-spartan font-bold text-xl">
            alexgrim@mail.com
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="font-spartan text-ink">Payment Due</div>
        <span className="font-spartan font-bold text-xl">20 Sep 2021</span>
      </div>

      <div className="w-full mt-8 px-8 py-4 items-center flex justify-between rounded-md bg-darkFooter">
        <p className="text-ink font-spartan">Amount Due</p>
        <h1 className="font-bold font-spartan text-white text-3xl">£ 556.00</h1>
      </div>
    </div>
  );
}
