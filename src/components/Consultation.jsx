import React, { useState } from 'react';
import axios from 'axios';

function Consultation() {
  const [symptoms, setSymptoms] = useState(''); // 用户输入的症状
  const [chat, setChat] = useState([]); // 聊天记录
  const [loading, setLoading] = useState(false); // 加载状态
  const [result, setResult] = useState(null); // 问诊结果

  const handleAIConsultation = async () => {
    if (!symptoms) {
      alert('请先输入宠物的症状！');
      return;
    }

    // 添加用户输入到聊天记录
    setChat((prevChat) => [...prevChat, { role: 'user', content: symptoms }]);

    setLoading(true);

    try {
      // 调用 HTTP 服务接口
      const response = await axios.post(
        'http://spark-api-open.xf-yun.com/v1/chat/completions', // HTTP 接口地址
        {
          model: 'spark-model', // 替换为实际的模型名称（根据讯飞 API 文档）
          messages: [
            { role: 'system', content: '你是一个专业的宠物医生助手。' },
            ...chat,
            { role: 'user', content: symptoms },
          ],
          max_tokens: 200, // 根据讯飞 API 文档调整参数
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ctmSZWTZfTJlJManlclN:hzhQEmGjTGgtPzIFmIiS`, // 使用你的 API 密钥
          },
        }
      );

      // 获取 AI 回复
      const aiResponse = response.data.choices[0].message.content;

      // 添加 AI 回复到聊天记录
      setChat((prevChat) => [...prevChat, { role: 'assistant', content: aiResponse }]);

      // 设置问诊结果
      setResult({
        prescription: `AI生成的处方：${aiResponse}`,
        pharmacyLink: 'https://example.com/pharmacy', // 替换为实际的智能药柜导航链接
        hospitalLink: 'https://example.com/hospital', // 替换为实际的医院导航链接
      });
    } catch (error) {
      console.error('AI 问诊出错：', error.response ? error.response.data : error.message);
      alert('AI 问诊失败，请稍后再试！');
    } finally {
      setLoading(false);
    }
  };

  const handleVetConsultation = () => {
    if (!symptoms) {
      alert('请先输入宠物的症状！');
      return;
    }

    // 模拟执业兽医师问诊结果
    setResult({
      prescription: `执业兽医师处方：根据症状 "${symptoms}"，建议进行详细检查并使用抗生素。`,
      pharmacyLink: 'https://example.com/pharmacy', // 替换为实际的智能药柜导航链接
      hospitalLink: 'https://example.com/hospital', // 替换为实际的医院导航链接
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">线上问诊</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="请输入宠物的症状..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        ></textarea>
      </div>
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handleAIConsultation}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'AI 问诊中...' : 'AI问诊'}
        </button>
        <button
          onClick={handleVetConsultation}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          执业兽医师
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded space-y-4">
        {chat.map((message, index) => (
          <div key={index} className={message.role === 'user' ? 'text-right' : 'text-left'}>
            <p className={message.role === 'user' ? 'text-blue-500' : 'text-gray-700'}>
              {message.role === 'user' ? '用户：' : 'AI：'} {message.content}
            </p>
          </div>
        ))}
      </div>
      {result && (
        <div className="bg-gray-100 p-4 rounded mt-4">
          <p>处方：{result.prescription}</p>
          <a
            href={result.pharmacyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            取药码 - 智能药柜导航
          </a>
          <div className="mt-4">
            <p>紧急送医推荐：</p>
            <a
              href={result.hospitalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              附近医院导航
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Consultation;