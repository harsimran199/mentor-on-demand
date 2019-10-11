import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { KlifeComponent } from './klife/klife.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SkillComponent } from './skill/skill.component';
import { TechnologyComponent } from './technology/technology.component';
import { TrainingComponent } from './training/training.component';
import { PaymentComponent } from './payment/payment.component';
import {AddUserComponent} from './user/add-user.component';
import {AddSkillComponent} from './skill/add-skill.component';
import {AddPaymentComponent} from './payment/add-payment.component';
import {AddTechnologyComponent} from './technology/add-technology.component';
import { MentorComponent } from './mentor/mentor.component';
import {AddMentorComponent} from './mentor/add-mentor.component';
import {AddTrainingComponent} from './training/add-training.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MentordashboardComponent } from './mentordashboard/mentordashboard.component';
import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentorsignupComponent } from './mentorsignup/mentorsignup.component';
import { SkilldeleteComponent } from './skill/skilldelete.component';
import { SearchtrainingComponent } from './searchtraining/searchtraining.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { MentorskillComponent } from './mentorskill/mentorskill.component';
import { MentortechnologyComponent } from './mentortechnology/mentortechnology.component';
import { MentorpaymentComponent } from './mentorpayment/mentorpayment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeletepaymentComponent } from './payment/deletepayment.component';
import { CurrenttrainingComponent } from './currenttraining/currenttraining.component';

import { CompletedtrainingComponent } from './completedtraining/completedtraining.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'mentors', component: MentorComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'technologys', component: TechnologyComponent },
  { path: 'trainings', component: TrainingComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'addskill', component: AddSkillComponent },
  { path: 'addtechnology', component: AddTechnologyComponent },
  { path: 'addpayment', component: AddPaymentComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  { path: 'signin', component: SigninComponent },
  { path: '',pathMatch:'full', component: KlifeComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'paymentpage', component: PaymentpageComponent },
  { path: 'mentorlogin', component: MentorloginComponent },
  { path: 'mentordashboard', component: MentordashboardComponent },
  { path: 'userdashboard', component: UserdashboardComponent },
  { path: 'mentorprofile', component: MentorprofileComponent },
  { path: 'adminlogin', component:AdminloginComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'usersignup', component:UsersignupComponent },
  { path: 'mentorsignup', component:MentorsignupComponent },
  { path: 'deleteskill', component: SkilldeleteComponent },
  { path: 'searchtraining', component: SearchtrainingComponent },
  { path: 'searchresults', component: SearchresultsComponent },

  { path: 'mentorpayments', component: MentorpaymentComponent },
  { path: 'mentorskills', component: MentorskillComponent },
  { path: 'mentortechnologys', component: MentortechnologyComponent },
  { path: 'contactus', component:ContactusComponent },
  { path: 'aboutus', component:AboutusComponent },
  { path: 'deletepayment', component: DeletepaymentComponent },
  { path: 'completedtraining', component: CompletedtrainingComponent },
  { path: 'currenttraining', component: CurrenttrainingComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
