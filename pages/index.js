export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-black-bg'>
      <div className='flex flex-row justify-between items-center p-10'>
        <h5 className='text-white'>LOANS</h5>
        <h6 className='text-green'>ALL LOANS</h6>
      </div>
      <div className='w-full h-3/4 p-10 flex flex-row'>
        <div className='w-full h-full'>
          <h2 className='text-white text-center'>Borrowed</h2>
          <div className='w-full mt-5'>
            <div className='table-fixed w-full text-left'>
              <div>
                <div className='font-thin text-white w-full h-10 flex flex-row my-2'>
                  <div className='flex justify-center items-center w-1/6 '>
                    Borrowed
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    Collateral
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    Repaid
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    Annual Rate
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    Duration
                  </div>
                  <div className='flex justify-start items-center w-1/6 '>
                    Payment Progress
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='bg-black-item text-white w-full rounded-full border-grey h-12 flex flex-row my-2 border-t-4 '>
                  <div className='flex justify-center items-center w-1/6 '>
                    1,000.00 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    2.0 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    200.00<b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    10.00%
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    5 Days
                  </div>
                  <div className='flex justify-between items-center w-1/6 '>
                    <div className='flex justify-between items-center w-3/6 relative '>
                      <div className='bg-green h-2 w-20 rounded-full absolute z-20' />
                      <div className='bg-grey h-2 w-20 rounded-full absolute z-10' />
                    </div>
                    <div className='w-1/6'>50%</div>
                    <div className='flex flex-col w-1/6'>
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                    </div>
                  </div>
                </div>
                <div className='bg-black-item text-white w-full rounded-full border-red h-12 flex flex-row my-2 border-t-4 '>
                  <div className='flex justify-center items-center w-1/6 '>
                    1,000.00 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    2.0 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    200.00<b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    10.00%
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    5 Days
                  </div>
                  <div className='flex justify-between items-center w-1/6 '>
                    <div className='flex justify-between items-center w-3/6 relative '>
                      <div className='bg-green h-2 w-16 rounded-full absolute z-20' />
                      <div className='bg-grey h-2 w-20 rounded-full absolute z-10' />
                    </div>
                    <div className='w-1/6'>75%</div>
                    <div className='flex flex-col w-1/6'>
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                    </div>
                  </div>
                </div>
                {/* third row */}
                <div className='bg-black-item text-white w-full rounded-full border-grey h-12 flex flex-row my-2 border-t-4 '>
                  <div className='flex justify-center items-center w-1/6 '>
                    1,000.00 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    2.0 <b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    200.00<b className='pl-1'>BUSD</b>
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    10.00%
                  </div>
                  <div className='flex justify-center items-center w-1/6 '>
                    5 Days
                  </div>
                  <div className='flex justify-between items-center w-1/6 '>
                    <div className='flex justify-between items-center w-3/6 relative '>
                      <div className='bg-green h-2 w-5 rounded-full absolute z-20' />
                      <div className='bg-grey h-2 w-20 rounded-full absolute z-10' />
                    </div>
                    <div className='w-1/6'>25%</div>
                    <div className='flex flex-col w-1/6'>
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                      <div className='h-2 w-2 rounded-full bg-semi mb-1' />
                    </div>
                  </div>
                </div>

                {/* end row */}
              </div>
            </div>
          </div>
        </div>
        {/* <RightItem /> */}
      </div>
    </div>
  );
}
