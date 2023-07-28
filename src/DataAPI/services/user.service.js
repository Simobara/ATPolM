import React, { useEffect, useState } from 'react';
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

const UserService = () => {
  const [publicContent, setPublicContent] = useState(null);
  const [userBoard, setUserBoard] = useState(null);
  const [moderatorBoard, setModeratorBoard] = useState(null);
  const [adminBoard, setAdminBoard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [publicResponse, userResponse, moderatorResponse, adminResponse] = await Promise.all([
          axios.get(API_URL + 'all'),
          axios.get(API_URL + 'user', { headers: authHeader() }),
          axios.get(API_URL + 'mod', { headers: authHeader() }),
          axios.get(API_URL + 'admin', { headers: authHeader() })
        ]);

        setPublicContent(publicResponse.data);
        setUserBoard(userResponse.data);
        setModeratorBoard(moderatorResponse.data);
        setAdminBoard(adminResponse.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return { publicContent, userBoard, moderatorBoard, adminBoard };
};

export default UserService;