import axios from 'axios';

const NOTIFICATION_API_URL = 'http://localhost:8080/api/notification';

class NotificationService {
    getNotification(companyId){
        const params = {
            companyId: companyId
        };
        return axios.get(NOTIFICATION_API_URL, {params});
    }
}

export default new NotificationService()
