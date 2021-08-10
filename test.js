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

function createtreenode(val){
    return {
        val:val,
        left:null,
        right:null
    }
}

function   arraytotree(array,rootindex=0){//数组二叉树转化为二叉链表
    var rootval=array[rootindex];
    if(rootval==null){
        return null
    }
    var rootnode=createtreenode(rootval);
    var leftnodeindex=rootindex*2+1;
    var rightnodeindex=rootindex*2+2;
    rootnode.left=arraytotree(array,leftnodeindex);
    rootnode.right=arraytotree(array,rightnodeindex);

    return  rootnode;
}
var temp=[];
function treetoarray(tree,rootindex=0){
    temp[rootindex]=tree.val;
    treetoarray(tree.left,rootindex*2+1);
    treetoarray(tree.right,rootindex*2+2);
    return temp;
}
function treetocondensedarray(tree){
    if(!tree){
        return []
    }
    var nodes = [tree];
    var result = [];
    for(let i=0;i<nodes.length;i++){
        if(nodes[i]){
            result.push(nodes[i].val);
            result.push(nodes[i].left);
            result.push(nodes[i].right);
        }else {
            result.push(null);
        }
    }
    return  result;
}

function  cArrayToTree(array){
    if(array.length == 0){
        return null
    }
    var root = createtreenode(array[0]);
    var nodes = [root];

    for(let i = 1;i < array.length;i++){
        node = nodes.shift();
        if(array[i] == null){
            node.left = null
        }else {
            node.left=createtreenode(array[i]);
            nodes.push(node.left);
        }

        i++;

        if(array[i] == null){
            node.right = null
        }else {
            node.right=createtreenode(array[i]);
            nodes.push(node.right);
        }
    }
    return  root;
}

function treeTOKuoHao(tree){
    if(tree){
        if(!tree.left&&!tree.right){
           return  tree.val+""
        }
        return  tree.val+'('+treeTOKuoHao(tree.left)+')'+'('+treeTOKuoHao(tree.right)+')';
    }else return "";
}

let array=[];
function  center(tree){
    if(!tree){
        return null;
    }
    if(tree.left){
       array.push(center(tree.left))
    }
    if(tree.right){
        array.push(center(tree.right))
    }
    return array;
}

function preercha(tree){
    if(tree){
        return [tree.val,...preercha(tree.left),...preercha(tree.right)]
    }
    return [];
}

function ListNode(val) {
    this.val = val
    this.next = null;
}

function Stack() {
    this.head = null;
    this._size=0;
}

// 往栈顶增加一个元素
Stack.prototype.push = function(val) {
    let node=new ListNode(val);
    this.next=this.head;
    this.head=node;
    this._size++;
    return this;
}
// 从栈顶删除并返回一个元素
Stack.prototype.pop = function() {
    if(head){
        let val=this.next;
        this.head=this.head.next;
        this._size--;
        return val;
    }else {
        return undefined;
    }
}
// 查看栈顶元素，不删除
Stack.prototype.peek = function() {
    if(head){
        return this.head.val
    }else {
        return undefined;
    }
}

function Queue() {
    this.head = null;
    this.tail = null;
    this._size=0;
}

// 往队列里增加一个元素
Queue.prototype.enqueue = function(val) {
    let node=new ListNode();
    if(this.head){
        this.tail.next=node;
        this.tail=node;
    }else {
        this.head=this.tail=node;
    }
    this._size++;
}
// 从队列中删除并返回一个元素
Queue.prototype.dequeue = function() {
    if(this.head){
        let val=this.head.val
        this.head= this.head.next;
        if(this.head.next==null){
            this.tail=null;
        }
        this._size--;
        return val;
    }
}

function repeat(string,times){
    let result = "";
    for(let i = 0;i < times ; i++){
        result+=string;
    }
    return result;
}

function Textcell(text){
    this.text=text.split("\n");
}

Textcell.prototype.minWidth=function (){
    return this.text.reduce(function (width,line) {
            return  Math.max(width,line.length);
        }
        ,0);
};

