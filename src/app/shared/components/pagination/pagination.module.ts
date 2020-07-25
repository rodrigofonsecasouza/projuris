import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
    declarations: [PaginationComponent],
    exports: [PaginationComponent],
    imports: [CommonModule, NgHttpLoaderModule.forRoot()]
})
export class PaginationModule { }