# React Native JavaScript Mastery

A premium React Native mobile application built with **Expo SDK 54**, **NativeWind v5**, and **Tailwind CSS v4**. This project demonstrates modern mobile development practices including file-based routing, custom theme systems, and responsive layouts.

## 🚀 Tech Stack

- **Framework**: [Expo SDK 54](https://expo.dev/)
- **Styling**: [NativeWind v5](https://www.nativewind.dev/) & [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Language**: TypeScript

## ✨ Key Features

- 📱 **Modern UI/UX**: Premium aesthetics with a custom cream-themed design system.
- 🧭 **File-based Routing**: Organized directory structure using Expo Router (Tabs & Auth groups).
- 🎨 **Tailwind v4 Integration**: Leveraging the latest Tailwind CSS features on native.
- 🔐 **Authentication Flows**: Pre-configured sign-in, sign-up, and onboarding layouts.
- 💳 **Subscription Management**: Dynamic routing for various subscription types (Spotify, Claude, etc.).

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS)
- pnpm (`npm install -g pnpm`)
- Expo Go app on your mobile device (to test on physical hardware)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running the Project

Start the development server:

```bash
pnpm expo start
```

- Press **`a`** for Android emulator
- Press **`i`** for iOS simulator
- Press **`w`** for web
- Scan the QR code with **Expo Go** to run on your phone.

## 📂 Project Structure

```text
├── app/               # Main application logic (Expo Router)
│   ├── (auth)/        # Authentication screens (Sign In/Sign Up)
│   ├── (tabs)/        # Main tab navigation
│   └── _layout.tsx    # Root layout configuration
├── assets/            # Static assets (images, fonts)
├── global.css         # Tailwind v4 theme and styles
├── metro.config.js    # NativeWind configuration
└── package.json       # Dependencies and scripts
```

## 📄 License

This project is licensed under the MIT License.
