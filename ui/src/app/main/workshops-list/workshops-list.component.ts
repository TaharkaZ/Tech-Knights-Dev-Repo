import { Component, OnInit } from '@angular/core'
import { Event } from '../../models/event'
import { MatDialog } from '@angular/material'
import { WorkshopDetailsComponent } from './workshop-details/workshop-details.component'
import { addWeeks, subWeeks } from 'date-fns'

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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros est. ' +
        'Quisque pulvinar orci ex, quis finibus lectus sagittis nec. ' +
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Nullam blandit neque eget justo maximus suscipit. Quisque malesuada in sem sit amet lobortis. ' +
        'Donec sit amet arcu ut lacus dignissim aliquet. Sed maximus eleifend hendrerit. ' +
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      start: subWeeks(new Date(), 1),
      end: subWeeks(new Date(), 1),
      title: 'An old event',
      color: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros est. ' +
        'Quisque pulvinar orci ex, quis finibus lectus sagittis nec. ' +
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Nullam blandit neque eget justo maximus suscipit. Quisque malesuada in sem sit amet lobortis. ' +
        'Donec sit amet arcu ut lacus dignissim aliquet. Sed maximus eleifend hendrerit. ' +
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      start: addWeeks(new Date(), 1),
      end: addWeeks(new Date(), 1),
      title: 'Webscraping with python and beautifulsoup',
      color: {
        primary: '#1e90ff',
        secondary: '#d1e8ff'
      },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in eros est. ' +
        'Quisque pulvinar orci ex, quis finibus lectus sagittis nec. ' +
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ' +
        'Quisque auctor lacinia ante nec ullamcorper. Ut viverra dui quis turpis tincidunt consectetur. ' +
        'Nullam blandit neque eget justo maximus suscipit. Quisque malesuada in sem sit amet lobortis. ' +
        'Donec sit amet arcu ut lacus dignissim aliquet. Sed maximus eleifend hendrerit. ' +
        'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
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
