import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <div class="comp">
  <button (click)="reset()">Reset Count</button>
  <div class="color-it">
    <h2>Parent component</h2>
      <div>
          count from child:{{count}}
      </div>
      <child-comp [parentCount]="count" (change)="updateFromChild($event)"></child-comp>
  </div>
</div>`,
  styles:[`
  .comp{
      border: 5px solid #000;
      border-radius: 10px;
      background-color:#5abfee;
  }        
`]
})
export class AppComponent {
 count:number = 0;

 updateFromChild($event){
   this.count=$event;
 }

 reset(){
   this.count=0;
 }
}
