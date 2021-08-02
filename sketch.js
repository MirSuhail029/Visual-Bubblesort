let dim=600;
let es=10;               //element spacing
let elements=dim/es;
let arr=[];
let a=0;

function setup() {
    createCanvas(dim, dim);
    background(0);
    for(let i=0;i<elements;i++){
    arr[i]=random(1,40);
    }

}

function draw() {
    background(0);
    //rectMode(CENTER);
    for(let i=0;i<arr.length;i++){
        rect(i*es,dim,5,arr[i]*-10);
    }
    
    if(arr[a]>arr[a+1]){
        let temp=arr[a];
        arr[a]=arr[a+1];
        arr[a+1]=temp;
    }
    a++;
    
    if(a==elements-1){
        a=0;
    }
}

function mousePressed(){
    for(let i=0;i<elements;i++){
    arr[i]=random(1,40);
    }
}

