import React from 'react';

const Footer = () => {
  const contactDetails = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-blue-500">
          <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path>
        </svg>
      ),
      title: 'Find Me',
      description: 'A-1/185 Rohini Sector-4',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-green-500">
          <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
        </svg>
      ),
      title: 'Call Me',
      description: '8800854308',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-red-500">
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
        </svg>
      ),
      title: 'Mail Me',
      description: 'ankushsinghv77@gmail.com',
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-6">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-80 text-center  md:text-left">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-center md:items-start space-y-1">
              <div className="bg-white rounded-full p-2 shadow-lg">{detail.icon}</div>
              <h2 className="text-lg font-semibold text-gray-100">{detail.title}</h2>
              <p className="text-gray-300">{detail.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 text-center border-t border-gray-700 pt-2">
          <p className="text-sm text-gray-400">&copy; 2025 Ankush Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
