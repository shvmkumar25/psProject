import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  count=0;
  constructor() { }

  ngOnInit(): void {
  }
addDiv(){
  this.count=this.count+1;
  let str=this.count.toString();
  console.log(str);
  var div1=document.createElement("div");
  div1.style.width="200px";
  div1.style.height="200px";
  div1.style.border=" 1px solid black";
  div1.style.display="inline-flex";
  
  
  var button1=document.createElement("button");

  button1.textContent="Click Me";
  button1.style.height="40px";
  button1.style.width="80px";
  
  button1.addEventListener("click",function(){
    alert("Button in div"+" "+str+" is clicked");
  })

  div1.appendChild(button1);
  // document.getElementsByClassName("childdivs")
   document.getElementById("parentdiv")?.appendChild(div1);

}
}
