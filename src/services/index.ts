import * as localStorage from './local-storage-service';
import apiRequest from './api-service';

const logger = { log: console.log };

export default {
    localStorage,
    logger,
    apiRequest,
};
