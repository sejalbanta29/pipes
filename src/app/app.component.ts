import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Get } from './get.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';
  todaydate = new Date();
  string="This is demo of tile case custom pipe";
  reverseString="hey, Demo of reverse custom pipe";
  countstring="Apple is on table";
  loadedPosts:any=[];

  constructor(private http:HttpClient){}

  ngOnInit(){
    this.fetchPosts();
  }

  onfetchPosts(){
    this.fetchPosts();
  }

  private fetchPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments').subscribe(posts => {
      this.loadedPosts=posts;
    })
  }
}