import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            Person : {
                imgSrc:<img src={"leo.jpg"} height={200} width ={200} alt ="leonardo"/>,
                fullName:"Leonardo",
                profession:"Acteur",
                bio:"Grandissant dans les quartiers de Los Angeles tels que Los Feliz puis Hollywood, le jeune Leonardo DiCaprio prend comme modèle le fils de sa belle-mère Peggy Ann Saunders, Adam Farrar, qui commence dès l'enfance une carrière d'acteur.",
                count :0,
            }
        }   
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    componentDidMount() {
        this.myInterval=setInterval(()=>{
        this.setState({cont:this.state.count+1})
        },1000);
    }

     render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        }; 
         return ( 
            
            <div style={mystyle}>
                <h1> {this.state.Person.imgSrc} </h1> 
                <h1>{this.state.Person.fullName}</h1>
                <h2>{this.state.Person.profession}</h2>
                <p>{this.state.Person.bio}</p>
            </div>
          );
    }
}
 
export default Profile;
