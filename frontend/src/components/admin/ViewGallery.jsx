import React, { useEffect, useState } from 'react'
import { getGalleries } from '../../api/api';

const ViewGallery = ({setFlag}) => {
    const [galleries, setGalleries] = useState([]);
    useEffect(() => {
        const fetchGalleries = async () => {
            const data = await getGalleries();
            // console.log(data);
            setGalleries(data);
        }
        fetchGalleries();
    }, []);
    return (
        <div>
            <button
                    onClick={() => setFlag(true)}
                    className="m-3 underline cursor-pointer"
                >
                    Add Gallery
                </button>
            <div
                className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                <h1 className='font-bold p-2'>Galleries</h1>
                <div className="overflow-auto max-h-96">
                    {galleries ? <>
                        <table className="w-full text-left table-auto min-w-max">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                            Title
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                            Description
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                            Image Link
                                        </p>
                                    </th>
                                    <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                        <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70"></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {galleries.map((gallery, index) => (
                                    <tr className="even:bg-blue-gray-50/50" key={index}>
                                        <td className="p-4">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                {gallery.title}
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                {gallery.description}
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                {gallery.image.url? <><a href={`${gallery.image.url}`} className=' hover:text-blue-400 hover: transition-all delay-100'>Click here to view</a></>:"No Url"}
                                            </p>
                                        </td>
                                        <td className="p-4">
                                            <a href="#" className="block font-sans text-sm font-medium text-blue-gray-900">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </> : "No contacts found"}
                </div>
            </div>
        </div>
    )
}

export default ViewGallery
