function cs142MakeMultiFilter(arr){
    let originalArray=arr;
    let currentArray=arr;
    function arrayFilterer(filterCriteria,callback){
        if(!(typeof filterCriteria=== 'function'))
            return currentArray;
        currentArray = currentArray.filter(el=>filterCriteria(el));
        if(typeof callback === 'function')
            callback.call(originalArray,currentArray);
        return arrayFilterer;    
    }
    return arrayFilterer
};