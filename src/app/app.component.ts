import { Component } from '@angular/core';
import { DataSource } from './DataSource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Observable';
  array!: number[];

  constructor(private source:DataSource){}
  ngOnInit(){
    this.source.getNumber().subscribe(data=>{
      this.array.push(data);
    });  
  }
}
