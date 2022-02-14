import { Component ,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  constructor(private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver){

  }

  async loadcomp1(){
    this.vcr.clear();
    const {Comp1Component} =  await import("./comp1/comp1.component");
    this.vcr.createComponent(this.cfr.resolveComponentFactory(Comp1Component));
  }
   async loadcomp2(){
    this.vcr.clear();
    const {Comp2Component} =  await import("./comp2/comp2.component");
    this.vcr.createComponent(this.cfr.resolveComponentFactory(Comp2Component));
   }
   async loadcomp3(){
    this.vcr.clear();
    const {Comp3Component} =  await import("./comp3/comp3.component");
    this.vcr.createComponent(this.cfr.resolveComponentFactory(Comp3Component));
   }

   async loadcomp4(){
    this.vcr.clear();
    const {Comp4Component} =  await import("./comp4/comp4.component");
    this.vcr.createComponent(this.cfr.resolveComponentFactory(Comp4Component));
   }

   async loadcomp5(){
    this.vcr.clear();
    const {TimercompComponent} =  await import("./timercomp/timercomp.component");
    this.vcr.createComponent(this.cfr.resolveComponentFactory(TimercompComponent));
   }
}
