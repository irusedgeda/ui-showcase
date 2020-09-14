export const id = "__vvidf5902d5e-85e5-4259-bf8d-18535309256b";

export function render() {
  const markup = `  
    <div class="fixed inset-0 w-screen h-screen flex bg-white z-30 overflow-y-auto __view-wrapper __budget-view">
      <button class="absolute right-0 mt-2 mr-8 p-3 bg-gray-200 text-gray-700 rounded-full focus:outline-none __view-wrapper__clear">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <main class="mx-auto max-w-screen-xl flex shadow-md">
        <div class="w-3/4 p-8 bg-gray-100">
          <header class="py-2 flex items-center justify-between">
            <div class="flex items-center">
              <div class="flex items-center">
                <figure class="w-8">
                  <img src="./img/budget/budget-logo.svg" alt="Budget">
                </figure>
                <span class="ml-2 text-2xl font-semibold">Budget</span>
              </div>
              <nav class="ml-4 flex items-center justify-between text-gray-500">
                <a href="#" class="px-3 hover:text-gray-900">Overview</a>
                <a href="#" class="px-3 text-gray-900 font-medium hover:text-gray-900">Finance</a>
                <a href="#" class="px-3 hover:text-gray-900">Calendar</a>
                <a href="#" class="px-3 hover:text-gray-900">Events</a>
              </nav>
            </div>
            <div class="ml-8 p-4 w-64 overflow-hidden flex items-center bg-white rounded-lg shadow-sm hover:shadow-lg">
              <figure>
                <svg class="w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </figure>
              <input type="text" name="search" id="search" placeholder="Search"
                class="ml-2 focus:outline-none placeholder-gray-500">
            </div>
          </header>
          <section class="mt-12">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <figure class="w-8">
                  <img src="./img/budget/home-wallet.svg" alt="Budget">
                </figure>
                <div class="ml-2 leading-tight">
                  <h2 class="leading-none text-xl font-semibold text-blue-600">Home Wallet</h2>
                  <p class="text-gray-700">Change default wallet</p>
                </div>
              </div>
              <button
                class="py-4 px-5 flex items-center bg-white rounded-lg shadow-sm text-gray-600 focus:outline-none hover:shadow-lg">
                  <figure>
                    <svg class="w-6 h-6 stroke-current" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                  </figure>
                <span class="ml-6">Calendar</span>
                <span class="ml-6"><svg class="w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg></span>
              </button>
            </div>
          </section>
          <section class="mt-12">
            <div class="grid grid-cols-7 grid-flow-row gap-1">
              <button
                class="p-2 flex items-center justify-between text-gray-700 text-sm border border-gray-700 rounded-lg focus:outline-none group hover:border-blue-300 hover:bg-blue-300">
                <span class="group-hover:text-white">Group by</span>
                <figure>
                  <svg class="w-4 h-4 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <button
                class="p-2 flex items-center justify-between text-gray-700 text-sm border border-gray-700 rounded-lg focus:outline-none group hover:border-blue-300 hover:bg-blue-300">
                <span class="group-hover:text-white">Realisation</span>
                <figure>
                  <svg class="w-4 h-4 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <button
                class="p-2 flex items-center justify-between bg-blue-300 text-sm border border-blue-300 rounded-lg focus:outline-none">
                <span class="text-white">Dates</span>
                <figure>
                  <svg class="w-4 h-4 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <button
                class="p-2 flex items-center justify-between text-gray-700 text-sm border border-gray-700 rounded-lg focus:outline-none group hover:border-blue-300 hover:bg-blue-300">
                <span class="group-hover:text-white">Types</span>
                <figure>
                  <svg class="w-4 h-4 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <button
                class="p-2 flex items-center justify-between text-gray-700 text-sm border border-gray-700 rounded-lg focus:outline-none group hover:border-blue-300 hover:bg-blue-300">
                <span class="group-hover:text-white">Sample</span>
                <figure>
                  <svg class="w-4 h-4 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <button
                class="p-2 flex items-center justify-between text-gray-700 text-sm border border-gray-700 rounded-lg focus:outline-none group hover:border-blue-300 hover:bg-blue-300">
                <span class="group-hover:text-white">Extended</span>
                <figure>
                  <svg class="w-4 h-4 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                  </svg>
                </figure>
              </button>
              <div class="flex items-center justify-end">
                <button class="p-3 border border-gray-700 rounded-lg text-gray-700 group hover:border-blue-300 hover:bg-blue-300">
                  <figure>
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                    </svg>
                  </figure>
                </button>
                <button class="ml-1 p-3 border border-gray-700 rounded-lg text-gray-700 group hover:border-blue-300 hover:bg-blue-300">
                  <figure>
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"></path>
                    </svg>
                  </figure>
                </button>
              </div>
            </div>
          </section>
          <section class="mt-12">
            <div class="flex items-baseline justify-between text-gray-700">
              <div><span>Oct 1 2020</span></div>
              <div>
                <span>4 transactions</span>
                <span class="ml-8 text-black text-2xl font-medium">$6,378.40</span>
              </div>
            </div>
            <div>
              <div class="p-6 mt-4 flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-lg">
                <div class="flex items-center">
                  <figure class="text-orange-700">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                    </svg>
                  </figure>
                  <div class="ml-4">
                    <h4>Clothes & Shopping</h4>
                    <p class="text-gray-700 text-sm">Sep 7 2020</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-xl text-red-600 font-medium">$2,569.47</span>
                  <button class="ml-8 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                  <button class="ml-3 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-6 mt-4 flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-lg">
                <div class="flex items-center">
                  <figure class="text-green-700">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                    </svg>
                  </figure>
                  <div class="ml-4">
                    <h4>Travel & Vacation</h4>
                    <p class="text-gray-700 text-sm">Sep 17 2020</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-xl text-red-600 font-medium">$5,990.87</span>
                  <button class="ml-8 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                  <button class="ml-3 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-6 mt-4 flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-lg">
                <div class="flex items-center">
                  <figure class="text-red-700">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z" clip-rule="evenodd"></path>
                    </svg>
                  </figure>
                  <div class="ml-4">
                    <h4>Credit & Loans</h4>
                    <p class="text-gray-700 text-sm">Sep 22 2020</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-xl text-green-500 font-medium">$12,990.87</span>
                  <button class="ml-8 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                  <button class="ml-3 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-6 mt-4 flex items-center justify-between bg-white rounded-lg shadow-sm hover:shadow-lg">
                <div class="flex items-center">
                  <figure class="text-indigo-700">
                    <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"></path>
                    </svg>
                  </figure>
                  <div class="ml-4">
                    <h4>Coupons & Gift Cards</h4>
                    <p class="text-gray-700 text-sm">Sep 28 2020</p>
                  </div>
                </div>
                <div class="flex items-center">
                  <span class="text-xl text-green-500 font-medium">$1,947.87</span>
                  <button class="ml-8 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                  <button class="ml-3 p-2 text-gray-700 bg-gray-200 rounded-lg">
                    <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <section class="pt-10">
                <p class="text-gray-700 text-xs font-normal">Inspired by 
                  <a href="https://dribbble.com/uigeek" class="underline">Masudur Rahman's</a>
                  <a href="https://dribbble.com/shots/9715159-Finance-Budget-Web-Application-Design?utm_source=Clipboard_Shot&utm_campaign=uigeek&utm_content=Finance%20Budget%20Web%20Application%20Design&utm_medium=Social_Share" class="underline"> Finance Budget Web Application Design</a> on dribbble | Powered by 
                  <a href="https://tailwindcss.com/" class="underline">TailwindCSS</a> | &copy; Irus Edge Digital Agency 2020
                </p>
              </section>
            </div>
          </section>
        </div>
        <div class="w-1/4 py-10 bg-gray-200 border-l">
          <div class="px-8 pb-8 border-b">
            <div class="flex justify-end items-center">
              <figure>
                <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              </figure>
              <div>
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/yecidsm/128.jpg" alt="Avatar" class="w-12 h-auto ml-10 rounded-full">
              </div>
            </div>
            <div>
              <div class="mt-20 flex items-center justify-between">
                <p class="text-xl">Wallets</p>
                <button class="text-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="mt-4">
                <div class="py-2 flex items-center">
                  <figure>
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span>Home Wallet</span>
                    <span class="text-sm text-gray-600">$235,000.00</span>
                  </div>
                </div>
                <div class="py-2 flex items-center">
                  <figure>
                  <svg class="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"></path>
                  </svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span>Investments</span>
                    <span class="text-sm text-gray-600">$535,000.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-8">
            <div>
              <div class="mt-16 flex items-center justify-between">
                <p class="text-xl">Categories</p>
                <button class="text-gray-700">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <div class="mt-4">
                <div class="py-4 flex items-center">
                  <figure>
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span class="font-medium">Bills</span>
                    <span class="text-sm text-gray-600">$35,000.00</span>
                  </div>
                </div>
                <div class="py-4 flex items-center">
                  <figure>
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span class="font-medium">Education</span>
                    <span class="text-sm text-gray-600">$75,000.00</span>
                  </div>
                </div>
                <div class="py-4 flex items-center">
                  <figure>
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span class="font-medium">Utility</span>
                    <span class="text-sm text-gray-600">Sep 2020</span>
                  </div>
                </div>
                <div class="py-4 flex items-center">
                  <figure>
                    <svg class="w-8 h-8 text-gray-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </figure>
                  <div class="ml-4 flex flex-col">
                    <span class="font-medium">Shopping</span>
                    <span class="text-sm text-gray-600">Sep 2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
  document.querySelector("main").insertAdjacentHTML("beforeend", markup);
}
