import {QRCodeSVG} from 'qrcode.react';

let rewards = 8
let stamps = []

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("BREAK");
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

export default function RewardsCard() {
    return (
        <div className="h-screen flex flex-col justify-center bg-gray-50">
            <div className="max-w-7xl mx-auto h-3/5 lg:h-4/5 lg:w-3/5 lg:pb-8 flex flex-col justify-center bg-white overflow-hidden shadow rounded-lg" >
                <div className="px-4 py-5 sm:p-6 m-auto text-center font-bold">
                    <QRCodeSVG value="random value" size="250"/>
                </div>
                {/* <strong className="text-center">Scan QR Code to receive a stamp</strong> */}
                <div className="rounded-lg mx-auto bg-gray-100 px-4 py-4 sm:px-6">
                    {stamps}
                {/* Content goes here */}
                {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
                </div>
            </div>
        </div>
    )
  }