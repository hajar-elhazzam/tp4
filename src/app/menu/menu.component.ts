import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.updateSidebarStyle();
    });
    const routeSnapShot = this.activatedRoute.snapshot;
  }

  updateSidebarStyle() {
    const isUsersRoute = this.activatedRoute.snapshot.routeConfig?.path === 'Users';
  
    const sidebar = document.getElementById('sidebar');
  
    if (sidebar) {
      sidebar.style.backgroundColor = isUsersRoute ? 'lightblue' : 'lightgreen';
      sidebar.style.color = isUsersRoute ? 'black' : 'white';
    }
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToUsers() {
    this.router.navigate(['/Users']);
  }
}
