import React from "react";
import "./App.css";
import { SearchBar, UserList } from "./components";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <SearchBar />
                <UserList />
            </div>
        </Provider>
    );
}

export default App;
