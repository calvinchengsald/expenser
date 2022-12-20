import { Component } from 'react';
import RecordList from '../Components/RecordList'
class HomeView extends Component{


    render() {
        console.log("in home view")
        console.log(this.props.recordBook)
        // console.log(this.props.recordBook.recordList[0].name)
        return (
            <RecordList recordBook={this.props.recordBook}></RecordList>
            
            
        );
    }
}

export default HomeView;
