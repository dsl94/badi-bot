import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private http: HttpClient,

  ) {}

  getAnswer(question: string) {
    return this.http.post("http://localhost:8000/ask", {question});
  }
}
