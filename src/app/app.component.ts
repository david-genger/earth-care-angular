import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './services/data-transfer.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'earth-care-angular';
  cardContent: any = [];

  constructor(private _contentService: DataTransferService) {}

  ngOnInit() {
    this.getCardContent();
  }

  getCardContent() {
    this._contentService.getContent()
    .pipe(first())
    .subscribe(
      data => {
        this.cardContent = data;
        console.log(this.cardContent);
      }
    )
  }
}
