import {Component, OnInit} from '@angular/core';
import {AnswerService} from "./answer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages = [];
  title = 'badi-bot';

  constructor(private service: AnswerService) {
  }
  public text = '';
  ngOnInit(): void {

  }

  send() {
    // @ts-ignore
    this.messages.push({
      position: 'left',
      text: this.text
    });

    setTimeout(() => {
      this.scroll();
    }, 500);
    this.service.getAnswer(this.text).subscribe(data => {
      this.append(data);

      setTimeout(() => {
        this.scroll();
      }, 500);
    });
    this.text = '';
  }

  append(data: any) {
    // @ts-ignore
    this.messages.push({
      position: 'right',
      text: data.answer
    });
  }

  scroll() {
    let mm = document.getElementById('porukice');
    // @ts-ignore
    mm.scrollTop = mm.scrollTopMax;
  }
}
