import React from 'react';

function HomeService() {
  const services = ['喂养', '洗澡', '护理', '看诊'];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">上门服务</h2>
      <div className="grid grid-cols-2 gap-4">
        {services.map(service => (
          <button key={service} className="bg-blue-500 text-white px-4 py-2 rounded">{service}</button>
        ))}
      </div>
    </div>
  );
}

export default HomeService;