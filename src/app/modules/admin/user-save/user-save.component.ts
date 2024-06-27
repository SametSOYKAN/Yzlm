import { Component,OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Kullanici } from '../../../models/kullanici';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrl: './user-save.component.css'
})
export class UserSaveComponent implements OnInit {
  kullanici : Kullanici[] = [];

  constructor(private userService: UserService,
    private route:ActivatedRoute,
    private router: Router ){}

    ngOnInit(): void {
      let userId=this.route.snapshot.params["id"];

    if(userId)
      {

        this.userService.getKullanicilar().subscribe(data=>{

          this.kullanici= data
        })
      }

    //   this.userService.getKullanici(userId).subscribe(data=>{
    // this.model=data;
  // })
}

}
