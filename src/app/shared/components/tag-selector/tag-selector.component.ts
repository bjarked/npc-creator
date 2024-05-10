import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TagsService } from '../../../core/services/tags.service';

@Component({
  selector: 'app-tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.scss']
})
export class TagSelectorComponent {
  @Input() tags:string[] = [];
  @Output() tagsChange:EventEmitter<string[]>= new EventEmitter<string[]>();

  newtagName:string = "";
  constructor(public tagsService:TagsService) {

  }
  update() {
    this.tagsChange.emit(this.tags);
  }

  createNewTag() {
    if (this.newtagName != "") {
      this.tagsService.addNewTag(this.newtagName).then(() =>
        this.newtagName = ''
      );
    }
  }

  addTag(tag:string) {
    console.log(this.tags)
    if (!this.tags.includes(tag)){
      this.tags.push(tag);
      this.update();

    }
  }
  removeTag(tag:string) {
    this.tags = this.tags.filter(t => t!=tag);
    this.update();
  }

}
