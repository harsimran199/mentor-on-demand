import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Mentor } from '../models/mentor.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MentorsignupService {

  constructor(private http:HttpClient) {}

  private mentorUrl = 'http://localhost:8071/mentors';
  //private mentorUrl = '/api';

  public getmentors() {
    return this.http.get<Mentor[]>(this.mentorUrl);
  }

  public deleteMentor(mentor) {
    return this.http.delete(this.mentorUrl + "/"+ mentor.id);
  }

  public createMentor(mentor) {
    return this.http.post<Mentor>(this.mentorUrl, mentor);
  }
  public validate(email,password) {
    return this.http.get<Mentor>(this.mentorUrl + "/" + email + "/" + password);
  }


}
