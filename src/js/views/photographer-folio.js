export const id = "__vvid95621f5e-e8f2-4323-af9b-52bef5fe2813";

export function render() {
  const markup = `  
    <div class="fixed inset-0 w-screen h-screen flex bg-white z-30 overflow-y-auto __view-wrapper __budget-view">
      <button class="absolute right-0 mt-2 mr-8 p-3 bg-gray-200 text-gray-700 rounded-full focus:outline-none __view-wrapper__clear">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <main class="mx-auto w-screen-xl bg-yellow-600 text-black">
        <div class="h-full flex flex-col justify-between">
          <header class="p-8">
            <div class="flex items-center justify-between">          
              <div class="font-cinzel-decorative text-5xl"><p>02/27</p></div>
              <nav>
                <figure>
                  <svg class="w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 8h16M4 16h16" />
                  </svg>
                </figure>
              </nav>
            </div>
          </header>
          <section class="flex-grow">
            <div class="h-full flex items-center justify-center relative">
              <div class="absolute z-20">
                <span class="font-cinzel-decorative" style="font-size: 16rem;">electra</span>
              </div>
              <div class="flex">              
                <figure class="-mr-24 flex">
                  <img style="height: 24rem;" class="my-auto" src="https://images.pexels.com/photos/2890191/pexels-photo-2890191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </figure>
                <figure class="z-10 shadow-2xl">
                  <img src="https://images.pexels.com/photos/2890181/pexels-photo-2890181.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </figure>
                <figure class="-ml-24 z-0 flex">
                  <img style="height: 24rem;" class="my-auto" src="https://images.pexels.com/photos/2890176/pexels-photo-2890176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </figure>
              </div>
            </div>
          </section>
          <footer class="p-8">
            <div class="flex items-end justify-between">          
              <nav>
                <figure>
                  <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </figure>
              </nav>
              <div>
                <ul>
                  <li class="uppercase">Editorial &#8544;</li>
                  <li class="uppercase">Editorial &#8545;</li>
                  <li class="uppercase">Celebrity</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  `;
  document.querySelector("main").insertAdjacentHTML("beforeend", markup);
}
