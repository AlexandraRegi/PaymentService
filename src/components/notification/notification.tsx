import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const openNotification = (type:NotificationType, message: string, description: string) => {
    return notification[type]({ message: message, description: description, })
}
