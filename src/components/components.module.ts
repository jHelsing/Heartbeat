import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { AddCommentComponent } from './add-comment/add-comment';

@NgModule({
  declarations: [PopoverComponent, AddCommentComponent],
  imports: [],
  exports: [PopoverComponent, AddCommentComponent],
})
export class ComponentsModule {}
