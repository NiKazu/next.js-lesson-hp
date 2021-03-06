import Layout from "../components/Layout"
import Image from "next/image"

export default function Blog() {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/avatar.jpg"
            width={60}
            height={60}
            alt="Avatar"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Adress</p>
          <p className="text-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
        <div className="mt-6 flex justify-around">
          <div>
            <a
              href="http://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 mr-3 text-blue-500"
                stroke="currentColor"
                fill="currentColor"
                viewBox="328 355 335 276"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="
                  M 630, 425
                  A 195, 195 0 0 1 331, 600
                  A 142, 142 0 0 0 428, 570
                  A  70,  70 0 0 1 370, 523
                  A  70,  70 0 0 0 401, 521
                  A  70,  70 0 0 1 344, 455
                  A  70,  70 0 0 0 372, 460
                  A  70,  70 0 0 1 354, 370
                  A 195, 195 0 0 0 495, 442
                  A  67,  67 0 0 1 611, 380
                  A 117, 117 0 0 0 654, 363
                  A  65,  65 0 0 1 623, 401
                  A 117, 117 0 0 0 662, 390
                  A  65,  65 0 0 1 630, 425
                  Z"
                  />
              </svg>
            </a>
          </div>
          <div>
            <a
                href="http://nerdcave.com/tailwind-cheat-sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 50 50"
                  className="w-6 h-6 mr-3 text-blue-700"
                >
                <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
              </svg>
            </a>
          </div>
          <div>
            <a
                href="http://nerdcave.com/tailwind-cheat-sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 mr-3 text-gray-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
