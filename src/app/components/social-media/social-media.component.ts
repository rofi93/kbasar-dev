/* tslint:disable:variable-name max-line-length */
import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMedia: any;
  sanitizer: DomSanitizer;

  constructor(private _sanitizer: DomSanitizer) {
    this.sanitizer = _sanitizer;
  }

  ngOnInit(): void {
    this.socialMedia = [
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/khairul.basar93/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4"><path d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z" fill="#959da5"/></svg>')
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/khairulbasar/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="#959da5"/></svg>')
      },
      {
        label: 'Stack Overflow',
        href: 'https://stackoverflow.com/u/3968623/',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="24" fill="#959da5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path class="st0" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/><path class="st1" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/></svg>')
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/khairulbasar93',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3"><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="#959da5"/></svg>')
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@khairul.basar',
        icon_svg: this.sanitizer.bypassSecurityTrustHtml('<svg width="20" height="20" viewBox="32 25 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M46.5340803,65.2157554 C46.6968378,63.6076572 46.0836,62.018231 44.8828198,60.93592 L32.6512605,46.2010582 L32.6512605,44 L70.6302521,44 L99.9859944,108.380952 L125.794585,44 L162,44 L162,46.2010582 L151.542017,56.2281011 C150.640424,56.9153477 150.193188,58.0448862 150.380019,59.1628454 L150.380019,132.837155 C150.193188,133.955114 150.640424,135.084652 151.542017,135.771899 L161.755369,145.798942 L161.755369,148 L110.38282,148 L110.38282,145.798942 L120.963119,135.527337 C122.002801,134.487948 122.002801,134.182246 122.002801,132.592593 L122.002801,73.0417402 L92.585901,147.755438 L88.6106443,147.755438 L54.3622782,73.0417402 L54.3622782,123.115814 C54.0767278,125.221069 54.7759199,127.3406 56.2581699,128.863022 L70.0186741,145.55438 L70.0186741,147.755438 L31,147.755438 L31,145.55438 L44.7605042,128.863022 C46.2319621,127.338076 46.8903838,125.204485 46.5340803,123.115814 L46.5340803,65.2157554 Z" id="Shape" fill="#959da5"></path></svg>')
      }
    ];
  }

}
