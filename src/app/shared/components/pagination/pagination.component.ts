import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pro-pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {

    @Input() itemsSize: number;
    @Output() changePage = new EventEmitter<any>(true);
    @Input() initialPage = 1;
    @Input() pageSize = 10;
    @Input() maxPages = 10;

    currentPage: number = 1;
    totalPages: number = 0;
    pages: number[] = [];

    ngOnInit() {
        if (this.itemsSize && this.itemsSize > 0) {
            this.setPage(this.initialPage);
        }
    }

    private setPage(page: number) {
        this.currentPage = page;
        this.totalPages = Math.ceil(this.itemsSize / this.pageSize);

        let startPage: number, endPage: number;

        if (this.totalPages <= this.maxPages) {
            startPage = 1;
            endPage = this.totalPages;
        } else {
            // total pages more than max so calculate start and end pages
            let maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
            let maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;
            if (this.currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = this.maxPages;
            } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
                // current page near the end
                startPage = this.totalPages - this.maxPages + 1;
                endPage = this.totalPages;
            } else {
                // current page somewhere in the middle
                startPage = this.currentPage - maxPagesBeforeCurrentPage;
                endPage = this.currentPage + maxPagesAfterCurrentPage;
            }
        }

        this.pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        this.changePage.emit({ offset: this.pageSize * (this.currentPage - 1), limit: this.pageSize });
    }

}
