import { Component, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS6Webster';
  word = new FormControl('');
  wordmeta: any;
  httpClient: any;

  constructor(private http: HttpClient ) {

  }

  ngOnInit() {

  }

/*

    http.get('http://localhost:3000/ps4')
      .subscribe(
        data => this.wordmeta = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
    this.httpClient = http;
    this.http.get('http://localhost:3000/ps4')
      .subscribe(
        data => this.wordmeta = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
*/

  query(word: string) {
    this.http.get('http://localhost:3000/ps4', {params: {'id': word}})
    .subscribe(
      data => this.wordmeta = data,
      err => console.log(`Error: ${err}`),
      () => console.log(`Completed request`)
    ); 
  }

}