Textcell.prototype.minHeight=function () {
    return this.text.length;
}

Textcell.prototype.draw=function (width,height){
    let result=[];
    for(let i = 0;i < height ; i++){
       let val=this.text[i]||"";
       result.push(val+repeat(" ",width - val.length));
    }
    return result;
}

function rowHeigths(rows){
  return   rows.map(function (row){
      return  row.reduce(function (max ,ceil){
              return   Math.max(max,ceil.minHeight());
          },0)
  })
}

function colWidths(rows){
    return   rows[0].map(function (_ , i){

        return  rows.reduce(function (max , row){
            return   Math.max(max , row[i].minWidth());
        },0)
    })
}

function  drawtable(rows){
    let minwidth = colWidths(rows);
    let minheight = rowHeigths(rows);

    function  drawline(blocks,lineidx){
        return blocks.map(function (block){
            return block[lineidx];
        }).join(" ");
    }
    function drawrow(row,rowidx){
        var blocks=row.map(function (ceil,colidx){
            return ceil.draw(minwidth[colidx],minheight[rowidx]);
        })
        return blocks[0].map(function (_,lineidx){//删除代码看效果
            return drawline(blocks,lineidx)
        }).join("\n");
    }
    return rows.map(drawrow).join("\n");
}
var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

var mount=[];

var head=[];

for(let key in MOUNTAINS[0]){
    head.push(new Textcell(key));
}
mount.push(head);



for(let mountain of MOUNTAINS){
    let row=[];
    for(let key in mountain){
        row.push(new Textcell(""+mountain[key]));
    }
    mount.push(row);
}
drawtable(mount)

function UnderlineCell(inner){
    this.inner=inner;
}

UnderlineCell.prototype.minWidth=function (inner){
    return this.inner.minWidth();
}

UnderlineCell.prototype.minHeight=function (inner){
    return this.inner.minHeight()+1;
}

UnderlineCell.prototype.draw=function (width,heigth){
    return this.inner.draw(width,heigth-1).concat(repeat(["-"],width));
}

function StretchCell(inner){
    this.inner=inner;
}

StretchCell.prototype.minWidth=function (inner){
    return this.inner.minWidth()+2;
}

StretchCell.prototype.minHeight=function (inner){
    return this.inner.minHeight()+2;
}

StretchCell.prototype.draw=function (width,heigth){
    let result=this.inner.draw(width-2,heigth-2).map(it => "|"+it+"|");
    result.push(repeat("-",width));
    result.unshift(repeat("-",width));
    return result;
}


function datatable(data){
    let key=Object.keys(data[0]);
    let headers=key.map(function (name){
        return new UnderlineCell(new Textcell(name));
    })
    var body=data.map(function (row){
        return key.map(function (name){
            return new StretchCell(new Textcell(row[name]+''))
        })
    })
    return [headers].concat(body);
};
console.log(drawtable(datatable(MOUNTAINS)))

function Vector(x,y){
    if(new.target!==Vector){
        return new Vector(x,y);
    }
    this.x=x;
    this.y=y;
}
Vector.prototype.plus=function (val){//向量和
    let x=val.x+this.x;
    let y=val.y+this.y;
    return new Vector(x,y);
}
Vector.prototype.minus=function (val){向量差
    let x=this.x-val.x;
    let y=this.y-val.y;
    return new Vector(x,y);
}

function Complex(real,imag){
    this.real=real;
    this.imag=imag;
}
Complex.prototype.plus=function (val){
    let real=val.real+this.real;
    let imag=val.imag+this.imag;
    return new Complex(real,imag);
}
Complex.prototype.minus=function (val){
    let real=this.real-val.real;
    let imag=this.imag-val.imag;
    return new Complex(real,imag);
}
Complex.prototype.multiple=function (val){
    let real=this.real*val.real-this.imag*val.imag;
    let imag=this.real*val.imag+this.imag*val.real;
    return new Complex(real,imag);
}

