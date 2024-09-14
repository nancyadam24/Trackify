import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.css']
})
export class RecordTableComponent {
  @Input() records: any[] = [];
  displayedColumns: string[] = ['serialNumber', 'fullName', 'issueDate', 'isApproved'];
}
