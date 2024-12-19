User Directory App

Welcome to the User Directory App! This React Native application is designed to help users view, filter, and search through a list of users. It supports features like infinite scrolling, search functionality, and basic sorting.
Table of Contents

    Features
    Technologies Used
    Setup
    Usage
    Contributing
    License

Features

    Infinite Scrolling: Automatically loads more users as the user scrolls down.
    Search Functionality: Filter users by name.
    Sort: Sort users by name and email.
    Responsive UI: Designed to work well on mobile devices.
    Custom Styling: Utilizes React Native's styling capabilities for a modern look and feel.

Technologies Used

    React Native: Framework for building native apps using JavaScript.
    Expo: Toolchain for React Native development.
    Axios: HTTP client for making API requests.
    BundleTool: For generating APKs from AABs.
    GitHub: Repository hosting.

Setup

    Clone the repository:

git clone https://github.com/abhi012323/UserDirectory-Apk.git

Navigate into the project directory:

cd UserDirectory-Apk

Install dependencies:

npm install

Run the project:

    npm start

    Scan the QR code with the Expo Go app on your mobile device to view the application.

Usage

    Search Users:
        Enter a name in the search bar to filter the user list.
    Sort Users:
        Press the "Sort by Name" button to sort users by their names.
        Press the "Sort by Email" button to sort users by their email addresses.
    Infinite Scrolling:
        As you scroll down, more users will be loaded automatically until the end of the list.

Build and Distribution
Android

    Build the APK using Expo and BundleTool:
        Follow the steps in the Expo documentation.
        After building the APK, you can distribute it via Expo's distribution link or using a platform like Firebase.

    Download and Install the APK:
        Navigate to your Android device's settings.
        Enable "Install from Unknown Sources" for the application installer.
        Download the APK from the provided distribution link.
        Install the APK.

Contributing

    Clone the repository:

git clone https://github.com/abhi012323/UserDirectory-Apk.git

Make your changes:

    Create a new branch:

git checkout -b feature-branch-name

Make your changes and commit:

git add .
git commit -m "Your descriptive commit message"

Push your changes:

        git push origin feature-branch-name

        Submit a pull request.

