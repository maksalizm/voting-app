import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import VoteList from './components/voteList/VoteList';
import Content from './components/content/Content';
import VoteContainer from './components/voteContainer/VoteContainer';
import VoteContextProvider from './contexts/VoteContext';

function App() {
    return (
        <div className="App">
            <VoteContextProvider>
            <Header/>
            <Content
                right={
                    <VoteContainer />
                }
            />
            </VoteContextProvider>
        </div>
    );
}

export default App;
