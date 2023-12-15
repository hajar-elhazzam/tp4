import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User, userResponse  } from '../types/User.type';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  //@ts-ignore
  selectedAction : number;


  actions = [
    {id : 1 , name : "modify"},
    {id : 2 , name : "deleted"},
    {id : 3 , name : "details"}
  ]

  constructor(public translate : TranslateService, private usersService : UsersService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
   }



  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (response : userResponse) => {
        this.users = response.data;
        console.log(response)
        // console.log(this.users);
      },
      (error) => {
        console.log("[userService] error", error);
      }
    );

  }

}
