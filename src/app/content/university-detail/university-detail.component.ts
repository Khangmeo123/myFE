import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
export class UniversityDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  univer = { 
    code:"QHI", 
    name: "Đại học Công Nghệ",
    website: "uet.vnu.edu.vn",
    address: "144 Xuân thủy Cầu Giấy Hà Nội" 
  }
  majors = [
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
    { id: "1",majorCode: "CN1",majorName: "Công nghệ thông tin", khoi:"A01" ,diemchuan:"25.5",note:"có note gì đâu" },
    { id: "2",majorCode: "DT1",majorName: "Điện tử viễn thông", khoi:"A01" ,diemchuan:"24",note:"có note gì đâu" },
    { id: "3",majorCode: "CN1",majorName: "Vật lý kĩ thuật", khoi:"A01" ,diemchuan:"22",note:"có note gì đâu" },
  ]
}
