# Project - Front-End React Native

This project is a solution for a technical challenge involving the development of a coupon screen using  **React Native**, **Expo (SDK 51)**, **TypeScript**, and **NativeWind**. The application consumes data from an API and displays a list of coupons with filters and basic navigation. It includes extra challenges such as **Zustand** and **testing**.

## Features

- Display of the total number of coupons and available coupons.
- List of coupons with name, expiration date, and status (Active or Expired), organized by month.
- Filter bar by period (7, 15, 30, and 90 days).
- API consumption with handling for loading and errors.
- Navigable bottom menu (only the "Coupons" screen has been implemented).

## Extra Challenges Implemented

<!-- - Unit tests with `@testing-library/react-native` for the `useCoupons` hook. -->
<!-- - Initial setup of E2E tests with **Detox**. -->
- Initial setup of **Zustand** for state management.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Yarn](https://yarnpkg.com/) (package manager)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)
- A device or emulator set up to run Expo (via Expo Go or Android/iOS emulator)
- For E2E tests with Detox: set up the environment according to the [Detox documentation](https://wix.github.io/Detox/docs/introduction/getting-started).

## Environment Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/liafer/coupons-app-react-native.git
   cd coupons-app-react-native

   ```

2. **Create the .env file at the root of the project**

      ```bash
    BASE_URL=https://challenge-base-url-here.com

   ```

   Note: Replace https://challenge-base-url-here.com with the actual API URL for the challenge.

4. **Install the dependencies**

   `yarn install`

6. **Start the project to test**
         
   `yarn start`

   Note: This will open the Metro Bundler in your terminal and display a QR code. Scan the QR code with the Expo Go app on your mobile device or use an emulator.

   
8. **Final Results**
<img width="363" alt="Captura de Tela 2025-04-07 às 11 21 30" src="https://github.com/user-attachments/assets/9e435d61-c230-48ea-82c8-a3c6f9587e57" />
<img width="363" alt="Captura de Tela 2025-04-07 às 11 21 48" src="https://github.com/user-attachments/assets/cc647655-a21a-4105-9f8c-d14babdf613f" />




   