import './QrCodeGenerator.css'
import QRCode from 'react-qr-code'
import { useState } from 'react'


export default function QrCodeGenerator () {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    const handleQrCodeGenerator = () => {
        setQrCode(input)
    }

    return (
    <div className="qr-code-generator">
        <h1>QR Code Generator!</h1>
        <div>
            <input type='text'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Enter your value here'
                    name='qr-code'
                    value={input}/>
            <button onClick={handleQrCodeGenerator}>Generate</button>
        </div>
        <div>
            <QRCode
                id="qr-code-value"
                value={qrCode} />
        </div>
    </div>
    )
}