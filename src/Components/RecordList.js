import { Component } from 'react';
import RecordComponent from './RecordComponent'

/**
 * the View list, to contain all records in this list
 */
class RecordList extends Component{


    render() {
        console.log("in record list")
        console.log(this.props.recordBook)
        // console.log(this.props.recordBook.recordList[0].name)
        return (
        
            <div>
                {this.props.recordBook.recordList.map(d=>{
                    return <RecordComponent record={d}></RecordComponent>
                })}


            </div>
            
            
        );
    }
}

export default RecordList;
