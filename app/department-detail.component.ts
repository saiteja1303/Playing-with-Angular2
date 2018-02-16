import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component ({
    interpolation: ["!!","!!"],




    template: `<h3>You Selected with id = !!departmentID!!</h3>
                <a (click)="goPrevious()"> Previous   </a>
                <a (click)="goNext()" >Next </a> <br><br>
                <a (click)="goBack()"> Back</a>
        `
       
   
})
export class DepartmentDetailComponent implements OnInit{

    private departmentID;
    constructor(private route: ActivatedRoute, private router: Router){}

    /*ngOnInit(){
        let id = this.route.snapshot.params['id'];
            this.departmentID = id;
    }*/
    ngOnInit(){
        this.route.params.subscribe((params: Params) => {
            let id = parseInt(params['id']);
            this.departmentID = id;
        })
    }
    
    goPrevious() {
        let previousId = this.departmentID - 1;
        this.router.navigate(['/departments', previousId]);
    }
    goNext() {
        let nextId = this.departmentID + 1;
        this.router.navigate(['/departments', nextId]);
    }

    goBack(){
        let SelectedId = this.departmentID? this.departmentID : null;
        this.router.navigate(['/departments', {id: SelectedId }]);
    }
 }