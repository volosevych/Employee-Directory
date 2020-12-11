import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper/wrapper';
import Header from './components/Header/header';

function App() {
  return (
    <div>
   <Wrapper>
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}

export default App;