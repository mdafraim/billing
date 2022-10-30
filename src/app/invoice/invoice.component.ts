import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';

interface DataItem {
  _id: string;
  invoice_id: string;
  invoice_to: string;
  amount: string;
  created_on: string;
  last_date: string;
  status: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  public listOfData: DataItem[] = [];
  public keys: [] = [];
  constructor(private http: HttpClient, private message: NzMessageService) {}
  ngOnInit() {
    this.getCustomerDetails();
  }
  listOfColumns: ColumnItem[] = [
    {
      name: 'Invoice Id',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.invoice_id.localeCompare(b.invoice_id),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Invoice To',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.invoice_to.localeCompare(b.invoice_to),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Amount',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.amount.localeCompare(b.amount),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Created On',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.created_on.localeCompare(b.created_on),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Last Date',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.last_date.localeCompare(b.last_date),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Status',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.status.length - b.status.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (status: string, item: DataItem) =>
        item.status.indexOf(status) !== -1,
    }
  ];

  getCustomerDetails() {
    this.http.get('http://localhost:3000/api/invoices').subscribe(
      (res: any) => {
        let data: any = Object.keys(res[0]);
        data.pop();
        data.shift();
        this.keys = data;
        this.listOfData = res;
      },
      (error: any) => {
        this.message.create('error', error.error);
        console.log(error.error);
      }
    );
  }
  delete(id: string) {
    console.log(id);
    this.http.delete('http://localhost:3000/api/invoices/' + id).subscribe(
      (res: any) => {
        this.getCustomerDetails();
        this.message.create('success', res.message);
      },
      (error: any) => {
        this.message.create('error', error.error);
        console.log(error.error);
      }
    );
  }
}