Complex.prototype.division=function (val){
    let temp=new Complex(val.real,-val.imag);
    let thisval=this.multiple(temp);
    let finalval=val.multiple(temp);

    return new Complex(thisval.real/finalval.val,thisval.imag/finalval.val);
}
Complex.prototype.toStrign=function (){
    if(this.imag<0){
        return this.real+""+this.imag
    }
    return this.real+"+"+this.imag
}

function Mymap(){
    this._keys=[]
    this._values=[];
}

Mymap.prototype.keyindex=function (val){
    if(val !== val){
       return  this._keys.findIndex(it => it !== it);
    }else
    {
        return this._keys.indexOf(val);
    }
}

class  mu extends Error{

};
function pr(a,b){
    if(Math.random()<0.5){
        return a*b;
    }else {
        throw new mu("***");
    }
}
function mul(a,b){
    try {
        pr(a,b);
    }catch (e){
        if(e instanceof  mu){
            return mul(a,b);
        }else {
            throw e;
        }
    }
}

function wit(f){
    box.unlock();
    try {
        f();
    }catch (e){

    }finally {
        box.lock();
    }
}

var box={
    locked:false,
    unlock:function (){
        this.locked=false;
    },
    lock:function (){
        this.locked=true;
    },
    _content:[],
    get content(){
        if(this.locked==true){
            throw new Error("Locked!")
        }
        return this._content
    }
}

class ListNode{
    constructor(key,val) {
        this.val = val;
        this.key = key;
        this.next = null
    }
}

class HasMap{
    constructor() {
        this._capacity = 16;
        this._size = 0;
        this.element = new Array(this._capacity).fill(null);
    }
    rehash(){//扩容或者缩容
        let newelement = this.element;
        if(this._size/this._capacity>0.75){
            this._capacity = this._capacity * 2;
        }
        if(this._size/this._capacity<0.3){
            this._capacity = this._capacity / 2;
        }
        this._size=0;
        this.element = new Array( this._capacity).fill(null);
        for(let i = 0 ; i < newelement.length ; i++){
            let head=newelement[i];
            while (head){
                this.set(head.key,head.val);
                head=head.next;
            }
        }
    }
    haskey(str){
        let hash=131313;
        let seed=111111;
        for(let i = 0 ; i <str.length ; i++){
            hash = (hash * seed >>> 0) + str.charCodeAt(i);
        }
        return hash & this.element.length-1
    }
    set(key , val){
        let  index=this.haskey(key);
        let  head=this.element[index];

        while (head){
            if(head.key == key){
                head.val=val;
                return this;
            }
            head=head.next;
        }

        let node=new ListNode(key,val);
        node.next=this.element[index];
        this.element[index]=node;
        this._size++;
        if(this._size / this._capacity > 0.75){
            this.rehash();
        }
        return this;
    }

    get(key){
        let  index=this.haskey(key);
        let  head=this.element[index];
        while (head){
            if(head.key == key){
                return head.val;
            }
            head=head.next;
        }
    }
    has(key){
        let  index=this.haskey(key);
        let  head=this.element[index];
        while (head){
            if(head.key == key){
                return true;
            }
            head=head.next;
        }
        return false;
    }
    delete(key){
        let  index=this.haskey(key);
        let  head=this.element[index];
        if(!head){
            return false;
        }
        if(head.key == key){
            this.element[index]=head.next;
            this._size--;
            if(this._size / this._capacity <0.3){
                this.rehash();
            }
            return true;
        }

        while (head.next){
            if(head.next.key == key){
                head.next =  head.next.next;
                this._size--;
                if(this._size / this._capacity <0.3){
                    this.rehash();
                }
                return true;
            }
        }
        return false;
    }
    get size(){
        return this._size;
    }
}
m=new HasMap();
for(let i=0;i<20000;i++){
    m.set(Math.random().toString(16).slice(2),i);
}


