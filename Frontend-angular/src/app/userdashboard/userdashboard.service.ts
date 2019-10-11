import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { Technology } from '../models/technology.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdashboardService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8071/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  private trainingUrl = 'http://localhost:8071/training';
  //private userUrl = '/api';
  private technologyUrl= 'http://localhost:8071/technologys';
  public getCompletedTrainings() {
    return this.http.get<Training[]>(this.trainingUrl);
  }
  public getTrainingsByDate(startDate, endDate)
  {
    return this.http.get<Training[]>(this.trainingUrl+"/findByStartDateBetween/"+startDate+"/"+endDate);
  }
  public getTechnology()
  {
    return this.http.get<Technology[]>(this.technologyUrl);
  }
public getTraining() {
    return this.http.get<Training[]>(this.trainingUrl);
  }
}
