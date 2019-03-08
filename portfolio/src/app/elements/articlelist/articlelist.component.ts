import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../../mock-articles';
@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent {
  articles = ARTICLES;
  constructor() { }

}
