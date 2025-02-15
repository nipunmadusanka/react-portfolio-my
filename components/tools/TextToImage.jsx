import react, { useState } from 'react';
import Button from "../reusable/Button";
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

function TextToImage() {
    const [image, setImage] = useState([]);
    const [text, setText] = useState();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const handleInput = (e) => {
        setText(e.target.value);
        // if (e.key === 'Enter') {
        //     createIage();
        // }
    }

    const createIage = async () => {
        setError('');
        setLoading(true);
        setShowImage(true);
        const formData = {
            prompt: text,
        };
        try {
            const respond = await fetch('https://text-to-image-backend-production.up.railway.app/api/image/generate', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await respond.json();
            if (data.error) {
                return setError(data.error);
            }
            if (data.success) {
                const image = data.image;  // directly get the image value
                setImage(prev => [...prev, image]);
                console.log(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
            setText('');
        }
    }

    const downloadImage = (img) => {
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = img;
        link.click();
    }
    return (
        <>
            <div className='block min-h-screen overflow-y-auto bg-black p-6'>
                <div className='flex justify-start items-center gap-3' >
                    <div className=' rounded-md '>
                        <span className='font-[500] text-white'>Generate image</span>
                    </div>
                </div>

                <div className='mt-5 w-full relative'>
                    <textarea className='w-full h-40 bg-slate-900 rounded-lg text-white' placeholder='Enter text to generate image' onChange={handleInput} value={text}></textarea>
                    <button disabled={loading} className="mt-5 absolute bottom-[12px] right-[6px] bg-sky-600 py-3 px-4 rounded-md text-white" onClick={createIage}>
                        {loading ?
                            <>
                                <svg
                                    className="animate-spin h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M4 12a8 8 0 0 1 8-8" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </>
                            :
                            'Generate Image'
                        }
                    </button>
                </div>
                {error && <div className='text-red-500'>{error}</div>}
                {/* <input type="text" onChange={(e) => setText(e.target.value)} />
                <button title="Generate Image" >Generate Image</button> */}
                <div className='mt-5 flex justify-center items-center' >
                    {showImage &&
                        <div className="w-full h-full flex justify-center items-center">
                            {loading ? (
                                <div className="w-full h-[20rem] bg-gray-300 animate-pulse rounded-lg"></div>
                            ) : (
                                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                                    {image && image.map((image, index) => (
                                        <div key={index} className="relative ease-in-out transition-all duration-300 overflow-hidden sm:w-[19rem] sm:h-[19rem] outline outline-1 outline-sky-600 rounded-lg flex items-center justify-center">
                                            <Image
                                                src={image}
                                                alt="Generated Image"
                                                width={480}
                                                height={480}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                            <button title="download" onClick={() => downloadImage(image)} className="absolute top-2 right-2 bg-sky-600 text-white px-4 py-2 rounded-md">
                                                <FiDownload />
                                            </button>
                                        </div>
                                    ))
                                    }

                                </div>
                            )}
                        </div>
                    }
                </div>
            </div>
        </>
    );

}

export default TextToImage;