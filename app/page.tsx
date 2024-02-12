export default function Home() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="flex flex-col max-w-full w-[1065px] max-md:mt-10">
        <div className="self-center text-2xl font-medium whitespace-nowrap text-white text-opacity-60 tracking-[2.4px]">
          WELCOME TO THE FUTURE OF SPORT
        </div>
        <div className="mt-9 text-9xl font-bold tracking-tighter text-center bg-clip-text max-md:max-w-full max-md:text-4xl">
          AllSportsDAO
        </div>
        <div className="mx-5 mt-9 text-2xl tracking-wide text-center text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          They win, you win.
        </div>
        <div className="mx-5 mt-9 text-2xl tracking-wide text-center text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          -
        </div>
        <div className="mx-5 mt-9 text-2xl tracking-wide text-center text-white max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          The Premier Collection
        </div>
        <div className="flex gap-5 justify-between self-center mt-24 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <a href="/football">
          <button className="bg-transparent hover:bg-pink-700 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Dashboard
          </button></a>
          <a href="https://www.tensor.trade/trade/the_prem">
        <button className="bg-transparent hover:bg-blue-700 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Buy on Tensor
        </button></a>
        <a href="/football/staking">
        <button className="bg-transparent hover:bg-purple-600 text-white hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Staking
        </button></a>
        </div>
      </div>
    </div>
  )
}
