import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: [],
         param:'all'
      }
    }
    componentDidMount(){
      this.getAllData();
    }
    
    async getAllData() {
        await axios.get(`http://localhost:8000/${this.state.param}`).then(res => {
            this.setState({data:res.data},() => {
          });
        });
    }
    handleChange = (event) => {
        this.setState({param:event.target.value});
    }
    handleSubmit = (event) => {
        this.getAllData();
        event.preventDefault();
    }
  render(){
    return (
      <div className="container">
        <Table dark striped bordered hover style={{textAlign:'center'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => {
              return (
                  <tr key="item._id">
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.dob}</td>
                    <td>{item.phoneNumber}</td>
                  </tr>)
            })}
          </tbody>
        </Table>
        <div>
          <select value={this.state.param} onChange={this.handleChange} style={{backgroundColor:'green',
        color:'white',
        margin:'10px',
        padding:'8px',borderRadius:'10px'}}>
              <option value="all">ALL</option>
              <option value="CS">CS</option>
              <option value="ECS">ECS</option>
              <option value="ETC">ETC</option>
              <option value="MECH">MECH</option>
          </select>
          <button onClick={this.handleSubmit} style={{borderRadius:'10px',backgroundColor:'grey',color:'white',margin:'10px',
        padding:'8px'}}>Filter</button>
        </div>
      </div>
    );
  }
  
}

export default App;
