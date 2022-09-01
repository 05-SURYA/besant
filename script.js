class Item{
    constructor(a,b,c,d,e){
        this.name=a;
        this.category=b;
        this.price=c;
        this.location=d;
        this.img=e;
        this.des="This text is example for description";
    }
}
let item1=new Item("Acer","laptop",800,"chennai","img/acer.jpg");
let item2=new Item("Oneplus","phone",400,"mumbai","img/oneplus.jpg");
let item3=new Item("iphone","phone",400,"bangalore","img/iphone.jpg");
let item4=new Item("Chair","furniture",200,"chennai","img/dinning.jpg");
let item5=new Item("Dell","laptop",800,"mumbai","img/dell.jpg");
let item6=new Item("Redmi","phone",500,"bangalore","img/redmi.jpg");
let item7=new Item("Hp","laptop",700,"chennai-","img/hp.jpg");
let item8=new Item("samsung","phone",600,"bangalore","img/samsung.jpg");
let item9=new Item("Table","furniture",100,"chennai","img/table.jpg");
let item10=new Item("Acer","laptop",700,"chennai","img/acer.jpg");
let item11=new Item("Oneplus","phone",300,"mumbai","img/oneplus.jpg");
let item12=new Item("iphone","phone",400,"bangalore","img/iphone.jpg");
let item13=new Item("Chair","furniture",100,"chennai","img/dinning.jpg");
let item14=new Item("Dell","laptop",900,"mumbai","img/dell.jpg");
let item15=new Item("Redmi","phone",400,"bangalore","img/redmi.jpg");
let item16=new Item("Hp","laptop",600,"chennai-","img/hp.jpg");
let item17=new Item("samsung","phone",300,"bangalore","img/samsung.jpg");
let item18=new Item("Table","furniture",200,"chennai","img/table.jpg");







 let cards=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18];

sortBy=ele=>{
    let a = cards;
    let sortArr = a.sort((a,b)=>(a.price > b.price)? 1 : -1);
     if(ele.value=="up"){
        displayCard(sortArr);
     }else if(ele.value=="down"){
        revArr = sortArr.reverse();
        displayCard(revArr);
     }
     byCate();
     
}

//  display function
 function displayCard(tiles){
  document.getElementById("count").innerHTML=tiles.length;
  document.getElementById("result").innerHTML="'"+document.getElementById("selectCategory").value+"'";
  let append = document.getElementById("append");
  if(append.innerHTML!=null){
    append.innerHTML="";
  }
  for(let i=0;i<tiles.length;i++){
    let div = document.createElement('div');
    div.setAttribute("class","card");
    let img = document.createElement('img');
    img.setAttribute("src",tiles[i].img);
    div.appendChild(img);
    let nam = document.createElement('p');
    nam.innerHTML="Name :"+tiles[i].name;
    div.appendChild(nam);
    let pri = document.createElement('p');
    pri.innerHTML="Price : $ "+tiles[i].price;
    div.appendChild(pri);
    let des = document.createElement('p');
    des.innerHTML=tiles[i].des;
    div.appendChild(des);
    append.appendChild(div);
   }
 }
    
function byPrice(){ 
    let newArr = cards.filter(arr => document.getElementById("price").value ==arr.price);
    displayCard(newArr);  
}
function byCate(){
    if(document.getElementById("selectCategory").value=="all"){
        displayCard(cards);
    }else{
    let newArr = cards.filter(arr=>arr.category == document.getElementById("selectCategory").value);
    displayCard(newArr);
    }
}
{
    let d = new Date();
    document.getElementById("ondate").innerHTML = d.toDateString();
}