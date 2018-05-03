import React, {Component} from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        };
    }

    handleAddItem(event){
        event.preventDefault();
        console.log('item', this.state);
        this.props.add(this.state);
    }


    render(){
        const {title,details} = this.state;
        return (
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                    <label>Title</label>
                        <input value={title} type="text" onChange={(e)=>{this.setState({title: e.target.value})}} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <label>Details</label>
                        <input value={details} type="text" onChange={e=>this.setState({details: e.target.value})} />
                    </div>
                </div>
                <div className="row">
                    <div className="right-align col s12 m8 offset-m2">
                        <button className="btn purple darken-5">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddItem