import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data: any;
  public number: any = [];
  dataCard: any;
  ngOnInit() {}
  ngOnChanges() {
    // console.log('data ubah', this.data);
    this.data.forEach((x: any, index: number) => {
      // console.log('ubah', x);
      this.number.push(index);
      this.dataCard = x;
    });
  }
}
