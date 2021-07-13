/*function swap(array,i,j){
        var temp=0;
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
        return array;
    }
    function fastsort(array,start=0,end=array.length-1)//快速
    {
        if(end-start < 1) {
            return array;
        }

        var temp = Math.floor(Math.random() * (end - start + 1)) + start;
        var tvalue = array[temp];
        swap(array,temp,end);
        var i=start;
        var j=start;
        for(;j < end;j++){
            if(array[j] < tvalue){
                swap(array,i++,j)
            }
        }
        swap(array,i,end);
        fastsort(array,start,i-1);
        fastsort(array,i+1,end);
        return  array;
    }
    console.log(fastsort(Array(100).fill(0).map(it => Math.random()*100|0)));




    /*function mergesort(array)//归并
    {
        if(array.length<2)
            return array;

        var mid=array.length/2;
        var leftarray=array.slice(0,mid);
        var rightarray=array.slice(mid);
        leftarray=mergesort(leftarray);
        rightarray=mergesort(rightarray);

        var i=0,j=0,k=0;
        while (i<leftarray.length&&j<rightarray.length){
            if(leftarray[i]>rightarray[j]){
                array[k++]=rightarray[j++]
            }else {
                array[k++]=leftarray[i++]
            }
        }

        while(i<leftarray.length){
            array[k++]=leftarray[i++]
        }

        while(j<rightarray.length){
            array[k++]=rightarray[j++]
        }
        return  array
    }
    console.log(mergesort(Array(100).fill(0).map(it => Math.random()*100|0)));


   /* function insertsort(array)//插入
    {
        for(var i=0;i<array.length-1;i++){
            var t=array[i];
            for(var j=i-1;j>=0;j--){
                if(array[j]>t){
                    array[j+1]=array[j];
                }else{
                    break;
                }
                array[j]=t;
            }
        }
        return array;
    }
    console.log(selectsort(Array(100).fill(0).map(it => Math.random()*100|0)));*/

    /*function selectsort(array)//选择
    {
        for(var i=0;i<array.length-1;i++){
            var max=i;
            for(var j=i+1;j<array.length;j++){
                if(array[max]>array[j]){
                   var temp=0;
                    max=j;
                }
                temp=array[i];
                array[i]=array[max]
                array[max]=temp;
            }

        }
        return array;
    }
    console.log(selectsort(Array(100).fill(0).map(it => Math.random()*100|0)));*/




   /* function bubblesort(array)//冒泡
    {
        for(var i=0;i<array.length-1;i++){
            let swap=false;
            for(var j=0;j<array.length-1-i;j++){
                if(array[j]>array[j+1]){
                    swap=true;
                    var temp=0;
                    temp= array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
            if(!swap){
                break;
                }
        }
        return array;
    }
    console.log(bubblesort(Array(100).fill(0).map(it => Math.random()*100|0)));*/

/*
* console.log(reverseArrayInPlace(['1','2','3']))
    function reverseArray(words){
        let temp=[];
        for(let i=0;i<words.length;i++){
            temp[i]=words.length-1-i;
        }
        return temp;
    }
    function reverseArrayInPlace(words){
        let temp='';
        for(let i=0;i<Math.floor(words.length/2);i++){
            temp=words[i];
            words[i]=words[words.length-i-1];
            words[words.length-i-1]=temp;
        }
        return words;
    }*/
/*
* let  a={
        a:"1",b:"1"
    }
    let  b={
        a:"1",b:"1"
    }
    console.log(deepEqual(a,b));
   function  deepEqual(a,b){
       if(a==null||b==null){
           return false;
       }
       let temp=true;
       for (let i in a){
           if(a[i]!=b[i]||typeof a!==typeof b){
               temp=false;
           }
       }
       return temp;
   }*/
/*
*  */
    /*
    *  console.log(sum(range(1,10)));
    function range(start,end,step){
                let temp=[],sum=0;
                if(step!=undefined){
                    if (step > 0){
                        for(let i=start;i<=end;i+=step){
                            temp[sum]=i;
                            sum++;
                        }
                    }else {
                        for(let i=end;i>=start;i+=step){
                            temp[sum]=i;
                            sum++;
                        }
                    }

                }else {
                    for(let i=start;i<=end;i++){
                        temp[sum]=i;
                        sum++;
                    }
                }
                return temp;
            }
        }
    function sum(words){
        let sum=0;
        for(let i=0;i<words.length;i++){
            sum+=words[i];
        }
        return sum;*/
/* for (var i=1;i<=7;i++){
     for ( var j=0;j<i;j++) {
         document.write("#");
     }
     document.write("<br>");
 }*/
/*
  for (var i=0;i<=100;i++){
        if(i%5===0&&i%3===0&&i!==0) {
            console.log("FizzBuzz" + "\n")
            continue;
        }
        else if(i%5===0&&i!==0){
            console.log("Buzz"+"\n")
            continue;
        }else  if(i%3===0&&i!==0){
                console.log("Fizz"+"\n")
            continue;
        }
        console.log(i+"\n")
    }*/
/*var size=prompt("请输入棋盘尺寸")
    for(var i=0;i<size;i++){
        for ( var j=0;j<size;j++) {
            document.write("#\n");
        }
        document.write("<br>");
    }
*/
/*
* let a=Number(prompt("请输入数字a"));
    let b=Number(prompt("请输入数字b"));
    let isPowerOfThree = function(a,b) {
       if(a>b){
           return a;
       }else if(a<b){
           return b;
       }else{
           return a+"="+b
       }
    };
    let temp=isPowerOfThree(a,b);
    console.log(temp)*/
/*
let a=prompt("请输入字符串");
    function countChar(a) {
        let num=0;
       for(let i=0;i<a.length;i++){
           if(a.charAt(i)==="B"){
               num++;
           }
       }
       return num;
    }
    let temp=countChar(a);
    console.log(temp)
* *//*
   let a=prompt("请输入字符串");
    let b=prompt("请输入想查询的字符");
    function countBs(a,b) {
        let num=0;
       for(let i=0;i<a.length;i++){
           if(a.charAt(i)===b){
               num++;
           }
       }
       return num;
    }
    let temp=countBs(a,b);
    console.log(temp)
* */
