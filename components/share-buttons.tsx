"use client"

import { Printer } from "lucide-react"

export function ShareButtons() {
    return (
        <div className="flex items-center gap-3">
            <button className="text-[#1877F2] hover:opacity-80 transition-opacity" title="Facebook">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.38 6.07V8.7H14.93C13.72 8.7 13.48 9.27 13.48 10.01V12.06H16.42L15.95 14.96H13.48V21.96C18.26 21.21 21.92 17.06 21.92 12.06C21.92 6.53 17.42 2.04 12 2.04Z" />
                </svg>
            </button>
            <button className="text-[#25D366] hover:opacity-80 transition-opacity" title="WhatsApp">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        d="M2.00317 21.9893L3.65586 16.0232C2.6074 14.2255 2.0487 12.1824 2.0487 10.0818C2.0487 4.54226 6.58167 0.0332031 12.1528 0.0332031C14.8525 0.0332031 17.3896 1.07725 19.3006 2.97825C21.2116 4.87925 22.2599 7.40822 22.2568 10.0849C22.2568 15.6244 17.7269 20.1304 12.1497 20.1304C10.2195 20.1304 8.3308 19.6453 6.64936 18.718L2.00317 21.9893ZM12.1497 1.706C7.51478 1.706 3.73891 5.46101 3.73891 10.0849C3.73891 11.9126 4.29631 13.626 5.27546 15.0945L4.47525 18.019L7.49396 15.9392C8.88785 16.891 10.5186 17.4045 12.1528 17.4045C16.8202 17.4045 20.6122 13.916 20.6122 10.0849C20.6152 7.84275 19.7424 5.73351 18.156 4.15579C16.5665 2.57193 14.4485 1.706 12.1497 1.706Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button className="text-black hover:opacity-80 transition-opacity" title="X (Twitter)">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[30px] h-[30px] p-0.5"
                >
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            </button>
            <button className="text-[#0077b5] hover:opacity-80 transition-opacity" title="LinkedIn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            </button>
            <button
                className="text-gray-600 hover:opacity-80 transition-opacity"
                title="Print"
                onClick={() => window.print()}
            >
                <Printer className="w-[30px] h-[30px]" />
            </button>
        </div>
    )
}
