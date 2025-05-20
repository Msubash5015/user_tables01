import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  // userSearch: any[] = [];
  apiUrl = 'https://zil-test.s3.us-east-1.amazonaws.com/json-data.json';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.users = data;
      console.log(this.users, 'this.users');
    });
    // this.search();
  }
  searchTerms = {
    name: '',
    company: '',
    designation: '',
  };
  get filteredUsers(): any[] {
    return this.users.filter((user) => {
      return (
        user.name
          ?.toLowerCase()
          .includes(this.searchTerms.name.toLowerCase()) &&
        user.company?.name
          ?.toLowerCase()
          .includes(this.searchTerms.company.toLowerCase()) &&
        user.company?.designation
          ?.toLowerCase()
          .includes(this.searchTerms.designation.toLowerCase())
      );
    });
  }
  // search(arr: any) {
  //   this.users.filter((item: any) => {
  //     console.log(item, 'item123');
  //   });
  // }
}
