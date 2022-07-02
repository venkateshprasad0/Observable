import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSource } from '../DataSource';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  data: Observable<number[]>=new Observable<number[]>();

  constructor(private source: DataSource) { }

  ngOnInit() {
    this.data=this.source.getNumberArray();}

}
