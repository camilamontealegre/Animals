import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

imageSource: string = 'https://cdn.britannica.com/67/197567-131-1645A26E/Scottish-fold-cat-feline.jpg';
imageTwo: string= 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
