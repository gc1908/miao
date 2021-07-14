var gc1908=function (){
    //将数组拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
    function  chunk(array, size=1){
        let newarray=[],temp=0,len=Math.ceil(array.length/size);
        if(len==0||size<1){
            return [];
        }
        for (let j= 0;j<len;j++){
            let temparray=[];
            for (let i= 0;i<size;i++){
                if(array[temp]!=undefined){
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

    function compact(array){//过滤掉假值
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

    function concat(array,value){//拼接数组和另外一个数组
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

    function difference(array1,array2)//比较两个数组，如果第一个数组种存在第二个数组中的值，将这个值剔除；
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

    function drop(array,num=1){
        for(let i=0;i<num;i++){
            array.shift();
        }
        return array;
    }

    function dropRight(array,num=1){
        for(let i=0;i<num;i++){
            array.pop();
        }
        return array;
    }

    function fill(array, value, start=0, end=array.length){
        for(let i=start;i<end;i++){
            array[i]=value;
        }
        return array
    }

    function head(array){
        return array[0];
    }

    function flatten(array){
        let newarray=[];
        for(let val of array){
            if(Array.isArray(val)){
                for(let j=0;j<val.length;j++){
                    newarray.push(val[j]);
                }
            }else {
                newarray.push(val);
            }
        }
        return newarray;
    }

    function flattenDeep(array){
        var newarray=[];
        for(let i=0;i<array.length;i++){
            let item=array[i];
            if(!Array.isArray(item)){
                newarray.push(item)
            }else{
                item=flattenDeep(item);
                for(let j=0;j<item.length;j++){
                    newarray.push(item[j]);
                }
            }
        }
        return newarray;
    }

    function flattenDepth(array, [depth=1]){
        if(depth==0){
            return array;
        }
        var newarray=[];
        for(let i=0;i<array.length;i++){
            let item=array[i];
            if(!Array.isArray(item)){
                newarray.push(item)
            }else{
                item=flattenDepth(item,depth-1);
                for(let j=0;j<item.length;j++){
                    newarray.push(item[j]);
                }
            }
        }
        return newarray;
    }

    return {
        chunk : chunk,
        compact : compact,
        concat : concat,
        difference : difference,
        drop : drop,
        dropRight : dropRight,
        fill : fill,
        head : head,
        flatten : flatten,
        flattenDeep:flattenDeep,
        flattenDepth:flattenDepth,
    }


}();