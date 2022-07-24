export default function NewStrainForm() {
    return (
      <form className="space-y-8 divide-y divide-gray-200 flex flex-col items-center justify-center h-screen pb-20">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Strain Information</h3>
              <p className="mt-1 text-sm text-gray-500">If you're not selling a certain weight just leave the price at <strong>$0</strong>.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Strain Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete=""
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="eighth" className="block text-sm font-medium text-gray-700">
                  Eighth Price
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="eighth"
                    id="eighth"
                    autoComplete=""
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="dub" className="block text-sm font-medium text-gray-700">
                  Dub Price
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="dub"
                    id="dub"
                    autoComplete=""
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="dime" className="block text-sm font-medium text-gray-700">
                  Dime Price
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="dime"
                    id="dime"
                    autoComplete=""
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    )
  }