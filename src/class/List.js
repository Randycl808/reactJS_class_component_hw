import React from "react"
import ArtistForm from "./ArtistForm"


//creates a list of artists to show
class List extends React.Component{
  constructor(props){
    super(props)
    this.state={
      artists:[
        {name:'Kendrick Lamar', song:'Money Trees-GKMC'},
        {name:'Anderson .Paak', song:'Suede'},
        {name:'Gunna'         , song: 'Top Off'},
      ], 
      showForm: false,
    }
  }

  //adds artist to List above ^^^^^
  addArtist=(artist)=>{
    // DB call (when DB is linked)

    //Updates Artist list state
    let updateArtists =[artist, ...this.state.artists]
    this.setState({
      artists:updateArtists
    })
  }

  //deletes artist to the List
  deleteArtist = (artistName)=>{
    //deletes from DB (when DB is linked)
    //deletes from STATE
    let filteredArtists = this.state.artists.filter(a=> a.name !== artistName)
    //setState update state trigger render to be called
    this.setState({
      artists:filteredArtists
    })
  }

  //have to define render
  //shows artists name and song
  renderArtist=()=>{
    return this.state.artists.map(a=>{
      return(
        <div key={a.name} className="border">
          <h1>{a.name}</h1>
          <p>{a.song}</p>
          <p>{a.about}</p>
          <button onClick={()=>this.deleteArtist(a.name)}>delete</button>
        </div>
      )
    })
  }
  //allows you to toggle between show and hide
  toggleForm =()=>{
    this.setState({
      showForm: !this.state.showForm
    })
  }
    render(){
      return(
      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button> 
        {/* below I added 'addArtist is Artist form... allows it to get added to the list */}
        {this.state.showForm && <ArtistForm addArtist={this.addArtist} />}  
        <h1>List</h1>
        {this.renderArtist()}
      </div>
    )
  }
}
export default List