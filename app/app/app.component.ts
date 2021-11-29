import { Component } from '@angular/core';
import {DatetimeserviceService} from './datetimeservice.service';
import {LoggerserviceService} from './loggerservice.service';
import { Student } from './stu';
import {StuserviceService} from './stuservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stu:Array<Student>=[];
  error:boolean =true;
  errorMessage:string="";

  constructor(private stuService:StuserviceService){
    this.stuService.getAllStu().subscribe(
      (data)=>{
        this.stu=data;
        this.error=false;
        this.errorMessage="";
        console.log(this.stu);

      },(err)=>{
        console.log("Error while fetching the notes");
        this.error=true;
        if(err.status==404){
          this.errorMessage="Page does not exists";
        }
        else if(err.status==400)
        {
          this.errorMessage="Request failed";
        }
        else{
          this.errorMessage="Service unavailable";
        }

      }
    )}
    onStuAdded(stu:any){
      console.log("In onStuAdded",stu);
      this.stuService.addStu(stu).subscribe(
        (data)=>{
          this.stu.push(data);
          this.error=false;
          this.errorMessage="";
        },(err)=>{
          console.log("Error while fetching the notes");
          this.error=true;
          if(err.status==404){
            this.errorMessage="Page does not exists";
          }
          else if(err.status==400)
          {
            this.errorMessage="Request failed";
          }
          else{
            this.errorMessage="Service unavailable";
          }
        }
      )
    }
  
}

  /* constructor(private datetime:DatetimeserviceService,
    private logger:LoggerserviceService)
  {}
  todayDate:any;
  name:string='';
  email:string='';
  register()
  {
    this.logger.logMessage("User Registering...");
    if(this.name=="" ||this.email=="")
    {
      this.logger.logError("User Registration failed");
    }
    else
    {
      this.logger.logMessage("User Registered");
    }
  }
  save()
  {
    this.todayDate=this.datetime.showTodayDate();
  }*/
  /*one: string | undefined;
  title = 'first-app';
  name="Subrata";
  isDisable=true;
  val:string='';
  parentmsg:string ="I am parent compoenent";
  Getchildmsg(data:any)
  {
    console.log(data);
  }
  save()
  {
    alert("Hii");
    alert(this.one);
    alert(this.val);
  }*/

