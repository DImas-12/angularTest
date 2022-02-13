import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import jsonData from './Files/title-list.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'json-file-read-angular';
  public DataJson: [] = jsonData;
  public number: any = [];
  public dataCard: any;
  public dataAll: any;

  ngOnInit() {
    console.log(this.DataJson);
  }
  model = 1;

  Coba() {
    console.log('lalala');

    this.dataAll = this.DataJson;

    this.DataJson.forEach((x: any, index: number) => {
      console.log('for i', index);
      this.number.push(index);
      // this.dataAll = x;
    });
    console.log('data all', this.dataAll);
  }
}
