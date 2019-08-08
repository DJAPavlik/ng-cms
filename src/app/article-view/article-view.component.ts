import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {  ArticlesService } from '../articles.service';
import {  Article } from '../article';
//1. import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class  ArticleViewComponent implements OnInit {

  article:  Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService:  ArticlesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  // May be problematic JUNKJUNKJUNK123
  getArticle(id): void {
  //  console.log('in get Article');
  //  console.log(id);

    this.articlesService.getArticle(id).subscribe(
      (response:any) => {
        // console.log(response);
        // console.log('Here is the post');
        // console.log(response.post);
        // console.log('here is the article');
        // console.log(response.article);
        // console.log('end test');

        this.article = response.post;
      }
    );
  }   // end getArticle(id)

  //3. Implement the delete Article() method
deleteArticle(id: string): void {
  if(confirm("Are you sure to delete " + this.article.title)) {
    this.articlesService.deleteArticle(id).subscribe(
      ()=>{this.router.navigate(['/articles'])}
    );
  }
} // end delete Article(id: ...)

} // end class ArticleViewComponent definition