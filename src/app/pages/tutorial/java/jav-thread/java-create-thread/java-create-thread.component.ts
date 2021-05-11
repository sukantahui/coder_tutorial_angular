import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-java-create-thread',
  templateUrl: './java-create-thread.component.html',
  styleUrls: ['./java-create-thread.component.scss']
})
export class JavaCreateThreadComponent implements OnInit {
  panelOpenState: boolean;

  myHtmlTemplate: any = 'https://kissht.com/';
  htmlData: any = '';
  htmlString: any = '';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type':  'text/plain',
    });
    this.http.get(this.myHtmlTemplate, {responseType: 'text'}).subscribe(res => {
      this.htmlString = res;
      this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlString); // this line bypasses angular security
    });
  }

}
