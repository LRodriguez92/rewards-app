import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { stamp } from '../services/stampServices';

export default function StampCard() {

    const [stamps, setStamps] = useState(null);
    const [id, setId] = useState(null);
    
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // get id from url params
        setId(params.id);
        getStamps(params.id)
    }, [params.id]);

    const getStamps = (id) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then((response) => {
            console.log('Stamps!');
            console.log(response.data.rewards);
            setStamps(response.data.rewards)
        })
        .catch((error) => {
            console.log('An error occurred:', error);
        })
    }

    return (
        <div className="flex justify-center h-screen pb-28">
            <div className="bg-white shadow sm:rounded-lg lg:w-2/5 lg:h-50 m-auto">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Stamp Customer's Card</h3>
                <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                <div className="max-w-xl text-sm text-gray-500">
                    <p>
                    Add a stamp to the rewards card?
                    </p>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                    <button
                        onClick={() => navigate('/')}
                        type="button"
                        className="inline-flex items-center justify-center mr-4 px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    >
                        Cancel
                    </button>
                    {stamps === 8 ? 
                        <button
                        onClick={() => {
                            stamp(id, 1)
                            navigate('/')
                            alert('Stamp added!')
                            }
                        }
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:text-sm"
                        >
                        Redeem Reward and Stamp
                        </button>
                        :
                        <button
                        onClick={() => {
                            stamp(id, stamps+1)
                            alert('Stamp added!')
                            navigate('/')
                            }
                        }
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:text-sm"
                        >
                        Stamp
                        </button>
                    }
                </div>
                </div>
            </div>
            </div>
        </div>
      )
  }