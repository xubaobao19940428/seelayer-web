import { useState, useCallback } from 'react';
import { message } from 'antd';

export default () => {
  const [userInfo, setUserInfo] = useState<{
    name?: string;
    avatar?: string;
    userInfo?: any;
  }>({
    name: '未登录用户',
    avatar: '',
    userInfo: null,
  });

  const fetchUserInfo = useCallback(async () => {
    try {
      // 这里可以获取用户信息、权限等数据
      const newUserInfo = {
        name: '未登录用户',
        avatar: '',
        userInfo: null,
      };
      setUserInfo(newUserInfo);
      return newUserInfo;
    } catch (error) {
      message.error('获取用户信息失败');
      return {
        name: '未登录用户',
        avatar: '',
        userInfo: null,
      };
    }
  }, []);

  return {
    userInfo,
    fetchUserInfo,
  };
}; 