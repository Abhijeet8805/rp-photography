import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import * as $ from 'jquery';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    [x: string]: any;

    constructor() { }

    ngOnInit(): void {
        $(document).ready(function () {

            // Function to change the nav-bar on scroll
            $(window).scroll(function () {
                ($(window).scrollTop()! >= 100) ? (
                    $('.fixed-nav-bar').addClass('scrolled'),
                    $('.the-bass').addClass('scrolled')
                ) : (
                    $('.fixed-nav-bar').removeClass('scrolled'),
                    $('.the-bass').removeClass('scrolled')
                );
            });

            // Drop Down Function
            $('#menuButton').on('change', function () {
                ($('#menuButton').is(':checked')) ? (
                    $('.the-bass').addClass('dropped')
                ) : (
                    $('.the-bass').removeClass('dropped')
                );
            });

        });
        const navMenu = document.querySelector("#navMenu");
        navMenu?.addEventListener("click", () => {
            navMenu.classList.toggle("active")
        });
    }

}
