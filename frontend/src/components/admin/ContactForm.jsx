import React, { useEffect, useState } from 'react'
import { getContacts } from '../../api/api';
const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      const data = await getContacts();
      console.log(data);
      setContacts(data);
    }
    fetchContacts();
  }, []);
  return (
    <div className='admin-contact-form flex items-center justify-center '>
      <div>
        <div
          className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 p-2 bg-white shadow-md bg-clip-border rounded-xl">
          <h1 className='font-bold p-2'>Contacts</h1>
          <div className="overflow-auto max-h-96">
            {contacts? <>
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
                      Phone
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                      Email
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70">
                      Location
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm font-normal text-blue-gray-900 opacity-70"></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr className="even:bg-blue-gray-50/50" key={index}>
                    <td className="p-4">
                      <p className="block font-sans text-sm font-normal text-blue-gray-900">
                        {contact.name}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm font-normal text-blue-gray-900">
                        {contact.message}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm font-normal text-blue-gray-900">
                        {contact.phone}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm font-normal text-blue-gray-900">
                        {contact.email}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm font-normal text-blue-gray-900">
                        {contact.location}
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
            </>:"No contacts found"}
           
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactForm;
