import { Component } from '@angular/core';
import { CrudService } from '../../shared/crud.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrl: './studentdata.component.css'
})
export class StudentdataComponent {
  constructor (private crud:CrudService) {}

  studentsData : any

  fetchData () {
    this.crud.getData().subscribe((stu)=>{
      this.studentsData = stu
    })
  }
 //component lifecycle method
  ngOnInit () {
    this.fetchData()
  }

  deleteRecord (id:number) {
    if(confirm('Are You Sure ?')){
      this.crud.deleteStudents(id).subscribe(()=> this.studentsData = this.studentsData.filter((s:any)=>s.id !== id))
      //above code is used for getting updated data of studentlist comp
    }
  }
}
