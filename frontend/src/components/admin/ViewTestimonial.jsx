import React, { useEffect, useState } from 'react'
import { getTestimonials } from '../../api/api'
const ViewTestimonial = ({ setFlag }) => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            console.log(data);
            setTestimonials(data);
        }
        fetchTestimonials();
    }, []);
    return (
        <div className='tesimonials-view-section'>
            <div>
                <button
                    onClick={() => setFlag(true)}
                    className="m-3 underline cursor-pointer"
                >
                    Add Testimonial
                </button>
                <div
                    className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
                    <h1 className='font-bold p-2'>Testimonials</h1>
                    <div className="overflow-auto max-h-96">
                        {testimonials ? <>
                            <table className="w-full text-left table-auto min-w-max">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Name
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Message
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                                                Rating
                                            </p>
                                        </th>
                                        <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                                            <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70"></p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testimonials.map((testimonial, index) => (
                                        <tr className="even:bg-blue-gray-50/50" key={index}>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.name}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.message}
                                                </p>
                                            </td>
                                            <td className="p-4">
                                                <p className="block font-sans text-sm font-normal text-blue-gray-900">
                                                    {testimonial.rating}
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
        </div>
    )
}

export default ViewTestimonial
