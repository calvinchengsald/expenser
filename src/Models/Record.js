


import RecordHeaders from '../Constants/RecordHeaders'

class Record {
    // constructor(name,cost,place,category,subCategory){
    //     this.name = name;
    //     this.cost = cost;
    //     this.place = place;
    //     this.category = category;
    //     this.subCategory = subCategory;
    // }

    constructor(record, recordHeader){
        this.name=record[recordHeader[RecordHeaders.NAME]]
        this.cost=record[recordHeader[RecordHeaders.COST]]
        this.place=record[recordHeader[RecordHeaders.PLACE]]
        this.category=record[recordHeader[RecordHeaders.CATEGORY]]
        this.subCategory=record[recordHeader[RecordHeaders.SUB_CATEGORY]]
    }
}

export default Record;