import { Component, OnInit} from '@angular/core';
import { Word } from './word';
import { WORDS } from './mock-words';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PS5Webster';
  words = WORDS;
  selectedWord: Word;
 
  constructor() { }
  ngOnInit() {

  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }
}
