import { Link } from 'react-router-dom'
const strains = [
    {
        name: 'Pineapple Express',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 35,
        dub: 20,
        dime: 10,
        subSpecies: 'Sativa',
        image:
        'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Blue Dream',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 25,
        dub: 0,
        dime: 0,
        subSpecies: 'Indica',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Girl Scout Cookies',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 40,
        dub: 25,
        dime: 15,
        subSpecies: 'Hybrid',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Pineapple Express',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 35,
        dub: 20,
        dime: 10,
        subSpecies: 'Sativa',
        image:
        'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Blue Dream',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 25,
        dub: 0,
        dime: 0,
        subSpecies: 'Indica',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Girl Scout Cookies',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 40,
        dub: 25,
        dime: 15,
        subSpecies: 'Hybrid',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Pineapple Express',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 35,
        dub: 20,
        dime: 10,
        subSpecies: 'Sativa',
        image:
        'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Blue Dream',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 25,
        dub: 0,
        dime: 0,
        subSpecies: 'Indica',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
    {
        name: 'Girl Scout Cookies',
        ounce: 260,
        half: 130,
        quarter: 65,
        eighth: 40,
        dub: 25,
        dime: 15,
        subSpecies: 'Hybrid',
        image:
          'https://images.unsplash.com/photo-1605570381318-09756c35fd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    },
  ]

  
  export default function ProductList() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            {/* <h1 className="text-xl font-semibold text-gray-900">Strains</h1> */}
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link to="/new/strain">
              { localStorage.getItem('store') === 'true' ?
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:w-auto"
                >
                    Add strain
                </button>
              : 
                null 
              }
            </Link>
          </div>
        </div>
        <div className="md:mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full md:py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Ounce
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Half
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Quarter
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Eighth
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Dub
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Dime
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {strains.map((strain, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full" src={strain.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{strain.name}</div>
                              <div className="text-gray-500">{strain.subSpecies}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.ounce > 0 ?
                            <div className="text-gray-900">{strain.ounce}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.half > 0 ?
                            <div className="text-gray-900">{strain.half}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.quarter > 0 ?
                            <div className="text-gray-900">{strain.quarter}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.eighth > 0 ?
                            <div className="text-gray-900">{strain.eighth}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.dub > 0 ?
                            <div className="text-gray-900">{strain.dub}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        { strain.dime > 0 ?
                            <div className="text-gray-900">{strain.dime}</div>
                            :
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                            N/A
                            </span>
                        }
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="/" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {strain.name}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  