import React from 'react'; // 添加这一行
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-around">
      <Link to="/consult" className="hover:underline">线上问诊</Link>
      <Link to="/service" className="hover:underline">上门服务</Link>
      <Link to="/circle" className="hover:underline">宠爱圈</Link>
      <Link to="/profile" className="hover:underline">个人主页</Link>
    </nav>
  );
}

export default Navbar;