# 📱 Phonebook

A React application for managing a personal contact list.

This project was created as a **React training project** to practice global state management with Redux Toolkit, form handling, data persistence, and building reusable React components.

## 🔗 Live Demo

[View Live Demo](https://goit-react-hw-06-kappa-jet.vercel.app/)

## 📌 About the Project

Phonebook allows users to add, search, and manage contacts through an interactive React interface.

The application uses **Redux Toolkit** to manage the global application state and **Redux Persist** to keep contacts stored between browser sessions.

Forms are handled with **Formik** and validated with **Yup**, providing a structured approach to user input and validation.

## ✨ Features

* Add new contacts
* Delete contacts
* Search contacts by name
* Filter the contact list in real time
* Form validation
* Global state management with Redux Toolkit
* Persist contacts between sessions
* Responsive interface
* User-friendly feedback for form actions

## 🛠️ Technologies

* React
* JavaScript (ES6+)
* JSX
* Redux Toolkit
* React Redux
* Redux Persist
* Formik
* Yup
* CSS3
* Vite
* Git & GitHub
* Vercel

## 🧠 State Management

The application uses **Redux Toolkit** to manage the contact list and application state.

The Redux architecture separates state management from UI components and makes the application easier to maintain and extend.

```text id="c7gkq2"
Redux Store
│
├── Contacts
│   ├── Add contact
│   ├── Delete contact
│   └── Filter contacts
│
└── Persisted State
```

## 📝 Form Handling

The contact form is implemented using **Formik** and validated with **Yup**.

The form validates user input before adding a new contact and provides feedback when entered data does not meet the required criteria.

## 🎯 What I Practiced

During this project, I practiced:

* Global state management with Redux Toolkit
* Creating Redux slices
* Working with actions and reducers
* Using `useSelector` and `useDispatch`
* Managing application state outside React components
* Persisting state with Redux Persist
* Creating controlled forms
* Form validation with Formik and Yup
* Filtering data based on user input
* Building reusable React components
* Structuring a scalable React application
* Separating UI and state management logic

## 🧩 Component Architecture

The application is divided into reusable components, with Redux responsible for managing shared application data.

```text id="j6e4k9"
App
├── ContactForm
├── SearchBox
├── ContactList
│   └── Contact
└── Redux Store
    └── Contacts Slice
```

## 🚀 Getting Started

To run the project locally:

```bash id="5f3r8k"
git clone https://github.com/AleksandraCherevko/goit-react-hw-06.git
cd goit-react-hw-06
npm install
npm run dev
```

The application will be available at:

```text id="8f2m1a"
http://localhost:5173
```

## 📱 Responsive Design

The application is adapted for:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

## 📚 Project Type

**Educational / Training Project**

This project was created as part of my React learning path to strengthen my understanding of global state management, form handling, validation, and scalable React application architecture.

