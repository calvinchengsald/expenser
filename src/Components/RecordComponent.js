import { Component } from 'react';

/**
 * the actual individual record
 * 
 */
class RecordComponent extends Component{


    render() {
        console.log(this.props.record)
        return (
        
            <div>
                <div>{this.props.record.name}</div>
                <div>{this.props.record.cost}</div>
                <div>{this.props.record.place}</div>
                <div>{this.props.record.category}</div>
                <div>{this.props.record.subCategory}</div>


            </div>
            
            
        );
    }
}

export default RecordComponent;
