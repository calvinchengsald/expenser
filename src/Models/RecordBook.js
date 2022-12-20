
import Record from './Record';
import RecordHeaders from '../Constants/RecordHeaders'
import {hasKeyWithValue} from '../Utils/Utility'
class RecordBook {

    recordList;
    recordHeader;

    constructor(){

    }
    static loadRecordFromTSV(tsv){
        // console.log("from load tsv");
        // console.log(tsv);
        const result = tsv.split(/\r?\n/);
        // console.log(result.length);
        // console.log(result);
        
        const rb = new RecordBook();
        const recordList = [];
        rb.recordList = recordList;
        for(var i =0; i<result.length; i++){
            if(i==0){
                //first one of the list is the header
                const recordHeader = {};
                let data = result[i];
                const dataFields = data.split('\t');
                console.log("data fields is ")
                console.log(dataFields)
                console.log(dataFields.length)
                for(var j =0; j<dataFields.length; j++){
                    const targetKey = hasKeyWithValue(RecordHeaders, dataFields[j])
                    if (targetKey){
                        recordHeader[dataFields[j]] = j;
                    }
                }
                this.recordHeader = recordHeader;
                console.log("recordHeader is now" )
                console.log(recordHeader)
            }
            else {
                let data = result[i];
                const dataFields = data.split('\t');
                const record = new Record(dataFields, this.recordHeader);
                recordList.push(record)
            }
        }
        console.log("record lis is ");
        console.log(rb.recordList);
        return rb;
    }
}

export default RecordBook