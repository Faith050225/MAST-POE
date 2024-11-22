
# React Native Menu Management App

This is a React Native application designed to help manage a chef's menu. The app includes features for viewing, filtering, and adding menu items with dynamic price adjustments based on the course type.




Features

1. View Menu: Displays a list of all menu items with details like name, description, price, and course.


2. Filter Menu: Allows users to filter items by course (e.g., Appetizer, Main Course, Dessert).


3. Add Menu Item: Enables adding new menu items with an auto-adjustment of price based on the selected course.


4. Dynamic Pricing: Adjusts the base price based on predefined multipliers for each course.




Installation

1. Prerequisites

Node.js (version 14 or later)

React Native CLI

A package manager: npm or yarn


2. Clone the Repository

git clone <repository-url>
cd react-native-menu-management

3. Install Dependencies

Run the following command to install all required packages:

npm install

4. Install Navigation Dependencies

Install React Navigation and required packages:

npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-get-random-values

5. Install Picker

npm install @react-native-picker/picker

6. iOS Setup

If you're using iOS, ensure CocoaPods are installed and run:

npx pod-install




Usage

1. Start the Development Server

For Android:

npm run android

For iOS:

npm run ios

2. Screens

Home Screen

Displays all menu items and navigates to other screens.

Filter Menu Screen

Allows filtering menu items by course using buttons or a dropdown picker.

Add Menu Item Screen

Enables users to add new menu items with inputs for:

Dish name

Description

Base price

Course (via a dropdown picker)


Price adjustments are applied dynamically based on the course type.



Code Overview

Key Components

1. FilterMenuScreen

Filters menu items based on selected courses.

Features a horizontal list of filter buttons and a dropdown picker for course selection.



2. AddMenuItemScreen

Accepts inputs for menu details.

Dynamically adjusts prices using a predefined adjustment factor for each course.



3. Navigation

Implements React Navigation for seamless screen transitions.




Directory Structure

react-native-menu-management/
├── components/        # Reusable components
├── screens/           # Screen files (FilterMenuScreen, AddMenuItemScreen, etc.)
├── App.js             # Entry point of the app
├── package.json       # Project dependencies
└── README.md          # Documentation



Dependencies

React Native Core: react, react-native

Navigation: @react-navigation/native, @react-navigation/stack

Picker: @react-native-picker/picker




Contributing

1. Fork the repository.


2. Create a new branch for your feature or bug fix.


3. Submit a pull request.




License

This project is licensed under the MIT License. See the LICENSE file for details.



