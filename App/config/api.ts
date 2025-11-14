import Constants from 'expo-constants';

const API = {
  API_CONFIG: {
    BASE_URL: Constants.expoConfig?.extra?.BASE_URL,
    COUPON_ENDPOINT: '/discount/front-end-test/',
  },
};

export const { API_CONFIG } = API;
export default API;

// Welcome!! Add the challenge BASE_URL to the .env to run the project!