import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
var users = [
    {
        first_name: "Shubham",
        last_name: "Tiwari",
        dob: "19/08/1996",
        photo:"https://randomuser.me/api/portraits/thumb/men/27.jpg"
    },
    {
        first_name: "Shivam",
        last_name: "Tiwari",
        dob: "12/03/1991",
        photo:"https://randomuser.me/api/portraits/thumb/men/28.jpg"
    },
    {
        first_name: "Gennie",
        last_name: "Apulova",
        dob: "09/02/1990",
        photo:"https://randomuser.me/api/portraits/thumb/men/29.jpg"
    },
    {
        first_name: "John",
        last_name: "Smith",
        dob: "12/08/1981",
        photo:"https://randomuser.me/api/portraits/thumb/men/30.jpg"
    },
    {
        first_name: "Michelle",
        last_name: "Obama",
        dob: "19/05/1966",
        photo:"https://randomuser.me/api/portraits/thumb/men/31.jpg"
    },
    {
        first_name: "Barack",
        last_name: "Obama",
        dob: "03/03/1996",
        photo:"https://randomuser.me/api/portraits/thumb/men/32.jpg"
    },
    {
        first_name: "Percy",
        last_name: "Jackson",
        dob: "19/08/1996",
        photo:"https://randomuser.me/api/portraits/thumb/men/33.jpg"
    }
]

class App extends Component {
  
  state = {
    items:[],
    value: '',
    isMore:false
  }
  
  componentWillMount() {
      this.setState({items:users})
  }
  
  renderItem = (item, isHighlighted) => {
          return (
          <div style={{ background: isHighlighted ? 'lightgray' : 'white', padding:'1em 0' }} key={item.first_name} className="rounded">
            <div className="container">
              <img className="rounded-circle" alt={item.first_name} src={item.photo}/> 
              {' '}<span className="font-weight-bold">{item.first_name} ({item.dob})</span>
            </div>
          </div>
          )
  }
  renderMenu = (items,value,style) => {
    return <div style={{background:'white', borderRadius:'5em'}} className="rounded">
      <div className="d-flex justify-content-between pt-4 pl-2 pr-2">
      <p className="text-danger font-weight-bold">Search by Names</p>
      <div><a href="#" onClick={this.viewMore} style={{textDecoration:'none'}} className="text-danger font-weight-bold">View More <i className="fas fa-chevron-right"></i></a></div>
      </div>
      <hr/>
      {items}
    </div>
  }
  
  viewMore = () => {
    this.setState({
      isMore:true
    })
  }
  
  render() {
    return (
      <div className="bg-danger" style={{height: "1000px", margin:"0 auto"}}>
        <h1 className="text-center text-white display-3">type search...</h1>
        <div className="container p-3">
        <Autocomplete
          shouldItemRender={(item, value) => item.first_name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={(item) => item.first_name}
          items={this.state.isMore?this.state.items:this.state.items.slice(0,4)}
          renderItem={this.renderItem}
          renderMenu={this.renderMenu}
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
          onSelect={(val) => this.setState({value: val})}
        />
        </div>
      </div>
    );
  }
}

export default App;
