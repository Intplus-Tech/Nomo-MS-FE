"use Client";

export default function SecondInvoice() {

  return (
    <div className="bg-white w-full lg:w-[340px] h-auto lg:h-[159px] opacity-100 rounded-lg shadow p-6">
      <h3 className="mt-2">Total Project Cost</h3>

      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <div>
          <p>Total amount</p>
          <p className="font-semibold">₦10,500,080</p>
        </div>

        <div>
          <p>Total amount (Tax)</p>
          <p className="font-semibold">₦12,500,080</p>
        </div>
      </div>
    </div>

  )
}