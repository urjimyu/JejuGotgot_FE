import React from 'react';

const ListBox = ({ location }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <img 
        src={location.imageUrl} 
        alt={location.title}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{location.title}타이틀</h3>
            <p className="text-sm text-gray-600">{location.subtitle}서브타이틀</p>
            <div className="flex gap-2 mt-1">
              <span className="text-sm text-gray-500">{location.status}상태</span>
              <span className="text-sm text-gray-500">{location.type}</span>
              <span className="text-sm text-gray-500">{location.condition}</span>
            </div>
          </div>
          <span className="text-sm text-gray-500">{location.date}</span>
        </div>
        <button className="mt-2 px-4 py-1 bg-gray-100 rounded-md text-sm">
          후기작성
        </button>
      </div>
    </div>
  );
};

export default ListBox