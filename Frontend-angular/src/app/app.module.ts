import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SigninService } from './signin/signin.service';
import { SearchtrainingComponent } from './searchtraining/searchtraining.component';
import { SearchresultsService } from './searchresults/searchresults.service';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { SearchtrainingService } from './searchtraining/searchtraining.service';
import {UserdashboardService} from './userdashboard/userdashboard.service';

import { UserdashboardComponent } from './userdashboard/userdashboard.component';


import { UserComponent } from './user/user.component';
import { SkillComponent } from './skill/skill.component';
import { MentorComponent } from './mentor/mentor.component';
import { TechnologyComponent } from './technology/technology.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainingComponent } from './training/training.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {TechnologyService} from './technology/technology.service';
import {TrainingService} from './training/training.service';
import {MentorService} from './mentor/mentor.service';
import {SkillService} from './skill/skill.service';
import {PaymentService} from './payment/payment.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import {AddSkillComponent} from './skill/add-skill.component';
import {AddTechnologyComponent} from './technology/add-technology.component';
import {AddPaymentComponent} from './payment/add-payment.component';
import {AddTrainingComponent} from './training/add-training.component';
import { KlifeComponent } from './klife/klife.component';
import { KlifeService } from './klife/klife.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {UserprofileService} from './userprofile/userprofile.service';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { PaymentpageService } from './paymentpage/paymentpage.service';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { MentorloginService } from './mentorlogin/mentorlogin.service';
import {MentordashboardService} from './mentordashboard/mentordashboard.service';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';
import { MentorprofileService } from './mentorprofile/mentorprofile.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginService } from './adminlogin/adminlogin.service';
import {AdmindashboardService} from './admindashboard/admindashboard.service';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersignupService } from './usersignup/usersignup.service';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { MentorsignupService } from './mentorsignup/mentorsignup.service';
import { SkilldeleteComponent } from './skill/skilldelete.component';
import { MentorskillComponent } from './mentorskill/mentorskill.component';
import { MentortechnologyComponent } from './mentortechnology/mentortechnology.component';
import { MentorpaymentComponent } from './mentorpayment/mentorpayment.component';
import {MentortechnologyService} from './mentortechnology/mentortechnology.service';
import {MentorskillService} from './mentorskill/mentorskill.service';
import {StorageService} from './searchtraining/storage.service';
import {MentorpaymentService} from './mentorpayment/mentorpayment.service';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactusService } from './contactus/contactus.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutusService } from './aboutus/aboutus.service';
import { DeletepaymentComponent } from './payment/deletepayment.component';
import { DeletepaymentService } from './payment/deletepayment.service';
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';

import {CurrenttrainingService} from './currenttraining/currenttraining.service';
import { CompletedtrainingComponent } from './completedtraining/completedtraining.component';

import {CompletedtrainingService} from './completedtraining/completedtraining.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    UserComponent,
    MentorComponent,
    TechnologyComponent,
    SkillComponent,
    TrainingComponent,
    PaymentComponent,
    AddUserComponent,
    AddMentorComponent,
    AddSkillComponent,
    AddPaymentComponent,
    AddTrainingComponent,
    AddTechnologyComponent,
    SigninComponent,
    KlifeComponent,
    UserdashboardComponent,
    UserprofileComponent,
    PaymentpageComponent,
    MentorloginComponent,
    MentordashboardComponent,
    MentorprofileComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    UsersignupComponent,
    MentorsignupComponent,
    SkilldeleteComponent,
    SearchtrainingComponent,
    SearchresultsComponent,
    MentorskillComponent,
    MentortechnologyComponent,
    MentorpaymentComponent,
    ContactusComponent,
    DeletepaymentComponent,
    CurrenttrainingComponent,
    CompletedtrainingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService , MentorService ,SkillService ,
    UserdashboardService,TechnologyService, PaymentService ,TrainingService,SigninService,
    KlifeService,DeletepaymentService,UserprofileService,PaymentpageService,MentorloginService,MentordashboardService,MentorprofileService,AdminloginService,AdmindashboardService,UsersignupService,MentorsignupService,SearchtrainingService,SearchresultsService,MentortechnologyService,MentorskillService,MentorpaymentService,StorageService,ContactusService,AboutusService,CurrenttrainingService,CompletedtrainingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
