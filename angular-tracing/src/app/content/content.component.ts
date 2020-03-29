import { Component, OnInit } from '@angular/core';
import { CommsService } from '../comms.service';
import { Comms } from '../comms';
import { TracerService } from '../tracer.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  commsData: Comms;
  constructor(
    private commsService: CommsService,
    private tracerService: TracerService
  ) {
    this.getData();
  }

  ngOnInit(): void {}

  onClick() {
    this.getData();
  }

  getData() {
    this.commsService.getData().subscribe(response => {
      this.commsData = response;
    });
  }
}
