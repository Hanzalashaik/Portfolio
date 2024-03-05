import { TypeAnimation } from 'react-type-animation';
import home from "../assets/svgbg.svg";
import axios from "axios";
import config from "../config.json";

export default function Home() {
    const handleDownload = async () => {
        const URL = config.URL;
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`${URL}/api/home/upload`, {
                headers: {
                    "access-token": token,
                },
                responseType: 'arraybuffer'
            });

            // Convert the response data into a Blob
            const blob = new Blob([response.data], { type: 'application/pdf' });

            // Create a temporary URL for the Blob data
            const blobURL = window.URL.createObjectURL(blob);

            // Create a link element
            const link = document.createElement('a');
            link.href = blobURL;
            link.setAttribute('download', 'Hanzala_Resume.pdf');

            // Append the link to the body and trigger a click event
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(blobURL);
            document.body.removeChild(link);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section id="home">
                <div className="flex flex-col bg-slate-800 md:flex-row justify-center items-center gap-10 min-h-screen">
                    <div className="flex-1 md:ml-10 flex flex-col items-center md:items-start text-center md:text-left">
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Hi, I am,</h5>
                        <h1 className="text-5xl mt-2 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                            <TypeAnimation
                                sequence={[
                                    'Hanzala Shaikh',
                                    1000,
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ display: 'inline' }}
                            />
                        </h1>
                        <h2 className="text-3xl text-gray-800 dark:text-white mt-2">I build things for the web</h2>
                        <p className="text-md text-gray-600 dark:text-gray-400 mt-4 leading-relaxed max-w-xl">
                            I am a full-stack web developer with a passion for creating engaging, responsive, and user-friendly web applications.
                        </p>
                        <button onClick={handleDownload} className="mt-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                            Download Resume
                        </button>
                    </div>
                    <div className="md:flex-1 flex justify-center items-center">
                        <img src={home} alt="Home" className="w-full md:w-auto" />
                    </div>
                </div>
            </section>
            <section id='about'>
                <hr className="mt-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded border-0" />
            </section>
        </>
    );
}

