import Head from 'next/head';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#313135',
    width: '700px',
    border: 'none',
    borderRadius: '20px',
  },
  overlay: {
    backgroundColor: 'rgb(0,0,0,0)',
  },
};

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='flex flex-col min-h-screen bg-black-bg'>
      <div className='flex flex-row justify-between items-center p-10'>
        <h5 className='text-white'>LOANS</h5>
        <h6 className='text-green'>ALL LOANS</h6>
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <div className='flex flex-col p-4 justify-center items-center'>
          <div className='flex justify-center items-center mb-8'>
            <img src='/btc.svg' alt='btc' width='40' />
            <div className='flex flex-col pl-3 text-white'>
              <h2>BTC</h2>
              <h5 className='font-thin text-xs'>Bitcoin</h5>
            </div>
          </div>
          <div className='flex justify-between flex-row mb-8 w-full'>
            <input
              type='text'
              className='bg-black-bg w-11/12 py-2 pl-7 rounded-full'
              placeholder='Send to bitcoin address....'
            />
            <button className='shadow-2xl p-3 ml-1 rounded-2xl'>
              <img src='/qr-code.svg' width='40' />
            </button>
          </div>
          <div className='flex flex-col mb-8 text-white w-1/2 justify-center'>
            <div className='flex justify-between'>
              <p className='text-3xl flex items-end'>1.00</p>
              <p className='flex items-end'>BTC</p>
            </div>
            <div className='bg-white' style={{ height: 1 }} />
            <div className='flex justify-between font-thin'>
              <p className='flex items-start'>$44,572.35</p>
              <p className='flex items-start'>USD</p>
            </div>
          </div>
          <div className='flex flex-col mb-8 text-white w-10/12 justify-center relative'>
            {/* <div className='bg-semi h-1 w-full' />
            <div className='h-3 bg-green w-3 rounded-full absolute' /> */}

            <input className='bg-semi h-1 w-full' type='range' list='number' />
            <div className='w-full flex flex-row font-thin text-xs pt-2'>
              <div className='w-1/5'>0%</div>
              <div className='w-1/5'>25%</div>
              <div className='w-1/5 flex justify-center'>50%</div>
              <div className='w-1/5 flex justify-end'>75%</div>
              <div className='w-1/5 flex justify-end'>100%</div>
            </div>
          </div>
          <div>
            <button className='bg-green text-black-bg py-2 px-8 bg-gradient-to-b from-top to-bottom rounded-full shadow-2xl'>
              Send BTC
            </button>
          </div>
        </div>
      </Modal>
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