function drawTable(array){ //array=[{a:1,b:2}{c:3,a:5}{e:5}]
    var keys=Array.from/*重新转换成数组*/(new Set/*转换成set去重*/(array.reduce/*把所有键放入数组*/((result,value/*代表一个对象*/) => {
        result.push(...Object.keys(value));
        return result;
    },[])));

    let html=''
    html+='<table border="1">';
    html+='<tr><th>(index)</th>';
    for (let key of keys){
        html+='<th>'+key+'</th>';
    }
    html+='</tr>';
    for(let i =0 ; i<array.length;i++){
        html+='<tr><td>'+i+'</td>';
        let item=array[i];
        for (let key of keys) {
            if (item.hasOwnProperty(key)) {
                var val = item[key]
                if (typeof val == 'string') {
                    html += '<td class="string">"' + val + '"</td>'
                } else if (typeof val == 'number') {
                    html += '<td class="number">' + val + '</td>'
                } else if (typeof val == 'boolean') {
                    html += '<td class="boolean">' + val + '</td>'
                } else if (typeof val == 'undefined') {
                    html += '<td class="nil">' + val + '</td>'
                } else if (val == null) {
                    html += '<td class="nil">' + val + '</td>'
                } else if (typeof val == object) {
                    html += '<td class="object">' + val + '</td>'
                }
            } else {
                html += '<td class="empty"></td>'
            }
        }

        html += '</tr>'
    }
    html += '</table>'
    return html
}

