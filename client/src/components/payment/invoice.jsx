import * as React from 'react';

function Invoice() {
  return (
    <div className="flex flex-col justify-center bg-slate-50 max-w-[595px]">
      <div className="flex overflow-hidden relative flex-col py-8 w-full min-h-[842px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-10 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col">
              <div className="text-3xl font-semibold leading-8 text-zinc-900">
                Invoice
              </div>
              <div className="text-xs font-medium tracking-wide leading-4 text-gray-500">
                #AB2324-01
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1cda5d87ea6791e2ce9d54aed323f9cd59491dfd5ff9fe26cbcd5d21d174995?"
              className="shrink-0 w-12 aspect-square"
            />
          </div>
          <div className="flex gap-5 items-start mt-12 text-xs font-semibold leading-4 text-gray-500 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-col flex-1 self-stretch text-zinc-900">
              <div>Issued</div>
              <div className="mt-1.5 text-gray-500">01 Aug, 2023</div>
              <div className="mt-4">Due</div>
              <div className="mt-1.5 text-gray-500">15 Aug, 2023</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-zinc-900">Billed to</div>
              <div className="mt-1.5">Company Name</div>
              <div className="leading-4">
                Company address
                <br />
                City, Country - 00000
              </div>
              <div>+0 (000) 123-4567</div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-zinc-900">From</div>
              <div className="mt-1.5">Panda, Inc</div>
              <div className="leading-4">
                Business address
                <br />
                City, State, IN - 000 000
              </div>
              <div>TAX ID 00XXXXX1234X0XX</div>
            </div>
          </div>
          <div className="mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-xs font-semibold leading-4 text-zinc-900 max-md:mt-10">
                  <div>Service</div>
                  <div className="mt-7">Service name</div>
                  <div className="flex gap-1.5 mt-2 text-gray-500">
                    <div className="grow">Description</div>
                    <div className="text-xs font-light leading-4 text-center text-zinc-400">
                      •
                    </div>
                    <div>Hours log ↗</div>
                  </div>
                  <div className="mt-4">Service name</div>
                  <div className="mt-3 text-gray-500">Description</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-xs leading-4 max-md:mt-10">
                  <div className="flex gap-5 justify-between font-semibold text-zinc-900">
                    <div>Qty</div>
                    <div className="text-right">Rate</div>
                    <div className="text-right">Line total</div>
                  </div>
                  <div className="flex gap-5 justify-between mt-5 w-full font-medium text-gray-500 whitespace-nowrap">
                    <div className="my-auto">2</div>
                    <div className="flex gap-px justify-end text-right">
                      <div>$</div>
                      <div>100.00</div>
                    </div>
                    <div className="flex gap-px justify-end text-right">
                      <div>$</div>
                      <div>200.00</div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-8 w-full">
                    <div className="flex gap-5 items-start self-start">
                      <div className="flex flex-col flex-1 mt-1 font-semibold text-zinc-900">
                        <div className="font-medium text-gray-500">2</div>
                        <div className="mt-11 max-md:mt-10">Subtotal</div>
                        <div className="mt-7">Tax (0%)</div>
                        <div className="mt-7">Total</div>
                      </div>
                      <div className="flex flex-1 gap-px justify-end font-medium text-right text-gray-500 whitespace-nowrap">
                        <div>$</div>
                        <div>100.00</div>
                      </div>
                    </div>
                    <div className="flex flex-col font-medium text-right text-gray-500 whitespace-nowrap">
                      <div className="flex gap-px justify-end">
                        <div>$</div>
                        <div>200.00</div>
                      </div>
                      <div className="flex gap-px justify-end mt-10">
                        <div>$</div>
                        <div>400.00</div>
                      </div>
                      <div className="flex gap-px justify-end self-start mt-5 ml-3.5 max-md:ml-2.5">
                        <div>$</div>
                        <div>0.00</div>
                      </div>
                      <div className="flex gap-px justify-end mt-5 text-zinc-900">
                        <div>$</div>
                        <div>400.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-end py-2.5 mt-2.5 text-xs font-bold leading-4 border-violet-500 border-solid border-y-2">
            <div className="text-violet-600">Amount due</div>
            <div className="flex gap-0.5 justify-end text-right text-violet-600 whitespace-nowrap">
              <div className="grow">US$</div>
              <div>400.00</div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col items-start px-10 mt-52 w-full text-xs leading-4 text-gray-500 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="font-semibold text-zinc-900">
            Thank you for the business!
          </div>
          <div className="flex gap-1.5 mt-1">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6684b639ab9486dc783528c9c165cc8cffc432a1d3dd3e321a77e249e8cc7e0?"
              className="shrink-0 my-auto w-2.5 aspect-square fill-zinc-400"
            />
            <div className="flex-auto">
              Please pay within 15 days of receiving this invoice.
            </div>
          </div>
          <div className="flex gap-5 self-stretch mt-11 font-medium max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto gap-4">
              <div className="flex-auto">Digital Product Designer, IN</div>
              <div>+91 00000 00000</div>
            </div>
            <div>hello@email.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
