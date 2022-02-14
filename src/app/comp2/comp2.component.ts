import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  randomclass:boolean=true;
  i=2;
  selectedPrice:string='';
  filtereditems:any=[];
   bol=false;
  data=[{name:"Article1",price:20,Details:"nice product"},{name:"Article1",price:24,Details:"nice product"},{name:"Article1",price:30,Details:"nice product"},
  {name:"Article1",price:34,Details:"nice product"},{name:"Article1",price:40,Details:"nice product"},{name:"Article1",price:44,Details:"nice product"},{name:"Article1",price:50,Details:"nice product"},{name:"Article1",price:56,Details:"nice product"},
  {name:"Article1",price:60,Details:"nice product"},{name:"Article1",price:67,Details:"nice product"},
  {name:"Article1",price:70,Details:"nice product"},{name:"Article1",price:77,Details:"nice product"},{name:"Article1",price:80,Details:"nice product"},
  {name:"Article1",price:89,Details:"nice product"},{name:"Article1",price:121,Details:"nice product"},{name:"Article1",price:120,Details:"nice product"},{name:"Article1",price:90,Details:"nice product"},{name:"Article1",price:210,Details:"nice product"},{name:"Article1",price:650,Details:"nice product"},{name:"Article1",price:10,Details:"nice product"},{name:"Article1",price:9,Details:"nice product"},{name:"Article1",price:37,Details:"nice product"},{name:"Article1",price:29,Details:"nice product"},{name:"Article1",price:84,Details:"nice product"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  changeclass(){
    this.randomclass=true;
    console.log(this.randomclass)
    }
    changeclass1(){
      this.randomclass=false;
      console.log(this.randomclass)
    }

    valueSelected(){
      this.filtereditems=[];
      console.log(this.selectedPrice);
      let splittePrice=this.selectedPrice.split("-");
      console.log(splittePrice);
      let p1=parseInt(splittePrice[0]);
      let p2=parseInt(splittePrice[1]);
      console.log(p1,p2);
      var fitems=this.data.forEach((item)=>{
        if(item.price>=p1 && item.price<=p2){
          this.filtereditems.push(item);
        }
      })
      
      console.log(this.filtereditems);
     this.bol=true; 
    }
}
