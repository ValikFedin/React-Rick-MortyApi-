import React from 'react';
import CharacterList from "./Characters/characters"
import Style from "./Characters/characters.view";

const App =(props) =>{
  return (
    <Style.MainContainer >
      <CharacterList/>
    </Style.MainContainer>
  )
}



export default App;