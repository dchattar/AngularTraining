import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
items;
keys;

subscription;

constructor(private db: AngularFireDatabase) {


  this.items = db.list('items').valueChanges()
  .subscribe(data => {
    this.items = data;
    const items = JSON.parse(JSON.stringify(this.items));
    this.keys = Object.keys(items);
    // console.log(this.flats);
  });

}

saveData(formData) {
  this.db.list('items').push(formData)
  .then(data => console.log(data));
}

}
