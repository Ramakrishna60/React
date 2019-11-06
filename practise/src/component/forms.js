import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userName:'',
              comments:'',
              topic:''

         }
        }
         handleChange = (event) =>{
            this.setState({
                userName:event.target.value
            })
         }
         handleChangecomments = (event) => {
             this.setState({
                 comments:event.target.value
             })
         }
         handleChangetopic = (event) =>{
            this.setState({
                topic:event.target.value
            })
         }
         handlesubmit = (event) => {
             alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
             event.preventDefault()
         }     
     
    render() {
        return (
            <form onSubmit={this.handlesubmit}>
            <div>
                <label>userName</label>
                <input type= "text" value={this.state.userName} onChange={this.handleChange} />
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleChangecomments} />
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleChangetopic}>
                    <option>select any one</option>
                    <option value="vue">vue</option>
                    <option value="react">react</option>
                </select>
            </div>
            <button type="submit">submit</button>
            </form>
        )
    
}
 }

export default Forms
