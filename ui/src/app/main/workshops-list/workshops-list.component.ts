import { Component, OnInit } from '@angular/core'
import { Event } from '../../models/event'
import { MatDialog } from '@angular/material'
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component'

@Component({
  selector: 'workshops-list',
  templateUrl: './workshops-list.component.html',
  styleUrls: ['./workshops-list.component.scss']
})
export class WorkshopsListComponent implements OnInit {
  viewDate: Date = new Date()

  events: Event[] = [
    {
      start: new Date(),
      end: new Date(),
      title: 'A one day event',
      color: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      description: 'Today we will be talking about go and elixir ...'
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date, events: Event[] }): void {
    if (events.length === 1) {
      const event = events[0]
      this.openModel(event)
    } else if (events.length > 1) {
      // TODO: Figure out how to handle multiple events in a single day
      console.log('Multiple events per day not supported yet')
    }
  }

  private openModel(event: Event): void {
    this.dialog.open(WorkshopDetailsComponent, {
      width: '500px',
      height: '500px',
      data: {title: event.title, description: event.description}
    })
  }

}
