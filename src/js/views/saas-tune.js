export const id = "__vvid95621f5e-e8f2-4323-af9b-52bef5fe2813";

export function render() {
  const markup = `  
    <div class="fixed inset-0 w-screen h-screen flex bg-white z-30 overflow-y-auto __view-wrapper __budget-view">
      <button class="absolute right-0 mt-2 mr-8 p-3 bg-gray-200 text-gray-700 rounded-full focus:outline-none __view-wrapper__clear">
        <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <main class="mx-auto w-screen-xl">
        <div class="h-full flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-3xl font-semibold">Saas Tune</h1>
            <p class="text-gray-700">Coming soon 🚀🚀🚀</p>
          </div>
        </div>
      </main>
    </div>
  `;
  document.querySelector("main").insertAdjacentHTML("beforeend", markup);
}
