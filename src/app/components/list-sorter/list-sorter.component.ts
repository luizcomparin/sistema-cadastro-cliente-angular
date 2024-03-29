import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { OrderEnum } from '../../types/paginationTypes/order.enum';
import { OrderByColumnEnum } from '../../types/paginationTypes/order-by-column.enum';
import { PaginationService } from '../../services/pagination.service';

interface EmittedEventType {
    orderByColumn: OrderByColumnEnum,
    order: OrderEnum,
}

@Component({
    selector: 'app-list-sorter',
    templateUrl: './list-sorter.component.html',
    styleUrls: ['./list-sorter.component.scss']
})
export class ListSorterComponent {

    OrderEnum = OrderEnum
    PrimeIcons = PrimeIcons
    OrderByColumnEnum = OrderByColumnEnum

    constructor(
        private paginationService: PaginationService,
    ) { }

    @Output() sorter_OnSort: EventEmitter<EmittedEventType> = new EventEmitter();
    orderByColumn = this.paginationService.getLastPaginationOptionsUsedSig().orderByColumn!
    order = this.paginationService.getLastPaginationOptionsUsedSig().order!

    emitirEvento() {
        this.sorter_OnSort.emit({
            orderByColumn: this.orderByColumn,
            order: this.order,
        })
    }
}
