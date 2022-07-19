import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {

    $(document).ready(function() {
      $('.hero').animate({
        opacity: 1
      }, 1000);
    });
    $(document).ready(function() {
      $('.intro').animate({
        opacity: 1
      }, 2000);
    });
    $(document).ready(function() {
      $('.new-arrivals').animate({
        opacity: 1
      }, 2100);
    });
    $(document).ready(function() {
      $('.front-headline').animate({
        opacity: 1
      }, 3000);
    });
    $(document).ready(function() {
      $('.recent-post').animate({
        opacity: 1
      }, 3100);
    });
  }

}