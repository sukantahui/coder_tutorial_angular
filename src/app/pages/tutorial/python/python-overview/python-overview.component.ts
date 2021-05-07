import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-python-overview',
  templateUrl: './python-overview.component.html',
  styleUrls: ['./python-overview.component.scss']
})
export class PythonOverviewComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector('#' + f);
      if (element) {
        element.scrollIntoView(true);
      }
    });
  }

  jumpToId( fragment ) {

    // Use the browser to navigate
    window.location.hash = fragment;

    // But also scroll when routing / deep-linking to dynamic page
    // or re-clicking same anchor
    if (fragment) {
      const element = document.querySelector('#' + fragment);
      if (element) { element.scrollIntoView(); }
    }
  }
  ngOnInit(): void {
  }

}
