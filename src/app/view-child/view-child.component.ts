import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild(MessageComponent) msgViewChild: MessageComponent;
  @ViewChildren(MessageComponent) msgViewChildren : QueryList<MessageComponent>;

  messages: string[];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.messages = this.getMessage();
  }

  ngAfterViewInit() {
    console.log('Entering ngAfterViewInit');
    console.log(this.msgViewChild);
    console.log(this.msgViewChildren);
    this.msgViewChild.message = "Init Message";
    this.cd.detectChanges();
    console.log('Exiting ngAfterViewInit');
  }

  getMessage() {
    return [
      'Hello India',
      'Which team is winning Super Bowl? ',
      'Have you checked Ignite UI ?',
      'Take your broken heart and make it to the art'
    ];
  }

}
