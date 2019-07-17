import { Input , Output , EventEmitter, Component } from '@angular/core';

@Component({
    selector:'child-comp',
    template:`
        <div class="child">
            <h2>Child Comp</h2>
            <button (click)="updateCount()">Add to Parent</button>
        </div>
    `,
    styles:[`
        .child{
            border: 5px solid #ececec;
            border-radius: 10px;
            background-color:#5abfee;
            height: 100px;
        }        
    `]
})

export class ChildComponent{
    @Input("parentCount")
    count:number;

    @Output()
    change:EventEmitter<number> = new EventEmitter<number>()

    updateCount(){
        this.count++;
        this.change.emit(this.count);
    }
}