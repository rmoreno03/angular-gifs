import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  template: `
  <h5>Buscar:</h5>
  <input type="text"
         class="form-control"
         placeholder="Buscar GIFs..."
         (keyup.enter)="searchTag()"
         #txtTagInput>
  `
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput') txtTagInput: any;
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag(){
    const newTag = this.txtTagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = '';
  }
}
