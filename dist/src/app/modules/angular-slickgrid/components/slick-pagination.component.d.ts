import { OnInit, AfterViewInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { SortService } from './../services/sort.service';
import { TranslateService } from '@ngx-translate/core';
import { GridOption } from './../models';
export declare class SlickPaginationComponent implements AfterViewInit, OnInit {
    private filterService;
    private sortService;
    private translate;
    private _gridPaginationOptions;
    gridPaginationOptions: GridOption;
    grid: any;
    dataFrom: number;
    dataTo: number;
    itemsPerPage: number;
    pageCount: number;
    pageNumber: number;
    totalItems: number;
    paginationCallback: Function;
    paginationPageSizes: number[];
    fromToParams: any;
    constructor(filterService: FilterService, sortService: SortService, translate: TranslateService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ceil(number: number): number;
    changeToFirstPage(event: any): void;
    changeToLastPage(event: any): void;
    changeToNextPage(event: any): void;
    changeToPreviousPage(event: any): void;
    onChangeItemPerPage(event: any): void;
    refreshPagination(isPageNumberReset?: boolean): void;
    onPageChanged(event?: Event, pageNumber?: number): Promise<void>;
    recalculateFromToIndexes(): void;
}