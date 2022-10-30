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
  name: string;
  email: string;
  city: string;
  state: string;
  country: string;
  address: string;
  zip: string;
  phone: string;
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
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  public listOfData: DataItem[] = [];
  public keys: [] = [];
  constructor(private http: HttpClient, private message: NzMessageService) {}
  ngOnInit() {
    this.getCustomerDetails();
  }
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      // sortOrder: null,
      // sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      // sortDirections: ['ascend', 'descend', null],
      // filterMultiple: true,
      // listOfFilter: [
      //   { text: 'Joe', value: 'Joe' },
      //   { text: 'Jim', value: 'Jim', byDefault: true },
      // ],
      // filterFn: (list: string[], item: DataItem) =>
      //   list.some((name) => item.name.indexOf(name) !== -1),
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Email',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.email.localeCompare(b.email),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'City',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.city.localeCompare(b.city),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'State',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.state.localeCompare(b.state),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Country',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.country.localeCompare(b.country),
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true,
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (address: string, item: DataItem) =>
        item.address.indexOf(address) !== -1,
    },
    {
      name: 'Zip',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.zip.length - b.zip.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (zip: string, item: DataItem) => item.zip.indexOf(zip) !== -1,
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.phone.length - b.phone.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (phone: string, item: DataItem) =>
        item.phone.indexOf(phone) !== -1,
    },
  ];

  getCustomerDetails() {
    this.http.get('http://localhost:3000/api/customers').subscribe(
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
    this.http.delete('http://localhost:3000/api/customers/' + id).subscribe(
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
