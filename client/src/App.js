import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header';
import Content from './components/content/Content';
import VoteContainer from './components/voteContainer/VoteContainer';
import VoteContextProvider from './contexts/VoteContext';
import ChatContainer from './components/chatContainer/ChatContainer';
import ChatContextProvider from './contexts/ChatContext';

function App() {
    return (
        <div className="App">
            <ChatContextProvider>
                <VoteContextProvider>
                <Header/>
                <Content
                    left = {
                        <ChatContainer/>
                    }
                    right={
                        <VoteContainer />
                    }
                />
                </VoteContextProvider>
            </ChatContextProvider>
        </div>
    );
}

export default App;
