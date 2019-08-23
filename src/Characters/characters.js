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
                <Style.Name>{this.name}</Style.Name>
            </Style.Wrapper>
        )
    }

}


class CharacterList extends Component{
    constructor(props){
        super(props);
        this.state ={ 
            characters: '',
            next: "",
            prev: "",
            currentPage: 1,
            isFirstPage: false,
            isLastPage: false,
            isLoading: true
        }
        this.getToUsers();
        
    }
    getToUsers = (page) => {
        this.setState({isLoading: true});
        axios.get(page || `https://rickandmortyapi.com/api/character/`)
        .then(({data}) => {
            this.setState({isLoading: false});
            this.setState({characters: data.results});
            this.setState({next: data.info.next});
            this.setState({prev: data.info.prev});
            if(this.state.prev==="")
            {
            this.setState({isFirstPage: !this.state.isFirstPage});
            }
            else if(this.state.next==="")
            {
            this.setState({isLastPage: !this.state.isLastPage});
            }
        //   console.log(window.location.search);
        })
      }

    NextPage = () =>{
            this.getToUsers(this.state.next);
            this.setState({currentPage: this.state.currentPage+1});
            this.setState({isFirstPage: false});
    }
    PrevPage = () =>{
            this.getToUsers(this.state.prev);
            this.setState({currentPage: this.state.currentPage-1});
            this.setState({isLastPage: false});
    }
      render() {
        return(
            
    <div>
        <div>
         {  this.state.isLoading ? 
            <Style.LoaderWrapper><Style.Loading src="http://cdn.shopify.com/s/files/1/0257/6087/products/ff0a8f6d7a972a61ea919ce1ab3e3627.png?v=1557444693" alt=" "/></Style.LoaderWrapper>
            :
        <div>
          {this.state.characters ?  this.state.characters.map(character =>
              <Character {...character} key = {character.id} />
            ): ''
        } 
        </div>
         }
        </div>
        { this.state.isFirstPage ?
        <div>
             <Style.PrevDis>Prev</Style.PrevDis>
             <Style.Next onClick={this.NextPage}>Next</Style.Next>
        </div>
        : this.state.isLastPage ? 
        <div>
             <Style.Prev onClick={this.PrevPage}>Prev</Style.Prev>
             <Style.NextDis>Next</Style.NextDis>
        </div>
        :
        <div>
             <Style.Prev onClick={this.PrevPage}>Prev</Style.Prev>
             <Style.Next onClick={this.NextPage}>Next</Style.Next>
        </div>
        }
          </div>

        )
      }
    }
    
export default CharacterList;