class PriorityQueue{
    constructor(inits=[],predicate = it => it) {
        this.elements=[];
        this.predicate=predicate;
        if(inits.length){
            this.elements=inits.slice();
            this.heapify();
        }
    }
    heapify(){
        for(let i = 0; i < this.elements.length;i++ ){
            this.heapUp(i);
        }
      /*  for(let i = (this.elements.length -1 ) >> 1; i >= 0 ; i--){
            this.heapDown(i);
        }*/
    }
    _swap(i,j) {
        let temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j]=temp
    }
    heapUp(idx){
        while(idx>0){
            let fIdx= ( idx - 1 ) >> 1
            if(this.predicate(this.elements[idx]) > this.predicate(this.elements[fIdx])){
                this._swap(idx,fIdx)
                idx=fIdx;
            }else {
                return
            }
        }
    }
    heapDown(idx) {
        let l = this.elements.length;
        while (idx < l) {
            let maxIdx=idx;
            let lIdx = maxIdx * 2 + 1;
            let rIdx = maxIdx * 2 + 2;
            if (lIdx < l && this.predicate(this.elements[lIdx]) > this.predicate(this.elements[maxIdx])) {
                maxIdx=lIdx;
            }
            if (rIdx < l && this.predicate(this.elements[rIdx]) > this.predicate(this.elements[maxIdx])) {
                maxIdx=rIdx;
            }
            if(idx !== maxIdx){
                this._swap(idx,maxIdx)
                idx=maxIdx;
            }else {
                return
            }
        }
    }

    push(val){
        this.elements.push(val)
        this.heapUp(this.elements.length-1)
        return this;
    }
    pop(){
        let result= this.elements[0];
        this.elements[0]=this.elements.pop();
        this.heapDown(0)
        return result;
    }
    peek(){
        return this.elements[0];
    }
}
function queueSort(arr){
    let pq=new PriorityQueue();
    for(let i = 0 ; i < arr.length ; i++){
        pq.push(arr[i]);
    }
    for(let i = arr.length-1 ; i >= 0 ; i--){
        arr[i] = pq.pop();
    }
    return arr
}
function shellSort(array){
    for(let step=array.length >> 1;step > 0 ; step = step >> 1){
        for(var i=step;i < array.length;i++){
            for(var j=i-step;j >=0;j-=step){
                if(array[j]>array[j+step]){
                    swap(array,j,j+step)
                }else{
                    break;
                }
            }
        }
    }
    return array;
}
function swap(array,i,j){
    var temp=array[i];
    array[i]=array[j];
    array[j]=temp;
    return array;
}
function shellSort2(array){
    for(let step=array.length >> 1;step > 0 ; step = step >> 1){
        for(var i=0;i < array.length-step;i++){
            for(var j = i+step;j < array.length ;j += step){
                if(array[j] < array[j - step]){
                    swap(array,j,j - step)
                }
            }
        }
    }
    return array;
}
var mergeKLists = function (lists) {
    let current, sortedlist = [];
    for (let i = 0; i < lists.length; i++) {
        current = lists[i]
        while (current) {
            sortedlist.push(current.val);
            current = current.next;
        }
    }
    sortedlist.sort((a, b) => a - b);
    let dummyheadlist = new ListNode(),
        linkedlist = dummyheadlist;
    for (let i = 0; i < sortedlist.length; i++) {
        dummyheadlist.next = new ListNode(sortedlist[i]);
        dummyheadlist = dummyheadlist.next
    }
    return linkedlist.next;
};
var isUgly = function(n) {
    if(n===1){
        return true;
    } else if(n<1){
        return false;
    }
    for(var i=0;i<100;i++){
        if(n%2==0) {
            n/=2;
        }else if(n%5==0) {
            n/=5;
        }else if(n%3==0) {
            n/=3;
        }else{
            return false;
        }
        if(n===1){
            return true;
        }
    }

};
var nthUglyNumber = function(n) {
    let idx2 = 0, idx3 = 0, idx5 = 0;
    let next2, next3, next5;
    let next;
    let nums = [1]
    while (nums.length < n) {
        next2 = nums[idx2]*2;
        next3 = nums[idx3]*3;
        next5 = nums[idx5]*5;
        next = Math.min(next2,next3,next5);
        nums.push(next);
        if (next == next2) idx2++;
        if (next == next3) idx3++;
        if (next == next5) idx5++;
    }
    return nums[n-1];
};
var nthUglyNumber = function(n) {
    const factors = [2, 3, 5];
    const offset = [0, 0, 0];
    const ugly = [1];
    n--;

    while(n--) {
        const candidates = factors.map((val, i) => ugly[offset[i]] * val);
        const next = Math.min(...candidates);
        candidates.forEach((val, i) => candidates[i] === next ? offset[i]++ : null);
        ugly.push(next);
    }
    return ugly.pop();
};
String.prototype.match2 = function(reg) {
    if(reg.global){
        let result=[];
        let match=null;
        reg.lastIndex=0;
        while(match=reg.exec(this)){
            result.push(match[0]);
        }
        if(result.length==0){
            return null;
        }
        return result;
    }else {
        return reg.exec(this);
    }
}
String.prototype.split2 = function(strarg) {
    let result=[];
    let str=this;
    if(typeof strarg =="string"){
        let startIdx=0;
        let i;
        while ((i=str.indexOf(strarg,startIdx))>=0){
            result.push(str.slice(startIdx,i));
            startIdx=i+strarg.length;
        }
        result.push(str.slice(startIdx));
        return result;
    }else {
        let oldLastIdx=strarg.lastIndex;
        strarg.lastIndex=0
        let match;
        let startIdx=0;
        if(!strarg.globol){
            strarg =new RegExp(strarg,strarg.flags+"g");
        }
        while (match=strarg.exec(str,strarg.lastIndex)){
            result.push(str.slice(startIdx,match.index));
            result.push(...match.slice(1));
            startIdx=strarg.lastIndex;
            if(match[0]==""){
                strarg.lastIndex++
            }
        }
        result.push(str.slice(startIdx));
        strarg.lastIndex=oldLastIdx;
        return result;
    }
}
String.prototype.split2 = function (spliter) {
    var result = []
    var str = this
    if (typeof spliter == 'string') {
        var startIdx = 0
        var i

        while ((i = str.indexOf(spliter, startIdx)) >= 0) {
            result.push(str.slice(startIdx, i))
            startIdx = i + spliter.length
        }

        result.push(str.slice(startIdx))
        return result
    } else {
        var oldLastIndex = spliter.lastIndex
        spliter.lastIndex = 0

        if (!spliter.global) {
            spliter = new RegExp(spliter, spliter.flags + 'g')
        }

        var startIndex = spliter.lastIndex
        var match = null

        while (match = spliter.exec(str)) {
            result.push(str.slice(startIndex, match.index)) // 隔板之前的位置
            result.push(...match.slice(1)) // 将分组捕获到的内容放入隔板位置
            startIndex = spliter.lastIndex
            if (match[0] == '') { // 零宽匹配
                spliter.lastIndex++
            }
        }
        result.push(str.slice(startIndex))

        spliter.lastIndex = oldLastIndex
        return result
    }
}
String.prototype.replace2 = function(strval,rplval) {
    if(typeof strval=="string"){
        let idx=str.indexOf(strval);
        if( typeof rplval=="function"){
            rplval=rplval(strval,idx,this)
        }else {
            rplval=rplval.split2("$&").join(strval);
        }
        if(idx==-1){
            return this;
        }else {
            return this.slice(0,idx)+rplval+this.slice(strval.length+idx)
        }
    }else {
        var oldLastIndex = strval.lastIndex
        strval.lastIndex = 0
        rplval = transformReplacementStringToReplacementFunction(rplval)
        var result = ''

        var match = null
        var startIndex = strval.lastIndex
        while (match = strval.exec(this)) {
            result += this.slice(startIndex, match.index)
            result += rplval(...match)
            startIndex = strval.lastIndex
            if (match[0] == '') { // 零宽匹配
                strval.lastIndex++
            }
        }
        result += this.slice(startIndex)
        strval.lastIndex=oldLastIndex;
        return result
    }
}

