import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: false,
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit() {
    if(!this.url)
      throw new Error('Attribute url is required');
  }

  onLoad(){
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}
