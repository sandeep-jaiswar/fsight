import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-48 h-48 mb-4">
        <path fill="none" stroke="#d1d5db" strokeWidth="2" d="M64 64h384v384H64z"/>
        <path fill="none" stroke="#d1d5db" strokeWidth="2" d="M64 128h384M64 192h384M64 256h384M64 320h384M64 384h384"/>
        <path fill="none" stroke="#d1d5db" strokeWidth="2" d="M128 64v384M192 64v384M256 64v384M320 64v384M384 64v384"/>

        <rect x="128" y="256" width="24" height="80" fill="#4ade80"/>
        <rect x="192" y="192" width="24" height="144" fill="#f87171"/>
        <rect x="256" y="208" width="24" height="128" fill="#4ade80"/>
        <rect x="320" y="144" width="24" height="192" fill="#f87171"/>
        
        <line x1="140" y1="336" x2="140" y2="256" stroke="#374151" strokeWidth="4"/>
        <line x1="204" y1="336" x2="204" y2="192" stroke="#374151" strokeWidth="4"/>
        <line x1="268" y1="336" x2="268" y2="208" stroke="#374151" strokeWidth="4"/>
        <line x1="332" y1="336" x2="332" y2="144" stroke="#374151" strokeWidth="4"/>

      </svg>
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <button className="text-blue-500 hover:text-blue-700 text-lg underline">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