String.prototype.replace2 = function (replacer, replacement) {
    if (typeof replacer == 'string') {
        var idx = this.indexOf(replacer)
        if (typeof replacement == 'function') {
            replacement = replacement(replacer, idx, this)
        } else {
            replacement = replacement.split2('$&').join(replacer)
        }
        if (idx == -1) {
            return this
        } else {
            return this.slice(0, idx) + replacement + this.slice(idx + replacer.length)
        }
    } else {
        var oldLastIndex = replacer.lastIndex
        replacer.lastIndex = 0
        replacement = transformReplacementStringToReplacementFunction(replacement)
        var result = ''

        var match = null
        var startIndex = replacer.lastIndex
        while (match = replacer.exec(this)) {
            result += this.slice(startIndex, match.index)
            result += replacement(...match)
            startIndex = replacer.lastIndex
            if (match[0] == '') { // 零宽匹配
                replacer.lastIndex++
            }
        }
        result += this.slice(startIndex)
        replacer.lastIndex=oldLastIndex;
        return result
    }
}
//将形如'aaa$&bbb$1ccc$2d'的字符串转换为等价的函数
function transformReplacementStringToReplacementFunction(replacementString) {
    if (typeof replacementString == 'function') {
        return replacementString
    }
    // replacementString: 'aaa$&bbb$1ccc$2d'
    var splitted = replacementString.split2(/(\$[\d&])/)
    // splitted is like ["aaa", "$&", "bbb", "$1", "ccc", "$2", "d"]
    return function (...args) {
        var str = ''
        for (var part of splitted) {
            if (part.length == 2 && part[0] == '$') { // part is like $& $5 $7
                if (part[1] == '&') {
                    str += args[0]
                } else {
                    str += args[part[1]] || ''
                }
            } else {
                str += part
            }
        }
        return str
    }
}
String.prototype.search2 = function(reg) {
    if(typeof reg=="string"){
        return this.indexOf(reg);
    }
    let preIdx=reg.lastIndex;
    reg.lastIndex=0;
    let match=reg.exec(this);
    if(match){
        reg.lastIndex=preIdx;
        return  match.index;
    }else {
        reg.lastIndex=preIdx;
        return  -1;
    }
}

RegExp.prototype.test2 = function(str) {
    return str.exec(this)==null;
}







String.prototype.match2 = function(re) {
    if (re.global) {
        var prevLastIndex = re.lastIndex
        re.lastIndex = 0
        var result = []
        var match = null

        while (match = re.exec(this)) {
            result.push(match[0])
        }

        if (result.length == 0) {
            return null
        }
        return result
    } else {
        return re.exec(this)
    }
}

