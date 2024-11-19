import { useState } from 'react'

function App() {
  const [interest, setInterest] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(0)

  // Dynamically rendering values:
  const [rangeValue, setRangeValue] = useState(100000)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setRangeValue(value)
  }

  return (
    <div className='flex justify-center bg-slate-700 items-center h-screen'>
      <div className='w-[800px] h-[550px] bg-white rounded-md'>
        <h1 className='font-semibold text-[20px] bg-slate-100 rounded-t-md py-4 pl-6'>Choose your EMI options: </h1>

        <div className='grid grid-cols-2'>
          <div className='flex flex-col px-6 border-r-4 border-r-slate-300'>

            {/* Down payment */}
            <div className='flex flex-col mt-4'>
              <label className='mb-10'>Down payment: <span className='text-blue-600'>₹ {rangeValue}</span> </label>
              <input 
                type='range'
                min={0}
                max={1000000}
                value={rangeValue}
                defaultValue={100000}
                onChange={(e) => setRangeValue(Number(e.target.value))}
              />
              <div className='flex justify-between px-1 text-xs mt-2'>
                <label>₹ 0</label>
                <label>₹ 10,00,000</label>
              </div>

              <div className='mt-8 border border-gray-400 p-3 rounded-md outline-blue-400'>
                <span className='mx-3'>₹</span>
                <input
                  type='text'
                  placeholder='Enter down pay amount'
                  value={rangeValue}
                  className='outline-none'
                  onChange={handleChange}
                  min={0}
                  max={1000000}
                  defaultValue={100000}
                  disabled={rangeValue > 1100000 || rangeValue < 0}
                />
              </div>
              {
                rangeValue > 1000000  
                  ? 
                <span 
                  className='text-red-500 font-medium text-[13px] tracking-wider'
                >
                  Amount can not be more than 10,00,000
                </span> 
                  :
                  rangeValue < 0
                  ?
                  <span 
                    className='text-red-500 font-medium text-[13px] tracking-wider'
                  >
                    Amount can not be less than 0
                  </span>
                  : 
                <span 
                  className='text-[13px] tracking-wider'
                >
                  Your loan amount will be: 
                  <span className='text-blue-500 ml-2 font-medium'>₹ {1000000 - rangeValue}</span> 
                </span>
              }
            </div>
            
            {/* Tenure and interest */}
            <div className='mt-8 grid grid-cols-2 gap-8'>
              <div className='flex flex-col justify-between mb-[75px]'>
                <label className='mb-6'>Interest:</label>
                <input
                  type='range'
                  placeholder='Enter interest'
                  min="8"
                  max="20"
                  defaultValue={10}
                />
                <div className='mt-1 flex justify-between text-xs'>
                  <label>8%</label>
                  <label>20%</label>
                </div>

                <input 
                  type='text'
                  placeholder=''
                  className='border-2 border-gray-400 outline-blue-400 rounded-md mt-6 py-3 px-4'
                  defaultValue={10}
                />
              </div>

              <div className='flex flex-col'>
                <label className='mb-6'>Tenure:</label>
                <input
                  type='range'
                  placeholder='Enter interest'
                  min="1"
                  max="7"
                  defaultValue={2}
                />
                <div className='mt-1 flex justify-between text-xs'>
                  <label>1 year</label>
                  <label>7 years</label>
                </div>

                <input 
                  type='text'
                  placeholder=''
                  className='border-2 border-gray-400 outline-blue-400 rounded-md mt-6 py-3 px-4'
                  defaultValue={2}
                />
              </div>
            </div>
          </div>

          <div className='mx-2'>chart and graph</div>
        </div>
      </div>
    </div>
  )
}

export default App
