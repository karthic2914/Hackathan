import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor(private hackerStateService: HackerStateService, private modalService: BsModalService) {
  }

  private hackerProfileForm: FormGroup;
  private display = 'none';
  private bindEditbox = '';
  private responseMessage: string;
  private successMessage: string;
  private modalHeading: string;
  skillset = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'Java' },
    { id: 4, name: 'Testing' },
    { id: 5, name: 'JavaScript' }
  ];
  ngOnInit() {
    this.hackerProfileForm = new FormGroup({
      'teamName': new FormControl('', Validators.required),
      'title': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'technologyTags': new FormControl('', Validators.required)
    });
  }
  private onSubmit(template) {
    this.hackerStateService.postAnIdea(this.hackerProfileForm.value).then((data: any) => {
      this.clear();
    });
  }
  private modalClose(template) {
    this.modalService.hide(0);
  }

  private clear() {
     this.hackerProfileForm.reset();
  }
  private openModal() {
    this.display = 'block';
    this.bindEditbox = this.hackerProfileForm.value.description;
    console.log(this.bindEditbox);
  }
  private onCloseModal() {
    this.display = 'none';
  }
}
