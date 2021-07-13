var gc1908=function (){

    function  chunk(array, size=1){
        let newarray=[],temp=0,len=Math.ceil(array.length/size);
        if(len==0||size<1){
            return [];
        }
        for (let j= 0;j<len;j++){
            let temparray=[];
            for (let i= 0;i<size;i++){
                if(array[temp+i]!=undefined){
                    temparray.push(array[temp]);
                    temp++;
                }else {
                    break;
                }
            }
            newarray[j]=temparray;
        }
        return newarray;
    }

    function compact(array){
        if(array==null){
            return [];
        }
        let newarray=[];
        let key=0;
        for(let val of array){
            if(val)
            newarray[key++]=val
        }
        return newarray;
    }

    function concat(array,value){
        let valuearray=value;

        for(let i=0;i<valuearray.length;i++){
            if(!Array.isArray(valuearray[i])){
                array.push(valuearray[i])
            }else{
                let  tempArray=valuearray[i];
                for(let j=0;j<tempArray.length;j++){
                    array.push(tempArray[j]);
                }
            }
        }
         return array;
    }

    function difference(array1,array2)
    {
        for(let i=0;i<array1.length;i++){
            for(let j=0;j<array2.length;j++){
                if(array1[i]==array2[j]){
                    array1.splice(i,1);
                }
            }
        }
        return array1;
    }
    return {
        chunk:chunk,
        compact:compact,
        concat:concat,
        difference:difference
    }


}();