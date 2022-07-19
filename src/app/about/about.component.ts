import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready( function(){
      $( ".slide0" ).animate({
        opacity: 1
      }, 1000);

      $( ".slide1" ).animate({
        opacity: 1
      }, 2000);
      
      $( ".slide2" ).animate({
        opacity: 1
      }, 3000);
    });
  }

}
