import { Component, OnInit } from '@angular/core';
import { HackerStateService } from '../../store/services/hacker-state.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  constructor (private hackerStateService: HackerStateService) {

  }

  hackerProfileForm: FormGroup;
  display = 'none';
  bindEditbox = '';
  ngOnInit() {
    this.hackerProfileForm = new FormGroup({
      'teamName': new FormControl('', Validators.required),
      'title': new FormControl('', Validators.required),
      'technology': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
    });
    }
    onSubmit() {
      console.log(this.hackerProfileForm);
      this.hackerStateService.postAnIdea(this.hackerProfileForm.value);
    }
    clear() {
      this.hackerProfileForm.reset();
    }
    openModal() {
      this.display = 'block';
      this.bindEditbox = this.hackerProfileForm.value.description;
      console.log(this.bindEditbox);
      // this.hackerProfileFormPreview = this.hackerProfileForm;
    }
    onCloseModal() {
      this.display = 'none';
    }
   }
