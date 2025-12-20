export const Modal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <div className="w-full md:w-lg rounded-lg bg-white p-6 shadow-xl ">
          <div className="flex items-center justify-between border-b  border-b-zinc-100">
            <h2 id="modalTitle" className="text-base font-bold text-gray-800 sm:text-xl mb-3">
              {data.title}
            </h2>

            <button
              type="button"
              className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
              aria-label="Close"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-4 overflow-y-auto max-h-100 min-h-60">{data.content}</div>

          {/* <footer className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              Cancel
            </button>

            <button
              type="button"
              className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Done
            </button>
          </footer> */}
        </div>
      </div>
    </>
  );
};
