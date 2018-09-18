import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'ViewChild', icon: 'fa fa-fw fa-tv', routerLink: ['/view-child'] },
      { label: 'ContentChild', icon: 'fa fa-fw fa-window-restore', routerLink: ['/content-child'] },
      { label: 'Content', icon: 'fa fa-fw fa-play-circle', routerLink: ['/content'] },
      { label: 'Schedule', icon: 'fa fa-fw fa-calendar', routerLink: ['/schedule'] },
      { label: 'Settings', icon: 'fa fa-fw fa-gear', routerLink: ['/settings'] }
    ];
  }
}
