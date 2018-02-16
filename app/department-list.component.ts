import {Component,OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component ({
    selector: 'departemet-list',
    template: `<h3>Department List</h3>
        <ul class = "item">
            <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor = "let department of departments" > 
                <span class = "badge"> {{department.id}}</span>{{department.name}}
            </li>
        </ul>

    `
})
export class DepartmentListComponent implements OnInit{ 
    private selectedId;
    constructor(private router: Router, private route: ActivatedRoute){}
    departments = [
        {"id": 1, "name": "Angular"},
        {"id": 2, "name": "JavaScript"},
        {"id": 3, "name": "ReactJS"},
        {"id": 4, "name": "Bootstrap"},
        {"id": 5, "name": "Html/CSS"},
        {"id": 6, "name": "jQuery"}
    ]

    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.selectedId = id;
        })
    }
    onSelect(department) {
        this.router.navigate(['/departments', department.id]);
    }
    isSelected(department) { 
        return department.id === this.selectedId; 
    }
    
}