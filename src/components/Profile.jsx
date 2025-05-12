import React, { useState } from 'react'; // 添加 React 的导入

function Profile() {
  const [schedule, setSchedule] = useState([
    { id: 1, task: '日常护理', date: '2025-05-10' }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">个人主页</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">宠物信息</h3>
          <p>名字：小白 | 年龄：2岁 | 品种：金毛</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">处方记录</h3>
          <p>2025-05-01：感冒药</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">日程表</h3>
          {schedule.map(item => (
            <p key={item.id}>{item.date}: {item.task}</p>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">添加日程</button>
        </div>
        <div>
          <h3 className="text-xl font-semibold">设置</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">修改资料</button>
        </div>
        <div>
          <h3 className="text-xl font-semibold">客服与反馈</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">联系客服</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">意见反馈</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;