import React, { FC, useEffect, useState } from 'react';
import { Desc, NotificationWrapper } from './index.style';

interface NotificationProps {
  onClose: Function,
  message: string,
  type: string
}
const Notification  : FC<NotificationProps> = ({ onClose, message, type }) => {
  const [toastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToastVisible(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return toastVisible ? (
    <NotificationWrapper>
      <Desc>{message}</Desc>
    </NotificationWrapper>
  ) : null;
}

export default Notification;
