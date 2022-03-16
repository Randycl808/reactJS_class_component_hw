import React from "react";

//allows you to input artists and songs
class ArtistForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      song:'',
      about: '',
    }
  }
  //creates a function for artists and songs input to work
  handleChange=(e)=>{
    console.log('value:', e.target.value)
    console.log('name:', e.target.name)
    this.setState({
      [e.target.name]:e.target.value
    })


    //BELOW me works.... but heres a cleaner way^^^^^^^
//     //gets song input to work
//     if(e.target.name === 'song'){
//       this.setState ({
//         song:e.target.value
//       })
//   }
//     //gets name input to work 
//   if(e.target.name === 'name'){
//     this.setState ({
//       name:e.target.value
//     })
// }
}
handleSubmit=(e)=>{
  e.preventDefault()
  console.log(this.state)
  console.log('info submitted')
  //add addArtist prop ... to add to the list of others when submitted
  this.props.addArtist(this.state)
}

  render(){
    console.log('render')
    return(
      <div>
        <h1>ArtistForm</h1>
        <form onSubmit={this.handleSubmit}>
          {/* input you add goes under here */}
          <p>Artist:</p>
          <input name='name' value={this.state.name} onChange={this.handleChange} />
          <p>Song:</p>
          <input name='song' value={this.state.song} onChange={this.handleChange}/>
          <p>About this Artist:</p>
          <input name='about' value={this.state.about} onChange={this.handleChange}/>
          <button>add</button>
        </form>
      </div>
    )
  }
}
export default ArtistForm