import React, { useState } from 'react'; // 添加 React 的导入

function PetCircle() {
  const [posts, setPosts] = useState([
    { id: 1, content: '推荐本地宠物店！', location: '附近' }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">宠爱圈</h2>
      <div className="mb-4">
        <textarea className="w-full p-2 border rounded" placeholder="发布动态..."></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">发布</button>
      </div>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-100 p-4 rounded">
            <p>{post.content}</p>
            <p className="text-sm text-gray-500">{post.location}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">添加好友</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">消息对话</button>
      </div>
    </div>
  );
}

export default PetCircle;