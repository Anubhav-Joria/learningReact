import React from 'react'

const userContext = React.createContext(); // It has 2 things : 1. Provider 2. Consumer

const UserProvider = userContext.Provider; // Getting Provider
const UserConsumer = userContext.Consumer; // Getting Consumer



export {UserProvider , UserConsumer};




