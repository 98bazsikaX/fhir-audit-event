import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private aService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.aService.isLoggedIn){
        this.router.navigate(['./login']);
    }
  }

}
