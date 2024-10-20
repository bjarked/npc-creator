import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currenthPath:  BehaviorSubject<string> = new BehaviorSubject<string>("");
  constructor(private router:Router,private route:ActivatedRoute) {
    router.events.pipe(filter(event=>event instanceof NavigationEnd),map(event=>(event as NavigationEnd).url.substring(1))).subscribe(url => {
      this.currenthPath.next(url);
    })
  }

  navTo(path:string) {
    this.router.navigate([path]);
  }

}
