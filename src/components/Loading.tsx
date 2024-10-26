import React from 'react';

export const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="animate-spin h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            <span className="ml-4 text-lg text-white">Loading...</span>
        </div>
    );
};
