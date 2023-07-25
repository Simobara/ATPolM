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
    const fetchPublicContent = async () => {
      try {
        const response = await axios.get(API_URL + 'all');
        setPublicContent(response.data);
      } catch (error) {
        console.error('Error while fetching public content:', error);
      }
    };

    const fetchUserBoard = async () => {
      try {
        const response = await axios.get(API_URL + 'user', {
          headers: authHeader(),
        });
        setUserBoard(response.data);
      } catch (error) {
        console.error('Error while fetching user board:', error);
      }
    };

    const fetchModeratorBoard = async () => {
      try {
        const response = await axios.get(API_URL + 'mod', {
          headers: authHeader(),
        });
        setModeratorBoard(response.data);
      } catch (error) {
        console.error('Error while fetching moderator board:', error);
      }
    };

    const fetchAdminBoard = async () => {
      try {
        const response = await axios.get(API_URL + 'admin', {
          headers: authHeader(),
        });
        setAdminBoard(response.data);
      } catch (error) {
        console.error('Error while fetching admin board:', error);
      }
    };

    fetchPublicContent();
    fetchUserBoard();
    fetchModeratorBoard();
    fetchAdminBoard();
  }, []);

  return { publicContent, userBoard, moderatorBoard, adminBoard };
};

export default UserService;
