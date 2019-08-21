import React, {Component} from 'react';
import axios from 'axios';
import Style from "./characters.view";

class Character extends Component {
    constructor(props){
        super(props);  
        this.src = this.props.image;
        this.name = this.props.name;
    }

    render(){
        return(
            <Style.Wrapper>
                <Style.Image src={this.src} alt="img"/> 
                Name: {this.name}
            </Style.Wrapper>
        )
    }

}

class CharacterList extends Component{
    constructor(props){
        super(props);
        this.state ={ 
            characters: ''
        }
        this.getToUsers(1);
    }
    getToUsers = (page) => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(({data}) => {
            this.setState({characters: data.results})
          console.log(data);
      
        })
      }
      render() {
        return(
          <div>
          {this.state.characters ?  this.state.characters.map(character =>
              <Character {...character} key = {character.id} />
            ): ''
        } 
          </div>
        )
      }
    }

export default CharacterList;

