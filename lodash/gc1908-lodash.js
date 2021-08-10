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

    function concat(array,...value){//拼接数组和另外一个数组
        let newarray=array;
        for(let val of value){
            if(Array.isArray(val)){
                for(let flat of val){
                    newarray.push(flat);
                }
            }
            else {
                newarray.push(val);
            }
        }
        return newarray;
    }

    function difference(array1,array2)//比较两个数组，如果第一个数组种存在第二个数组中的值，将这个值剔除；
    {
        let newarray2=[];
        for(let i=1;i<arguments.length;i++){
            let temp=[];
            temp=flattenDeep(arguments[i]);
            for(let val of temp){
                newarray2.push(val);
            }
        }

        for(let i=0;i<array1.length;i++){
            for(let j=0;j<newarray2.length;j++){
                if(array1[i]==newarray2[j]){
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

    function flattenDepth(array, depth=1){
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
    let parseJSON=function(){
        let str='';
        let i=0;
       return  function  parseJSON(input){debugger
             str=input;
             i=0;
            return parseValue();
        }

        function parseValue(){
            let c=str[i];
            if(c == '['){
                return parseArray();
            }
            if(c == '{'){
                return parseObject();
            }
            if(c == '"'){
                return parseString();
            }
            if(c == 't'){
                return parseTrue();
            }
            if(c == 'f'){
                return parseFalse();
            }
            if(c == 'n'){
                return parseNull();
            }
            return  parseNumber();
        }
        function parseTrue(){
            i+=4;
            return true;
        }
        function parseFalse(){
            i+=5;
            return false;
        }
        function parseNull(){
            i+=4;
            return null;
        }
        function parseString(){debugger
            i++;
            let result='';
            if(str[i]!=='"'){
                result+=str[i];
            }
            i++
            return result;
        }

        function parseNumber(){debugger
            let num='';
            while(str[i] >= "0" && str[i] <= "9"){
                num+=str[i]
                i++;
            }
            return Number(num);
        }
        function parseArray(){debugger
            let arr=[];
            i++
            while (str[i] != ']'){
                let val=parseValue();
                arr.push(val);
                if(str[i] == ','){
                    i++;
                }
            }
            i++
            return arr;
        }
        function parseObject(){debugger
            let obj={};
            i++;
            while (str[i] != '}'){
                let key=parseString();
                i+=2;
                let val=parseValue();
                obj[key]=val;
                if(str[i] == ','){
                    i++;
                }
            }
            i++
            return obj;
        }
    }()

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
        parseJSON:parseJSON,
    }


}();