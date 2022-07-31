import {QRCodeSVG} from 'qrcode.react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function RewardsCard() {
    
    let rewards = 8
    let stamps = []
    
    // adds stamp or blank circle to the rewards card depending on the reward amount
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

    const loggedIn = useSelector(state => state.loggedIn)
    const navigate = useNavigate()

    useEffect(() => {
        console.log({loggedIn});
        if (!loggedIn.value) {
            navigate('/login')
        }
    }, [navigate, loggedIn])


    return (
        <div className="h-screen flex flex-col justify-center bg-gray-50 pb-16">
            <strong className="text-lg text-center">Scan QR Code to receive a stamp</strong>
            <div className="max-w-7xl mx-auto h-3/5 lg:h-4/5 lg:w-3/5 lg:pb-8 flex flex-col justify-center overflow-hidden shadow rounded-lg bg-gray-100" >
                <div className="rounded-lg mx-auto bg-gray-100 px-4 py-4 sm:px-6 flex flex-col items-center">
                    <QRCodeSVG value="https://codedbyleo.com" size="250"/>
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