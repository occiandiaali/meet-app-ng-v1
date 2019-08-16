import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles;
  news;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){

    this.news = this.apiService.getNews().subscribe((data)=> {
      console.log(data);
      this.articles = data['articles'];
    });

    //setInterval(this.news, 6000)
  }

}
