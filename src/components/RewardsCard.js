import {QRCodeSVG} from 'qrcode.react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



export default function RewardsCard() {
    // console.log(window.location.origin);
    
    const loggedIn = useSelector(state => state.loggedIn)
    const navigate = useNavigate()

    const [rewards, setRewards] = useState();
    const [id, setId] = useState();

    let stamps = []

    useEffect(() => {
        console.log({loggedIn});
        if (!loggedIn.value) {
            navigate('/login')
        } else {
            navigate('/rewards')
        }
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
        .then((response) => {
            setRewards(response.data.rewards)
            setId(response.data.id)
        })
        .catch((error) => {
            console.log('An error occurred:', error);
        })
 
    }, [navigate, loggedIn])
    
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            stamps.push(<br/>)
        }
        if (i <= rewards) {
            stamps.push(
                <img
                    key={i}
                    className="inline-block m-2 h-10 w-10 rounded-full"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fgreen%2Fcheck-mark-8-512.jpg&f=1&nofb=1"
                    alt=""
                />
            )
        } else if (i > rewards) {
            stamps.push(
                <span key={i} className="inline-flex m-2 items-center justify-center h-10 w-10 rounded-full bg-gray-200">
                    <span className="text-xl font-medium leading-none text-white pb-2"></span>
                </span>
            )
        }
    
    }
    
    // let rewards = 8
    
    // adds stamp or blank circle to the rewards card depending on the reward amount



    return (
        <div className="h-screen flex flex-col justify-center bg-gray-50 pb-16">
            <strong className="text-lg text-center">Scan QR Code to receive a stamp or redeem your reward</strong>
            <div className="max-w-7xl mx-auto h-3/5 lg:h-4/5 lg:w-3/5 lg:pb-8 flex flex-col justify-center overflow-hidden shadow rounded-lg bg-gray-100" >
                <div className="rounded-lg mx-auto bg-gray-100 px-4 py-4 sm:px-6 flex flex-col items-center">
                    <QRCodeSVG value={`${window.location.origin}/users/${id}/stamp`} size="250"/>
                    {/* <strong>Scan QR Code to receive a stamp</strong> */}
                    <div className="mt-4">
                        {stamps}
                    </div>
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                </div>
            </div>
        </div>
    )
  }