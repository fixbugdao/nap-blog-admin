import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#toggle-btn').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('active');

      $('.side-navbar').toggleClass('shrinked');
      $('.content-inner').toggleClass('active');
      $(document).trigger('sidebarChanged');

      if ($(window).outerWidth() > 1183) {
          if ($('#toggle-btn').hasClass('active')) {
              $('.navbar-header .brand-small').hide();
              $('.navbar-header .brand-big').show();
          } else {
              $('.navbar-header .brand-small').show();
              $('.navbar-header .brand-big').hide();
          }
      }

      if ($(window).outerWidth() < 1183) {
          $('.navbar-header .brand-small').show();
      }
    });

    $(document).on('sidebarChanged', function () {
      const footerBlockHeight = $('.main-footer').outerHeight();
      $('.content-inner').css('padding-bottom', footerBlockHeight + 'px');
    });
  }
}
