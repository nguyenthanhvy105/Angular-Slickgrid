import { __awaiter, __values, __spread, __extends, __generator } from 'tslib';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import * as moment_ from 'moment-mini';
import { Injectable, Component, EventEmitter, Input, Output, ElementRef, Inject, NgModule } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';
import { TextEncoder } from 'text-encoding-utf-8';
import * as DOMPurify_ from 'dompurify';
import * as isequal_ from 'lodash.isequal';
import 'slickgrid/plugins/slick.cellrangedecorator';
import 'slickgrid/plugins/slick.cellrangeselector';
import 'slickgrid/plugins/slick.cellselectionmodel';
import 'jquery-ui-dist/jquery-ui';
import 'slickgrid/lib/jquery.event.drag-2.3.0';
import 'slickgrid/slick.core';
import 'slickgrid/slick.grid';
import 'slickgrid/slick.dataview';
import { CommonModule } from '@angular/common';

var CaseType = {
    camelCase: 0,
    pascalCase: 1,
    snakeCase: 2,
};
CaseType[CaseType.camelCase] = "camelCase";
CaseType[CaseType.pascalCase] = "pascalCase";
CaseType[CaseType.snakeCase] = "snakeCase";
var DelimiterType = {
    colon: ':',
    comma: ',',
    equalSign: '=',
    pipe: '|',
    semicolon: ';',
    space: ' ',
    tab: '\t',
    doubleColon: '::',
    doublePipe: '||',
    doubleSemicolon: ';;',
};
var ExtensionName = {
    autoTooltip: 'autoTooltip',
    cellExternalCopyManager: 'cellExternalCopyManager',
    checkboxSelector: 'checkboxSelector',
    columnPicker: 'columnPicker',
    draggableGrouping: 'draggableGrouping',
    groupItemMetaProvider: 'groupItemMetaProvider',
    gridMenu: 'gridMenu',
    headerButton: 'headerButton',
    headerMenu: 'headerMenu',
    noname: 'noname',
    rowMoveManager: 'rowMoveManager',
    rowSelection: 'rowSelection',
};
var FieldType = {
    unknown: 0,
    string: 1,
    boolean: 2,
    integer: 3,
    float: 4,
    number: 5,
    date: 6,
    dateIso: 7,
    dateUtc: 8,
    dateTime: 9,
    dateTimeIso: 10,
    dateTimeIsoAmPm: 11,
    dateTimeIsoAM_PM: 12,
    dateTimeShortIso: 13,
    dateUs: 14,
    dateUsShort: 15,
    dateTimeShortUs: 16,
    dateTimeUs: 17,
    dateTimeUsAmPm: 18,
    dateTimeUsAM_PM: 19,
    dateTimeUsShort: 20,
    dateTimeUsShortAmPm: 21,
    dateTimeUsShortAM_PM: 22,
};
FieldType[FieldType.unknown] = "unknown";
FieldType[FieldType.string] = "string";
FieldType[FieldType.boolean] = "boolean";
FieldType[FieldType.integer] = "integer";
FieldType[FieldType.float] = "float";
FieldType[FieldType.number] = "number";
FieldType[FieldType.date] = "date";
FieldType[FieldType.dateIso] = "dateIso";
FieldType[FieldType.dateUtc] = "dateUtc";
FieldType[FieldType.dateTime] = "dateTime";
FieldType[FieldType.dateTimeIso] = "dateTimeIso";
FieldType[FieldType.dateTimeIsoAmPm] = "dateTimeIsoAmPm";
FieldType[FieldType.dateTimeIsoAM_PM] = "dateTimeIsoAM_PM";
FieldType[FieldType.dateTimeShortIso] = "dateTimeShortIso";
FieldType[FieldType.dateUs] = "dateUs";
FieldType[FieldType.dateUsShort] = "dateUsShort";
FieldType[FieldType.dateTimeShortUs] = "dateTimeShortUs";
FieldType[FieldType.dateTimeUs] = "dateTimeUs";
FieldType[FieldType.dateTimeUsAmPm] = "dateTimeUsAmPm";
FieldType[FieldType.dateTimeUsAM_PM] = "dateTimeUsAM_PM";
FieldType[FieldType.dateTimeUsShort] = "dateTimeUsShort";
FieldType[FieldType.dateTimeUsShortAmPm] = "dateTimeUsShortAmPm";
FieldType[FieldType.dateTimeUsShortAM_PM] = "dateTimeUsShortAM_PM";
var FileType = {
    csv: 'csv',
    doc: 'doc',
    docx: 'docx',
    pdf: 'pdf',
    txt: 'txt',
    xls: 'xls',
    xlsx: 'xlsx',
};
var FilterMultiplePassType = {
    merge: 'merge',
    chain: 'chain',
};
var GridStateType = {
    columns: 'columns',
    filter: 'filter',
    pagination: 'pagination',
    sorter: 'sorter',
};
var KeyCode = {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    INSERT: 45,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    RIGHT: 39,
    TAB: 9,
    UP: 38,
};
KeyCode[KeyCode.BACKSPACE] = "BACKSPACE";
KeyCode[KeyCode.DELETE] = "DELETE";
KeyCode[KeyCode.DOWN] = "DOWN";
KeyCode[KeyCode.END] = "END";
KeyCode[KeyCode.ENTER] = "ENTER";
KeyCode[KeyCode.ESCAPE] = "ESCAPE";
KeyCode[KeyCode.HOME] = "HOME";
KeyCode[KeyCode.INSERT] = "INSERT";
KeyCode[KeyCode.LEFT] = "LEFT";
KeyCode[KeyCode.PAGE_DOWN] = "PAGE_DOWN";
KeyCode[KeyCode.PAGE_UP] = "PAGE_UP";
KeyCode[KeyCode.RIGHT] = "RIGHT";
KeyCode[KeyCode.TAB] = "TAB";
KeyCode[KeyCode.UP] = "UP";
var OperatorType = {
    empty: '',
    contains: 'Contains',
    notContains: 'Not_Contains',
    lessThan: 'LT',
    lessThanOrEqual: 'LE',
    greaterThan: 'GT',
    greaterThanOrEqual: 'GE',
    notEqual: 'NE',
    equal: 'EQ',
    endsWith: 'EndsWith',
    startsWith: 'StartsWith',
    in: 'IN',
    notIn: 'NOT_IN',
    inContains: 'IN_CONTAINS',
    notInContains: 'NOT_IN_CONTAINS',
};
var SortDirection = {
    asc: 'asc',
    ASC: 'ASC',
    desc: 'desc',
    DESC: 'DESC',
};
var SortDirectionNumber = {
    asc: 1,
    desc: -1,
    neutral: 0,
};
SortDirectionNumber[SortDirectionNumber.asc] = "asc";
SortDirectionNumber[SortDirectionNumber.desc] = "desc";
SortDirectionNumber[SortDirectionNumber.neutral] = "neutral";
var moment = moment_;
function addWhiteSpaces(nbSpaces) {
    var result = '';
    for (var i = 0; i < nbSpaces; i++) {
        result += ' ';
    }
    return result;
}
function htmlEncode(value) {
    return $('<div/>').text(value).html();
}
function htmlDecode(value) {
    return $('<div/>').html(value).text();
}
function htmlEntityDecode(input) {
    return input.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
}
function htmlEntityEncode(input) {
    var buf = [];
    for (var i = input.length - 1; i >= 0; i--) {
        buf.unshift(['&#', input[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('');
}
function arraysEqual(a, b, orderMatters) {
    if (orderMatters === void 0) { orderMatters = false; }
    if (a === b) {
        return true;
    }
    if (!a || !b) {
        return false;
    }
    if (a.length !== b.length) {
        return false;
    }
    if (!orderMatters) {
        a.sort();
        b.sort();
    }
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function castToPromise(input, fromServiceName) {
    if (fromServiceName === void 0) { fromServiceName = ''; }
    var promise = input;
    if (input instanceof Promise) {
        return input;
    }
    else if (input instanceof Observable) {
        promise = input.first().toPromise();
        if (!(promise instanceof Promise)) {
            promise = input.take(1).toPromise();
        }
        if (!(promise instanceof Promise)) {
            throw new Error("Something went wrong, Angular-Slickgrid " + fromServiceName + " is not able to convert the Observable into a Promise.\n        If you are using Angular HttpClient, you could try converting your http call to a Promise with \".toPromise()\"\n        for example::  this.http.post('graphql', { query: graphqlQuery }).toPromise()\n        ");
        }
    }
    return promise;
}
function findOrDefault(array, logic, defaultVal) {
    if (defaultVal === void 0) { defaultVal = {}; }
    return array.find(logic) || defaultVal;
}
function decimalFormatted(input, minDecimal, maxDecimal) {
    if (isNaN(+input)) {
        return input;
    }
    var minDec = (minDecimal === undefined) ? 2 : minDecimal;
    var maxDec = (maxDecimal === undefined) ? 2 : maxDecimal;
    var amount = String(Math.round(+input * Math.pow(10, maxDec)) / Math.pow(10, maxDec));
    if (amount.indexOf('.') < 0) {
        amount += '.';
    }
    while ((amount.length - amount.indexOf('.')) <= minDec) {
        amount += '0';
    }
    return amount;
}
function getDescendantProperty(obj, path) {
    return path.split('.').reduce(function (acc, part) { return acc && acc[part]; }, obj);
}
function getScrollBarWidth() {
    var $outer = $('<div>').css({ visibility: 'hidden', width: 100, overflow: 'scroll' }).appendTo('body');
    var widthWithScroll = $('<div>').css({ width: '100%' }).appendTo($outer).outerWidth();
    $outer.remove();
    return Math.ceil(100 - widthWithScroll);
}
function mapMomentDateFormatWithFieldType(fieldType) {
    var map;
    switch (fieldType) {
        case FieldType.dateTime:
        case FieldType.dateTimeIso:
            map = 'YYYY-MM-DD HH:mm:ss';
            break;
        case FieldType.dateTimeShortIso:
            map = 'YYYY-MM-DD HH:mm';
            break;
        case FieldType.dateTimeIsoAmPm:
            map = 'YYYY-MM-DD hh:mm:ss a';
            break;
        case FieldType.dateTimeIsoAM_PM:
            map = 'YYYY-MM-DD hh:mm:ss A';
            break;
        case FieldType.dateUs:
            map = 'MM/DD/YYYY';
            break;
        case FieldType.dateUsShort:
            map = 'M/D/YY';
            break;
        case FieldType.dateTimeUs:
            map = 'MM/DD/YYYY HH:mm:ss';
            break;
        case FieldType.dateTimeShortUs:
            map = 'MM/DD/YYYY HH:mm';
            break;
        case FieldType.dateTimeUsAmPm:
            map = 'MM/DD/YYYY hh:mm:ss a';
            break;
        case FieldType.dateTimeUsAM_PM:
            map = 'MM/DD/YYYY hh:mm:ss A';
            break;
        case FieldType.dateTimeUsShort:
            map = 'M/D/YY H:m:s';
            break;
        case FieldType.dateTimeUsShortAmPm:
            map = 'M/D/YY h:m:s a';
            break;
        case FieldType.dateUtc:
            map = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
            break;
        case FieldType.date:
        case FieldType.dateIso:
        default:
            map = 'YYYY-MM-DD';
            break;
    }
    return map;
}
function mapFlatpickrDateFormatWithFieldType(fieldType) {
    var map;
    switch (fieldType) {
        case FieldType.dateTime:
        case FieldType.dateTimeIso:
            map = 'Y-m-d H:i:S';
            break;
        case FieldType.dateTimeIsoAmPm:
            map = 'Y-m-d h:i:S K';
            break;
        case FieldType.dateTimeIsoAM_PM:
            map = 'Y-m-d h:i:S K';
            break;
        case FieldType.dateUs:
            map = 'm/d/Y';
            break;
        case FieldType.dateUsShort:
            map = 'm/d/y';
            break;
        case FieldType.dateTimeUs:
            map = 'm/d/Y H:i:S';
            break;
        case FieldType.dateTimeUsAmPm:
            map = 'm/d/Y h:i:S K';
            break;
        case FieldType.dateTimeUsAM_PM:
            map = 'm/d/Y h:i:s K';
            break;
        case FieldType.dateTimeUsShort:
            map = 'm/d/y H:i:s';
            break;
        case FieldType.dateTimeUsShortAmPm:
            map = 'm/d/y h:i:s K';
            break;
        case FieldType.dateUtc:
            map = 'Z';
            break;
        case FieldType.date:
        case FieldType.dateIso:
        default:
            map = 'Y-m-d';
            break;
    }
    return map;
}
function mapOperatorType(operator) {
    var map;
    switch (operator) {
        case '<':
            map = OperatorType.lessThan;
            break;
        case '<=':
            map = OperatorType.lessThanOrEqual;
            break;
        case '>':
            map = OperatorType.greaterThan;
            break;
        case '>=':
            map = OperatorType.greaterThanOrEqual;
            break;
        case '<>':
        case '!=':
        case 'neq':
        case 'NEQ':
            map = OperatorType.notEqual;
            break;
        case '*':
        case '.*':
        case 'startsWith':
            map = OperatorType.startsWith;
            break;
        case '*.':
        case 'endsWith':
            map = OperatorType.endsWith;
            break;
        case '=':
        case '==':
        case 'eq':
        case 'EQ':
            map = OperatorType.equal;
            break;
        case 'in':
        case 'IN':
            map = OperatorType.in;
            break;
        case 'notIn':
        case 'NIN':
        case 'NOT_IN':
            map = OperatorType.notIn;
            break;
        default:
            map = OperatorType.contains;
            break;
    }
    return map;
}
function mapOperatorByFieldType(fieldType) {
    var map;
    switch (fieldType) {
        case FieldType.string:
        case FieldType.unknown:
            map = OperatorType.contains;
            break;
        case FieldType.float:
        case FieldType.number:
        case FieldType.date:
        case FieldType.dateIso:
        case FieldType.date:
        case FieldType.dateUtc:
        case FieldType.dateTime:
        case FieldType.dateTimeIso:
        case FieldType.dateTimeIsoAmPm:
        case FieldType.dateTimeIsoAM_PM:
        case FieldType.dateUs:
        case FieldType.dateUsShort:
        case FieldType.dateTimeUs:
        case FieldType.dateTimeUsAmPm:
        case FieldType.dateTimeUsAM_PM:
        case FieldType.dateTimeUsShort:
        case FieldType.dateTimeUsShortAmPm:
        case FieldType.dateTimeUsShortAM_PM:
        default:
            map = OperatorType.equal;
            break;
    }
    return map;
}
function parseUtcDate(inputDateString, useUtc) {
    var date = null;
    if (/^[0-9\-\/]*$/.test(inputDateString)) {
        var dateString = decodeURIComponent(inputDateString);
        var dateMoment = moment(new Date(dateString));
        if (dateMoment.isValid() && dateMoment.year().toString().length === 4) {
            date = (useUtc) ? dateMoment.utc().format() : dateMoment.format();
        }
    }
    return date;
}
function sanitizeHtmlToText(htmlString) {
    var temp = document.createElement('div');
    temp.innerHTML = htmlString;
    return temp.textContent || temp.innerText;
}
function titleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|[\s+\-_\/])/g, function (match, offset) {
        if (/[\s+\-_\/]/.test(match)) {
            return '';
        }
        return offset === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}
function toKebabCase(str) {
    return toCamelCase(str).replace(/([A-Z])/g, '-$1').toLowerCase();
}
function uniqueArray(arr) {
    return arr.filter(function (item, index) {
        return arr.indexOf(item) >= index;
    });
}
function unsubscribeAllObservables(subscriptions) {
    if (Array.isArray(subscriptions)) {
        subscriptions.forEach(function (subscription) {
            if (subscription && subscription.unsubscribe) {
                subscription.unsubscribe();
            }
        });
        subscriptions = [];
    }
    return subscriptions;
}
var moment$1 = moment_;
function compareDates(value1, value2, format, sortDirection, strict) {
    var diff = 0;
    if (value1 === null || value1 === '' || !moment$1(value1, format, strict).isValid()) {
        diff = -1;
    }
    else if (value2 === null || value2 === '' || !moment$1(value2, format, strict).isValid()) {
        diff = 1;
    }
    else {
        var date1 = moment$1(value1, format, strict);
        var date2 = moment$1(value2, format, strict);
        diff = parseInt(date1.format('X'), 10) - parseInt(date2.format('X'), 10);
    }
    return sortDirection * (diff === 0 ? 0 : (diff > 0 ? 1 : -1));
}
var FORMAT = mapMomentDateFormatWithFieldType(FieldType.dateUsShort);
var dateUsShortSorter = function (value1, value2, sortDirection) {
    return compareDates(value1, value2, FORMAT, sortDirection, true);
};
var moment$2 = moment_;
var dateSorter = function (value1, value2, sortDirection) {
    return compareDates(value1, value2, moment$2.ISO_8601, sortDirection);
};
var FORMAT$1 = mapMomentDateFormatWithFieldType(FieldType.dateIso);
var dateIsoSorter = function (value1, value2, sortDirection) {
    return compareDates(value1, value2, FORMAT$1, sortDirection, true);
};
var FORMAT$2 = mapMomentDateFormatWithFieldType(FieldType.dateUs);
var dateUsSorter = function (value1, value2, sortDirection) {
    return compareDates(value1, value2, FORMAT$2, sortDirection, true);
};
var numericSorter = function (value1, value2, sortDirection) {
    var x = (isNaN(value1) || value1 === '' || value1 === null) ? -99e+10 : parseFloat(value1);
    var y = (isNaN(value2) || value2 === '' || value2 === null) ? -99e+10 : parseFloat(value2);
    return sortDirection * (x === y ? 0 : (x > y ? 1 : -1));
};
var stringSorter = function (value1, value2, sortDirection) {
    var position;
    if (value1 === null) {
        position = -1;
    }
    else if (value2 === null) {
        position = 1;
    }
    else if (value1 === value2) {
        position = 0;
    }
    else if (sortDirection) {
        position = value1 < value2 ? -1 : 1;
    }
    else if (!sortDirection) {
        position = value1 < value2 ? 1 : -1;
    }
    return sortDirection * position;
};
var Sorters = {
    date: dateSorter,
    dateIso: dateIsoSorter,
    dateUs: dateUsSorter,
    dateUsShort: dateUsShortSorter,
    numeric: numericSorter,
    string: stringSorter
};
function sortByFieldType(value1, value2, fieldType, sortDirection) {
    var sortResult = 0;
    switch (fieldType) {
        case FieldType.number:
            sortResult = Sorters.numeric(value1, value2, sortDirection);
            break;
        case FieldType.date:
            sortResult = Sorters.date(value1, value2, sortDirection);
            break;
        case FieldType.dateIso:
            sortResult = Sorters.dateIso(value1, value2, sortDirection);
            break;
        case FieldType.dateUs:
            sortResult = Sorters.dateUs(value1, value2, sortDirection);
            break;
        case FieldType.dateUsShort:
            sortResult = Sorters.dateUsShort(value1, value2, sortDirection);
            break;
        default:
            sortResult = Sorters.string(value1, value2, sortDirection);
            break;
    }
    return sortResult;
}
var CollectionService = /** @class */ (function () {
    function CollectionService(translate) {
        this.translate = translate;
    }
    CollectionService.prototype.filterCollection = function (collection, filterByOptions, filterResultBy) {
        if (filterResultBy === void 0) { filterResultBy = FilterMultiplePassType.chain; }
        var filteredCollection = [];
        if (Array.isArray(filterByOptions)) {
            filteredCollection = (filterResultBy === FilterMultiplePassType.merge) ? [] : collection;
            try {
                for (var filterByOptions_1 = __values(filterByOptions), filterByOptions_1_1 = filterByOptions_1.next(); !filterByOptions_1_1.done; filterByOptions_1_1 = filterByOptions_1.next()) {
                    var filter = filterByOptions_1_1.value;
                    if (filterResultBy === FilterMultiplePassType.merge) {
                        var filteredPass = this.singleFilterCollection(collection, filter);
                        filteredCollection = uniqueArray(__spread(filteredCollection, filteredPass));
                    }
                    else {
                        filteredCollection = this.singleFilterCollection(filteredCollection, filter);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (filterByOptions_1_1 && !filterByOptions_1_1.done && (_a = filterByOptions_1.return)) _a.call(filterByOptions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            filteredCollection = this.singleFilterCollection(collection, filterByOptions);
        }
        return filteredCollection;
        var e_1, _a;
    };
    CollectionService.prototype.singleFilterCollection = function (collection, filterBy) {
        var filteredCollection = [];
        if (filterBy) {
            var property_1 = filterBy.property || '';
            var operator = filterBy.operator || OperatorType.equal;
            var value_1 = typeof filterBy.value === 'undefined' ? '' : filterBy.value;
            switch (operator) {
                case OperatorType.equal:
                    filteredCollection = collection.filter(function (item) { return item[property_1] === value_1; });
                    break;
                case OperatorType.contains:
                    filteredCollection = collection.filter(function (item) { return item[property_1].toString().indexOf(value_1.toString()) !== -1; });
                    break;
                case OperatorType.notContains:
                    filteredCollection = collection.filter(function (item) { return item[property_1].toString().indexOf(value_1.toString()) === -1; });
                    break;
                case OperatorType.notEqual:
                default:
                    filteredCollection = collection.filter(function (item) { return item[property_1] !== value_1; });
            }
        }
        return filteredCollection;
    };
    CollectionService.prototype.sortCollection = function (collection, sortByOptions, enableTranslateLabel) {
        var _this = this;
        var sortedCollection = [];
        if (sortByOptions) {
            if (Array.isArray(sortByOptions)) {
                sortedCollection = collection.sort(function (dataRow1, dataRow2) {
                    for (var i = 0, l = sortByOptions.length; i < l; i++) {
                        var sortBy = sortByOptions[i];
                        if (sortBy) {
                            var sortDirection = sortBy.sortDesc ? SortDirectionNumber.desc : SortDirectionNumber.asc;
                            var propertyName = sortBy.property || '';
                            var fieldType = sortBy.fieldType || FieldType.string;
                            var value1 = (enableTranslateLabel) ? _this.translate.instant(dataRow1[propertyName] || ' ') : dataRow1[propertyName];
                            var value2 = (enableTranslateLabel) ? _this.translate.instant(dataRow2[propertyName] || ' ') : dataRow2[propertyName];
                            var sortResult = sortByFieldType(value1, value2, fieldType, sortDirection);
                            if (sortResult !== SortDirectionNumber.neutral) {
                                return sortResult;
                            }
                        }
                    }
                    return SortDirectionNumber.neutral;
                });
            }
            else {
                var propertyName_1 = sortByOptions.property || '';
                var sortDirection_1 = sortByOptions.sortDesc ? SortDirectionNumber.desc : SortDirectionNumber.asc;
                var fieldType_1 = sortByOptions.fieldType || FieldType.string;
                sortedCollection = collection.sort(function (dataRow1, dataRow2) {
                    var value1 = (enableTranslateLabel) ? _this.translate.instant(dataRow1[propertyName_1] || ' ') : dataRow1[propertyName_1];
                    var value2 = (enableTranslateLabel) ? _this.translate.instant(dataRow2[propertyName_1] || ' ') : dataRow2[propertyName_1];
                    var sortResult = sortByFieldType(value1, value2, fieldType_1, sortDirection_1);
                    if (sortResult !== SortDirectionNumber.neutral) {
                        return sortResult;
                    }
                    return SortDirectionNumber.neutral;
                });
            }
        }
        return sortedCollection;
    };
    return CollectionService;
}());
CollectionService.decorators = [
    { type: Injectable },
];
CollectionService.ctorParameters = function () { return [
    { type: TranslateService, },
]; };
var ExportService = /** @class */ (function () {
    function ExportService(translate) {
        this.translate = translate;
        this._lineCarriageReturn = '\n';
        this._hasGroupedItems = false;
        this.onGridBeforeExportToFile = new Subject();
        this.onGridAfterExportToFile = new Subject();
    }
    Object.defineProperty(ExportService.prototype, "datasetIdName", {
        get: function () {
            return this._gridOptions && this._gridOptions.datasetIdPropertyName || 'id';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExportService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    ExportService.prototype.init = function (grid, dataView) {
        this._grid = grid;
        this._dataView = dataView;
    };
    ExportService.prototype.exportToFile = function (options) {
        var _this = this;
        this.onGridBeforeExportToFile.next(true);
        this._exportOptions = $.extend(true, {}, this._gridOptions.exportOptions, options);
        var dataOutput = this.getDataOutput();
        setTimeout(function () {
            var downloadOptions = {
                filename: _this._exportOptions.filename + "." + _this._exportOptions.format,
                csvContent: dataOutput,
                format: _this._exportOptions.format,
                useUtf8WithBom: _this._exportOptions.useUtf8WithBom
            };
            _this.startDownloadFile(downloadOptions);
            _this.onGridAfterExportToFile.next({ options: downloadOptions });
        }, 0);
    };
    ExportService.prototype.getDataOutput = function () {
        var _this = this;
        var columns = this._grid.getColumns() || [];
        var delimiter = this._exportOptions.delimiter || '';
        var format = this._exportOptions.format || '';
        var groupByColumnHeader = this._exportOptions.groupingColumnHeaderTitle || this.translate.instant('GROUP_BY');
        this._exportQuoteWrapper = (format === FileType.csv) ? '"' : '';
        var outputDataString = '';
        var grouping = this._dataView.getGrouping();
        if (grouping && Array.isArray(grouping) && grouping.length > 0) {
            this._hasGroupedItems = true;
            outputDataString += "" + groupByColumnHeader + delimiter;
        }
        else {
            this._hasGroupedItems = false;
        }
        this._columnHeaders = this.getColumnHeaders(columns) || [];
        if (this._columnHeaders && Array.isArray(this._columnHeaders) && this._columnHeaders.length > 0) {
            var outputHeaderTitles = this._columnHeaders.map(function (header) {
                return _this._exportQuoteWrapper + header.title + _this._exportQuoteWrapper;
            });
            outputDataString += (outputHeaderTitles.join(delimiter) + this._lineCarriageReturn);
        }
        outputDataString += this.getAllGridRowData(columns, this._lineCarriageReturn);
        return outputDataString;
    };
    ExportService.prototype.getAllGridRowData = function (columns, lineCarriageReturn) {
        var outputDataStrings = [];
        var lineCount = this._dataView.getLength();
        for (var rowNumber = 0; rowNumber < lineCount; rowNumber++) {
            var itemObj = this._dataView.getItem(rowNumber);
            if (itemObj != null) {
                if (itemObj[this.datasetIdName] != null) {
                    outputDataStrings.push(this.readRegularRowData(columns, rowNumber, itemObj));
                }
                else if (this._hasGroupedItems && itemObj.__groupTotals === undefined) {
                    outputDataStrings.push(this.readGroupedTitleRow(itemObj));
                }
                else if (itemObj.__groupTotals) {
                    outputDataStrings.push(this.readGroupedTotalRow(columns, itemObj));
                }
            }
        }
        return outputDataStrings.join(this._lineCarriageReturn);
    };
    ExportService.prototype.getColumnHeaders = function (columns) {
        var _this = this;
        if (!columns || !Array.isArray(columns) || columns.length === 0) {
            return null;
        }
        var columnHeaders = [];
        columns.forEach(function (columnDef) {
            var fieldName = (columnDef.headerKey) ? _this.translate.instant(columnDef.headerKey) : columnDef.name;
            var skippedField = columnDef.excludeFromExport || false;
            if ((columnDef.width === undefined || columnDef.width > 0) && !skippedField) {
                columnHeaders.push({
                    key: columnDef.field || columnDef.id,
                    title: fieldName
                });
            }
        });
        return columnHeaders;
    };
    ExportService.prototype.readRegularRowData = function (columns, row, itemObj) {
        var idx = 0;
        var rowOutputStrings = [];
        var delimiter = this._exportOptions.delimiter;
        var format = this._exportOptions.format;
        var exportQuoteWrapper = this._exportQuoteWrapper || '';
        for (var col = 0, ln = columns.length; col < ln; col++) {
            var columnDef = columns[col];
            var fieldId = columnDef.field || columnDef.id || '';
            if (columnDef.excludeFromExport) {
                continue;
            }
            if (this._hasGroupedItems && idx === 0) {
                rowOutputStrings.push("\"\"");
            }
            var isEvaluatingFormatter = (columnDef.exportWithFormatter !== undefined) ? columnDef.exportWithFormatter : this._exportOptions.exportWithFormatter;
            var exportCustomFormatter = (columnDef.exportCustomFormatter !== undefined) ? columnDef.exportCustomFormatter : undefined;
            var itemData = '';
            if (exportCustomFormatter) {
                itemData = exportCustomFormatter(row, col, itemObj[fieldId], columnDef, itemObj, this._grid);
            }
            else if (isEvaluatingFormatter && !!columnDef.formatter) {
                itemData = columnDef.formatter(row, col, itemObj[fieldId], columnDef, itemObj, this._grid);
            }
            else {
                itemData = (itemObj[fieldId] === null || itemObj[fieldId] === undefined) ? '' : itemObj[fieldId];
            }
            if (columnDef.sanitizeDataExport || this._exportOptions.sanitizeDataExport) {
                itemData = sanitizeHtmlToText(itemData);
            }
            if (format === FileType.csv && itemData) {
                itemData = itemData.toString().replace(/"/gi, "\"\"");
            }
            var keepAsStringWrapper = (columnDef && columnDef.exportCsvForceToKeepAsString) ? '=' : '';
            rowOutputStrings.push(keepAsStringWrapper + exportQuoteWrapper + itemData + exportQuoteWrapper);
            idx++;
        }
        return rowOutputStrings.join(delimiter);
    };
    ExportService.prototype.readGroupedTitleRow = function (itemObj) {
        var groupName = sanitizeHtmlToText(itemObj.title);
        var exportQuoteWrapper = this._exportQuoteWrapper || '';
        var format = this._exportOptions.format;
        groupName = addWhiteSpaces(5 * itemObj.level) + groupName;
        if (format === FileType.csv) {
            groupName = groupName.toString().replace(/"/gi, "\"\"");
        }
        return exportQuoteWrapper + ' ' + groupName + exportQuoteWrapper;
    };
    ExportService.prototype.readGroupedTotalRow = function (columns, itemObj) {
        var _this = this;
        var delimiter = this._exportOptions.delimiter;
        var format = this._exportOptions.format;
        var groupingAggregatorRowText = this._exportOptions.groupingAggregatorRowText || '';
        var exportQuoteWrapper = this._exportQuoteWrapper || '';
        var outputStrings = ["" + exportQuoteWrapper + groupingAggregatorRowText + exportQuoteWrapper];
        columns.forEach(function (columnDef) {
            var itemData = '';
            if (columnDef.groupTotalsFormatter) {
                itemData = columnDef.groupTotalsFormatter(itemObj, columnDef);
            }
            if (columnDef.sanitizeDataExport || _this._exportOptions.sanitizeDataExport) {
                itemData = sanitizeHtmlToText(itemData);
            }
            if (format === FileType.csv) {
                itemData = itemData.toString().replace(/"/gi, "\"\"");
            }
            outputStrings.push(exportQuoteWrapper + itemData + exportQuoteWrapper);
        });
        return outputStrings.join(delimiter);
    };
    ExportService.prototype.startDownloadFile = function (options) {
        if (navigator.appName === 'Microsoft Internet Explorer') {
            throw new Error('Microsoft Internet Explorer 6 to 10 do not support javascript export to CSV. Please upgrade your browser.');
        }
        var mimeType = (options.format === FileType.csv) ? 'text/csv' : 'text/plain';
        var csvContent = htmlEntityDecode(options.csvContent);
        var outputData;
        if (options.format === FileType.csv) {
            outputData = new TextEncoder('utf-8').encode(csvContent);
        }
        else {
            outputData = csvContent;
        }
        var blob = new Blob([options.useUtf8WithBom ? '\uFEFF' : '', outputData], {
            type: mimeType + ";charset=utf-8;"
        });
        if (typeof navigator.msSaveOrOpenBlob === 'function') {
            navigator.msSaveOrOpenBlob(blob, options.filename);
        }
        else {
            var link = document.createElement('a');
            var csvUrl = URL.createObjectURL(blob);
            link.textContent = 'download';
            link.href = csvUrl;
            link.setAttribute('download', options.filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    return ExportService;
}());
ExportService.decorators = [
    { type: Injectable },
];
ExportService.ctorParameters = function () { return [
    { type: TranslateService, },
]; };
var Constants = /** @class */ (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.TEXT_CANCEL = 'Cancel';
Constants.TEXT_CLEAR_ALL_FILTERS = 'Clear All Filters';
Constants.TEXT_CLEAR_ALL_SORTING = 'Clear All Sorting';
Constants.TEXT_COLUMNS = 'Columns';
Constants.TEXT_COMMANDS = 'Commands';
Constants.TEXT_EXPORT_IN_CSV_FORMAT = 'Export in CSV format';
Constants.TEXT_EXPORT_IN_TEXT_FORMAT = 'Export in Text format (Tab delimited)';
Constants.TEXT_FORCE_FIT_COLUMNS = 'Force fit columns';
Constants.TEXT_HIDE_COLUMN = 'Hide Column';
Constants.TEXT_REFRESH_DATASET = 'Refresh Dataset';
Constants.TEXT_SAVE = 'Save';
Constants.TEXT_SYNCHRONOUS_RESIZE = 'Synchronous resize';
Constants.TEXT_SORT_ASCENDING = 'Sort Ascending';
Constants.TEXT_SORT_DESCENDING = 'Sort Descending';
Constants.TEXT_TOGGLE_FILTER_ROW = 'Toggle Filter Row';
Constants.TEXT_TOGGLE_PRE_HEADER_ROW = 'Toggle Pre-Header Row';
Constants.VALIDATION_EDITOR_VALID_NUMBER = 'Please enter a valid number';
Constants.VALIDATION_EDITOR_VALID_INTEGER = 'Please enter a valid integer number';
Constants.VALIDATION_EDITOR_NUMBER_BETWEEN = 'Please enter a valid number between {{minValue}} and {{maxValue}}';
Constants.VALIDATION_EDITOR_NUMBER_MAX = 'Please enter a valid number that is lower than {{maxValue}}';
Constants.VALIDATION_EDITOR_NUMBER_MIN = 'Please enter a valid number that is greater than {{minValue}}';
Constants.VALIDATION_EDITOR_DECIMAL_BETWEEN = 'Please enter a valid number with a maximum of {{maxDecimal}} decimals';
var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    Object.defineProperty(SharedService.prototype, "allColumns", {
        get: function () {
            return this._allColumns;
        },
        set: function (allColumns) {
            this._allColumns = allColumns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "columnDefinitions", {
        get: function () {
            return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "dataView", {
        get: function () {
            return this._dataView;
        },
        set: function (dataView) {
            this._dataView = dataView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "grid", {
        get: function () {
            return this._grid;
        },
        set: function (grid) {
            this._grid = grid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        set: function (gridOptions) {
            this.gridOptions = gridOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "groupItemMetadataProvider", {
        get: function () {
            return this._groupItemMetadataProvider;
        },
        set: function (groupItemMetadataProvider) {
            this._groupItemMetadataProvider = groupItemMetadataProvider;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedService.prototype, "visibleColumns", {
        get: function () {
            return this._visibleColumns;
        },
        set: function (visibleColumns) {
            this._visibleColumns = visibleColumns;
        },
        enumerable: true,
        configurable: true
    });
    return SharedService;
}());
var ExtensionUtility = /** @class */ (function () {
    function ExtensionUtility(sharedService, translate) {
        this.sharedService = sharedService;
        this.translate = translate;
    }
    ExtensionUtility.prototype.arrayRemoveItemByIndex = function (array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    };
    ExtensionUtility.prototype.loadExtensionDynamically = function (extensionName) {
        try {
            switch (extensionName) {
                case ExtensionName.autoTooltip:
                    require('slickgrid/plugins/slick.autotooltips');
                    break;
                case ExtensionName.cellExternalCopyManager:
                    require('slickgrid/plugins/slick.cellexternalcopymanager');
                    break;
                case ExtensionName.checkboxSelector:
                    require('slickgrid/plugins/slick.checkboxselectcolumn');
                    break;
                case ExtensionName.columnPicker:
                    require('slickgrid/controls/slick.columnpicker');
                    break;
                case ExtensionName.draggableGrouping:
                    require('slickgrid/plugins/slick.draggablegrouping.js');
                    break;
                case ExtensionName.gridMenu:
                    require('slickgrid/controls/slick.gridmenu');
                    break;
                case ExtensionName.groupItemMetaProvider:
                    require('slickgrid/slick.groupitemmetadataprovider');
                    break;
                case ExtensionName.headerButton:
                    require('slickgrid/plugins/slick.headerbuttons');
                    break;
                case ExtensionName.headerMenu:
                    require('slickgrid/plugins/slick.headermenu');
                    break;
                case ExtensionName.rowSelection:
                    require('slickgrid/plugins/slick.rowselectionmodel');
                    break;
                case ExtensionName.rowMoveManager:
                    require('slickgrid/plugins/slick.rowmovemanager.js');
                    break;
            }
        }
        catch (e) {
        }
    };
    ExtensionUtility.prototype.getPickerTitleOutputString = function (propName, pickerName) {
        var output = '';
        var picker = this.sharedService.gridOptions && this.sharedService.gridOptions[pickerName] || {};
        var enableTranslate = this.sharedService.gridOptions && this.sharedService.gridOptions.enableTranslate || false;
        var title = picker && picker[propName];
        var titleKey = picker && picker[propName + "Key"];
        if (titleKey) {
            output = this.translate.instant(titleKey || ' ');
        }
        else {
            switch (propName) {
                case 'customTitle':
                    output = title || (enableTranslate ? this.translate.instant('COMMANDS') : Constants.TEXT_COMMANDS);
                    break;
                case 'columnTitle':
                    output = title || (enableTranslate ? this.translate.instant('COLUMNS') : Constants.TEXT_COLUMNS);
                    break;
                case 'forceFitTitle':
                    output = title || (enableTranslate ? this.translate.instant('FORCE_FIT_COLUMNS') : Constants.TEXT_FORCE_FIT_COLUMNS);
                    break;
                case 'syncResizeTitle':
                    output = title || (enableTranslate ? this.translate.instant('SYNCHRONOUS_RESIZE') : Constants.TEXT_SYNCHRONOUS_RESIZE);
                    break;
                default:
                    output = title;
                    break;
            }
        }
        return output;
    };
    ExtensionUtility.prototype.sortItems = function (items, propertyName) {
        items.sort(function (itemA, itemB) {
            if (itemA && itemB && itemA.hasOwnProperty(propertyName) && itemB.hasOwnProperty(propertyName)) {
                return itemA[propertyName] - itemB[propertyName];
            }
            return 0;
        });
    };
    ExtensionUtility.prototype.translateItems = function (items, inputKey, outputKey) {
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (item[inputKey]) {
                    item[outputKey] = this.translate.instant(item[inputKey]);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var e_2, _a;
    };
    return ExtensionUtility;
}());
ExtensionUtility.decorators = [
    { type: Injectable },
];
ExtensionUtility.ctorParameters = function () { return [
    { type: SharedService, },
    { type: TranslateService, },
]; };
var AutoTooltipExtension = /** @class */ (function () {
    function AutoTooltipExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
    }
    AutoTooltipExtension.prototype.dispose = function () {
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    AutoTooltipExtension.prototype.register = function () {
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.autoTooltip);
            this._extension = new Slick.AutoTooltips(this.sharedService.gridOptions.autoTooltipOptions || {});
            this.sharedService.grid.registerPlugin(this._extension);
            return this._extension;
        }
        return null;
    };
    return AutoTooltipExtension;
}());
AutoTooltipExtension.decorators = [
    { type: Injectable },
];
AutoTooltipExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var CellExternalCopyManagerExtension = /** @class */ (function () {
    function CellExternalCopyManagerExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
    }
    CellExternalCopyManagerExtension.prototype.dispose = function () {
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    CellExternalCopyManagerExtension.prototype.register = function () {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.cellExternalCopyManager);
            this.createUndoRedoBuffer();
            this.hookUndoShortcutKey();
            var newRowIds_1 = 0;
            var pluginOptions = {
                clipboardCommandHandler: function (editCommand) {
                    _this._undoRedoBuffer.queueAndExecuteCommand.call(_this._undoRedoBuffer, editCommand);
                },
                dataItemColumnValueExtractor: function (item, columnDef) {
                    if (!_this.sharedService.gridOptions.editable || !columnDef.editor) {
                        var isEvaluatingFormatter = (columnDef.exportWithFormatter !== undefined) ? columnDef.exportWithFormatter : (_this.sharedService.gridOptions.exportOptions && _this.sharedService.gridOptions.exportOptions.exportWithFormatter);
                        if (columnDef.formatter && isEvaluatingFormatter) {
                            var formattedOutput = columnDef.formatter(0, 0, item[columnDef.field], columnDef, item, _this.sharedService.grid);
                            if (columnDef.sanitizeDataExport || (_this.sharedService.gridOptions.exportOptions && _this.sharedService.gridOptions.exportOptions.sanitizeDataExport)) {
                                return sanitizeHtmlToText(formattedOutput);
                            }
                            return formattedOutput;
                        }
                    }
                    return null;
                },
                readOnlyMode: false,
                includeHeaderWhenCopying: false,
                newRowCreator: function (count) {
                    for (var i = 0; i < count; i++) {
                        var item = {
                            id: 'newRow_' + newRowIds_1++
                        };
                        _this.sharedService.grid.getData().addItem(item);
                    }
                }
            };
            this.sharedService.grid.setSelectionModel(new Slick.CellSelectionModel());
            this._extension = new Slick.CellExternalCopyManager(pluginOptions);
            this.sharedService.grid.registerPlugin(this._extension);
            return this._extension;
        }
        return null;
    };
    CellExternalCopyManagerExtension.prototype.createUndoRedoBuffer = function () {
        var commandQueue = [];
        var commandCtr = 0;
        this._undoRedoBuffer = {
            queueAndExecuteCommand: function (editCommand) {
                commandQueue[commandCtr] = editCommand;
                commandCtr++;
                editCommand.execute();
            },
            undo: function () {
                if (commandCtr === 0) {
                    return;
                }
                commandCtr--;
                var command = commandQueue[commandCtr];
                if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                    command.undo();
                }
            },
            redo: function () {
                if (commandCtr >= commandQueue.length) {
                    return;
                }
                var command = commandQueue[commandCtr];
                commandCtr++;
                if (command && Slick.GlobalEditorLock.cancelCurrentEdit()) {
                    command.execute();
                }
            }
        };
    };
    CellExternalCopyManagerExtension.prototype.hookUndoShortcutKey = function () {
        var _this = this;
        $(document).keydown(function (e) {
            if (e.which === 90 && (e.ctrlKey || e.metaKey)) {
                if (e.shiftKey) {
                    _this._undoRedoBuffer.redo();
                }
                else {
                    _this._undoRedoBuffer.undo();
                }
            }
        });
    };
    return CellExternalCopyManagerExtension;
}());
CellExternalCopyManagerExtension.decorators = [
    { type: Injectable },
];
CellExternalCopyManagerExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var CheckboxSelectorExtension = /** @class */ (function () {
    function CheckboxSelectorExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
    }
    CheckboxSelectorExtension.prototype.dispose = function () {
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    CheckboxSelectorExtension.prototype.create = function (columnDefinitions, gridOptions) {
        if (columnDefinitions && gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.checkboxSelector);
            if (!this._extension) {
                this._extension = new Slick.CheckboxSelectColumn(gridOptions.checkboxSelector || {});
            }
            var selectionColumn = this._extension.getColumnDefinition();
            selectionColumn.excludeFromExport = true;
            selectionColumn.excludeFromQuery = true;
            selectionColumn.excludeFromHeaderMenu = true;
            columnDefinitions.unshift(selectionColumn);
            return this._extension;
        }
        return null;
    };
    CheckboxSelectorExtension.prototype.register = function (rowSelectionPlugin) {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.sharedService.grid.registerPlugin(this._extension);
            if (!rowSelectionPlugin || !this.sharedService.grid.getSelectionModel()) {
                this.extensionUtility.loadExtensionDynamically(ExtensionName.rowSelection);
                rowSelectionPlugin = new Slick.RowSelectionModel(this.sharedService.gridOptions.rowSelectionOptions || {});
                this.sharedService.grid.setSelectionModel(rowSelectionPlugin);
            }
            if (this.sharedService.gridOptions.preselectedRows && rowSelectionPlugin && this.sharedService.grid.getSelectionModel()) {
                setTimeout(function () { return _this._extension.selectRows(_this.sharedService.gridOptions.preselectedRows); }, 0);
            }
            return rowSelectionPlugin;
        }
        return null;
    };
    return CheckboxSelectorExtension;
}());
CheckboxSelectorExtension.decorators = [
    { type: Injectable },
];
CheckboxSelectorExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var ColumnPickerExtension = /** @class */ (function () {
    function ColumnPickerExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
        this._eventHandler = new Slick.EventHandler();
    }
    ColumnPickerExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    ColumnPickerExtension.prototype.register = function () {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.columnPicker);
            var columnTitle = this.extensionUtility.getPickerTitleOutputString('columnTitle', 'columnPicker');
            var forceFitTitle = this.extensionUtility.getPickerTitleOutputString('forceFitTitle', 'columnPicker');
            var syncResizeTitle = this.extensionUtility.getPickerTitleOutputString('syncResizeTitle', 'columnPicker');
            this.sharedService.gridOptions.columnPicker = this.sharedService.gridOptions.columnPicker || {};
            this.sharedService.gridOptions.columnPicker.columnTitle = this.sharedService.gridOptions.columnPicker.columnTitle || columnTitle;
            this.sharedService.gridOptions.columnPicker.forceFitTitle = this.sharedService.gridOptions.columnPicker.forceFitTitle || forceFitTitle;
            this.sharedService.gridOptions.columnPicker.syncResizeTitle = this.sharedService.gridOptions.columnPicker.syncResizeTitle || syncResizeTitle;
            this._extension = new Slick.Controls.ColumnPicker(this.sharedService.columnDefinitions, this.sharedService.grid, this.sharedService.gridOptions);
            if (this.sharedService.grid && this.sharedService.gridOptions.enableColumnPicker) {
                this._eventHandler.subscribe(this._extension.onColumnsChanged, function (e, args) {
                    if (_this.sharedService.gridOptions.columnPicker && typeof _this.sharedService.gridOptions.columnPicker.onColumnsChanged === 'function') {
                        _this.sharedService.gridOptions.columnPicker.onColumnsChanged(e, args);
                    }
                });
            }
            return this._extension;
        }
    };
    ColumnPickerExtension.prototype.translateColumnPicker = function () {
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            if (this.sharedService.gridOptions.columnPicker) {
                this.emptyColumnPickerTitles();
                this.sharedService.gridOptions.columnPicker.columnTitle = this.extensionUtility.getPickerTitleOutputString('columnTitle', 'columnPicker');
                this.sharedService.gridOptions.columnPicker.forceFitTitle = this.extensionUtility.getPickerTitleOutputString('forceFitTitle', 'columnPicker');
                this.sharedService.gridOptions.columnPicker.syncResizeTitle = this.extensionUtility.getPickerTitleOutputString('syncResizeTitle', 'columnPicker');
            }
            this.extensionUtility.translateItems(this.sharedService.allColumns, 'headerKey', 'name');
            if (this._extension.init) {
                this._extension.init(this.sharedService.grid);
            }
        }
    };
    ColumnPickerExtension.prototype.emptyColumnPickerTitles = function () {
        if (this.sharedService && this.sharedService.gridOptions && this.sharedService.gridOptions.columnPicker) {
            this.sharedService.gridOptions.columnPicker.columnTitle = '';
            this.sharedService.gridOptions.columnPicker.forceFitTitle = '';
            this.sharedService.gridOptions.columnPicker.syncResizeTitle = '';
        }
    };
    return ColumnPickerExtension;
}());
ColumnPickerExtension.decorators = [
    { type: Injectable },
];
ColumnPickerExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var DraggableGroupingExtension = /** @class */ (function () {
    function DraggableGroupingExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
        this._eventHandler = new Slick.EventHandler();
    }
    DraggableGroupingExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    DraggableGroupingExtension.prototype.create = function (gridOptions) {
        this.extensionUtility.loadExtensionDynamically(ExtensionName.draggableGrouping);
        if (!this._extension && gridOptions) {
            this._extension = new Slick.DraggableGrouping(gridOptions.draggableGrouping || {});
        }
        return this._extension;
    };
    DraggableGroupingExtension.prototype.register = function () {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.sharedService.grid.registerPlugin(this._extension);
            if (this.sharedService.grid && this.sharedService.gridOptions.draggableGrouping) {
                if (this.sharedService.gridOptions.draggableGrouping.onExtensionRegistered) {
                    this.sharedService.gridOptions.draggableGrouping.onExtensionRegistered(this._extension);
                }
                this._eventHandler.subscribe(this._extension.onGroupChanged, function (e, args) {
                    if (_this.sharedService.gridOptions.draggableGrouping && typeof _this.sharedService.gridOptions.draggableGrouping.onGroupChanged === 'function') {
                        _this.sharedService.gridOptions.draggableGrouping.onGroupChanged(e, args);
                    }
                });
            }
            return this._extension;
        }
        return null;
    };
    return DraggableGroupingExtension;
}());
DraggableGroupingExtension.decorators = [
    { type: Injectable },
];
DraggableGroupingExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
function parseBoolean(str) {
    return /(true|1)/i.test(str + '');
}
var booleanFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    return parseBoolean(options.cellValue) === parseBoolean(searchTerm);
};
var testFilterCondition = function (operator, value1, value2) {
    switch (operator) {
        case '<':
        case 'LT': return (value1 < value2);
        case '<=':
        case 'LE': return (value1 <= value2);
        case '>':
        case 'GT': return (value1 > value2);
        case '>=':
        case 'GE': return (value1 >= value2);
        case '!=':
        case '<>':
        case 'NE': return (value1 !== value2);
        case '=':
        case '==':
        case 'EQ': return (value1 === value2);
        case 'IN': return ((value2 && value2.includes) ? (value2.includes(value1)) : false);
        case 'NIN':
        case 'NOT_IN':
            return ((value2 && value2.includes) ? (!value2.includes(value1)) : false);
        case 'IN_CONTAINS':
            if (value2 && Array.isArray(value2) && value2.findIndex) {
                return ((value2.findIndex(function (val) { return value1.indexOf(val) > -1; })) > -1);
            }
            return false;
        case 'NIN_CONTAINS':
        case 'NOT_IN_CONTAINS':
            if (value2 && Array.isArray(value2) && value2.findIndex) {
                return !((value2.findIndex(function (val) { return value1.indexOf(val) > -1; })) > -1);
            }
            return false;
    }
    return true;
};
var moment$3 = moment_;
var dateFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    var filterSearchType = options.filterSearchType || FieldType.dateIso;
    var searchDateFormat = mapMomentDateFormatWithFieldType(filterSearchType);
    if (searchTerm === null || searchTerm === '' || !moment$3(options.cellValue, moment$3.ISO_8601).isValid() || !moment$3(searchTerm, searchDateFormat, true).isValid()) {
        return false;
    }
    var dateCell = moment$3(options.cellValue);
    var dateSearch = moment$3(searchTerm);
    return testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
};
var moment$4 = moment_;
var FORMAT$3 = mapMomentDateFormatWithFieldType(FieldType.dateIso);
var dateIsoFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    if (searchTerm === null || searchTerm === '' || !moment$4(options.cellValue, FORMAT$3, true).isValid() || !moment$4(searchTerm, FORMAT$3, true).isValid()) {
        return false;
    }
    var dateCell = moment$4(options.cellValue, FORMAT$3, true);
    var dateSearch = moment$4(searchTerm, FORMAT$3, true);
    return testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
};
var moment$5 = moment_;
var FORMAT$4 = mapMomentDateFormatWithFieldType(FieldType.dateUs);
var dateUsFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    if (searchTerm === null || searchTerm === '' || !moment$5(options.cellValue, FORMAT$4, true).isValid() || !moment$5(searchTerm, FORMAT$4, true).isValid()) {
        return false;
    }
    var dateCell = moment$5(options.cellValue, FORMAT$4, true);
    var dateSearch = moment$5(searchTerm, FORMAT$4, true);
    return testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
};
var moment$6 = moment_;
var FORMAT$5 = mapMomentDateFormatWithFieldType(FieldType.dateUsShort);
var dateUsShortFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    if (searchTerm === null || searchTerm === '' || !moment$6(options.cellValue, FORMAT$5, true).isValid() || !moment$6(searchTerm, FORMAT$5, true).isValid()) {
        return false;
    }
    var dateCell = moment$6(options.cellValue, FORMAT$5, true);
    var dateSearch = moment$6(searchTerm, FORMAT$5, true);
    return testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
};
var moment$7 = moment_;
var dateUtcFilterCondition = function (options) {
    var searchTerm = Array.isArray(options.searchTerms) && options.searchTerms[0] || '';
    var searchDateFormat = mapMomentDateFormatWithFieldType(options.filterSearchType || options.fieldType);
    if (!moment$7(options.cellValue, moment$7.ISO_8601).isValid() || !moment$7(searchTerm, searchDateFormat, true).isValid()) {
        return false;
    }
    var dateCell = moment$7(options.cellValue, moment$7.ISO_8601, true);
    var dateSearch = moment$7(searchTerm, searchDateFormat, true);
    return testFilterCondition(options.operator || '==', parseInt(dateCell.format('X'), 10), parseInt(dateSearch.format('X'), 10));
};
var collectionSearchFilterCondition = function (options) {
    var cellValue = options.cellValue + '';
    return testFilterCondition(options.operator || 'IN', cellValue, options.searchTerms || []);
};
var numberFilterCondition = function (options) {
    var cellValue = parseFloat(options.cellValue);
    var searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0]) || 0;
    if (typeof searchTerm === 'string') {
        searchTerm = parseFloat(searchTerm);
    }
    if (!searchTerm && (!options.operator || options.operator === '')) {
        return true;
    }
    return testFilterCondition(options.operator || '==', cellValue, searchTerm);
};
var stringFilterCondition = function (options) {
    options.cellValue = (options.cellValue === undefined || options.cellValue === null) ? '' : options.cellValue.toString();
    var cellValue = options.cellValue.toLowerCase();
    var searchTerm = (Array.isArray(options.searchTerms) && options.searchTerms[0]) || '';
    if (typeof searchTerm === 'string') {
        searchTerm = searchTerm.toLowerCase();
    }
    if (options.operator === '*' || options.operator === OperatorType.endsWith) {
        return cellValue.endsWith(searchTerm);
    }
    else if ((options.operator === '' && options.cellValueLastChar === '*') || options.operator === OperatorType.startsWith) {
        return cellValue.startsWith(searchTerm);
    }
    else if (options.operator === '') {
        return cellValue.includes(searchTerm);
    }
    return testFilterCondition(options.operator || '==', cellValue, searchTerm);
};
var executeMappedCondition = function (options) {
    var operator = options.operator && options.operator.toUpperCase();
    if (options && options.operator && (operator === 'IN' || operator === 'NIN' || operator === 'IN_CONTAINS' || operator === 'NIN_CONTAINS')) {
        return collectionSearchFilterCondition(options);
    }
    switch (options.fieldType) {
        case FieldType.boolean:
            return booleanFilterCondition(options);
        case FieldType.date:
            return dateFilterCondition(options);
        case FieldType.dateUtc:
            return dateUtcFilterCondition(options);
        case FieldType.dateIso:
            return dateIsoFilterCondition(options);
        case FieldType.dateUs:
        case FieldType.dateTimeUs:
            return dateUsFilterCondition(options);
        case FieldType.dateUsShort:
        case FieldType.dateTimeUsShort:
            return dateUsShortFilterCondition(options);
        case FieldType.number:
            return numberFilterCondition(options);
        case FieldType.string:
        default:
            return stringFilterCondition(options);
    }
};
var FilterConditions = {
    executeMappedCondition: executeMappedCondition,
    booleanFilter: booleanFilterCondition,
    collectionSearchFilter: collectionSearchFilterCondition,
    dateFilter: dateFilterCondition,
    dateIsoFilter: dateIsoFilterCondition,
    dateUtcFilter: dateUtcFilterCondition,
    dateUsFilter: dateUsFilterCondition,
    dateUsShortFilter: dateUsShortFilterCondition,
    numberFilter: numberFilterCondition,
    stringFilter: stringFilterCondition,
    testFilter: testFilterCondition
};
require('flatpickr');
var CompoundDateFilter = /** @class */ (function () {
    function CompoundDateFilter(translate) {
        this.translate = translate;
        this._clearFilterTriggered = false;
    }
    Object.defineProperty(CompoundDateFilter.prototype, "gridOptions", {
        get: function () {
            return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundDateFilter.prototype, "operator", {
        get: function () {
            return this._operator || OperatorType.empty;
        },
        set: function (op) {
            this._operator = op;
        },
        enumerable: true,
        configurable: true
    });
    CompoundDateFilter.prototype.init = function (args) {
        var _this = this;
        if (args) {
            this.grid = args.grid;
            this.callback = args.callback;
            this.columnDef = args.columnDef;
            this.operator = args.operator || '';
            this.searchTerms = args.searchTerms || [];
            var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
            this.$filterElm = this.createDomElement(searchTerm);
            this.$filterInputElm.keyup(function (e) {
                _this.onTriggerEvent(e);
            });
            this.$selectOperatorElm.change(function (e) {
                _this.onTriggerEvent(e);
            });
        }
    };
    CompoundDateFilter.prototype.clear = function () {
        if (this.flatInstance && this.$selectOperatorElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            this.$selectOperatorElm.val(0);
            this.flatInstance.clear();
        }
    };
    CompoundDateFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off('keyup').remove();
        }
    };
    CompoundDateFilter.prototype.setValues = function (values) {
        if (values && Array.isArray(values)) {
            this.flatInstance.setDate(values[0]);
        }
    };
    CompoundDateFilter.prototype.buildDatePickerInput = function (searchTerm) {
        var _this = this;
        var inputFormat = mapFlatpickrDateFormatWithFieldType(this.columnDef.type || FieldType.dateIso);
        var outputFormat = mapFlatpickrDateFormatWithFieldType(this.columnDef.outputType || this.columnDef.type || FieldType.dateUtc);
        var currentLocale = this.translate.currentLang || 'en';
        if (currentLocale.length > 2) {
            currentLocale = currentLocale.substring(0, 2);
        }
        var pickerOptions = {
            defaultDate: searchTerm || '',
            altInput: true,
            altFormat: outputFormat,
            dateFormat: inputFormat,
            wrap: true,
            closeOnSelect: true,
            locale: (currentLocale !== 'en') ? this.loadFlatpickrLocale(currentLocale) : 'en',
            onChange: function (selectedDates, dateStr, instance) {
                _this._currentValue = dateStr;
                if (pickerOptions.enableTime) {
                    _this.onTriggerEvent(new CustomEvent('keyup'));
                }
                else {
                    _this.onTriggerEvent(undefined);
                }
            }
        };
        if (outputFormat && (outputFormat === 'Z' || outputFormat.toLowerCase().includes('h'))) {
            pickerOptions.enableTime = true;
        }
        var placeholder = (this.gridOptions) ? (this.gridOptions.defaultFilterPlaceholder || '') : '';
        var $filterInputElm = $("<div class=\"flatpickr\"><input type=\"text\" class=\"form-control\" data-input placeholder=\"" + placeholder + "\"></div>");
        this.flatInstance = ($filterInputElm[0] && typeof $filterInputElm[0].flatpickr === 'function') ? $filterInputElm[0].flatpickr(pickerOptions) : null;
        return $filterInputElm;
    };
    CompoundDateFilter.prototype.buildSelectOperatorHtmlString = function () {
        var optionValues = this.getOptionValues();
        var optionValueString = '';
        optionValues.forEach(function (option) {
            optionValueString += "<option value=\"" + option.operator + "\" title=\"" + option.description + "\">" + option.operator + "</option>";
        });
        return "<select class=\"form-control\">" + optionValueString + "</select>";
    };
    CompoundDateFilter.prototype.getOptionValues = function () {
        return [
            { operator: (''), description: '' },
            { operator: ('='), description: '' },
            { operator: ('<'), description: '' },
            { operator: ('<='), description: '' },
            { operator: ('>'), description: '' },
            { operator: ('>='), description: '' },
            { operator: ('<>'), description: '' }
        ];
    };
    CompoundDateFilter.prototype.createDomElement = function (searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        this.$selectOperatorElm = $(this.buildSelectOperatorHtmlString());
        this.$filterInputElm = this.buildDatePickerInput(searchTerm);
        var $filterContainerElm = $("<div class=\"form-group search-filter filter-" + fieldId + "\"></div>");
        var $containerInputGroup = $("<div class=\"input-group flatpickr\"></div>");
        var $operatorInputGroupAddon = $("<div class=\"input-group-addon input-group-prepend operator\"></div>");
        $operatorInputGroupAddon.append(this.$selectOperatorElm);
        $containerInputGroup.append($operatorInputGroupAddon);
        $containerInputGroup.append(this.$filterInputElm);
        $filterContainerElm.append($containerInputGroup);
        $filterContainerElm.attr('id', "filter-" + fieldId);
        this.$filterInputElm.data('columnId', fieldId);
        if (this.operator) {
            this.$selectOperatorElm.val(this.operator);
        }
        if (searchTerm) {
            $filterContainerElm.addClass('filled');
            this._currentValue = (searchTerm);
        }
        if ($filterContainerElm && typeof $filterContainerElm.appendTo === 'function') {
            $filterContainerElm.appendTo($headerElm);
        }
        return $filterContainerElm;
    };
    CompoundDateFilter.prototype.loadFlatpickrLocale = function (locale) {
        if (this.gridOptions && this.gridOptions.params && this.gridOptions.params.flapickrLocale) {
            return this.gridOptions.params.flapickrLocale;
        }
        else if (locale !== 'en') {
            var localeDefault = require("flatpickr/dist/l10n/" + locale + ".js").default;
            return (localeDefault && localeDefault[locale]) ? localeDefault[locale] : 'en';
        }
        return 'en';
    };
    CompoundDateFilter.prototype.onTriggerEvent = function (e) {
        if (this._clearFilterTriggered) {
            this.callback(e, { columnDef: this.columnDef, clearFilterTriggered: this._clearFilterTriggered });
            this._clearFilterTriggered = false;
        }
        else {
            var selectedOperator = this.$selectOperatorElm.find('option:selected').text();
            (this._currentValue) ? this.$filterElm.addClass('filled') : this.$filterElm.removeClass('filled');
            this.callback(e, { columnDef: this.columnDef, searchTerms: (this._currentValue ? [this._currentValue] : null), operator: selectedOperator || '' });
        }
    };
    CompoundDateFilter.prototype.hide = function () {
        if (this.flatInstance && typeof this.flatInstance.close === 'function') {
            this.flatInstance.close();
        }
    };
    CompoundDateFilter.prototype.show = function () {
        if (this.flatInstance && typeof this.flatInstance.open === 'function') {
            this.flatInstance.open();
        }
    };
    return CompoundDateFilter;
}());
var CompoundInputFilter = /** @class */ (function () {
    function CompoundInputFilter(translate) {
        this.translate = translate;
        this._clearFilterTriggered = false;
        this._inputType = 'text';
    }
    Object.defineProperty(CompoundInputFilter.prototype, "gridOptions", {
        get: function () {
            return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundInputFilter.prototype, "inputType", {
        get: function () {
            return this._inputType;
        },
        set: function (type) {
            this._inputType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundInputFilter.prototype, "operator", {
        get: function () {
            return this._operator || OperatorType.empty;
        },
        set: function (op) {
            this._operator = op;
        },
        enumerable: true,
        configurable: true
    });
    CompoundInputFilter.prototype.init = function (args) {
        var _this = this;
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.operator = args.operator;
        this.searchTerms = args.searchTerms || [];
        var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
        this.$filterElm = this.createDomElement(searchTerm);
        this.$filterInputElm.on('keyup input change', function (e) {
            _this.onTriggerEvent(e);
        });
        this.$selectOperatorElm.on('change', function (e) {
            _this.onTriggerEvent(e);
        });
    };
    CompoundInputFilter.prototype.clear = function () {
        if (this.$filterElm && this.$selectOperatorElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            this.$selectOperatorElm.val(0);
            this.$filterInputElm.val('');
            this.onTriggerEvent(null);
        }
    };
    CompoundInputFilter.prototype.destroy = function () {
        if (this.$filterElm && this.$selectOperatorElm) {
            this.$filterElm.off('keyup input change').remove();
            this.$selectOperatorElm.off('change');
        }
    };
    CompoundInputFilter.prototype.setValues = function (values) {
        if (values && Array.isArray(values)) {
            this.$filterElm.val(values[0]);
        }
    };
    CompoundInputFilter.prototype.buildInputHtmlString = function () {
        var placeholder = (this.gridOptions) ? (this.gridOptions.defaultFilterPlaceholder || '') : '';
        return "<input class=\"form-control\" type=\"" + (this._inputType || 'text') + "\" placeholder=\"" + placeholder + "\" />";
    };
    CompoundInputFilter.prototype.buildSelectOperatorHtmlString = function () {
        var optionValues = this.getOptionValues();
        var optionValueString = '';
        optionValues.forEach(function (option) {
            optionValueString += "<option value=\"" + option.operator + "\" title=\"" + option.description + "\">" + option.operator + "</option>";
        });
        return "<select class=\"form-control\">" + optionValueString + "</select>";
    };
    CompoundInputFilter.prototype.getOptionValues = function () {
        var type = (this.columnDef.type && this.columnDef.type) ? this.columnDef.type : FieldType.string;
        var optionValues = [];
        switch (type) {
            case FieldType.string:
                optionValues = [
                    { operator: (''), description: this.translate.instant('CONTAINS') },
                    { operator: ('='), description: this.translate.instant('EQUALS') },
                    { operator: ('a*'), description: this.translate.instant('STARTS_WITH') },
                    { operator: ('*z'), description: this.translate.instant('ENDS_WITH') },
                ];
                break;
            default:
                optionValues = [
                    { operator: (''), description: this.translate.instant('CONTAINS') },
                    { operator: ('='), description: '' },
                    { operator: ('<'), description: '' },
                    { operator: ('<='), description: '' },
                    { operator: ('>'), description: '' },
                    { operator: ('>='), description: '' },
                    { operator: ('<>'), description: '' }
                ];
                break;
        }
        return optionValues;
    };
    CompoundInputFilter.prototype.createDomElement = function (searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        this.$selectOperatorElm = $(this.buildSelectOperatorHtmlString());
        this.$filterInputElm = $(this.buildInputHtmlString());
        var $filterContainerElm = $("<div class=\"form-group search-filter filter-" + fieldId + "\"></div>");
        var $containerInputGroup = $("<div class=\"input-group\"></div>");
        var $operatorInputGroupAddon = $("<div class=\"input-group-addon input-group-prepend operator\"></div>");
        $operatorInputGroupAddon.append(this.$selectOperatorElm);
        $containerInputGroup.append($operatorInputGroupAddon);
        $containerInputGroup.append(this.$filterInputElm);
        $filterContainerElm.append($containerInputGroup);
        $filterContainerElm.attr('id', "filter-" + fieldId);
        this.$filterInputElm.val(searchTerm);
        this.$filterInputElm.data('columnId', fieldId);
        if (this.operator) {
            this.$selectOperatorElm.val(this.operator);
        }
        if (searchTerm) {
            $filterContainerElm.addClass('filled');
        }
        if ($filterContainerElm && typeof $filterContainerElm.appendTo === 'function') {
            $filterContainerElm.appendTo($headerElm);
        }
        return $filterContainerElm;
    };
    CompoundInputFilter.prototype.onTriggerEvent = function (e) {
        if (this._clearFilterTriggered) {
            this.callback(e, { columnDef: this.columnDef, clearFilterTriggered: this._clearFilterTriggered });
            this._clearFilterTriggered = false;
        }
        else {
            var selectedOperator = this.$selectOperatorElm.find('option:selected').text();
            var value = this.$filterInputElm.val();
            (value !== null && value !== undefined && value !== '') ? this.$filterElm.addClass('filled') : this.$filterElm.removeClass('filled');
            this.callback(e, { columnDef: this.columnDef, searchTerms: (value ? [value] : null), operator: selectedOperator || '' });
        }
    };
    return CompoundInputFilter;
}());
var CompoundInputNumberFilter = /** @class */ (function (_super) {
    __extends(CompoundInputNumberFilter, _super);
    function CompoundInputNumberFilter(translate) {
        var _this = _super.call(this, translate) || this;
        _this.translate = translate;
        _this.inputType = 'number';
        return _this;
    }
    return CompoundInputNumberFilter;
}(CompoundInputFilter));
var CompoundInputPasswordFilter = /** @class */ (function (_super) {
    __extends(CompoundInputPasswordFilter, _super);
    function CompoundInputPasswordFilter(translate) {
        var _this = _super.call(this, translate) || this;
        _this.translate = translate;
        _this.inputType = 'password';
        return _this;
    }
    return CompoundInputPasswordFilter;
}(CompoundInputFilter));
var DEFAULT_MIN_VALUE = 0;
var DEFAULT_MAX_VALUE = 100;
var DEFAULT_STEP = 1;
var CompoundSliderFilter = /** @class */ (function () {
    function CompoundSliderFilter() {
        this._clearFilterTriggered = false;
    }
    Object.defineProperty(CompoundSliderFilter.prototype, "gridOptions", {
        get: function () {
            return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundSliderFilter.prototype, "filterParams", {
        get: function () {
            return this.columnDef && this.columnDef.filter && this.columnDef.filter.params || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundSliderFilter.prototype, "filterProperties", {
        get: function () {
            return this.columnDef && this.columnDef.filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompoundSliderFilter.prototype, "operator", {
        get: function () {
            return this._operator || OperatorType.empty;
        },
        set: function (op) {
            this._operator = op;
        },
        enumerable: true,
        configurable: true
    });
    CompoundSliderFilter.prototype.init = function (args) {
        var _this = this;
        if (args) {
            this.grid = args.grid;
            this.callback = args.callback;
            this.columnDef = args.columnDef;
            this.operator = args.operator || '';
            this.searchTerms = args.searchTerms || [];
            this._elementRangeInputId = "rangeInput_" + this.columnDef.field;
            this._elementRangeOutputId = "rangeOutput_" + this.columnDef.field;
            var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
            this.$filterElm = this.createDomElement(searchTerm);
            this.$filterInputElm.change(function (e) {
                _this.onTriggerEvent(e);
            });
            this.$selectOperatorElm.change(function (e) {
                _this.onTriggerEvent(e);
            });
            if (!this.filterParams.hideSliderNumber) {
                this.$filterInputElm.on('input change', function (e) {
                    var value = e && e.target && e.target.value || '';
                    if (value) {
                        document.getElementById(_this._elementRangeOutputId).innerHTML = value;
                    }
                });
            }
        }
    };
    CompoundSliderFilter.prototype.clear = function () {
        if (this.$filterElm && this.$selectOperatorElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            var clearedValue = this.filterParams.hasOwnProperty('sliderStartValue') ? this.filterParams.sliderStartValue : DEFAULT_MIN_VALUE;
            this.$selectOperatorElm.val(0);
            this.$filterInputElm.val(clearedValue);
            if (!this.filterParams.hideSliderNumber) {
                this.$containerInputGroupElm.children('div.input-group-addon.input-group-append').children().last().html(clearedValue);
            }
            this.onTriggerEvent(undefined);
        }
    };
    CompoundSliderFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off('change').remove();
        }
    };
    CompoundSliderFilter.prototype.setValues = function (values) {
        if (values && Array.isArray(values)) {
            this.$filterInputElm.val(values[0]);
            this.$containerInputGroupElm.children('div.input-group-addon.input-group-append').children().last().html(values[0]);
        }
    };
    CompoundSliderFilter.prototype.buildTemplateHtmlString = function () {
        var minValue = this.filterProperties.hasOwnProperty('minValue') ? this.filterProperties.minValue : DEFAULT_MIN_VALUE;
        var maxValue = this.filterProperties.hasOwnProperty('maxValue') ? this.filterProperties.maxValue : DEFAULT_MAX_VALUE;
        var defaultValue = this.filterParams.hasOwnProperty('sliderStartValue') ? this.filterParams.sliderStartValue : minValue;
        var step = this.filterProperties.hasOwnProperty('valueStep') ? this.filterProperties.valueStep : DEFAULT_STEP;
        return "<input type=\"range\" id=\"" + this._elementRangeInputId + "\"\n              name=\"" + this._elementRangeInputId + "\"\n              defaultValue=\"" + defaultValue + "\" min=\"" + minValue + "\" max=\"" + maxValue + "\" step=\"" + step + "\"\n              class=\"form-control slider-filter-input range compound-slider\" />";
    };
    CompoundSliderFilter.prototype.buildTemplateSliderTextHtmlString = function () {
        var minValue = this.filterProperties.hasOwnProperty('minValue') ? this.filterProperties.minValue : DEFAULT_MIN_VALUE;
        var defaultValue = this.filterParams.hasOwnProperty('sliderStartValue') ? this.filterParams.sliderStartValue : minValue;
        return "<div class=\"input-group-addon input-group-append slider-value\"><span class=\"input-group-text\" id=\"" + this._elementRangeOutputId + "\">" + defaultValue + "</span></div>";
    };
    CompoundSliderFilter.prototype.buildSelectOperatorHtmlString = function () {
        var optionValues = this.getOptionValues();
        var optionValueString = '';
        optionValues.forEach(function (option) {
            optionValueString += "<option value=\"" + option.operator + "\" title=\"" + option.description + "\">" + option.operator + "</option>";
        });
        return "<select class=\"form-control\">" + optionValueString + "</select>";
    };
    CompoundSliderFilter.prototype.getOptionValues = function () {
        return [
            { operator: (''), description: '' },
            { operator: ('='), description: '' },
            { operator: ('<'), description: '' },
            { operator: ('<='), description: '' },
            { operator: ('>'), description: '' },
            { operator: ('>='), description: '' },
            { operator: ('<>'), description: '' }
        ];
    };
    CompoundSliderFilter.prototype.createDomElement = function (searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var searchTermInput = ((searchTerm || '0'));
        var $headerElm = this.grid.getHeaderRowColumn(this.columnDef.id);
        $($headerElm).empty();
        this.$selectOperatorElm = $(this.buildSelectOperatorHtmlString());
        this.$filterInputElm = $(this.buildTemplateHtmlString());
        var $filterContainerElm = $("<div class=\"form-group search-filter filter-" + fieldId + "\"></div>");
        this.$containerInputGroupElm = $("<div class=\"input-group search-filter filter-" + fieldId + "\"></div>");
        var $operatorInputGroupAddon = $("<span class=\"input-group-addon input-group-prepend operator\"></span>");
        $operatorInputGroupAddon.append(this.$selectOperatorElm);
        this.$containerInputGroupElm.append($operatorInputGroupAddon);
        this.$containerInputGroupElm.append(this.$filterInputElm);
        if (!this.filterParams.hideSliderNumber) {
            var $sliderTextInputAppendAddon = $(this.buildTemplateSliderTextHtmlString());
            $sliderTextInputAppendAddon.children().html(searchTermInput);
            this.$containerInputGroupElm.append($sliderTextInputAppendAddon);
        }
        $filterContainerElm.append(this.$containerInputGroupElm);
        $filterContainerElm.attr('id', "filter-" + fieldId);
        this.$filterInputElm.val(searchTermInput);
        this.$filterInputElm.data('columnId', fieldId);
        if (this.operator) {
            this.$selectOperatorElm.val(this.operator);
        }
        if (searchTerm) {
            $filterContainerElm.addClass('filled');
        }
        if ($filterContainerElm && typeof $filterContainerElm.appendTo === 'function') {
            $filterContainerElm.appendTo($headerElm);
        }
        return $filterContainerElm;
    };
    CompoundSliderFilter.prototype.onTriggerEvent = function (e) {
        if (this._clearFilterTriggered) {
            this.callback(e, { columnDef: this.columnDef, clearFilterTriggered: this._clearFilterTriggered });
            this._clearFilterTriggered = false;
        }
        else {
            var selectedOperator = this.$selectOperatorElm.find('option:selected').text();
            var value = this.$filterInputElm.val();
            (value) ? this.$filterElm.addClass('filled') : this.$filterElm.removeClass('filled');
            this.callback(e, { columnDef: this.columnDef, searchTerms: (value ? [value] : null), operator: selectedOperator || '' });
        }
    };
    return CompoundSliderFilter;
}());
var InputFilter = /** @class */ (function () {
    function InputFilter() {
        this._clearFilterTriggered = false;
        this._inputType = 'text';
    }
    Object.defineProperty(InputFilter.prototype, "inputType", {
        get: function () {
            return this._inputType;
        },
        set: function (type) {
            this._inputType = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFilter.prototype, "operator", {
        get: function () {
            return this.columnDef && this.columnDef.filter && this.columnDef.filter.operator || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputFilter.prototype, "gridOptions", {
        get: function () {
            return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    InputFilter.prototype.init = function (args) {
        var _this = this;
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = args.searchTerms || [];
        var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
        var filterTemplate = this.buildTemplateHtmlString();
        this.$filterElm = this.createDomElement(filterTemplate, searchTerm);
        this.$filterElm.on('keyup input change', function (e) {
            var value = e && e.target && e.target.value || '';
            if (_this._clearFilterTriggered) {
                _this.callback(e, { columnDef: _this.columnDef, clearFilterTriggered: _this._clearFilterTriggered });
                _this._clearFilterTriggered = false;
                _this.$filterElm.removeClass('filled');
            }
            else {
                _this.$filterElm.addClass('filled');
                _this.callback(e, { columnDef: _this.columnDef, operator: _this.operator, searchTerms: [value] });
            }
        });
    };
    InputFilter.prototype.clear = function () {
        if (this.$filterElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            this.$filterElm.val('');
            this.$filterElm.trigger('keyup');
        }
    };
    InputFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off('keyup input change').remove();
        }
    };
    InputFilter.prototype.setValues = function (values) {
        if (values) {
            this.$filterElm.val(values);
        }
    };
    InputFilter.prototype.buildTemplateHtmlString = function () {
        var fieldId = this.columnDef && this.columnDef.id;
        var placeholder = (this.gridOptions) ? (this.gridOptions.defaultFilterPlaceholder || '') : '';
        return "<input type=\"" + (this._inputType || 'text') + "\" class=\"form-control search-filter filter-" + fieldId + "\" placeholder=\"" + placeholder + "\">";
    };
    InputFilter.prototype.createDomElement = function (filterTemplate, searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        var $filterElm = $(filterTemplate);
        $filterElm.val(searchTerm);
        $filterElm.attr('id', "filter-" + fieldId);
        $filterElm.data('columnId', fieldId);
        if (searchTerm) {
            $filterElm.addClass('filled');
        }
        if ($filterElm && typeof $filterElm.appendTo === 'function') {
            $filterElm.appendTo($headerElm);
        }
        return $filterElm;
    };
    return InputFilter;
}());
var InputNumberFilter = /** @class */ (function (_super) {
    __extends(InputNumberFilter, _super);
    function InputNumberFilter() {
        var _this = _super.call(this) || this;
        _this.inputType = 'number';
        return _this;
    }
    return InputNumberFilter;
}(InputFilter));
var InputPasswordFilter = /** @class */ (function (_super) {
    __extends(InputPasswordFilter, _super);
    function InputPasswordFilter() {
        var _this = _super.call(this) || this;
        _this.inputType = 'password';
        return _this;
    }
    return InputPasswordFilter;
}(InputFilter));
var DOMPurify = DOMPurify_;
var SelectFilter = /** @class */ (function () {
    function SelectFilter(translate, collectionService, isMultipleSelect) {
        if (isMultipleSelect === void 0) { isMultipleSelect = true; }
        var _this = this;
        this.translate = translate;
        this.collectionService = collectionService;
        this.isMultipleSelect = isMultipleSelect;
        this.isFilled = false;
        this.enableTranslateLabel = false;
        this.subscriptions = [];
        var options = {
            autoAdjustDropHeight: true,
            autoAdjustDropPosition: true,
            autoAdjustDropWidthByTextSize: true,
            container: 'body',
            filter: false,
            maxHeight: 275,
            single: true,
            textTemplate: function ($elm) {
                var isRenderHtmlEnabled = _this.columnDef && _this.columnDef.filter && _this.columnDef.filter.enableRenderHtml || false;
                return isRenderHtmlEnabled ? $elm.text() : $elm.html();
            },
            onClose: function () {
                var selectedItems = _this.$filterElm.multipleSelect('getSelects');
                if (Array.isArray(selectedItems) && selectedItems.length > 0) {
                    _this.isFilled = true;
                    _this.$filterElm.addClass('filled').siblings('div .search-filter').addClass('filled');
                }
                else {
                    _this.isFilled = false;
                    _this.$filterElm.removeClass('filled').siblings('div .search-filter').removeClass('filled');
                }
                _this.callback(undefined, { columnDef: _this.columnDef, operator: _this.operator, searchTerms: selectedItems });
            }
        };
        if (this.isMultipleSelect) {
            options.single = false;
            options.okButton = true;
            options.addTitle = true;
            options.countSelected = this.translate.instant('X_OF_Y_SELECTED');
            options.allSelected = this.translate.instant('ALL_SELECTED');
            options.selectAllText = this.translate.instant('SELECT_ALL');
            options.selectAllDelimiter = ['', ''];
        }
        this.defaultOptions = options;
    }
    Object.defineProperty(SelectFilter.prototype, "columnFilter", {
        get: function () {
            return this.columnDef && this.columnDef.filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectFilter.prototype, "collectionOptions", {
        get: function () {
            return this.columnDef && this.columnDef.filter && this.columnDef.filter.collectionOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectFilter.prototype, "customStructure", {
        get: function () {
            return this.columnDef && this.columnDef.filter && this.columnDef.filter.customStructure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectFilter.prototype, "gridOptions", {
        get: function () {
            return (this.grid && this.grid.getOptions) ? this.grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectFilter.prototype, "operator", {
        get: function () {
            if (this.columnDef && this.columnDef.filter && this.columnDef.filter.operator) {
                return this.columnDef && this.columnDef.filter && this.columnDef.filter.operator;
            }
            return this.isMultipleSelect ? OperatorType.in : OperatorType.equal;
        },
        enumerable: true,
        configurable: true
    });
    SelectFilter.prototype.init = function (args) {
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = args.searchTerms || [];
        if (!this.grid || !this.columnDef || !this.columnFilter || (!this.columnFilter.collection && !this.columnFilter.collectionAsync)) {
            throw new Error("[Angular-SlickGrid] You need to pass a \"collection\" (or \"collectionAsync\") for the MultipleSelect/SingleSelect Filter to work correctly. Also each option should include a value/label pair (or value/labelKey when using Locale). For example:: { filter: model: Filters.multipleSelect, collection: [{ value: true, label: 'True' }, { value: false, label: 'False'}] }");
        }
        this.enableTranslateLabel = this.columnFilter.enableTranslateLabel;
        this.labelName = this.customStructure && this.customStructure.label || 'label';
        this.labelPrefixName = this.customStructure && this.customStructure.labelPrefix || 'labelPrefix';
        this.labelSuffixName = this.customStructure && this.customStructure.labelSuffix || 'labelSuffix';
        this.optionLabel = this.customStructure && this.customStructure.optionLabel || 'value';
        this.valueName = this.customStructure && this.customStructure.value || 'value';
        if (this.enableTranslateLabel && (!this.translate || typeof this.translate.instant !== 'function')) {
            throw new Error("[select-editor] The ngx-translate TranslateService is required for the Select Filter to work correctly");
        }
        var newCollection = this.columnFilter.collection || [];
        this.renderDomElement(newCollection);
        var collectionAsync = this.columnFilter && this.columnFilter.collectionAsync;
        if (collectionAsync) {
            this.renderOptionsAsync(collectionAsync);
        }
    };
    SelectFilter.prototype.clear = function () {
        if (this.$filterElm && this.$filterElm.multipleSelect) {
            this.$filterElm.multipleSelect('setSelects', []);
            this.$filterElm.removeClass('filled');
            this.searchTerms = [];
            this.callback(undefined, { columnDef: this.columnDef, clearFilterTriggered: true });
        }
    };
    SelectFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off().remove();
        }
        this.subscriptions = unsubscribeAllObservables(this.subscriptions);
    };
    SelectFilter.prototype.setValues = function (values) {
        if (values) {
            values = Array.isArray(values) ? values : [values];
            this.$filterElm.multipleSelect('setSelects', values);
        }
    };
    SelectFilter.prototype.filterCollection = function (inputCollection) {
        var outputCollection = inputCollection;
        if (this.columnDef && this.columnFilter && this.columnFilter.collectionFilterBy) {
            var filterBy = this.columnFilter.collectionFilterBy;
            var filterCollectionBy = this.columnFilter.collectionOptions && this.columnFilter.collectionOptions.filterResultAfterEachPass || null;
            outputCollection = this.collectionService.filterCollection(outputCollection, filterBy, filterCollectionBy);
        }
        return outputCollection;
    };
    SelectFilter.prototype.sortCollection = function (inputCollection) {
        var outputCollection = inputCollection;
        if (this.columnDef && this.columnFilter && this.columnFilter.collectionSortBy) {
            var sortBy = this.columnFilter.collectionSortBy;
            outputCollection = this.collectionService.sortCollection(outputCollection, sortBy, this.enableTranslateLabel);
        }
        return outputCollection;
    };
    SelectFilter.prototype.renderOptionsAsync = function (collectionAsync) {
        return __awaiter(this, void 0, void 0, function () {
            var awaitedCollection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        awaitedCollection = [];
                        if (!collectionAsync) return [3 /*break*/, 2];
                        return [4 /*yield*/, castToPromise(collectionAsync)];
                    case 1:
                        awaitedCollection = _a.sent();
                        this.renderDomElementFromCollectionAsync(awaitedCollection);
                        this.createCollectionAsyncSubject();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SelectFilter.prototype.createCollectionAsyncSubject = function () {
        var _this = this;
        var newCollectionAsync = new Subject();
        this.columnFilter.collectionAsync = newCollectionAsync;
        this.subscriptions.push(newCollectionAsync.subscribe(function (collection) { return _this.renderDomElementFromCollectionAsync(collection); }));
    };
    SelectFilter.prototype.renderDomElementFromCollectionAsync = function (collection) {
        if (this.collectionOptions && this.collectionOptions.collectionInObjectProperty) {
            collection = getDescendantProperty(collection, this.collectionOptions.collectionInObjectProperty);
        }
        if (!Array.isArray(collection)) {
            throw new Error('Something went wrong while trying to pull the collection from the "collectionAsync" call in the Select Filter, the collection is not a valid array.');
        }
        this.columnFilter.collection = collection;
        this.renderDomElement(collection);
    };
    SelectFilter.prototype.renderDomElement = function (collection) {
        if (!Array.isArray(collection) && this.collectionOptions && this.collectionOptions.collectionInObjectProperty) {
            collection = getDescendantProperty(collection, this.collectionOptions.collectionInObjectProperty);
        }
        if (!Array.isArray(collection)) {
            throw new Error('The "collection" passed to the Select Filter is not a valid array');
        }
        if (this.collectionOptions && this.collectionOptions.addBlankEntry) {
            collection.unshift(this.createBlankEntry());
        }
        var newCollection = collection;
        newCollection = this.filterCollection(newCollection);
        newCollection = this.sortCollection(newCollection);
        var filterTemplate = this.buildTemplateHtmlString(newCollection, this.searchTerms);
        this.createDomElement(filterTemplate);
    };
    SelectFilter.prototype.buildTemplateHtmlString = function (optionCollection, searchTerms) {
        var _this = this;
        var options = '';
        var fieldId = this.columnDef && this.columnDef.id;
        var separatorBetweenLabels = this.collectionOptions && this.collectionOptions.separatorBetweenTextLabels || '';
        var isRenderHtmlEnabled = this.columnFilter && this.columnFilter.enableRenderHtml || false;
        var sanitizedOptions = this.gridOptions && this.gridOptions.sanitizeHtmlOptions || {};
        if (optionCollection.every(function (x) { return typeof x === 'string'; })) {
            optionCollection.forEach(function (option) {
                var selected = (searchTerms.findIndex(function (term) { return term === option; }) >= 0) ? 'selected' : '';
                options += "<option value=\"" + option + "\" label=\"" + option + "\" " + selected + ">" + option + "</option>";
                if (selected) {
                    _this.isFilled = true;
                }
            });
        }
        else {
            optionCollection.forEach(function (option) {
                if (!option || (option[_this.labelName] === undefined && option.labelKey === undefined)) {
                    throw new Error("[select-filter] A collection with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: model: Filters.multipleSelect, collection: [ { value: '1', label: 'One' } ]')");
                }
                var labelKey = ((option.labelKey || option[_this.labelName]));
                var selected = (searchTerms.findIndex(function (term) { return term === option[_this.valueName]; }) >= 0) ? 'selected' : '';
                var labelText = ((option.labelKey || _this.enableTranslateLabel) && labelKey) ? _this.translate.instant(labelKey || ' ') : labelKey;
                var prefixText = option[_this.labelPrefixName] || '';
                var suffixText = option[_this.labelSuffixName] || '';
                var optionLabel = option[_this.optionLabel] || '';
                optionLabel = optionLabel.toString().replace(/\"/g, '\'');
                prefixText = (_this.enableTranslateLabel && prefixText && typeof prefixText === 'string') ? _this.translate.instant(prefixText || ' ') : prefixText;
                suffixText = (_this.enableTranslateLabel && suffixText && typeof suffixText === 'string') ? _this.translate.instant(suffixText || ' ') : suffixText;
                optionLabel = (_this.enableTranslateLabel && optionLabel && typeof optionLabel === 'string') ? _this.translate.instant(optionLabel || ' ') : optionLabel;
                var tmpOptionArray = [prefixText, labelText, suffixText].filter(function (text) { return text; });
                var optionText = tmpOptionArray.join(separatorBetweenLabels);
                if (isRenderHtmlEnabled) {
                    var sanitizedText = DOMPurify.sanitize(optionText, sanitizedOptions);
                    optionText = htmlEncode(sanitizedText);
                }
                options += "<option value=\"" + option[_this.valueName] + "\" label=\"" + optionLabel + "\" " + selected + ">" + optionText + "</option>";
                if (selected) {
                    _this.isFilled = true;
                }
            });
        }
        return "<select class=\"ms-filter search-filter filter-" + fieldId + "\" " + (this.isMultipleSelect ? 'multiple="multiple"' : '') + ">" + options + "</select>";
    };
    SelectFilter.prototype.createBlankEntry = function () {
        var blankEntry = (_a = {}, _a[this.labelName] = '', _a[this.valueName] = '', _a);
        if (this.labelPrefixName) {
            blankEntry[this.labelPrefixName] = '';
        }
        if (this.labelSuffixName) {
            blankEntry[this.labelSuffixName] = '';
        }
        return blankEntry;
        var _a;
    };
    SelectFilter.prototype.createDomElement = function (filterTemplate) {
        var fieldId = this.columnDef && this.columnDef.id;
        this.elementName = "filter-" + fieldId;
        this.defaultOptions.name = this.elementName;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        this.$filterElm = $(filterTemplate);
        if (typeof this.$filterElm.multipleSelect !== 'function') {
            throw new Error("multiple-select.js was not found, make sure to modify your \"angular-cli.json\" file and include \"../node_modules/angular-slickgrid/lib/multiple-select/multiple-select.js\" and it's css or SASS file");
        }
        this.$filterElm.attr('id', this.elementName);
        this.$filterElm.data('columnId', fieldId);
        if (this.isFilled) {
            this.$filterElm.addClass('filled');
        }
        if (this.$filterElm && typeof this.$filterElm.appendTo === 'function') {
            this.$filterElm.appendTo($headerElm);
        }
        var elementOptions = Object.assign({}, this.defaultOptions, this.columnFilter.filterOptions);
        this.filterElmOptions = Object.assign({}, this.defaultOptions, elementOptions);
        this.$filterElm = this.$filterElm.multipleSelect(this.filterElmOptions);
    };
    return SelectFilter;
}());
var MultipleSelectFilter = /** @class */ (function (_super) {
    __extends(MultipleSelectFilter, _super);
    function MultipleSelectFilter(translate, collectionService) {
        var _this = _super.call(this, translate, collectionService, true) || this;
        _this.translate = translate;
        _this.collectionService = collectionService;
        return _this;
    }
    return MultipleSelectFilter;
}(SelectFilter));
var NativeSelectFilter = /** @class */ (function () {
    function NativeSelectFilter(translate) {
        this.translate = translate;
        this._clearFilterTriggered = false;
    }
    Object.defineProperty(NativeSelectFilter.prototype, "operator", {
        get: function () {
            return (this.columnDef && this.columnDef.filter && this.columnDef.filter.operator) || OperatorType.equal;
        },
        enumerable: true,
        configurable: true
    });
    NativeSelectFilter.prototype.init = function (args) {
        var _this = this;
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = args.searchTerms || [];
        var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
        if (typeof searchTerm === 'boolean' || typeof searchTerm === 'number') {
            searchTerm = "" + searchTerm;
        }
        var filterTemplate = this.buildTemplateHtmlString();
        this.$filterElm = this.createDomElement(filterTemplate, searchTerm);
        this.$filterElm.change(function (e) {
            var value = e && e.target && e.target.value || '';
            if (_this._clearFilterTriggered) {
                _this.callback(e, { columnDef: _this.columnDef, clearFilterTriggered: _this._clearFilterTriggered });
                _this._clearFilterTriggered = false;
                _this.$filterElm.removeClass('filled');
            }
            else {
                _this.$filterElm.addClass('filled');
                _this.callback(e, { columnDef: _this.columnDef, operator: _this.operator, searchTerms: [value] });
            }
        });
    };
    NativeSelectFilter.prototype.clear = function () {
        if (this.$filterElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            this.$filterElm.val('');
            this.$filterElm.trigger('change');
        }
    };
    NativeSelectFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off('change').remove();
        }
    };
    NativeSelectFilter.prototype.setValues = function (values) {
        if (values) {
            this.$filterElm.val(values);
        }
    };
    NativeSelectFilter.prototype.buildTemplateHtmlString = function () {
        var _this = this;
        if (!this.columnDef || !this.columnDef.filter || !this.columnDef.filter.collection) {
            throw new Error("[Angular-SlickGrid] You need to pass a \"collection\" for the Select Filter to work correctly. Also each option should include a value/label pair (or value/labelKey when using Locale). For example:: { filter: model: Filters.select, collection: [{ value: true, label: 'True' }, { value: false, label: 'False'}] }");
        }
        var fieldId = this.columnDef && this.columnDef.id;
        var optionCollection = this.columnDef.filter.collection || [];
        var labelName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.label : 'label';
        var valueName = (this.columnDef.filter.customStructure) ? this.columnDef.filter.customStructure.value : 'value';
        var options = '';
        if (optionCollection.every(function (x) { return typeof x === 'string'; })) {
            optionCollection.forEach(function (option) {
                options += "<option value=\"" + option + "\" label=\"" + option + "\">" + option + "</option>";
            });
        }
        else {
            optionCollection.forEach(function (option) {
                if (!option || (option[labelName] === undefined && option.labelKey === undefined)) {
                    throw new Error("A collection with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example:: { filter: model: Filters.select, collection: [ { value: '1', label: 'One' } ]')");
                }
                var labelKey = option.labelKey || option[labelName];
                var textLabel = ((option.labelKey || _this.columnDef.filter.enableTranslateLabel) && _this.translate && typeof _this.translate.instant === 'function') ? _this.translate.instant(labelKey || ' ') : labelKey;
                options += "<option value=\"" + option[valueName] + "\">" + textLabel + "</option>";
            });
        }
        return "<select class=\"form-control search-filter filter-" + fieldId + "\">" + options + "</select>";
    };
    NativeSelectFilter.prototype.createDomElement = function (filterTemplate, searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        var $filterElm = $(filterTemplate);
        var searchTermInput = ((searchTerm || ''));
        $filterElm.val(searchTermInput);
        $filterElm.attr('id', "filter-" + fieldId);
        $filterElm.data('columnId', fieldId);
        if ($filterElm && typeof $filterElm.appendTo === 'function') {
            $filterElm.appendTo($headerElm);
        }
        return $filterElm;
    };
    return NativeSelectFilter;
}());
var SingleSelectFilter = /** @class */ (function (_super) {
    __extends(SingleSelectFilter, _super);
    function SingleSelectFilter(translate, collectionService) {
        var _this = _super.call(this, translate, collectionService, false) || this;
        _this.translate = translate;
        _this.collectionService = collectionService;
        return _this;
    }
    return SingleSelectFilter;
}(SelectFilter));
var DEFAULT_MIN_VALUE$1 = 0;
var DEFAULT_MAX_VALUE$1 = 100;
var DEFAULT_STEP$1 = 1;
var SliderFilter = /** @class */ (function () {
    function SliderFilter() {
        this._clearFilterTriggered = false;
    }
    Object.defineProperty(SliderFilter.prototype, "filterParams", {
        get: function () {
            return this.columnDef && this.columnDef.filter && this.columnDef.filter.params || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderFilter.prototype, "filterProperties", {
        get: function () {
            return this.columnDef && this.columnDef.filter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderFilter.prototype, "operator", {
        get: function () {
            return (this.columnDef && this.columnDef.filter && this.columnDef.filter.operator) || OperatorType.equal;
        },
        enumerable: true,
        configurable: true
    });
    SliderFilter.prototype.init = function (args) {
        var _this = this;
        if (!args) {
            throw new Error('[Angular-SlickGrid] A filter must always have an "init()" with valid arguments.');
        }
        this.grid = args.grid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = args.searchTerms || [];
        this._elementRangeInputId = "rangeInput_" + this.columnDef.field;
        this._elementRangeOutputId = "rangeOutput_" + this.columnDef.field;
        var searchTerm = (Array.isArray(this.searchTerms) && this.searchTerms[0]) || '';
        var filterTemplate = this.buildTemplateHtmlString();
        this.$filterElm = this.createDomElement(filterTemplate, searchTerm);
        this.$filterElm.change(function (e) {
            var value = e && e.target && e.target.value || '';
            if (_this._clearFilterTriggered) {
                _this.callback(e, { columnDef: _this.columnDef, clearFilterTriggered: _this._clearFilterTriggered });
                _this._clearFilterTriggered = false;
                _this.$filterElm.removeClass('filled');
            }
            else {
                _this.$filterElm.addClass('filled');
                _this.callback(e, { columnDef: _this.columnDef, operator: _this.operator, searchTerms: [value] });
            }
        });
        if (!this.filterParams.hideSliderNumber) {
            this.$filterElm.on('input change', function (e) {
                var value = e && e.target && e.target.value || '';
                if (value) {
                    document.getElementById(_this._elementRangeOutputId).innerHTML = value;
                }
            });
        }
    };
    SliderFilter.prototype.clear = function () {
        if (this.$filterElm) {
            this._clearFilterTriggered = true;
            this.searchTerms = [];
            var clearedValue = this.filterParams.hasOwnProperty('sliderStartValue') ? this.filterParams.sliderStartValue : DEFAULT_MIN_VALUE$1;
            this.$filterElm.children('input').val(clearedValue);
            this.$filterElm.children('div.input-group-addon.input-group-append').children().html(clearedValue);
            this.$filterElm.trigger('change');
        }
    };
    SliderFilter.prototype.destroy = function () {
        if (this.$filterElm) {
            this.$filterElm.off('change').remove();
        }
    };
    SliderFilter.prototype.setValues = function (values) {
        if (values) {
            this.$filterElm.val(values);
        }
    };
    SliderFilter.prototype.buildTemplateHtmlString = function () {
        var fieldId = this.columnDef && this.columnDef.id;
        var minValue = this.filterProperties.hasOwnProperty('minValue') ? this.filterProperties.minValue : DEFAULT_MIN_VALUE$1;
        var maxValue = this.filterProperties.hasOwnProperty('maxValue') ? this.filterProperties.maxValue : DEFAULT_MAX_VALUE$1;
        var defaultValue = this.filterParams.hasOwnProperty('sliderStartValue') ? this.filterParams.sliderStartValue : minValue;
        var step = this.filterProperties.hasOwnProperty('valueStep') ? this.filterProperties.valueStep : DEFAULT_STEP$1;
        if (this.filterParams.hideSliderNumber) {
            return "\n      <div class=\"search-filter filter-" + fieldId + "\">\n        <input type=\"range\" id=\"" + this._elementRangeInputId + "\"\n          name=\"" + this._elementRangeInputId + "\"\n          defaultValue=\"" + defaultValue + "\" min=\"" + minValue + "\" max=\"" + maxValue + "\" step=\"" + step + "\"\n          class=\"form-control slider-filter-input range\" />\n      </div>";
        }
        return "\n      <div class=\"input-group search-filter filter-" + fieldId + "\">\n        <input type=\"range\" id=\"" + this._elementRangeInputId + "\"\n          name=\"" + this._elementRangeInputId + "\"\n          defaultValue=\"" + defaultValue + "\" min=\"" + minValue + "\" max=\"" + maxValue + "\" step=\"" + step + "\"\n          class=\"form-control slider-filter-input range\" />\n        <div class=\"input-group-addon input-group-append slider-value\">\n          <span class=\"input-group-text\" id=\"" + this._elementRangeOutputId + "\">" + defaultValue + "</span>\n        </div>\n      </div>";
    };
    SliderFilter.prototype.createDomElement = function (filterTemplate, searchTerm) {
        var fieldId = this.columnDef && this.columnDef.id;
        var $headerElm = this.grid.getHeaderRowColumn(fieldId);
        $($headerElm).empty();
        var $filterElm = $(filterTemplate);
        var searchTermInput = ((searchTerm || '0'));
        $filterElm.children('input').val(searchTermInput);
        $filterElm.children('div.input-group-addon.input-group-append').children().html(searchTermInput);
        $filterElm.attr('id', "filter-" + fieldId);
        $filterElm.data('columnId', fieldId);
        if (searchTerm) {
            $filterElm.addClass('filled');
        }
        if ($filterElm && typeof $filterElm.appendTo === 'function') {
            $filterElm.appendTo($headerElm);
        }
        return $filterElm;
    };
    return SliderFilter;
}());
var Filters = {
    compoundDate: CompoundDateFilter,
    compoundInput: CompoundInputFilter,
    compoundInputNumber: CompoundInputNumberFilter,
    compoundInputPassword: CompoundInputPasswordFilter,
    compoundInputText: CompoundInputFilter,
    compoundSlider: CompoundSliderFilter,
    input: InputFilter,
    inputNumber: InputNumberFilter,
    inputPassword: InputPasswordFilter,
    inputText: InputFilter,
    multipleSelect: MultipleSelectFilter,
    select: NativeSelectFilter,
    singleSelect: SingleSelectFilter,
    slider: SliderFilter,
};
var GlobalGridOptions = {
    alwaysShowVerticalScroll: true,
    autoEdit: false,
    asyncEditorLoading: false,
    autoFitColumnsOnFirstLoad: true,
    autoResize: {
        bottomPadding: 20,
        minHeight: 180,
        minWidth: 300,
        sidePadding: 0
    },
    cellHighlightCssClass: 'slick-cell-modified',
    checkboxSelector: {
        cssClass: 'slick-cell-checkboxsel'
    },
    columnPicker: {
        hideForceFitButton: false,
        hideSyncResizeButton: true
    },
    datasetIdPropertyName: 'id',
    defaultFilterPlaceholder: '&#128269;',
    defaultFilter: Filters.input,
    editable: false,
    enableAutoResize: true,
    enableAutoSizeColumns: true,
    enableCellNavigation: false,
    enableColumnPicker: true,
    enableColumnReorder: true,
    enableExport: true,
    enableGridMenu: true,
    enableHeaderMenu: true,
    enableMouseHoverHighlightRow: true,
    enableSorting: true,
    enableTextSelectionOnCells: true,
    explicitInitialization: true,
    exportOptions: {
        delimiter: DelimiterType.comma,
        exportWithFormatter: false,
        filename: 'export',
        format: FileType.csv,
        groupingAggregatorRowText: '',
        sanitizeDataExport: false,
        useUtf8WithBom: true
    },
    forceFitColumns: false,
    gridMenu: {
        hideClearAllFiltersCommand: false,
        hideClearAllSortingCommand: false,
        hideExportCsvCommand: false,
        hideExportTextDelimitedCommand: true,
        hideForceFitButton: false,
        hideRefreshDatasetCommand: false,
        hideSyncResizeButton: true,
        hideToggleFilterCommand: false,
        hideTogglePreHeaderCommand: false,
        iconCssClass: 'fa fa-bars',
        iconClearAllFiltersCommand: 'fa fa-filter text-danger',
        iconClearAllSortingCommand: 'fa fa-unsorted text-danger',
        iconExportCsvCommand: 'fa fa-download',
        iconExportTextDelimitedCommand: 'fa fa-download',
        iconRefreshDatasetCommand: 'fa fa-refresh',
        iconToggleFilterCommand: 'fa fa-random',
        iconTogglePreHeaderCommand: 'fa fa-random',
        menuWidth: 16,
        resizeOnShowHeaderRow: true
    },
    headerMenu: {
        autoAlign: true,
        autoAlignOffset: 12,
        minWidth: 140,
        iconSortAscCommand: 'fa fa-sort-asc',
        iconSortDescCommand: 'fa fa-sort-desc',
        iconColumnHideCommand: 'fa fa-times',
        hideColumnHideCommand: false,
        hideSortCommands: false
    },
    headerRowHeight: 35,
    multiColumnSort: true,
    numberedMultiColumnSort: true,
    tristateMultiColumnSort: false,
    sortColNumberInSeparateSpan: true,
    suppressActiveCellChangeOnEdit: true,
    pagination: {
        pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
        pageSize: 25,
        totalItems: 0
    },
    rowHeight: 35,
    topPanelHeight: 35
};
var SlickgridConfig = /** @class */ (function () {
    function SlickgridConfig() {
        this.options = GlobalGridOptions;
    }
    return SlickgridConfig;
}());
var FilterFactory = /** @class */ (function () {
    function FilterFactory(config, translate, collectionService) {
        this.config = config;
        this.translate = translate;
        this.collectionService = collectionService;
        this._options = this.config.options;
    }
    FilterFactory.prototype.createFilter = function (columnFilter) {
        var filter;
        if (columnFilter && columnFilter.model) {
            filter = typeof columnFilter.model === 'function' ? new columnFilter.model(this.translate, this.collectionService) : columnFilter.model;
        }
        if (!filter && this._options.defaultFilter) {
            filter = new this._options.defaultFilter(this.translate, this.collectionService);
        }
        return filter;
    };
    return FilterFactory;
}());
FilterFactory.decorators = [
    { type: Injectable },
];
FilterFactory.ctorParameters = function () { return [
    { type: SlickgridConfig, },
    { type: TranslateService, },
    { type: CollectionService, },
]; };
var isequal = isequal_;
var FilterService = /** @class */ (function () {
    function FilterService(filterFactory) {
        this.filterFactory = filterFactory;
        this._eventHandler = new Slick.EventHandler();
        this._filters = [];
        this._columnFilters = {};
        this.onFilterChanged = new Subject();
        this.onFilterCleared = new Subject();
    }
    Object.defineProperty(FilterService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterService.prototype, "_columnDefinitions", {
        get: function () {
            return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
        },
        enumerable: true,
        configurable: true
    });
    FilterService.prototype.init = function (grid) {
        this._grid = grid;
    };
    FilterService.prototype.attachBackendOnFilter = function (grid) {
        var _this = this;
        this._filters = [];
        this._slickSubscriber = new Slick.Event();
        this._slickSubscriber.subscribe(this.attachBackendOnFilterSubscribe.bind(this));
        this._eventHandler.subscribe(grid.onHeaderRowCellRendered, function (e, args) {
            _this.addFilterTemplateToHeaderRow(args);
        });
    };
    FilterService.prototype.attachBackendOnFilterSubscribe = function (event, args) {
        return __awaiter(this, void 0, void 0, function () {
            var backendApi, startTime, query, observableOrPromise, processResult, endTime, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!args || !args.grid) {
                            throw new Error('Something went wrong when trying to attach the "attachBackendOnFilterSubscribe(event, args)" function, it seems that "args" is not populated correctly');
                        }
                        backendApi = this._gridOptions.backendServiceApi;
                        if (!backendApi || !backendApi.process || !backendApi.service) {
                            throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        startTime = new Date();
                        if (backendApi.preProcess) {
                            backendApi.preProcess();
                        }
                        return [4 /*yield*/, backendApi.service.processOnFilterChanged(event, args)];
                    case 2:
                        query = _a.sent();
                        if (args && !args.clearFilterTriggered) {
                            this.emitFilterChanged('remote');
                        }
                        observableOrPromise = backendApi.process(query);
                        return [4 /*yield*/, castToPromise(observableOrPromise)];
                    case 3:
                        processResult = _a.sent();
                        endTime = new Date();
                        if (processResult && backendApi.internalPostProcess) {
                            backendApi.internalPostProcess(processResult);
                        }
                        if (backendApi.postProcess !== undefined) {
                            if (processResult instanceof Object) {
                                processResult.statistics = {
                                    startTime: startTime,
                                    endTime: endTime,
                                    executionTime: endTime.valueOf() - startTime.valueOf(),
                                    totalItemCount: this._gridOptions && this._gridOptions.pagination && this._gridOptions.pagination.totalItems
                                };
                            }
                            backendApi.postProcess(processResult);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        if (backendApi && backendApi.onError) {
                            backendApi.onError(e_3);
                        }
                        else {
                            throw e_3;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FilterService.prototype.attachLocalOnFilter = function (grid, dataView) {
        var _this = this;
        this._filters = [];
        this._dataView = dataView;
        this._slickSubscriber = new Slick.Event();
        dataView.setFilterArgs({ columnFilters: this._columnFilters, grid: this._grid });
        dataView.setFilter(this.customLocalFilter.bind(this, dataView));
        this._slickSubscriber.subscribe(function (e, args) {
            var columnId = args.columnId;
            if (columnId != null) {
                dataView.refresh();
            }
            if (args && !args.clearFilterTriggered) {
                _this.emitFilterChanged('local');
            }
        });
        this._eventHandler.subscribe(grid.onHeaderRowCellRendered, function (e, args) {
            _this.addFilterTemplateToHeaderRow(args);
        });
    };
    FilterService.prototype.clearFilters = function () {
        this._filters.forEach(function (filter) {
            if (filter && filter.clear) {
                filter.clear();
            }
        });
        for (var columnId in this._columnFilters) {
            if (columnId && this._columnFilters[columnId]) {
                delete this._columnFilters[columnId];
            }
        }
        if (this._dataView) {
            this._dataView.refresh();
            this._grid.invalidate();
            this._grid.render();
        }
        this.onFilterCleared.next(true);
    };
    FilterService.prototype.customLocalFilter = function (dataView, item, args) {
        try {
            for (var _a = __values(Object.keys(args.columnFilters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var columnId = _b.value;
                var columnFilter = args.columnFilters[columnId];
                var columnIndex = args.grid.getColumnIndex(columnId);
                var columnDef = args.grid.getColumns()[columnIndex];
                if (!columnDef) {
                    return false;
                }
                var fieldName = columnDef.queryField || columnDef.queryFieldFilter || columnDef.field;
                var fieldType = columnDef.type || FieldType.string;
                var filterSearchType = (columnDef.filterSearchType) ? columnDef.filterSearchType : null;
                var cellValue = item[fieldName];
                if (fieldName.indexOf('.') >= 0) {
                    cellValue = getDescendantProperty(item, fieldName);
                }
                var searchValues = (columnFilter && columnFilter.searchTerms) ? __spread(columnFilter.searchTerms) : null;
                var fieldSearchValue = (Array.isArray(searchValues) && searchValues.length === 1) ? searchValues[0] : '';
                fieldSearchValue = '' + fieldSearchValue;
                var matches = fieldSearchValue.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/);
                var operator = columnFilter.operator || ((matches) ? matches[1] : '');
                var searchTerm = (!!matches) ? matches[2] : '';
                var lastValueChar = (!!matches) ? matches[3] : (operator === '*z' ? '*' : '');
                if (searchValues && searchValues.length > 1) {
                    fieldSearchValue = searchValues.join(',');
                }
                else if (typeof fieldSearchValue === 'string') {
                    fieldSearchValue = fieldSearchValue.replace("'", "''");
                    if (operator === '*' || operator === 'a*' || operator === '*z' || lastValueChar === '*') {
                        operator = (operator === '*' || operator === '*z') ? OperatorType.endsWith : OperatorType.startsWith;
                    }
                }
                if (searchTerm === '' && (!searchValues || (Array.isArray(searchValues) && searchValues.length === 0))) {
                    return true;
                }
                if (Array.isArray(matches) && matches.length >= 1 && (Array.isArray(searchValues) && searchValues.length === 1)) {
                    searchValues[0] = searchTerm;
                }
                if (searchValues && Array.isArray(searchValues)) {
                    for (var k = 0, ln = searchValues.length; k < ln; k++) {
                        searchValues[k] = ((searchValues[k] === undefined || searchValues[k] === null) ? '' : searchValues[k]) + '';
                    }
                }
                if (columnDef && columnDef.params && columnDef.params.useFormatterOuputToFilter) {
                    var rowIndex = (dataView && typeof dataView.getIdxById === 'function') ? dataView.getIdxById(item.id) : 0;
                    cellValue = columnDef.formatter(rowIndex, columnIndex, cellValue, columnDef, item, this._grid);
                }
                if (typeof cellValue === 'number') {
                    cellValue = cellValue.toString();
                }
                var conditionOptions = {
                    fieldType: fieldType,
                    searchTerms: searchValues,
                    cellValue: cellValue,
                    operator: operator,
                    cellValueLastChar: lastValueChar,
                    filterSearchType: filterSearchType
                };
                if (!FilterConditions.executeMappedCondition(conditionOptions)) {
                    return false;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return true;
        var e_4, _c;
    };
    FilterService.prototype.dispose = function () {
        this.disposeColumnFilters();
        this._eventHandler.unsubscribeAll();
        if (this._slickSubscriber && typeof this._slickSubscriber.unsubscribe === 'function') {
            this._slickSubscriber.unsubscribe();
        }
    };
    FilterService.prototype.disposeColumnFilters = function () {
        for (var columnId in this._columnFilters) {
            if (columnId && this._columnFilters[columnId]) {
                delete this._columnFilters[columnId];
            }
        }
        this._filters.forEach(function (filter, index) {
            if (filter && filter.destroy) {
                filter.destroy(true);
            }
        });
    };
    FilterService.prototype.getColumnFilters = function () {
        return this._columnFilters;
    };
    FilterService.prototype.getCurrentLocalFilters = function () {
        var currentFilters = [];
        if (this._columnFilters) {
            try {
                for (var _a = __values(Object.keys(this._columnFilters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var colId = _b.value;
                    var columnFilter = this._columnFilters[colId];
                    var columnDef = columnFilter.columnDef;
                    var filter = ({ columnId: colId || '' });
                    if (columnFilter && columnFilter.searchTerms) {
                        filter.searchTerms = columnFilter.searchTerms;
                    }
                    if (columnFilter.operator) {
                        filter.operator = columnFilter.operator;
                    }
                    if (Array.isArray(filter.searchTerms) && filter.searchTerms.length > 0 && filter.searchTerms[0] !== '') {
                        currentFilters.push(filter);
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        return currentFilters;
        var e_5, _c;
    };
    FilterService.prototype.callbackSearchEvent = function (e, args) {
        if (args) {
            var searchTerm = ((e && e.target) ? ((e.target)).value : undefined);
            var searchTerms = (args.searchTerms && Array.isArray(args.searchTerms)) ? args.searchTerms : (searchTerm ? [searchTerm] : undefined);
            var columnDef = args.columnDef || null;
            var columnId = columnDef ? (columnDef.id || '') : '';
            var operator = args.operator || undefined;
            var hasSearchTerms = searchTerms && Array.isArray(searchTerms);
            var termsCount = hasSearchTerms && searchTerms.length;
            var oldColumnFilters = Object.assign({}, this._columnFilters);
            if (!hasSearchTerms || termsCount === 0 || (termsCount === 1 && searchTerms[0] === '')) {
                delete this._columnFilters[columnId];
            }
            else {
                var colId = ('' + columnId);
                var colFilter = {
                    columnId: colId,
                    columnDef: columnDef,
                    searchTerms: searchTerms,
                };
                if (operator) {
                    colFilter.operator = operator;
                }
                this._columnFilters[colId] = colFilter;
            }
            if (!isequal(oldColumnFilters, this._columnFilters)) {
                this.triggerEvent(this._slickSubscriber, {
                    clearFilterTriggered: args && args.clearFilterTriggered,
                    columnId: columnId,
                    columnDef: args.columnDef || null,
                    columnFilters: this._columnFilters,
                    operator: operator,
                    searchTerms: searchTerms,
                    serviceOptions: this._onFilterChangedOptions,
                    grid: this._grid
                }, e);
            }
        }
    };
    FilterService.prototype.addFilterTemplateToHeaderRow = function (args) {
        var columnDef = args.column;
        var columnId = columnDef.id || '';
        if (columnDef && columnId !== 'selector' && columnDef.filterable) {
            var searchTerms = void 0;
            var operator = void 0;
            var filter_1 = this.filterFactory.createFilter(args.column.filter);
            operator = (columnDef && columnDef.filter && columnDef.filter.operator) || (filter_1 && filter_1.operator) || undefined;
            if (this._columnFilters[columnDef.id]) {
                searchTerms = this._columnFilters[columnDef.id].searchTerms || undefined;
                operator = this._columnFilters[columnDef.id].operator || undefined;
            }
            else if (columnDef.filter) {
                searchTerms = columnDef.filter.searchTerms || undefined;
                this.updateColumnFilters(searchTerms, columnDef, operator);
            }
            var filterArguments = {
                grid: this._grid,
                operator: operator,
                searchTerms: searchTerms,
                columnDef: columnDef,
                callback: this.callbackSearchEvent.bind(this)
            };
            if (filter_1) {
                filter_1.init(filterArguments);
                var filterExistIndex = this._filters.findIndex(function (filt) { return filter_1.columnDef.name === filt.columnDef.name; });
                if (filterExistIndex === -1) {
                    this._filters.push(filter_1);
                }
                else {
                    this._filters[filterExistIndex] = filter_1;
                }
                if (searchTerms && filter_1.setValues) {
                    filter_1.setValues(searchTerms);
                }
            }
        }
    };
    FilterService.prototype.emitFilterChanged = function (sender) {
        if (sender === 'remote' && this._gridOptions && this._gridOptions.backendServiceApi) {
            var currentFilters = [];
            var backendService = this._gridOptions.backendServiceApi.service;
            if (backendService && backendService.getCurrentFilters) {
                currentFilters = (backendService.getCurrentFilters());
            }
            this.onFilterChanged.next(currentFilters);
        }
        else if (sender === 'local') {
            this.onFilterChanged.next(this.getCurrentLocalFilters());
        }
    };
    FilterService.prototype.populateColumnFilterSearchTerms = function () {
        if (this._gridOptions.presets && Array.isArray(this._gridOptions.presets.filters) && this._gridOptions.presets.filters.length > 0) {
            var filters_1 = this._gridOptions.presets.filters;
            this._columnDefinitions.forEach(function (columnDef) {
                if (columnDef.filter && columnDef.filter.searchTerms) {
                    delete columnDef.filter.searchTerms;
                }
                var columnPreset = filters_1.find(function (presetFilter) {
                    return presetFilter.columnId === columnDef.id;
                });
                if (columnPreset && columnPreset.searchTerms && Array.isArray(columnPreset.searchTerms)) {
                    columnDef.filter = columnDef.filter || {};
                    columnDef.filter.operator = columnPreset.operator || columnDef.filter.operator || '';
                    columnDef.filter.searchTerms = columnPreset.searchTerms;
                }
            });
        }
    };
    FilterService.prototype.updateColumnFilters = function (searchTerms, columnDef, operator) {
        if (searchTerms && columnDef) {
            this._columnFilters[columnDef.id] = {
                columnId: columnDef.id,
                columnDef: columnDef,
                searchTerms: searchTerms,
                operator: operator
            };
        }
    };
    FilterService.prototype.triggerEvent = function (slickEvent, args, e) {
        slickEvent = slickEvent || new Slick.Event();
        var event = e;
        if (e && typeof e.isPropagationStopped !== 'function') {
            event = $.extend({}, new Slick.EventData(), e);
        }
        slickEvent.notify(args, event, args.grid);
    };
    return FilterService;
}());
FilterService.decorators = [
    { type: Injectable },
];
FilterService.ctorParameters = function () { return [
    { type: FilterFactory, },
]; };
var SortService = /** @class */ (function () {
    function SortService() {
        this._currentLocalSorters = [];
        this._eventHandler = new Slick.EventHandler();
        this._isBackendGrid = false;
        this.onSortChanged = new Subject();
        this.onSortCleared = new Subject();
    }
    Object.defineProperty(SortService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortService.prototype, "_columnDefinitions", {
        get: function () {
            return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
        },
        enumerable: true,
        configurable: true
    });
    SortService.prototype.attachBackendOnSort = function (grid, dataView) {
        this._isBackendGrid = true;
        this._grid = grid;
        this._dataView = dataView;
        this._slickSubscriber = grid.onSort;
        this._slickSubscriber.subscribe(this.onBackendSortChanged.bind(this));
    };
    SortService.prototype.onBackendSortChanged = function (event, args) {
        return __awaiter(this, void 0, void 0, function () {
            var gridOptions, backendApi, startTime, query, observableOrPromise, processResult, endTime, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!args || !args.grid) {
                            throw new Error('Something went wrong when trying to attach the "onBackendSortChanged(event, args)" function, it seems that "args" is not populated correctly');
                        }
                        gridOptions = args.grid.getOptions() || {};
                        backendApi = gridOptions.backendServiceApi;
                        if (!backendApi || !backendApi.process || !backendApi.service) {
                            throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        startTime = new Date();
                        if (backendApi.preProcess) {
                            backendApi.preProcess();
                        }
                        query = backendApi.service.processOnSortChanged(event, args);
                        this.emitSortChanged('remote');
                        observableOrPromise = backendApi.process(query);
                        return [4 /*yield*/, castToPromise(observableOrPromise)];
                    case 2:
                        processResult = _a.sent();
                        endTime = new Date();
                        if (processResult && backendApi.internalPostProcess) {
                            backendApi.internalPostProcess(processResult);
                        }
                        if (backendApi.postProcess) {
                            if (processResult instanceof Object) {
                                processResult.statistics = {
                                    startTime: startTime,
                                    endTime: endTime,
                                    executionTime: endTime.valueOf() - startTime.valueOf(),
                                    totalItemCount: this._gridOptions && this._gridOptions.pagination && this._gridOptions.pagination.totalItems
                                };
                            }
                            backendApi.postProcess(processResult);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        if (backendApi && backendApi.onError) {
                            backendApi.onError(e_6);
                        }
                        else {
                            throw e_6;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SortService.prototype.attachLocalOnSort = function (grid, dataView) {
        var _this = this;
        this._isBackendGrid = false;
        this._grid = grid;
        this._dataView = dataView;
        this._slickSubscriber = grid.onSort;
        this._slickSubscriber.subscribe(function (e, args) {
            var sortColumns = (args.multiColumnSort) ? args.sortCols : new Array({ sortAsc: args.sortAsc, sortCol: args.sortCol });
            _this._currentLocalSorters = [];
            if (Array.isArray(sortColumns)) {
                sortColumns.forEach(function (sortColumn) {
                    if (sortColumn.sortCol) {
                        _this._currentLocalSorters.push({
                            columnId: sortColumn.sortCol.id,
                            direction: sortColumn.sortAsc ? SortDirection.ASC : SortDirection.DESC
                        });
                    }
                });
            }
            _this.onLocalSortChanged(grid, dataView, sortColumns);
            _this.emitSortChanged('local');
        });
    };
    SortService.prototype.clearSorting = function () {
        if (this._grid && this._gridOptions && this._dataView) {
            this._grid.setSortColumns([]);
            if (this._isBackendGrid) {
                this.onBackendSortChanged(undefined, { grid: this._grid, sortCols: [] });
            }
            else {
                if (this._columnDefinitions && Array.isArray(this._columnDefinitions)) {
                    this.onLocalSortChanged(this._grid, this._dataView, new Array({ sortAsc: true, sortCol: this._columnDefinitions[0] }));
                }
            }
        }
        this._currentLocalSorters = [];
        this.onSortCleared.next(true);
    };
    SortService.prototype.getCurrentLocalSorters = function () {
        return this._currentLocalSorters;
    };
    SortService.prototype.getPreviousColumnSorts = function (columnId) {
        var _this = this;
        var oldSortColumns = this._grid && this._grid.getSortColumns();
        if (Array.isArray(oldSortColumns)) {
            var sortedCols = oldSortColumns.reduce(function (cols, col) {
                if (!columnId || col.columnId !== columnId) {
                    cols.push({ sortCol: _this._columnDefinitions[_this._grid.getColumnIndex(col.columnId)], sortAsc: col.sortAsc });
                }
                return cols;
            }, []);
            return sortedCols;
        }
        return [];
    };
    SortService.prototype.loadLocalPresets = function (grid, dataView) {
        var _this = this;
        var sortCols = [];
        this._currentLocalSorters = [];
        if (this._gridOptions && this._gridOptions.presets && this._gridOptions.presets.sorters) {
            var sorters = this._gridOptions.presets.sorters;
            sorters.forEach(function (presetSorting) {
                var gridColumn = _this._columnDefinitions.find(function (col) { return col.id === presetSorting.columnId; });
                if (gridColumn) {
                    sortCols.push({
                        columnId: gridColumn.id,
                        sortAsc: ((presetSorting.direction.toUpperCase() === SortDirection.ASC) ? true : false),
                        sortCol: gridColumn
                    });
                    _this._currentLocalSorters.push({
                        columnId: gridColumn.id + '',
                        direction: (presetSorting.direction.toUpperCase())
                    });
                }
            });
            if (sortCols.length > 0) {
                this.onLocalSortChanged(grid, dataView, sortCols);
                grid.setSortColumns(sortCols);
            }
        }
    };
    SortService.prototype.onLocalSortChanged = function (grid, dataView, sortColumns) {
        if (grid && dataView) {
            dataView.sort(function (dataRow1, dataRow2) {
                for (var i = 0, l = sortColumns.length; i < l; i++) {
                    var columnSortObj = sortColumns[i];
                    if (columnSortObj && columnSortObj.sortCol) {
                        var sortDirection = columnSortObj.sortAsc ? SortDirectionNumber.asc : SortDirectionNumber.desc;
                        var sortField = columnSortObj.sortCol.queryField || columnSortObj.sortCol.queryFieldFilter || columnSortObj.sortCol.field;
                        var fieldType = columnSortObj.sortCol.type || FieldType.string;
                        var value1 = dataRow1[sortField];
                        var value2 = dataRow2[sortField];
                        if (sortField && sortField.indexOf('.') >= 0) {
                            value1 = getDescendantProperty(dataRow1, sortField);
                            value2 = getDescendantProperty(dataRow2, sortField);
                        }
                        var sortResult = sortByFieldType(value1, value2, fieldType, sortDirection);
                        if (sortResult !== SortDirectionNumber.neutral) {
                            return sortResult;
                        }
                    }
                }
                return SortDirectionNumber.neutral;
            });
            grid.invalidate();
            grid.render();
        }
    };
    SortService.prototype.dispose = function () {
        if (this._slickSubscriber && typeof this._slickSubscriber.unsubscribe === 'function') {
            this._slickSubscriber.unsubscribe();
        }
        this._eventHandler.unsubscribeAll();
    };
    SortService.prototype.emitSortChanged = function (sender) {
        if (sender === 'remote' && this._gridOptions && this._gridOptions.backendServiceApi) {
            var currentSorters = [];
            var backendService = this._gridOptions.backendServiceApi.service;
            if (backendService && backendService.getCurrentSorters) {
                currentSorters = (backendService.getCurrentSorters());
            }
            this.onSortChanged.next(currentSorters);
        }
        else if (sender === 'local') {
            this.onSortChanged.next(this.getCurrentLocalSorters());
        }
    };
    return SortService;
}());
var GridMenuExtension = /** @class */ (function () {
    function GridMenuExtension(exportService, extensionUtility, filterService, sharedService, sortService, translate) {
        this.exportService = exportService;
        this.extensionUtility = extensionUtility;
        this.filterService = filterService;
        this.sharedService = sharedService;
        this.sortService = sortService;
        this.translate = translate;
        this._areVisibleColumnDifferent = false;
        this._eventHandler = new Slick.EventHandler();
    }
    GridMenuExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    GridMenuExtension.prototype.register = function () {
        var _this = this;
        this._userOriginalGridMenu = Object.assign({}, this.sharedService.gridOptions.gridMenu);
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.gridMenu);
            this.sharedService.gridOptions.gridMenu = Object.assign({}, this.getDefaultGridMenuOptions(), this.sharedService.gridOptions.gridMenu);
            this.sharedService.gridOptions.gridMenu.customItems = __spread(this._userOriginalGridMenu.customItems || [], this.addGridMenuCustomCommands());
            this.extensionUtility.translateItems(this.sharedService.gridOptions.gridMenu.customItems, 'titleKey', 'title');
            this.extensionUtility.sortItems(this.sharedService.gridOptions.gridMenu.customItems, 'positionOrder');
            this._extension = new Slick.Controls.GridMenu(this.sharedService.columnDefinitions, this.sharedService.grid, this.sharedService.gridOptions);
            if (this.sharedService.grid && this.sharedService.gridOptions.gridMenu) {
                this._eventHandler.subscribe(this._extension.onBeforeMenuShow, function (e, args) {
                    if (_this.sharedService.gridOptions.gridMenu && typeof _this.sharedService.gridOptions.gridMenu.onBeforeMenuShow === 'function') {
                        _this.sharedService.gridOptions.gridMenu.onBeforeMenuShow(e, args);
                    }
                });
                this._eventHandler.subscribe(this._extension.onColumnsChanged, function (e, args) {
                    _this._areVisibleColumnDifferent = true;
                    if (_this.sharedService.gridOptions.gridMenu && typeof _this.sharedService.gridOptions.gridMenu.onColumnsChanged === 'function') {
                        _this.sharedService.gridOptions.gridMenu.onColumnsChanged(e, args);
                    }
                });
                this._eventHandler.subscribe(this._extension.onCommand, function (e, args) {
                    _this.executeGridMenuInternalCustomCommands(e, args);
                    if (_this.sharedService.gridOptions.gridMenu && typeof _this.sharedService.gridOptions.gridMenu.onCommand === 'function') {
                        _this.sharedService.gridOptions.gridMenu.onCommand(e, args);
                    }
                });
                this._eventHandler.subscribe(this._extension.onMenuClose, function (e, args) {
                    if (_this.sharedService.gridOptions.gridMenu && typeof _this.sharedService.gridOptions.gridMenu.onMenuClose === 'function') {
                        _this.sharedService.gridOptions.gridMenu.onMenuClose(e, args);
                    }
                    if (_this.sharedService.grid && typeof _this.sharedService.grid.autosizeColumns === 'function') {
                        var gridUid = _this.sharedService.grid.getUID();
                        if (_this._areVisibleColumnDifferent && gridUid && $("." + gridUid).length > 0) {
                            if (_this.sharedService.gridOptions && _this.sharedService.gridOptions.enableAutoSizeColumns) {
                                _this.sharedService.grid.autosizeColumns();
                            }
                            _this._areVisibleColumnDifferent = false;
                        }
                    }
                });
            }
            return this._extension;
        }
        return null;
    };
    GridMenuExtension.prototype.executeGridMenuInternalCustomCommands = function (e, args) {
        if (args && args.command) {
            switch (args.command) {
                case 'clear-filter':
                    this.filterService.clearFilters();
                    this.sharedService.dataView.refresh();
                    break;
                case 'clear-sorting':
                    this.sortService.clearSorting();
                    this.sharedService.dataView.refresh();
                    break;
                case 'export-csv':
                    this.exportService.exportToFile({
                        delimiter: DelimiterType.comma,
                        filename: 'export',
                        format: FileType.csv,
                        useUtf8WithBom: true
                    });
                    break;
                case 'export-text-delimited':
                    this.exportService.exportToFile({
                        delimiter: DelimiterType.tab,
                        filename: 'export',
                        format: FileType.txt,
                        useUtf8WithBom: true
                    });
                    break;
                case 'toggle-filter':
                    this.sharedService.grid.setHeaderRowVisibility(!this.sharedService.grid.getOptions().showHeaderRow);
                    break;
                case 'toggle-toppanel':
                    this.sharedService.grid.setTopPanelVisibility(!this.sharedService.grid.getOptions().showTopPanel);
                    break;
                case 'toggle-preheader':
                    this.sharedService.grid.setPreHeaderPanelVisibility(!this.sharedService.grid.getOptions().showPreHeaderPanel);
                    break;
                case 'refresh-dataset':
                    this.refreshBackendDataset();
                    break;
                default:
                    break;
            }
        }
    };
    GridMenuExtension.prototype.refreshBackendDataset = function (gridOptions) {
        var _this = this;
        var query = '';
        if (gridOptions) {
            this.sharedService.gridOptions = Object.assign({}, this.sharedService.gridOptions, gridOptions);
        }
        var backendApi = this.sharedService.gridOptions.backendServiceApi;
        if (!backendApi || !backendApi.service || !backendApi.process) {
            throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
        }
        if (backendApi.service) {
            query = backendApi.service.buildQuery();
        }
        if (query && query !== '') {
            var startTime_1 = new Date();
            if (backendApi.preProcess) {
                backendApi.preProcess();
            }
            var observableOrPromise = backendApi.process(query);
            castToPromise(observableOrPromise).then(function (processResult) {
                var endTime = new Date();
                if (processResult && backendApi && backendApi.internalPostProcess) {
                    backendApi.internalPostProcess(processResult);
                }
                if (backendApi && backendApi.postProcess) {
                    if (processResult instanceof Object) {
                        processResult.statistics = {
                            startTime: startTime_1,
                            endTime: endTime,
                            executionTime: endTime.valueOf() - startTime_1.valueOf(),
                            totalItemCount: _this.sharedService.gridOptions && _this.sharedService.gridOptions.pagination && _this.sharedService.gridOptions.pagination.totalItems
                        };
                    }
                    backendApi.postProcess(processResult);
                }
            });
        }
    };
    GridMenuExtension.prototype.addGridMenuCustomCommands = function () {
        var backendApi = this.sharedService.gridOptions.backendServiceApi || null;
        var gridMenuCustomItems = [];
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.enableFiltering) {
            if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideClearAllFiltersCommand) {
                gridMenuCustomItems.push({
                    iconCssClass: this.sharedService.gridOptions.gridMenu.iconClearAllFiltersCommand || 'fa fa-filter text-danger',
                    title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('CLEAR_ALL_FILTERS') : Constants.TEXT_CLEAR_ALL_FILTERS,
                    disabled: false,
                    command: 'clear-filter',
                    positionOrder: 50
                });
            }
            if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideToggleFilterCommand) {
                gridMenuCustomItems.push({
                    iconCssClass: this.sharedService.gridOptions.gridMenu.iconToggleFilterCommand || 'fa fa-random',
                    title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('TOGGLE_FILTER_ROW') : Constants.TEXT_TOGGLE_FILTER_ROW,
                    disabled: false,
                    command: 'toggle-filter',
                    positionOrder: 52
                });
            }
            if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideRefreshDatasetCommand && backendApi) {
                gridMenuCustomItems.push({
                    iconCssClass: this.sharedService.gridOptions.gridMenu.iconRefreshDatasetCommand || 'fa fa-refresh',
                    title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('REFRESH_DATASET') : Constants.TEXT_REFRESH_DATASET,
                    disabled: false,
                    command: 'refresh-dataset',
                    positionOrder: 54
                });
            }
        }
        if (this.sharedService.gridOptions.showPreHeaderPanel) {
            if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideTogglePreHeaderCommand) {
                gridMenuCustomItems.push({
                    iconCssClass: this.sharedService.gridOptions.gridMenu.iconTogglePreHeaderCommand || 'fa fa-random',
                    title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('TOGGLE_PRE_HEADER_ROW') : Constants.TEXT_TOGGLE_PRE_HEADER_ROW,
                    disabled: false,
                    command: 'toggle-preheader',
                    positionOrder: 52
                });
            }
        }
        if (this.sharedService.gridOptions.enableSorting) {
            if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideClearAllSortingCommand) {
                gridMenuCustomItems.push({
                    iconCssClass: this.sharedService.gridOptions.gridMenu.iconClearAllSortingCommand || 'fa fa-unsorted text-danger',
                    title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('CLEAR_ALL_SORTING') : Constants.TEXT_CLEAR_ALL_SORTING,
                    disabled: false,
                    command: 'clear-sorting',
                    positionOrder: 51
                });
            }
        }
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.enableExport && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideExportCsvCommand) {
            gridMenuCustomItems.push({
                iconCssClass: this.sharedService.gridOptions.gridMenu.iconExportCsvCommand || 'fa fa-download',
                title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('EXPORT_TO_CSV') : Constants.TEXT_EXPORT_IN_CSV_FORMAT,
                disabled: false,
                command: 'export-csv',
                positionOrder: 53
            });
        }
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.enableExport && this.sharedService.gridOptions.gridMenu && !this.sharedService.gridOptions.gridMenu.hideExportTextDelimitedCommand) {
            gridMenuCustomItems.push({
                iconCssClass: this.sharedService.gridOptions.gridMenu.iconExportTextDelimitedCommand || 'fa fa-download',
                title: this.sharedService.gridOptions.enableTranslate ? this.translate.instant('EXPORT_TO_TAB_DELIMITED') : Constants.TEXT_EXPORT_IN_TEXT_FORMAT,
                disabled: false,
                command: 'export-text-delimited',
                positionOrder: 54
            });
        }
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu && (gridMenuCustomItems.length > 0 || (this.sharedService.gridOptions.gridMenu.customItems && this.sharedService.gridOptions.gridMenu.customItems.length > 0))) {
            this.sharedService.gridOptions.gridMenu.customTitle = this.sharedService.gridOptions.gridMenu.customTitle || this.extensionUtility.getPickerTitleOutputString('customTitle', 'gridMenu');
        }
        return gridMenuCustomItems;
    };
    GridMenuExtension.prototype.executeHeaderMenuInternalCommands = function (e, args) {
        if (args && args.command) {
            switch (args.command) {
                case 'hide':
                    this.hideColumn(args.column);
                    if (this.sharedService.gridOptions && this.sharedService.gridOptions.enableAutoSizeColumns) {
                        this.sharedService.grid.autosizeColumns();
                    }
                    break;
                case 'sort-asc':
                case 'sort-desc':
                    var cols = this.sortService.getPreviousColumnSorts(args.column.id + '');
                    cols.push({ sortCol: args.column, sortAsc: (args.command === 'sort-asc') });
                    if (this.sharedService.gridOptions.backendServiceApi) {
                        this.sortService.onBackendSortChanged(e, { multiColumnSort: true, sortCols: cols, grid: this.sharedService.grid });
                    }
                    else {
                        this.sortService.onLocalSortChanged(this.sharedService.grid, this.sharedService.dataView, cols);
                    }
                    var newSortColumns = cols.map(function (col) {
                        return {
                            columnId: col && col.sortCol && col.sortCol.id,
                            sortAsc: col && col.sortAsc
                        };
                    });
                    this.sharedService.grid.setSortColumns(newSortColumns);
                    break;
                default:
                    break;
            }
        }
    };
    GridMenuExtension.prototype.hideColumn = function (column) {
        if (this.sharedService.grid && this.sharedService.grid.getColumns && this.sharedService.grid.setColumns) {
            var columnIndex = this.sharedService.grid.getColumnIndex(column.id);
            this.sharedService.visibleColumns = this.extensionUtility.arrayRemoveItemByIndex(this.sharedService.grid.getColumns(), columnIndex);
            this.sharedService.grid.setColumns(this.sharedService.visibleColumns);
        }
    };
    GridMenuExtension.prototype.translateGridMenu = function () {
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu) {
            this.sharedService.gridOptions.gridMenu.customItems = [];
            this.emptyGridMenuTitles();
            this.sharedService.gridOptions.gridMenu.customItems = __spread(this._userOriginalGridMenu.customItems || [], this.addGridMenuCustomCommands());
            this.extensionUtility.translateItems(this.sharedService.gridOptions.gridMenu.customItems, 'titleKey', 'title');
            this.extensionUtility.sortItems(this.sharedService.gridOptions.gridMenu.customItems, 'positionOrder');
            this.sharedService.gridOptions.gridMenu.columnTitle = this.extensionUtility.getPickerTitleOutputString('columnTitle', 'gridMenu');
            this.sharedService.gridOptions.gridMenu.forceFitTitle = this.extensionUtility.getPickerTitleOutputString('forceFitTitle', 'gridMenu');
            this.sharedService.gridOptions.gridMenu.syncResizeTitle = this.extensionUtility.getPickerTitleOutputString('syncResizeTitle', 'gridMenu');
            this.extensionUtility.translateItems(this.sharedService.allColumns, 'headerKey', 'name');
            if (this._extension.init) {
                this._extension.init(this.sharedService.grid);
            }
        }
    };
    GridMenuExtension.prototype.emptyGridMenuTitles = function () {
        if (this.sharedService && this.sharedService.gridOptions && this.sharedService.gridOptions.gridMenu) {
            this.sharedService.gridOptions.gridMenu.customTitle = '';
            this.sharedService.gridOptions.gridMenu.columnTitle = '';
            this.sharedService.gridOptions.gridMenu.forceFitTitle = '';
            this.sharedService.gridOptions.gridMenu.syncResizeTitle = '';
        }
    };
    GridMenuExtension.prototype.getDefaultGridMenuOptions = function () {
        return {
            customTitle: undefined,
            columnTitle: this.extensionUtility.getPickerTitleOutputString('columnTitle', 'gridMenu'),
            forceFitTitle: this.extensionUtility.getPickerTitleOutputString('forceFitTitle', 'gridMenu'),
            syncResizeTitle: this.extensionUtility.getPickerTitleOutputString('syncResizeTitle', 'gridMenu'),
            iconCssClass: 'fa fa-bars',
            menuWidth: 18,
            customItems: [],
            hideClearAllFiltersCommand: false,
            hideRefreshDatasetCommand: false,
            hideToggleFilterCommand: false,
        };
    };
    return GridMenuExtension;
}());
GridMenuExtension.decorators = [
    { type: Injectable },
];
GridMenuExtension.ctorParameters = function () { return [
    { type: ExportService, },
    { type: ExtensionUtility, },
    { type: FilterService, },
    { type: SharedService, },
    { type: SortService, },
    { type: TranslateService, },
]; };
var GroupItemMetaProviderExtension = /** @class */ (function () {
    function GroupItemMetaProviderExtension(sharedService) {
        this.sharedService = sharedService;
    }
    GroupItemMetaProviderExtension.prototype.dispose = function () {
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    GroupItemMetaProviderExtension.prototype.register = function () {
        if (this.sharedService && this.sharedService.grid) {
            this._extension = this.sharedService.groupItemMetadataProvider || {};
            this.sharedService.grid.registerPlugin(this._extension);
            return this._extension;
        }
        return null;
    };
    return GroupItemMetaProviderExtension;
}());
GroupItemMetaProviderExtension.decorators = [
    { type: Injectable },
];
GroupItemMetaProviderExtension.ctorParameters = function () { return [
    { type: SharedService, },
]; };
var HeaderButtonExtension = /** @class */ (function () {
    function HeaderButtonExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
        this._eventHandler = new Slick.EventHandler();
    }
    HeaderButtonExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    HeaderButtonExtension.prototype.register = function () {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.headerButton);
            this._extension = new Slick.Plugins.HeaderButtons(this.sharedService.gridOptions.headerButton || {});
            this.sharedService.grid.registerPlugin(this._extension);
            this._eventHandler.subscribe(this._extension.onCommand, function (e, args) {
                if (_this.sharedService.gridOptions.headerButton && typeof _this.sharedService.gridOptions.headerButton.onCommand === 'function') {
                    _this.sharedService.gridOptions.headerButton.onCommand(e, args);
                }
            });
            return this._extension;
        }
        return null;
    };
    return HeaderButtonExtension;
}());
HeaderButtonExtension.decorators = [
    { type: Injectable },
];
HeaderButtonExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var HeaderMenuExtension = /** @class */ (function () {
    function HeaderMenuExtension(extensionUtility, sharedService, sortService, translate) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
        this.sortService = sortService;
        this.translate = translate;
        this._eventHandler = new Slick.EventHandler();
    }
    HeaderMenuExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    HeaderMenuExtension.prototype.register = function () {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.headerMenu);
            this.sharedService.gridOptions.headerMenu = Object.assign({}, this.getDefaultHeaderMenuOptions(), this.sharedService.gridOptions.headerMenu);
            if (this.sharedService.gridOptions.enableHeaderMenu) {
                this.sharedService.gridOptions.headerMenu = this.addHeaderMenuCustomCommands(this.sharedService.gridOptions, this.sharedService.columnDefinitions);
            }
            this._extension = new Slick.Plugins.HeaderMenu(this.sharedService.gridOptions.headerMenu);
            this.sharedService.grid.registerPlugin(this._extension);
            this._eventHandler.subscribe(this._extension.onCommand, function (e, args) {
                _this.executeHeaderMenuInternalCommands(e, args);
                if (_this.sharedService.gridOptions.headerMenu && typeof _this.sharedService.gridOptions.headerMenu.onCommand === 'function') {
                    _this.sharedService.gridOptions.headerMenu.onCommand(e, args);
                }
            });
            this._eventHandler.subscribe(this._extension.onBeforeMenuShow, function (e, args) {
                if (_this.sharedService.gridOptions.headerMenu && typeof _this.sharedService.gridOptions.headerMenu.onBeforeMenuShow === 'function') {
                    _this.sharedService.gridOptions.headerMenu.onBeforeMenuShow(e, args);
                }
            });
            return this._extension;
        }
        return null;
    };
    HeaderMenuExtension.prototype.addHeaderMenuCustomCommands = function (options, columnDefinitions) {
        var _this = this;
        var headerMenuOptions = options.headerMenu || {};
        if (columnDefinitions && Array.isArray(columnDefinitions) && options.enableHeaderMenu) {
            columnDefinitions.forEach(function (columnDef) {
                if (columnDef && !columnDef.excludeFromHeaderMenu) {
                    if (!columnDef.header || !columnDef.header.menu) {
                        columnDef.header = {
                            menu: {
                                items: []
                            }
                        };
                    }
                    var columnHeaderMenuItems = columnDef && columnDef.header && columnDef.header.menu && columnDef.header.menu.items || [];
                    if (options.enableSorting && columnDef.sortable && headerMenuOptions && !headerMenuOptions.hideSortCommands) {
                        if (columnHeaderMenuItems.filter(function (item) { return item.command === 'sort-asc'; }).length === 0) {
                            columnHeaderMenuItems.push({
                                iconCssClass: headerMenuOptions.iconSortAscCommand || 'fa fa-sort-asc',
                                title: options.enableTranslate ? _this.translate.instant('SORT_ASCENDING') : Constants.TEXT_SORT_ASCENDING,
                                command: 'sort-asc',
                                positionOrder: 50
                            });
                        }
                        if (columnHeaderMenuItems.filter(function (item) { return item.command === 'sort-desc'; }).length === 0) {
                            columnHeaderMenuItems.push({
                                iconCssClass: headerMenuOptions.iconSortDescCommand || 'fa fa-sort-desc',
                                title: options.enableTranslate ? _this.translate.instant('SORT_DESCENDING') : Constants.TEXT_SORT_DESCENDING,
                                command: 'sort-desc',
                                positionOrder: 51
                            });
                        }
                    }
                    if (headerMenuOptions && !headerMenuOptions.hideColumnHideCommand && columnHeaderMenuItems.filter(function (item) { return item.command === 'hide'; }).length === 0) {
                        columnHeaderMenuItems.push({
                            iconCssClass: headerMenuOptions.iconColumnHideCommand || 'fa fa-times',
                            title: options.enableTranslate ? _this.translate.instant('HIDE_COLUMN') : Constants.TEXT_HIDE_COLUMN,
                            command: 'hide',
                            positionOrder: 52
                        });
                    }
                    _this.extensionUtility.translateItems(columnHeaderMenuItems, 'titleKey', 'title');
                    columnHeaderMenuItems.sort(function (itemA, itemB) {
                        if (itemA && itemB && itemA.hasOwnProperty('positionOrder') && itemB.hasOwnProperty('positionOrder')) {
                            return itemA.positionOrder - itemB.positionOrder;
                        }
                        return 0;
                    });
                }
            });
        }
        return headerMenuOptions;
    };
    HeaderMenuExtension.prototype.executeHeaderMenuInternalCommands = function (e, args) {
        if (args && args.command) {
            switch (args.command) {
                case 'hide':
                    this.hideColumn(args.column);
                    if (this.sharedService.gridOptions && this.sharedService.gridOptions.enableAutoSizeColumns) {
                        this.sharedService.grid.autosizeColumns();
                    }
                    break;
                case 'sort-asc':
                case 'sort-desc':
                    var cols = this.sortService.getPreviousColumnSorts(args.column.id + '');
                    cols.push({ sortCol: args.column, sortAsc: (args.command === 'sort-asc') });
                    if (this.sharedService.gridOptions.backendServiceApi) {
                        this.sortService.onBackendSortChanged(e, { multiColumnSort: true, sortCols: cols, grid: this.sharedService.grid });
                    }
                    else if (this.sharedService.dataView) {
                        this.sortService.onLocalSortChanged(this.sharedService.grid, this.sharedService.dataView, cols);
                    }
                    else {
                        var isMultiSort = this.sharedService && this.sharedService.gridOptions && this.sharedService.gridOptions.multiColumnSort || false;
                        var sortOutput = isMultiSort ? cols : cols[0];
                        args.grid.onSort.notify(sortOutput);
                    }
                    var newSortColumns = cols.map(function (col) {
                        return {
                            columnId: col && col.sortCol && col.sortCol.id,
                            sortAsc: col && col.sortAsc
                        };
                    });
                    this.sharedService.grid.setSortColumns(newSortColumns);
                    break;
                default:
                    break;
            }
        }
    };
    HeaderMenuExtension.prototype.hideColumn = function (column) {
        if (this.sharedService.grid && this.sharedService.grid.getColumns && this.sharedService.grid.setColumns) {
            var columnIndex = this.sharedService.grid.getColumnIndex(column.id);
            this.sharedService.visibleColumns = this.extensionUtility.arrayRemoveItemByIndex(this.sharedService.grid.getColumns(), columnIndex);
            this.sharedService.grid.setColumns(this.sharedService.visibleColumns);
        }
    };
    HeaderMenuExtension.prototype.resetHeaderMenuTranslations = function (columnDefinitions) {
        var _this = this;
        columnDefinitions.forEach(function (columnDef) {
            if (columnDef && columnDef.header && columnDef.header && columnDef.header.menu && columnDef.header.menu.items) {
                if (!columnDef.excludeFromHeaderMenu) {
                    var columnHeaderMenuItems_1 = columnDef.header.menu.items || [];
                    columnHeaderMenuItems_1.forEach(function (item) {
                        switch (item.command) {
                            case 'sort-asc':
                                item.title = _this.translate.instant('SORT_ASCENDING') || Constants.TEXT_SORT_ASCENDING;
                                break;
                            case 'sort-desc':
                                item.title = _this.translate.instant('SORT_DESCENDING') || Constants.TEXT_SORT_DESCENDING;
                                break;
                            case 'hide':
                                item.title = _this.translate.instant('HIDE_COLUMN') || Constants.TEXT_HIDE_COLUMN;
                                break;
                        }
                        if (_this.sharedService.gridOptions && _this.sharedService.gridOptions.enableTranslate) {
                            _this.extensionUtility.translateItems(columnHeaderMenuItems_1, 'titleKey', 'title');
                        }
                    });
                }
            }
        });
    };
    HeaderMenuExtension.prototype.translateHeaderMenu = function () {
        if (this.sharedService.gridOptions && this.sharedService.gridOptions.headerMenu) {
            this.resetHeaderMenuTranslations(this.sharedService.visibleColumns);
        }
    };
    HeaderMenuExtension.prototype.getDefaultHeaderMenuOptions = function () {
        return {
            autoAlignOffset: 12,
            minWidth: 140,
            hideColumnHideCommand: false,
            hideSortCommands: false,
            title: ''
        };
    };
    return HeaderMenuExtension;
}());
HeaderMenuExtension.decorators = [
    { type: Injectable },
];
HeaderMenuExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
    { type: SortService, },
    { type: TranslateService, },
]; };
var RowMoveManagerExtension = /** @class */ (function () {
    function RowMoveManagerExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
        this._eventHandler = new Slick.EventHandler();
    }
    RowMoveManagerExtension.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    RowMoveManagerExtension.prototype.register = function (rowSelectionPlugin) {
        var _this = this;
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.rowMoveManager);
            if (!rowSelectionPlugin || !this.sharedService.grid.getSelectionModel()) {
                this.extensionUtility.loadExtensionDynamically(ExtensionName.rowSelection);
                rowSelectionPlugin = new Slick.RowSelectionModel(this.sharedService.gridOptions.rowSelectionOptions || {});
                this.sharedService.grid.setSelectionModel(rowSelectionPlugin);
            }
            this._extension = new Slick.RowMoveManager(this.sharedService.gridOptions.rowMoveManager || { cancelEditOnDrag: true });
            this.sharedService.grid.registerPlugin(this._extension);
            if (this.sharedService.grid && this.sharedService.gridOptions.rowMoveManager) {
                this._eventHandler.subscribe(this._extension.onBeforeMoveRows, function (e, args) {
                    if (_this.sharedService.gridOptions.rowMoveManager && typeof _this.sharedService.gridOptions.rowMoveManager.onBeforeMoveRows === 'function') {
                        _this.sharedService.gridOptions.rowMoveManager.onBeforeMoveRows(e, args);
                    }
                });
                this._eventHandler.subscribe(this._extension.onMoveRows, function (e, args) {
                    if (_this.sharedService.gridOptions.rowMoveManager && typeof _this.sharedService.gridOptions.rowMoveManager.onMoveRows === 'function') {
                        _this.sharedService.gridOptions.rowMoveManager.onMoveRows(e, args);
                    }
                });
            }
            return this._extension;
        }
        return null;
    };
    return RowMoveManagerExtension;
}());
RowMoveManagerExtension.decorators = [
    { type: Injectable },
];
RowMoveManagerExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var RowSelectionExtension = /** @class */ (function () {
    function RowSelectionExtension(extensionUtility, sharedService) {
        this.extensionUtility = extensionUtility;
        this.sharedService = sharedService;
    }
    RowSelectionExtension.prototype.dispose = function () {
        if (this._extension && this._extension.destroy) {
            this._extension.destroy();
        }
    };
    RowSelectionExtension.prototype.register = function () {
        if (this.sharedService && this.sharedService.grid && this.sharedService.gridOptions) {
            this.extensionUtility.loadExtensionDynamically(ExtensionName.rowSelection);
            this._extension = new Slick.RowSelectionModel(this.sharedService.gridOptions.rowSelectionOptions || {});
            this.sharedService.grid.setSelectionModel(this._extension);
            return this._extension;
        }
        return null;
    };
    return RowSelectionExtension;
}());
RowSelectionExtension.decorators = [
    { type: Injectable },
];
RowSelectionExtension.ctorParameters = function () { return [
    { type: ExtensionUtility, },
    { type: SharedService, },
]; };
var ExtensionService = /** @class */ (function () {
    function ExtensionService(autoTooltipExtension, cellExternalCopyExtension, checkboxSelectorExtension, columnPickerExtension, draggableGroupingExtension, gridMenuExtension, groupItemMetaExtension, headerButtonExtension, headerMenuExtension, rowMoveManagerExtension, rowSelectionExtension, sharedService, translate) {
        this.autoTooltipExtension = autoTooltipExtension;
        this.cellExternalCopyExtension = cellExternalCopyExtension;
        this.checkboxSelectorExtension = checkboxSelectorExtension;
        this.columnPickerExtension = columnPickerExtension;
        this.draggableGroupingExtension = draggableGroupingExtension;
        this.gridMenuExtension = gridMenuExtension;
        this.groupItemMetaExtension = groupItemMetaExtension;
        this.headerButtonExtension = headerButtonExtension;
        this.headerMenuExtension = headerMenuExtension;
        this.rowMoveManagerExtension = rowMoveManagerExtension;
        this.rowSelectionExtension = rowSelectionExtension;
        this.sharedService = sharedService;
        this.translate = translate;
        this.extensionList = [];
    }
    ExtensionService.prototype.dispose = function () {
        this.sharedService.grid = null;
        this.sharedService.visibleColumns = [];
        this.extensionList.forEach(function (item) {
            if (item && item.class && item.class.dispose) {
                item.class.dispose();
            }
        });
        this.extensionList = [];
    };
    ExtensionService.prototype.getAllColumns = function () {
        return this.sharedService.allColumns || [];
    };
    ExtensionService.prototype.getVisibleColumns = function () {
        return this.sharedService.visibleColumns || [];
    };
    ExtensionService.prototype.getAllExtensions = function () {
        return this.extensionList;
    };
    ExtensionService.prototype.getExtensionByName = function (name) {
        return this.extensionList.find(function (p) { return p.name === name; });
    };
    ExtensionService.prototype.autoResizeColumns = function () {
        this.sharedService.grid.autosizeColumns();
    };
    ExtensionService.prototype.attachDifferentExtensions = function () {
        var _this = this;
        if (this.sharedService.gridOptions.enableTranslate) {
            this.translateItems(this.sharedService.allColumns, 'headerKey', 'name');
        }
        if (this.sharedService.gridOptions.enableAutoTooltip) {
            if (this.autoTooltipExtension && this.autoTooltipExtension.register) {
                this.extensionList.push({ name: ExtensionName.autoTooltip, class: this.autoTooltipExtension, extension: this.autoTooltipExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableColumnPicker) {
            if (this.columnPickerExtension && this.columnPickerExtension.register) {
                this.extensionList.push({ name: ExtensionName.columnPicker, class: this.columnPickerExtension, extension: this.columnPickerExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableDraggableGrouping) {
            if (this.draggableGroupingExtension && this.draggableGroupingExtension.register) {
                this.extensionList.push({ name: ExtensionName.draggableGrouping, class: this.draggableGroupingExtension, extension: this.draggableGroupingExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableGridMenu) {
            if (this.gridMenuExtension && this.gridMenuExtension.register) {
                this.extensionList.push({ name: ExtensionName.gridMenu, class: this.gridMenuExtension, extension: this.gridMenuExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableDraggableGrouping || this.sharedService.gridOptions.enableGrouping) {
            if (this.groupItemMetaExtension && this.groupItemMetaExtension.register) {
                this.extensionList.push({ name: ExtensionName.groupItemMetaProvider, class: this.groupItemMetaExtension, extension: this.groupItemMetaExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableCheckboxSelector) {
            if (this.checkboxSelectorExtension && this.checkboxSelectorExtension.register) {
                var rowSelectionExtension = this.getExtensionByName(ExtensionName.rowSelection);
                this.extensionList.push({ name: ExtensionName.checkboxSelector, class: this.checkboxSelectorExtension, extension: this.checkboxSelectorExtension.register(rowSelectionExtension) });
            }
        }
        if (this.sharedService.gridOptions.enableRowMoveManager) {
            if (this.rowMoveManagerExtension && this.rowMoveManagerExtension.register) {
                this.extensionList.push({ name: ExtensionName.rowMoveManager, class: this.rowMoveManagerExtension, extension: this.rowMoveManagerExtension.register() });
            }
        }
        if (!this.sharedService.gridOptions.enableCheckboxSelector && this.sharedService.gridOptions.enableRowSelection) {
            if (this.rowSelectionExtension && this.rowSelectionExtension.register) {
                this.extensionList.push({ name: ExtensionName.rowSelection, class: this.rowSelectionExtension, extension: this.rowSelectionExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableHeaderButton) {
            if (this.headerButtonExtension && this.headerButtonExtension.register) {
                this.extensionList.push({ name: ExtensionName.headerButton, class: this.headerButtonExtension, extension: this.headerButtonExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableHeaderMenu) {
            if (this.headerMenuExtension && this.headerMenuExtension.register) {
                this.extensionList.push({ name: ExtensionName.headerMenu, class: this.headerMenuExtension, extension: this.headerMenuExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.enableExcelCopyBuffer) {
            if (this.cellExternalCopyExtension && this.cellExternalCopyExtension.register) {
                this.extensionList.push({ name: ExtensionName.cellExternalCopyManager, class: this.cellExternalCopyExtension, extension: this.cellExternalCopyExtension.register() });
            }
        }
        if (this.sharedService.gridOptions.registerPlugins !== undefined) {
            if (Array.isArray(this.sharedService.gridOptions.registerPlugins)) {
                this.sharedService.gridOptions.registerPlugins.forEach(function (plugin) {
                    _this.sharedService.grid.registerPlugin(plugin);
                    _this.extensionList.push({ name: ExtensionName.noname, class: null, extension: plugin });
                });
            }
            else {
                this.sharedService.grid.registerPlugin(this.sharedService.gridOptions.registerPlugins);
                this.extensionList.push({ name: ExtensionName.noname, class: null, extension: this.sharedService.gridOptions.registerPlugins });
            }
        }
    };
    ExtensionService.prototype.createExtensionsBeforeGridCreation = function (columnDefinitions, options) {
        if (options.enableCheckboxSelector) {
            this.checkboxSelectorExtension.create(columnDefinitions, options);
        }
        if (options.enableDraggableGrouping) {
            var plugin = this.draggableGroupingExtension.create(options);
            options.enableColumnReorder = plugin.getSetupColumnReorder;
        }
    };
    ExtensionService.prototype.hideColumn = function (column) {
        if (this.sharedService && this.sharedService.grid && this.sharedService.grid.getColumns && this.sharedService.grid.setColumns) {
            var columnIndex = this.sharedService.grid.getColumnIndex(column.id);
            this.sharedService.visibleColumns = this.removeColumnByIndex(this.sharedService.grid.getColumns(), columnIndex);
            this.sharedService.grid.setColumns(this.sharedService.visibleColumns);
        }
    };
    ExtensionService.prototype.refreshBackendDataset = function (gridOptions) {
        this.gridMenuExtension.refreshBackendDataset(gridOptions);
    };
    ExtensionService.prototype.removeColumnByIndex = function (array, index) {
        return array.filter(function (el, i) {
            return index !== i;
        });
    };
    ExtensionService.prototype.translateColumnPicker = function () {
        if (this.columnPickerExtension && this.columnPickerExtension.translateColumnPicker) {
            this.columnPickerExtension.translateColumnPicker();
        }
    };
    ExtensionService.prototype.translateGridMenu = function () {
        if (this.gridMenuExtension && this.gridMenuExtension.translateGridMenu) {
            this.gridMenuExtension.translateGridMenu();
        }
    };
    ExtensionService.prototype.translateHeaderMenu = function () {
        if (this.headerMenuExtension && this.headerMenuExtension.translateHeaderMenu) {
            this.headerMenuExtension.translateHeaderMenu();
        }
    };
    ExtensionService.prototype.translateColumnHeaders = function (locale, newColumnDefinitions) {
        if (locale) {
            this.translate.use((locale));
        }
        var columnDefinitions = newColumnDefinitions || this.sharedService.columnDefinitions;
        this.translateItems(columnDefinitions, 'headerKey', 'name');
        this.translateItems(this.sharedService.allColumns, 'headerKey', 'name');
        this.renderColumnHeaders(columnDefinitions);
    };
    ExtensionService.prototype.renderColumnHeaders = function (newColumnDefinitions) {
        var collection = newColumnDefinitions || this.sharedService.columnDefinitions;
        if (Array.isArray(collection) && this.sharedService.grid && this.sharedService.grid.setColumns) {
            this.sharedService.grid.setColumns(collection);
        }
    };
    ExtensionService.prototype.translateItems = function (items, inputKey, outputKey) {
        try {
            for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                var item = items_2_1.value;
                if (item[inputKey]) {
                    item[outputKey] = this.translate.instant(item[inputKey]);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (items_2_1 && !items_2_1.done && (_a = items_2.return)) _a.call(items_2);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var e_7, _a;
    };
    return ExtensionService;
}());
ExtensionService.decorators = [
    { type: Injectable },
];
ExtensionService.ctorParameters = function () { return [
    { type: AutoTooltipExtension, },
    { type: CellExternalCopyManagerExtension, },
    { type: CheckboxSelectorExtension, },
    { type: ColumnPickerExtension, },
    { type: DraggableGroupingExtension, },
    { type: GridMenuExtension, },
    { type: GroupItemMetaProviderExtension, },
    { type: HeaderButtonExtension, },
    { type: HeaderMenuExtension, },
    { type: RowMoveManagerExtension, },
    { type: RowSelectionExtension, },
    { type: SharedService, },
    { type: TranslateService, },
]; };
var GraphqlQueryBuilder = /** @class */ (function () {
    function GraphqlQueryBuilder(queryFnName, aliasOrFilter) {
        this.queryFnName = queryFnName;
        this.head = [];
        if (typeof aliasOrFilter === 'function') {
            this.alias = aliasOrFilter;
        }
        else if (typeof aliasOrFilter === 'object') {
            this.filter(aliasOrFilter);
        }
        else if (undefined === aliasOrFilter && 2 === arguments.length) {
            throw new TypeError("You have passed undefined as Second argument to \"Query\"");
        }
        else if (undefined !== aliasOrFilter) {
            throw new TypeError("Second argument to \"Query\" should be an alias name(String) or filter arguments(Object). was passed " + aliasOrFilter);
        }
    }
    GraphqlQueryBuilder.prototype.filter = function (filters) {
        try {
            for (var _a = __values(Object.keys(filters)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var prop = _b.value;
                if (typeof filters[prop] === 'function') {
                    continue;
                }
                var val = this.getGraphQLValue(filters[prop]);
                if (val === '{}') {
                    continue;
                }
                this.head.push(prop + ":" + val);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return this;
        var e_8, _c;
    };
    GraphqlQueryBuilder.prototype.find = function () {
        var searches = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            searches[_i] = arguments[_i];
        }
        if (!searches) {
            throw new TypeError("find value can not be >>falsy<<");
        }
        var searchKeys = (searches.length === 1 && Array.isArray(searches[0])) ? searches[0] : searches;
        this.body = this.parceFind(searchKeys);
        return this;
    };
    GraphqlQueryBuilder.prototype.setAlias = function (alias) {
        this.alias = alias;
    };
    GraphqlQueryBuilder.prototype.toString = function () {
        if (this.body === undefined) {
            throw new ReferenceError("return properties are not defined. use the 'find' function to defined them");
        }
        return ((this.alias) ? (this.alias + ':') : '') + " " + this.queryFnName + " " + ((this.head.length > 0) ? '(' + this.head.join(',') + ')' : '') + "  { " + this.body + " }";
    };
    GraphqlQueryBuilder.prototype.parceFind = function (_levelA) {
        var propsA = _levelA.map(function (currentValue, index) {
            var itemX = _levelA[index];
            if (itemX instanceof GraphqlQueryBuilder) {
                return itemX.toString();
            }
            else if (!Array.isArray(itemX) && typeof itemX === 'object') {
                var propsAA = Object.keys(itemX);
                if (1 !== propsAA.length) {
                    throw new RangeError("Alias objects should only have one value. was passed: " + JSON.stringify(itemX));
                }
                var propS = propsAA[0];
                var item = itemX[propS];
                if (Array.isArray(item)) {
                    return new GraphqlQueryBuilder(propS).find(item);
                }
                return propS + " : " + item + " ";
            }
            else if (typeof itemX === 'string') {
                return itemX;
            }
            else {
                throw new RangeError("cannot handle Find value of " + itemX);
            }
        });
        return propsA.join(',');
    };
    GraphqlQueryBuilder.prototype.getGraphQLValue = function (value) {
        var _this = this;
        if (typeof value === 'string') {
            value = JSON.stringify(value);
        }
        else if (Array.isArray(value)) {
            value = value.map(function (item) {
                return _this.getGraphQLValue(item);
            }).join();
            value = "[" + value + "]";
        }
        else if (value instanceof Date) {
            value = JSON.stringify(value);
        }
        else if (value !== null && typeof value === 'object') {
            value = this.objectToString(value);
        }
        return value;
    };
    GraphqlQueryBuilder.prototype.objectToString = function (obj) {
        var sourceA = [];
        try {
            for (var _a = __values(Object.keys(obj)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var prop = _b.value;
                if (typeof obj[prop] === 'function') {
                    continue;
                }
                sourceA.push(prop + ":" + this.getGraphQLValue(obj[prop]));
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return "{" + sourceA.join() + "}";
        var e_9, _c;
    };
    return GraphqlQueryBuilder;
}());
var timer;
var DEFAULT_FILTER_TYPING_DEBOUNCE = 750;
var DEFAULT_ITEMS_PER_PAGE = 25;
var DEFAULT_PAGE_SIZE = 20;
var GraphqlService = /** @class */ (function () {
    function GraphqlService() {
        this.defaultOrderBy = { field: 'id', direction: SortDirection.ASC };
        this.defaultPaginationOptions = {
            first: DEFAULT_ITEMS_PER_PAGE,
            offset: 0
        };
    }
    Object.defineProperty(GraphqlService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    GraphqlService.prototype.buildQuery = function () {
        if (!this.options || !this.options.datasetName || (!this._columnDefinitions && !this.options.columnDefinitions)) {
            throw new Error('GraphQL Service requires "datasetName" & "columnDefinitions" properties for it to work');
        }
        var columnDefinitions = this._columnDefinitions || this.options.columnDefinitions;
        columnDefinitions = columnDefinitions.filter(function (column) { return !column.excludeFromQuery; });
        var queryQb = new GraphqlQueryBuilder('query');
        var datasetQb = new GraphqlQueryBuilder(this.options.datasetName);
        var dataQb = (this.options.isWithCursor) ? new GraphqlQueryBuilder('edges') : new GraphqlQueryBuilder('nodes');
        var columnIds = [];
        if (columnDefinitions && Array.isArray(columnDefinitions)) {
            try {
                for (var columnDefinitions_1 = __values(columnDefinitions), columnDefinitions_1_1 = columnDefinitions_1.next(); !columnDefinitions_1_1.done; columnDefinitions_1_1 = columnDefinitions_1.next()) {
                    var column = columnDefinitions_1_1.value;
                    columnIds.push(column.field);
                    if (column.fields) {
                        columnIds.push.apply(columnIds, __spread(column.fields));
                    }
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (columnDefinitions_1_1 && !columnDefinitions_1_1.done && (_a = columnDefinitions_1.return)) _a.call(columnDefinitions_1);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        else {
            columnIds = this.options.columnIds || [];
        }
        if (columnIds.indexOf('id') === -1) {
            columnIds.unshift('id');
        }
        var filters = this.buildFilterQuery(columnIds);
        if (this.options.isWithCursor) {
            var pageInfoQb = new GraphqlQueryBuilder('pageInfo');
            pageInfoQb.find('hasNextPage', 'endCursor');
            dataQb.find(['cursor', { node: filters }]);
            datasetQb.find(['totalCount', pageInfoQb, dataQb]);
        }
        else {
            dataQb.find(filters);
            datasetQb.find(['totalCount', dataQb]);
        }
        var datasetFilters = {};
        if (this._gridOptions.enablePagination !== false) {
            datasetFilters = Object.assign({}, this.options.paginationOptions, { first: ((this.options.paginationOptions && this.options.paginationOptions.first) ? this.options.paginationOptions.first : ((this.pagination && this.pagination.pageSize) ? this.pagination.pageSize : null)) || this.defaultPaginationOptions.first });
            if (!this.options.isWithCursor) {
                datasetFilters.offset = ((this.options.paginationOptions && this.options.paginationOptions.hasOwnProperty('offset')) ? +this.options.paginationOptions['offset'] : 0);
            }
        }
        if (this.options.sortingOptions && Array.isArray(this.options.sortingOptions) && this.options.sortingOptions.length > 0) {
            datasetFilters.orderBy = this.options.sortingOptions;
        }
        if (this.options.filteringOptions && Array.isArray(this.options.filteringOptions) && this.options.filteringOptions.length > 0) {
            datasetFilters.filterBy = this.options.filteringOptions;
        }
        if (this.options.addLocaleIntoQuery) {
            datasetFilters.locale = this._gridOptions && this._gridOptions.i18n && this._gridOptions.i18n.currentLang || 'en';
        }
        if (this.options.extraQueryArguments) {
            try {
                for (var _b = __values(this.options.extraQueryArguments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var queryArgument = _c.value;
                    datasetFilters[queryArgument.field] = queryArgument.value;
                }
            }
            catch (e_11_1) { e_11 = { error: e_11_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                }
                finally { if (e_11) throw e_11.error; }
            }
        }
        datasetQb.filter(datasetFilters);
        queryQb.find(datasetQb);
        var enumSearchProperties = ['direction:', 'field:', 'operator:'];
        return this.trimDoubleQuotesOnEnumField(queryQb.toString(), enumSearchProperties, this.options.keepArgumentFieldDoubleQuotes || false);
        var e_10, _a, e_11, _d;
    };
    GraphqlService.prototype.buildFilterQuery = function (inputArray) {
        var set = function (o, a) {
            if (o === void 0) { o = {}; }
            var k = a.shift();
            o[k] = a.length ? set(o[k], a) : null;
            return o;
        };
        var output = inputArray.reduce(function (o, a) { return set(o, a.split('.')); }, {});
        return JSON.stringify(output)
            .replace(/\"|\:|null/g, '')
            .replace(/^\{/, '')
            .replace(/\}$/, '');
    };
    GraphqlService.prototype.init = function (serviceOptions, pagination, grid) {
        this._grid = grid;
        this.options = serviceOptions || {};
        this.pagination = pagination;
        if (grid && grid.getColumns) {
            this._columnDefinitions = serviceOptions.columnDefinitions || grid.getColumns();
        }
    };
    GraphqlService.prototype.getInitPaginationOptions = function () {
        return (this.options.isWithCursor) ? { first: (this.pagination ? this.pagination.pageSize : DEFAULT_ITEMS_PER_PAGE) } : { first: (this.pagination ? this.pagination.pageSize : DEFAULT_ITEMS_PER_PAGE), offset: 0 };
    };
    GraphqlService.prototype.getDatasetName = function () {
        return this.options.datasetName || '';
    };
    GraphqlService.prototype.getCurrentFilters = function () {
        return this._currentFilters;
    };
    GraphqlService.prototype.getCurrentPagination = function () {
        return this._currentPagination;
    };
    GraphqlService.prototype.getCurrentSorters = function () {
        return this._currentSorters;
    };
    GraphqlService.prototype.resetPaginationOptions = function () {
        var paginationOptions;
        if (this.options.isWithCursor) {
            paginationOptions = ({
                after: '',
                before: undefined,
                last: undefined
            });
        }
        else {
            paginationOptions = ((this.options.paginationOptions || this.getInitPaginationOptions()));
            paginationOptions.offset = 0;
        }
        this._currentPagination = {
            pageNumber: 1,
            pageSize: paginationOptions.first
        };
        this.updateOptions({ paginationOptions: paginationOptions });
    };
    GraphqlService.prototype.updateOptions = function (serviceOptions) {
        this.options = Object.assign({}, this.options, serviceOptions);
    };
    GraphqlService.prototype.processOnFilterChanged = function (event, args) {
        var _this = this;
        var gridOptions = this._gridOptions || args.grid.getOptions();
        var backendApi = gridOptions.backendServiceApi;
        if (backendApi === undefined) {
            throw new Error('Something went wrong in the GraphqlService, "backendServiceApi" is not initialized');
        }
        var debounceTypingDelay = 0;
        if (event && (event.type === 'keyup' || event.type === 'keydown')) {
            debounceTypingDelay = backendApi.filterTypingDebounce || DEFAULT_FILTER_TYPING_DEBOUNCE;
        }
        this._currentFilters = this.castFilterToColumnFilter(args.columnFilters);
        var promise = new Promise(function (resolve, reject) {
            if (!args || !args.grid) {
                throw new Error('Something went wrong when trying create the GraphQL Backend Service, it seems that "args" is not populated correctly');
            }
            clearTimeout(timer);
            timer = setTimeout(function () {
                _this.updateFilters(args.columnFilters, false);
                _this.resetPaginationOptions();
                resolve(_this.buildQuery());
            }, debounceTypingDelay);
        });
        return promise;
    };
    GraphqlService.prototype.processOnPaginationChanged = function (event, args) {
        var pageSize = +(args.pageSize || ((this.pagination) ? this.pagination.pageSize : DEFAULT_PAGE_SIZE));
        this.updatePagination(args.newPage, pageSize);
        return this.buildQuery();
    };
    GraphqlService.prototype.processOnSortChanged = function (event, args) {
        var sortColumns = (args.multiColumnSort) ? args.sortCols : new Array({ sortCol: args.sortCol, sortAsc: args.sortAsc });
        this.updateSorters(sortColumns);
        return this.buildQuery();
    };
    GraphqlService.prototype.updateFilters = function (columnFilters, isUpdatedByPreset) {
        var searchByArray = [];
        var searchValue;
        var _loop_1 = function (columnId) {
            if (columnFilters.hasOwnProperty(columnId)) {
                var columnFilter_1 = columnFilters[columnId];
                var columnDef = void 0;
                if (isUpdatedByPreset && Array.isArray(this_1._columnDefinitions)) {
                    columnDef = this_1._columnDefinitions.find(function (column) { return column.id === columnFilter_1.columnId; });
                }
                else {
                    columnDef = columnFilter_1.columnDef;
                }
                if (!columnDef) {
                    throw new Error('[Backend Service API]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?');
                }
                var fieldName = columnDef.queryField || columnDef.queryFieldFilter || columnDef.field || columnDef.name || '';
                var searchTerms = (columnFilter_1 ? columnFilter_1.searchTerms : null) || [];
                var fieldSearchValue = (Array.isArray(searchTerms) && searchTerms.length === 1) ? searchTerms[0] : '';
                if (typeof fieldSearchValue === 'undefined') {
                    fieldSearchValue = '';
                }
                if (typeof fieldSearchValue !== 'string' && !searchTerms) {
                    throw new Error("GraphQL filter searchTerm property must be provided as type \"string\", if you use filter with options then make sure your IDs are also string. For example: filter: {model: Filters.select, collection: [{ id: \"0\", value: \"0\" }, { id: \"1\", value: \"1\" }]");
                }
                fieldSearchValue = '' + fieldSearchValue;
                var matches = fieldSearchValue.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/);
                var operator = columnFilter_1.operator || ((matches) ? matches[1] : '');
                searchValue = (!!matches) ? matches[2] : '';
                var lastValueChar = (!!matches) ? matches[3] : (operator === '*z' ? '*' : '');
                if (fieldName && searchValue === '' && searchTerms.length === 0) {
                    return "continue";
                }
                if (searchTerms && searchTerms.length > 1) {
                    searchValue = searchTerms.join(',');
                }
                else if (typeof searchValue === 'string') {
                    searchValue = searchValue.replace("'", "''");
                    if (operator === '*' || operator === 'a*' || operator === '*z' || lastValueChar === '*') {
                        operator = (operator === '*' || operator === '*z') ? 'endsWith' : 'startsWith';
                    }
                }
                if (!operator && columnDef.filter) {
                    operator = columnDef.filter.operator;
                }
                if (!operator) {
                    operator = mapOperatorByFieldType(columnDef.type || FieldType.string);
                }
                searchByArray.push({
                    field: fieldName,
                    operator: mapOperatorType(operator),
                    value: searchValue
                });
            }
        };
        var this_1 = this;
        for (var columnId in columnFilters) {
            _loop_1(columnId);
        }
        this.updateOptions({ filteringOptions: searchByArray });
    };
    GraphqlService.prototype.updatePagination = function (newPage, pageSize) {
        this._currentPagination = {
            pageNumber: newPage,
            pageSize: pageSize
        };
        var paginationOptions;
        if (this.options.isWithCursor) {
            paginationOptions = {
                first: pageSize
            };
        }
        else {
            paginationOptions = {
                first: pageSize,
                offset: (newPage - 1) * pageSize
            };
        }
        this.updateOptions({ paginationOptions: paginationOptions });
    };
    GraphqlService.prototype.updateSorters = function (sortColumns, presetSorters) {
        var _this = this;
        var currentSorters = [];
        var graphqlSorters = [];
        if (!sortColumns && presetSorters) {
            currentSorters = presetSorters;
            currentSorters.forEach(function (sorter) { return sorter.direction = (sorter.direction.toUpperCase()); });
            var tmpSorterArray = currentSorters.map(function (sorter) {
                var columnDef = _this._columnDefinitions.find(function (column) { return column.id === sorter.columnId; });
                graphqlSorters.push({
                    field: columnDef ? ((columnDef.queryField || columnDef.queryFieldSorter || columnDef.field || columnDef.id) + '') : (sorter.columnId + ''),
                    direction: sorter.direction
                });
                if (columnDef) {
                    return {
                        columnId: sorter.columnId,
                        sortAsc: sorter.direction.toUpperCase() === SortDirection.ASC
                    };
                }
                return null;
            });
            if (Array.isArray(tmpSorterArray)) {
                this._grid.setSortColumns(tmpSorterArray.filter(function (sorter) { return sorter; }));
            }
        }
        else if (sortColumns && !presetSorters) {
            if (sortColumns && sortColumns.length === 0) {
                graphqlSorters = new Array(this.defaultOrderBy);
                currentSorters = new Array({ columnId: this.defaultOrderBy.field, direction: this.defaultOrderBy.direction });
            }
            else {
                if (sortColumns) {
                    try {
                        for (var sortColumns_1 = __values(sortColumns), sortColumns_1_1 = sortColumns_1.next(); !sortColumns_1_1.done; sortColumns_1_1 = sortColumns_1.next()) {
                            var column = sortColumns_1_1.value;
                            if (column && column.sortCol) {
                                currentSorters.push({
                                    columnId: column.sortCol.id + '',
                                    direction: column.sortAsc ? SortDirection.ASC : SortDirection.DESC
                                });
                                graphqlSorters.push({
                                    field: (column.sortCol.queryField || column.sortCol.queryFieldSorter || column.sortCol.field || column.sortCol.id) + '',
                                    direction: column.sortAsc ? SortDirection.ASC : SortDirection.DESC
                                });
                            }
                        }
                    }
                    catch (e_12_1) { e_12 = { error: e_12_1 }; }
                    finally {
                        try {
                            if (sortColumns_1_1 && !sortColumns_1_1.done && (_a = sortColumns_1.return)) _a.call(sortColumns_1);
                        }
                        finally { if (e_12) throw e_12.error; }
                    }
                }
            }
        }
        this._currentSorters = currentSorters;
        this.updateOptions({ sortingOptions: graphqlSorters });
        var e_12, _a;
    };
    GraphqlService.prototype.trimDoubleQuotesOnEnumField = function (inputStr, enumSearchWords, keepArgumentFieldDoubleQuotes) {
        var patternWordInQuotes = "s?((field:s*)?\".*?\")";
        var patternRegex = enumSearchWords.join(patternWordInQuotes + '|');
        patternRegex += patternWordInQuotes;
        var reg = new RegExp(patternRegex, 'g');
        return inputStr.replace(reg, function (group1, group2, group3) {
            var removeDoubleQuotes = true;
            if (group1.startsWith('field:') && keepArgumentFieldDoubleQuotes) {
                removeDoubleQuotes = false;
            }
            var rep = removeDoubleQuotes ? group1.replace(/"/g, '') : group1;
            return rep;
        });
    };
    GraphqlService.prototype.castFilterToColumnFilter = function (columnFilters) {
        var filtersArray = (typeof columnFilters === 'object') ? Object.keys(columnFilters).map(function (key) { return columnFilters[key]; }) : columnFilters;
        return filtersArray.map(function (filter) {
            var columnDef = filter.columnDef;
            var header = (columnDef) ? (columnDef.headerKey || columnDef.name || '') : '';
            var tmpFilter = { columnId: filter.columnId || '' };
            if (filter.operator) {
                tmpFilter.operator = filter.operator;
            }
            if (Array.isArray(filter.searchTerms)) {
                tmpFilter.searchTerms = filter.searchTerms;
            }
            return tmpFilter;
        });
    };
    return GraphqlService;
}());
String.format = function (format, args) {
    return format.replace(/{(\d+)}/g, function (match, number) {
        return (typeof args[number] !== 'undefined') ? args[number] : match;
    });
};
String.padZero = function (length) {
    var s = this;
    while (s.length < length) {
        s = '0' + s;
    }
    return s;
};
String.trim = function (inputStr) {
    return inputStr ? inputStr.replace(/\s+/g, ' ') : inputStr;
};
String.allTitleCase = function (inputStr) {
    return inputStr.replace(/\w\S*/g, function (outputStr) {
        return outputStr.charAt(0).toUpperCase() + outputStr.substr(1).toLowerCase();
    });
};
String.titleCase = function (inputStr) {
    return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
};
var OdataService = /** @class */ (function () {
    function OdataService() {
        this._odataOptions = {
            filterQueue: [],
            orderBy: ''
        };
        this._defaultSortBy = '';
        this._columnFilters = {};
    }
    OdataService.prototype.buildQuery = function () {
        this._odataOptions.filterQueue = [];
        var queryTmpArray = [];
        if (this._odataOptions.top) {
            queryTmpArray.push("$top=" + this._odataOptions.top);
        }
        if (this._odataOptions.skip) {
            queryTmpArray.push("$skip=" + this._odataOptions.skip);
        }
        if (this._odataOptions.orderBy) {
            var argument = '';
            if (Array.isArray(this._odataOptions.orderBy)) {
                argument = this._odataOptions.orderBy.join(',');
            }
            else {
                argument = this._odataOptions.orderBy;
            }
            queryTmpArray.push("$orderby=" + argument);
        }
        if (this._odataOptions.filterBy || this._odataOptions.filter) {
            if (this._odataOptions.filter) {
                this._odataOptions.filterQueue = [];
                var filterStr = this._odataOptions.filter;
                if (Array.isArray(this._odataOptions.filter)) {
                    filterStr = this._odataOptions.filter.join(" " + (this._odataOptions.filterBySeparator || 'and') + " ");
                }
                this._odataOptions.filterQueue.push("(" + filterStr + ")");
            }
            if (!!this._odataOptions.filterBy && !!this._odataOptions.filterBy.fieldName && !this._columnFilters[this._odataOptions.filterBy.fieldName.toLowerCase()]) {
                if (this._odataOptions.filterBy.searchTerm !== '') {
                    this.saveColumnFilter(this._odataOptions.filterBy.fieldName.toLowerCase(), this._odataOptions.filterBy.searchTerm, this._odataOptions.filterBy.searchTerms);
                    this.updateFilterFromListTerms(this._odataOptions.filterBy);
                }
            }
        }
        if (this._odataOptions.filterQueue.length > 0) {
            var query = this._odataOptions.filterQueue.join(" " + (this._odataOptions.filterBySeparator || 'and') + " ");
            this._odataOptions.filter = query;
            queryTmpArray.push("$filter=" + query);
        }
        return queryTmpArray.join('&');
    };
    OdataService.prototype.getFilterByColumn = function (columnName) {
        return (!!this._columnFilters[columnName]) ? this._columnFilters[columnName] : null;
    };
    OdataService.prototype.getFilterCount = function () {
        return (this._odataOptions.filterQueue) ? this._odataOptions.filterQueue.length : 0;
    };
    Object.defineProperty(OdataService.prototype, "columnFilters", {
        get: function () {
            return this._columnFilters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OdataService.prototype, "options", {
        get: function () {
            return this._odataOptions;
        },
        set: function (options) {
            this._odataOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    OdataService.prototype.removeColumnFilter = function (fieldName) {
        delete this._columnFilters[fieldName];
    };
    OdataService.prototype.saveColumnFilter = function (fieldName, value, searchTerms) {
        this._columnFilters[fieldName] = {
            search: searchTerms,
            value: value
        };
    };
    OdataService.prototype.updateFilterFromListTerms = function (filterOptions) {
        var _this = this;
        if (Array.isArray(filterOptions)) {
            filterOptions.forEach(function (filterOptionObject) {
                _this.updateFilterFromTerm(filterOptionObject);
            });
        }
        else {
            this.updateFilterFromTerm(filterOptions);
        }
    };
    OdataService.prototype.updateFilterFromTerm = function (filterOptions) {
        var searchBy = '';
        var tmpSearchByArray = [];
        var fieldName = filterOptions.fieldName;
        var fieldSearchTerms = filterOptions.searchTerms;
        var operator = filterOptions.operator;
        if (!!fieldSearchTerms && fieldSearchTerms.length > 0) {
            var tmpSearchTerms = [];
            if (operator === 'IN') {
                for (var j = 0, lnj = fieldSearchTerms.length; j < lnj; j++) {
                    tmpSearchTerms.push(fieldName + " eq '" + fieldSearchTerms[j] + "'");
                }
                searchBy = tmpSearchTerms.join(' or ');
                searchBy = "$(" + searchBy + ")";
            }
            else if (operator === 'NIN' || operator === 'NOTIN' || operator === 'NOT IN') {
                for (var k = 0, lnk = fieldSearchTerms.length; k < lnk; k++) {
                    tmpSearchTerms.push(fieldName + " ne '" + fieldSearchTerms[k] + "'");
                }
                searchBy = tmpSearchTerms.join(' and ');
                searchBy = "$(" + searchBy + ")";
            }
        }
        tmpSearchByArray.push(String.trim(searchBy));
        var filter = (tmpSearchByArray.length > 0) ? tmpSearchByArray.join(' and ') : '';
        if (this._odataOptions.filterQueue && this._odataOptions.filterQueue.indexOf(filter) === -1) {
            this._odataOptions.filterQueue.push(filter);
        }
    };
    OdataService.prototype.updateOptions = function (options) {
        try {
            for (var _a = __values(Object.keys(options)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var property = _b.value;
                if (options.hasOwnProperty(property)) {
                    this._odataOptions[property] = options[property];
                }
                if (property === 'orderBy' || property === 'sortBy') {
                    var sortBy = options[property];
                    if (this._odataOptions.caseType === CaseType.pascalCase) {
                        if (Array.isArray(sortBy)) {
                            sortBy.forEach(function (field, index, inputArray) {
                                inputArray[index] = String.titleCase(field);
                            });
                        }
                        else {
                            sortBy = String.titleCase(options[property]);
                        }
                    }
                    this._odataOptions.orderBy = sortBy;
                    this._defaultSortBy = sortBy;
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_13) throw e_13.error; }
        }
        var e_13, _c;
    };
    return OdataService;
}());
var timer$1;
var DEFAULT_FILTER_TYPING_DEBOUNCE$1 = 750;
var DEFAULT_ITEMS_PER_PAGE$1 = 25;
var DEFAULT_PAGE_SIZE$1 = 20;
var GridOdataService = /** @class */ (function () {
    function GridOdataService() {
        this.defaultOptions = {
            top: DEFAULT_ITEMS_PER_PAGE$1,
            orderBy: '',
            caseType: CaseType.pascalCase
        };
        this.odataService = new OdataService();
    }
    Object.defineProperty(GridOdataService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    GridOdataService.prototype.buildQuery = function () {
        return this.odataService.buildQuery();
    };
    GridOdataService.prototype.init = function (options, pagination, grid) {
        this._grid = grid;
        var mergedOptions = Object.assign({}, this.defaultOptions, options);
        if (pagination && pagination.pageSize) {
            mergedOptions.top = pagination.pageSize;
        }
        this.odataService.options = Object.assign({}, mergedOptions, { top: mergedOptions.top || this.defaultOptions.top });
        this.options = this.odataService.options;
        this.pagination = pagination;
        this._currentPagination = {
            pageNumber: 1,
            pageSize: this.odataService.options.top || this.defaultOptions.top
        };
        if (grid && grid.getColumns) {
            this._columnDefinitions = (options && options["columnDefinitions"]) || grid.getColumns();
            this._columnDefinitions = this._columnDefinitions.filter(function (column) { return !column.excludeFromQuery; });
        }
    };
    GridOdataService.prototype.updateOptions = function (serviceOptions) {
        this.options = Object.assign({}, this.options, serviceOptions);
    };
    GridOdataService.prototype.removeColumnFilter = function (fieldName) {
        this.odataService.removeColumnFilter(fieldName);
    };
    GridOdataService.prototype.getCurrentFilters = function () {
        return this._currentFilters;
    };
    GridOdataService.prototype.getCurrentPagination = function () {
        return this._currentPagination;
    };
    GridOdataService.prototype.getCurrentSorters = function () {
        return this._currentSorters;
    };
    GridOdataService.prototype.resetPaginationOptions = function () {
        this.odataService.updateOptions({
            skip: 0
        });
    };
    GridOdataService.prototype.saveColumnFilter = function (fieldName, value, terms) {
        this.odataService.saveColumnFilter(fieldName, value, terms);
    };
    GridOdataService.prototype.processOnFilterChanged = function (event, args) {
        var _this = this;
        var serviceOptions = args.grid.getOptions();
        var backendApi = serviceOptions.backendServiceApi;
        if (backendApi === undefined) {
            throw new Error('Something went wrong in the GridOdataService, "backendServiceApi" is not initialized');
        }
        var debounceTypingDelay = 0;
        if (event && (event.type === 'keyup' || event.type === 'keydown')) {
            debounceTypingDelay = backendApi.filterTypingDebounce || DEFAULT_FILTER_TYPING_DEBOUNCE$1;
        }
        this._currentFilters = this.castFilterToColumnFilter(args.columnFilters);
        var promise = new Promise(function (resolve, reject) {
            clearTimeout(timer$1);
            timer$1 = setTimeout(function () {
                _this.updateFilters(args.columnFilters);
                _this.resetPaginationOptions();
                resolve(_this.odataService.buildQuery());
            }, debounceTypingDelay);
        });
        return promise;
    };
    GridOdataService.prototype.processOnPaginationChanged = function (event, args) {
        var pageSize = +(args.pageSize || DEFAULT_PAGE_SIZE$1);
        this.updatePagination(args.newPage, pageSize);
        return this.odataService.buildQuery();
    };
    GridOdataService.prototype.processOnSortChanged = function (event, args) {
        var sortColumns = (args.multiColumnSort) ? args.sortCols : new Array({ sortCol: args.sortCol, sortAsc: args.sortAsc });
        this.updateSorters(sortColumns);
        return this.odataService.buildQuery();
    };
    GridOdataService.prototype.updateFilters = function (columnFilters, isUpdatedByPreset) {
        var searchBy = '';
        var searchByArray = [];
        var _loop_2 = function (columnId) {
            if (columnFilters.hasOwnProperty(columnId)) {
                var columnFilter_2 = columnFilters[columnId];
                var columnDef = void 0;
                if (isUpdatedByPreset && Array.isArray(this_2._columnDefinitions)) {
                    columnDef = this_2._columnDefinitions.find(function (column) {
                        return column.id === columnFilter_2.columnId;
                    });
                }
                else {
                    columnDef = columnFilter_2.columnDef;
                }
                if (!columnDef) {
                    throw new Error('[Backend Service API]: Something went wrong in trying to get the column definition of the specified filter (or preset filters). Did you make a typo on the filter columnId?');
                }
                var fieldName = columnDef.queryField || columnDef.queryFieldFilter || columnDef.field || columnDef.name || '';
                var fieldType = columnDef.type || 'string';
                var searchTerms = (columnFilter_2 ? columnFilter_2.searchTerms : null) || [];
                var fieldSearchValue = (Array.isArray(searchTerms) && searchTerms.length === 1) ? searchTerms[0] : '';
                if (typeof fieldSearchValue === 'undefined') {
                    fieldSearchValue = '';
                }
                if (typeof fieldSearchValue !== 'string' && !searchTerms) {
                    throw new Error("ODdata filter searchTerm property must be provided as type \"string\", if you use filter with options then make sure your IDs are also string. For example: filter: {model: Filters.select, collection: [{ id: \"0\", value: \"0\" }, { id: \"1\", value: \"1\" }]");
                }
                fieldSearchValue = '' + fieldSearchValue;
                var matches = fieldSearchValue.match(/^([<>!=\*]{0,2})(.*[^<>!=\*])([\*]?)$/);
                var operator = columnFilter_2.operator || ((matches) ? matches[1] : '');
                var searchValue = (!!matches) ? matches[2] : '';
                var lastValueChar = (!!matches) ? matches[3] : (operator === '*z' ? '*' : '');
                var bypassOdataQuery = columnFilter_2.bypassBackendQuery || false;
                if (fieldName && searchValue === '' && searchTerms.length === 0) {
                    this_2.removeColumnFilter(fieldName);
                    return "continue";
                }
                searchValue = searchValue.replace("'", "''");
                searchValue = encodeURIComponent(searchValue);
                if (bypassOdataQuery) {
                    if (fieldName) {
                        this_2.saveColumnFilter(fieldName, fieldSearchValue, searchTerms);
                    }
                }
                else {
                    searchBy = '';
                    if (this_2.odataService.options.caseType === CaseType.pascalCase) {
                        fieldName = String.titleCase(fieldName || '');
                    }
                    if (searchTerms && searchTerms.length > 1) {
                        var tmpSearchTerms = [];
                        if (operator === 'IN') {
                            for (var j = 0, lnj = searchTerms.length; j < lnj; j++) {
                                tmpSearchTerms.push(fieldName + " eq '" + searchTerms[j] + "'");
                            }
                            searchBy = tmpSearchTerms.join(' or ');
                            searchBy = "(" + searchBy + ")";
                        }
                        else if (operator === 'NIN' || operator === 'NOTIN' || operator === 'NOT IN') {
                            for (var k = 0, lnk = searchTerms.length; k < lnk; k++) {
                                tmpSearchTerms.push(fieldName + " ne '" + searchTerms[k] + "'");
                            }
                            searchBy = tmpSearchTerms.join(' and ');
                            searchBy = "(" + searchBy + ")";
                        }
                    }
                    else if (operator === '*' || operator === 'a*' || operator === '*z' || lastValueChar !== '') {
                        searchBy = (operator === '*' || operator === '*z')
                            ? "endswith(" + fieldName + ", '" + searchValue + "')"
                            : "startswith(" + fieldName + ", '" + searchValue + "')";
                    }
                    else if (fieldType === FieldType.date) {
                        var dateFormatted = parseUtcDate(searchValue, true);
                        if (dateFormatted) {
                            searchBy = fieldName + " " + this_2.mapOdataOperator(operator) + " DateTime'" + dateFormatted + "'";
                        }
                    }
                    else if (fieldType === FieldType.string) {
                        if (operator === '') {
                            searchBy = "substringof('" + searchValue + "', " + fieldName + ")";
                        }
                        else {
                            searchBy = fieldName + " " + this_2.mapOdataOperator(operator) + " '" + searchValue + "'";
                        }
                    }
                    else {
                        searchValue = fieldType === FieldType.number ? searchValue : "'" + searchValue + "'";
                        searchBy = fieldName + " " + this_2.mapOdataOperator(operator) + " " + searchValue;
                    }
                    if (searchBy !== '') {
                        searchByArray.push(String.trim(searchBy));
                        this_2.saveColumnFilter(fieldName || '', fieldSearchValue, searchTerms);
                    }
                }
            }
        };
        var this_2 = this;
        for (var columnId in columnFilters) {
            _loop_2(columnId);
        }
        this.odataService.updateOptions({
            filter: (searchByArray.length > 0) ? searchByArray.join(' and ') : '',
            skip: undefined
        });
    };
    GridOdataService.prototype.updatePagination = function (newPage, pageSize) {
        this._currentPagination = {
            pageNumber: newPage,
            pageSize: pageSize
        };
        this.odataService.updateOptions({
            top: pageSize,
            skip: (newPage - 1) * pageSize
        });
    };
    GridOdataService.prototype.updateSorters = function (sortColumns, presetSorters) {
        var _this = this;
        var sortByArray = [];
        var sorterArray = [];
        if (!sortColumns && presetSorters) {
            sortByArray = presetSorters;
            sortByArray.forEach(function (sorter) { return sorter.direction = (sorter.direction.toLowerCase()); });
            var tmpSorterArray = sortByArray.map(function (sorter) {
                var columnDef = _this._columnDefinitions.find(function (column) { return column.id === sorter.columnId; });
                sorterArray.push({
                    columnId: columnDef ? ((columnDef.queryField || columnDef.queryFieldSorter || columnDef.field || columnDef.id) + '') : (sorter.columnId + ''),
                    direction: sorter.direction
                });
                if (columnDef) {
                    return {
                        columnId: sorter.columnId,
                        sortAsc: sorter.direction.toUpperCase() === SortDirection.ASC
                    };
                }
                return null;
            });
            this._grid.setSortColumns(tmpSorterArray);
        }
        else if (sortColumns && !presetSorters) {
            if (sortColumns && sortColumns.length === 0) {
                sortByArray = new Array(this.defaultOptions.orderBy);
            }
            else {
                if (sortColumns) {
                    try {
                        for (var sortColumns_2 = __values(sortColumns), sortColumns_2_1 = sortColumns_2.next(); !sortColumns_2_1.done; sortColumns_2_1 = sortColumns_2.next()) {
                            var columnDef = sortColumns_2_1.value;
                            if (columnDef.sortCol) {
                                var fieldName = (columnDef.sortCol.queryField || columnDef.sortCol.queryFieldSorter || columnDef.sortCol.field || columnDef.sortCol.id) + '';
                                var columnFieldName = (columnDef.sortCol.field || columnDef.sortCol.id) + '';
                                if (this.odataService.options.caseType === CaseType.pascalCase) {
                                    fieldName = String.titleCase(fieldName);
                                    columnFieldName = String.titleCase(columnFieldName);
                                }
                                sorterArray.push({
                                    columnId: columnFieldName,
                                    direction: columnDef.sortAsc ? 'asc' : 'desc'
                                });
                            }
                        }
                    }
                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                    finally {
                        try {
                            if (sortColumns_2_1 && !sortColumns_2_1.done && (_a = sortColumns_2.return)) _a.call(sortColumns_2);
                        }
                        finally { if (e_14) throw e_14.error; }
                    }
                    sortByArray = sorterArray;
                }
            }
        }
        sortByArray = (sortByArray);
        var csvString = sortByArray.map(function (sorter) { return sorter.columnId + " " + sorter.direction.toLowerCase(); }).join(',');
        this.odataService.updateOptions({
            orderBy: (this.odataService.options.caseType === CaseType.pascalCase) ? String.titleCase(csvString) : csvString
        });
        this._currentSorters = (sortByArray);
        return this.odataService.buildQuery();
        var e_14, _a;
    };
    GridOdataService.prototype.castFilterToColumnFilter = function (columnFilters) {
        var filtersArray = (((typeof columnFilters === 'object') ? Object.keys(columnFilters).map(function (key) { return columnFilters[key]; }) : columnFilters));
        return filtersArray.map(function (filter) {
            var columnDef = filter.columnDef;
            var header = (columnDef) ? (columnDef.headerKey || columnDef.name || '') : '';
            var tmpFilter = { columnId: filter.columnId || '' };
            if (filter.operator) {
                tmpFilter.operator = filter.operator;
            }
            if (Array.isArray(filter.searchTerms)) {
                tmpFilter.searchTerms = filter.searchTerms;
            }
            return tmpFilter;
        });
    };
    GridOdataService.prototype.mapOdataOperator = function (operator) {
        var map = '';
        switch (operator) {
            case '<':
                map = 'lt';
                break;
            case '<=':
                map = 'le';
                break;
            case '>':
                map = 'gt';
                break;
            case '>=':
                map = 'ge';
                break;
            case '<>':
            case '!=':
                map = 'ne';
                break;
            case '=':
            case '==':
            default:
                map = 'eq';
                break;
        }
        return map;
    };
    return GridOdataService;
}());
GridOdataService.decorators = [
    { type: Injectable },
];
GridOdataService.ctorParameters = function () { return []; };
var GridEventService = /** @class */ (function () {
    function GridEventService() {
        this._eventHandler = new Slick.EventHandler();
    }
    GridEventService.prototype.attachOnCellChange = function (grid, dataView) {
        this._eventHandler.subscribe(grid.onCellChange, function (e, args) {
            if (!e || !args || !grid || args.cell === undefined || !grid.getColumns || !grid.getDataItem) {
                return;
            }
            var column = grid.getColumns()[args.cell];
            if (typeof column.onCellChange === 'function') {
                var returnedArgs = {
                    row: args.row,
                    cell: args.cell,
                    dataView: dataView,
                    gridDefinition: grid.getOptions(),
                    grid: grid,
                    columnDef: column,
                    dataContext: grid.getDataItem(args.row)
                };
                column.onCellChange(e, returnedArgs);
            }
        });
    };
    GridEventService.prototype.attachOnClick = function (grid, dataView) {
        this._eventHandler.subscribe(grid.onClick, function (e, args) {
            if (!e || !args || !grid || args.cell === undefined || !grid.getColumns || !grid.getDataItem) {
                return;
            }
            var column = grid.getColumns()[args.cell];
            if (typeof column.onCellClick === 'function') {
                var returnedArgs = {
                    row: args.row,
                    cell: args.cell,
                    dataView: dataView,
                    gridDefinition: grid.getOptions(),
                    grid: grid,
                    columnDef: column,
                    dataContext: grid.getDataItem(args.row)
                };
                column.onCellClick(e, returnedArgs);
            }
        });
    };
    GridEventService.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
    };
    return GridEventService;
}());
var GridStateService = /** @class */ (function () {
    function GridStateService() {
        this._eventHandler = new Slick.EventHandler();
        this._columns = [];
        this._currentColumns = [];
        this.subscriptions = [];
        this.onGridStateChanged = new Subject();
    }
    Object.defineProperty(GridStateService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    GridStateService.prototype.init = function (grid, extensionService, filterService, sortService) {
        this._grid = grid;
        this.extensionService = extensionService;
        this.filterService = filterService;
        this.sortService = sortService;
        this.subscribeToAllGridChanges(grid);
    };
    GridStateService.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
        this.subscriptions.forEach(function (subscription) {
            if (subscription && subscription.unsubscribe) {
                subscription.unsubscribe();
            }
        });
        this.subscriptions = [];
    };
    GridStateService.prototype.getCurrentGridState = function () {
        var gridState = {
            columns: this.getCurrentColumns(),
            filters: this.getCurrentFilters(),
            sorters: this.getCurrentSorters()
        };
        var currentPagination = this.getCurrentPagination();
        if (currentPagination) {
            gridState.pagination = currentPagination;
        }
        return gridState;
    };
    GridStateService.prototype.getColumns = function () {
        return this._columns || this._grid.getColumns();
    };
    GridStateService.prototype.getAssociatedCurrentColumns = function (gridColumns) {
        var currentColumns = [];
        if (gridColumns && Array.isArray(gridColumns)) {
            gridColumns.forEach(function (column, index) {
                if (column && column.id) {
                    currentColumns.push({
                        columnId: (column.id),
                        cssClass: column.cssClass || '',
                        headerCssClass: column.headerCssClass || '',
                        width: column.width || 0
                    });
                }
            });
        }
        this._currentColumns = currentColumns;
        return currentColumns;
    };
    GridStateService.prototype.getAssociatedGridColumns = function (grid, currentColumns) {
        var columns = [];
        var gridColumns = grid.getColumns();
        if (currentColumns && Array.isArray(currentColumns)) {
            currentColumns.forEach(function (currentColumn, index) {
                var gridColumn = gridColumns.find(function (c) { return c.id === currentColumn.columnId; });
                if (gridColumn && gridColumn.id) {
                    columns.push(Object.assign({}, gridColumn, { cssClass: currentColumn.cssClass, headerCssClass: currentColumn.headerCssClass, width: currentColumn.width }));
                }
            });
        }
        this._columns = columns;
        return columns;
    };
    GridStateService.prototype.getCurrentColumns = function () {
        var currentColumns = [];
        if (this._currentColumns && Array.isArray(this._currentColumns) && this._currentColumns.length > 0) {
            currentColumns = this._currentColumns;
        }
        else {
            currentColumns = this.getAssociatedCurrentColumns(this._grid.getColumns());
        }
        return currentColumns;
    };
    GridStateService.prototype.getCurrentFilters = function () {
        if (this._gridOptions && this._gridOptions.backendServiceApi) {
            var backendService = this._gridOptions.backendServiceApi.service;
            if (backendService && backendService.getCurrentFilters) {
                return (backendService.getCurrentFilters());
            }
        }
        else if (this.filterService && this.filterService.getCurrentLocalFilters) {
            return this.filterService.getCurrentLocalFilters();
        }
        return null;
    };
    GridStateService.prototype.getCurrentPagination = function () {
        if (this._gridOptions && this._gridOptions.backendServiceApi) {
            var backendService = this._gridOptions.backendServiceApi.service;
            if (backendService && backendService.getCurrentPagination) {
                return backendService.getCurrentPagination();
            }
        }
        else {
        }
        return null;
    };
    GridStateService.prototype.getCurrentSorters = function () {
        if (this._gridOptions && this._gridOptions.backendServiceApi) {
            var backendService = this._gridOptions.backendServiceApi.service;
            if (backendService && backendService.getCurrentSorters) {
                return (backendService.getCurrentSorters());
            }
        }
        else if (this.sortService && this.sortService.getCurrentLocalSorters) {
            return this.sortService.getCurrentLocalSorters();
        }
        return null;
    };
    GridStateService.prototype.hookExtensionEventToGridStateChange = function (extensionName, eventName) {
        var _this = this;
        var extension = this.extensionService && this.extensionService.getExtensionByName(extensionName);
        if (extension && extension.class && extension.class[eventName] && extension.class[eventName].subscribe) {
            this._eventHandler.subscribe(extension.class[eventName], function (e, args) {
                var columns = args && args.columns;
                var currentColumns = _this.getAssociatedCurrentColumns(columns);
                _this.onGridStateChanged.next({ change: { newValues: currentColumns, type: GridStateType.columns }, gridState: _this.getCurrentGridState() });
            });
        }
    };
    GridStateService.prototype.hookSlickGridEventToGridStateChange = function (eventName, grid) {
        var _this = this;
        if (grid && grid[eventName] && grid[eventName].subscribe) {
            this._eventHandler.subscribe(grid[eventName], function (e, args) {
                var columns = grid.getColumns();
                var currentColumns = _this.getAssociatedCurrentColumns(columns);
                _this.onGridStateChanged.next({ change: { newValues: currentColumns, type: GridStateType.columns }, gridState: _this.getCurrentGridState() });
            });
        }
    };
    GridStateService.prototype.resetColumns = function (columnDefinitions) {
        var columns = columnDefinitions || this._columns;
        var currentColumns = this.getAssociatedCurrentColumns(columns);
        this.onGridStateChanged.next({ change: { newValues: currentColumns, type: GridStateType.columns }, gridState: this.getCurrentGridState() });
    };
    GridStateService.prototype.resetRowSelection = function () {
        if (this._gridOptions.enableRowSelection || this._gridOptions.enableCheckboxSelector) {
            var rowSelectionExtension = this.extensionService && this.extensionService.getExtensionByName && this.extensionService.getExtensionByName(ExtensionName.rowSelection);
            if (rowSelectionExtension && rowSelectionExtension.extension) {
                this._grid.setSelectedRows([]);
            }
        }
    };
    GridStateService.prototype.subscribeToAllGridChanges = function (grid) {
        var _this = this;
        this.subscriptions.push(this.filterService.onFilterChanged.subscribe(function (currentFilters) {
            _this.resetRowSelection();
            _this.onGridStateChanged.next({ change: { newValues: currentFilters, type: GridStateType.filter }, gridState: _this.getCurrentGridState() });
        }));
        this.subscriptions.push(this.filterService.onFilterCleared.subscribe(function () {
            _this.resetRowSelection();
            _this.onGridStateChanged.next({ change: { newValues: [], type: GridStateType.filter }, gridState: _this.getCurrentGridState() });
        }));
        this.subscriptions.push(this.sortService.onSortChanged.subscribe(function (currentSorters) {
            _this.resetRowSelection();
            _this.onGridStateChanged.next({ change: { newValues: currentSorters, type: GridStateType.sorter }, gridState: _this.getCurrentGridState() });
        }));
        this.subscriptions.push(this.sortService.onSortCleared.subscribe(function () {
            _this.resetRowSelection();
            _this.onGridStateChanged.next({ change: { newValues: [], type: GridStateType.sorter }, gridState: _this.getCurrentGridState() });
        }));
        this.hookExtensionEventToGridStateChange(ExtensionName.columnPicker, 'onColumnsChanged');
        this.hookExtensionEventToGridStateChange(ExtensionName.gridMenu, 'onColumnsChanged');
        this.hookSlickGridEventToGridStateChange('onColumnsReordered', grid);
        this.hookSlickGridEventToGridStateChange('onColumnsResized', grid);
    };
    return GridStateService;
}());
var GridService = /** @class */ (function () {
    function GridService(extensionService, filterService, gridStateService, sortService, translate) {
        this.extensionService = extensionService;
        this.filterService = filterService;
        this.gridStateService = gridStateService;
        this.sortService = sortService;
        this.translate = translate;
    }
    Object.defineProperty(GridService.prototype, "_columnDefinitions", {
        get: function () {
            return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    GridService.prototype.init = function (grid, dataView) {
        this._grid = grid;
        this._dataView = dataView;
    };
    GridService.prototype.getColumnFromEventArguments = function (args) {
        if (!args || !args.grid || !args.grid.getColumns || !args.grid.getDataItem) {
            throw new Error('To get the column definition and data, we need to have these arguments passed as objects (row, cell, grid)');
        }
        return {
            row: args.row,
            cell: args.cell,
            columnDef: args.grid.getColumns()[args.cell],
            dataContext: args.grid.getDataItem(args.row),
            dataView: this._dataView,
            grid: this._grid,
            gridDefinition: this._gridOptions
        };
    };
    GridService.prototype.getDataItemByRowNumber = function (rowNumber) {
        if (!this._grid || typeof this._grid.getDataItem !== 'function') {
            throw new Error('We could not find SlickGrid Grid object');
        }
        return this._grid.getDataItem(rowNumber);
    };
    GridService.prototype.getItemRowMetadataToHighlight = function (previousItemMetadata) {
        var _this = this;
        return function (rowNumber) {
            var item = _this._dataView.getItem(rowNumber);
            var meta = { cssClasses: '' };
            if (typeof previousItemMetadata === 'function') {
                meta = previousItemMetadata(rowNumber);
            }
            if (item && item._dirty) {
                meta.cssClasses = (meta && meta.cssClasses || '') + ' dirty';
            }
            if (!meta) {
                meta = { cssClasses: '' };
            }
            if (item && item.rowClass && meta) {
                meta.cssClasses += " " + item.rowClass;
                meta.cssClasses += " row" + rowNumber;
            }
            return meta;
        };
    };
    GridService.prototype.highlightRow = function (rowNumber, fadeDelay) {
        var _this = this;
        if (fadeDelay === void 0) { fadeDelay = 1500; }
        if (!this._grid.getSelectionModel()) {
            var rowSelectionPlugin = new Slick.RowSelectionModel(this._gridOptions.rowSelectionOptions || {});
            this._grid.setSelectionModel(rowSelectionPlugin);
        }
        var rowIndexes = Array.isArray(rowNumber) ? rowNumber : [rowNumber];
        this._grid.setSelectedRows(rowIndexes);
        if (Array.isArray(rowNumber)) {
            rowNumber.forEach(function (row) { return _this.highlightRowByMetadata(row, fadeDelay); });
        }
        else {
            this.highlightRowByMetadata(rowNumber, fadeDelay);
        }
    };
    GridService.prototype.highlightRowByMetadata = function (rowNumber, fadeDelay) {
        var _this = this;
        if (fadeDelay === void 0) { fadeDelay = 1500; }
        this._dataView.getItemMetadata = this.getItemRowMetadataToHighlight(this._dataView.getItemMetadata);
        var item = this._dataView.getItem(rowNumber);
        if (item && item.id) {
            item.rowClass = 'highlight';
            this._dataView.updateItem(item.id, item);
            var gridOptions = (this._grid.getOptions());
            $("#" + gridOptions.gridId)
                .find(".highlight.row" + rowNumber)
                .first();
            setTimeout(function () {
                if (item && item.id) {
                    delete item.rowClass;
                    var gridIdx = _this._dataView.getIdxById(item.id);
                    if (gridIdx !== undefined) {
                        _this._dataView.updateItem(item.id, item);
                    }
                }
            }, fadeDelay + 10);
        }
    };
    GridService.prototype.getDataItemByRowIndex = function (index) {
        if (!this._grid || typeof this._grid.getDataItem !== 'function') {
            throw new Error('We could not find SlickGrid Grid object');
        }
        return this._grid.getDataItem(index);
    };
    GridService.prototype.getDataItemByRowIndexes = function (indexes) {
        var _this = this;
        if (!this._grid || typeof this._grid.getDataItem !== 'function') {
            throw new Error('We could not find SlickGrid Grid object');
        }
        var dataItems = [];
        if (Array.isArray(indexes)) {
            indexes.forEach(function (idx) {
                dataItems.push(_this._grid.getDataItem(idx));
            });
        }
        return dataItems;
    };
    GridService.prototype.getSelectedRows = function () {
        return this._grid.getSelectedRows();
    };
    GridService.prototype.getSelectedRowsDataItem = function () {
        if (!this._grid || typeof this._grid.getSelectedRows !== 'function') {
            throw new Error('We could not find SlickGrid Grid object');
        }
        var selectedRowIndexes = this._grid.getSelectedRows();
        return this.getDataItemByRowIndexes(selectedRowIndexes);
    };
    GridService.prototype.setSelectedRow = function (rowIndex) {
        this._grid.setSelectedRows([rowIndex]);
    };
    GridService.prototype.setSelectedRows = function (rowIndexes) {
        this._grid.setSelectedRows(rowIndexes);
    };
    GridService.prototype.renderGrid = function () {
        if (this._grid && typeof this._grid.invalidate === 'function') {
            this._grid.invalidate();
            this._grid.render();
        }
    };
    GridService.prototype.resetGrid = function (columnDefinitions) {
        if (this._grid && this._dataView) {
            var originalColumns = this.extensionService.getAllColumns();
            if (Array.isArray(originalColumns) && originalColumns.length > 0) {
                this._grid.setColumns(originalColumns);
                this._dataView.refresh();
                if (this._gridOptions && this._gridOptions.enableAutoSizeColumns) {
                    this._grid.autosizeColumns();
                }
                this.gridStateService.resetColumns(columnDefinitions);
            }
        }
        if (this.filterService && this.filterService.clearFilters) {
            this.filterService.clearFilters();
        }
        if (this.sortService && this.sortService.clearSorting) {
            this.sortService.clearSorting();
        }
    };
    GridService.prototype.addItemToDatagrid = function (item, shouldHighlightRow) {
        if (shouldHighlightRow === void 0) { shouldHighlightRow = true; }
        if (!this._grid || !this._gridOptions || !this._dataView) {
            throw new Error('We could not find SlickGrid Grid, DataView objects');
        }
        var row = 0;
        this._dataView.insertItem(row, item);
        this._grid.scrollRowIntoView(0);
        if (shouldHighlightRow) {
            this.highlightRow(0, 1500);
        }
        this._dataView.refresh();
    };
    GridService.prototype.addItemsToDatagrid = function (items, shouldHighlightRow) {
        var _this = this;
        if (shouldHighlightRow === void 0) { shouldHighlightRow = true; }
        if (Array.isArray(items)) {
            items.forEach(function (item) { return _this.addItemToDatagrid(item, shouldHighlightRow); });
        }
    };
    GridService.prototype.deleteDataGridItem = function (item) {
        if (!item || !item.hasOwnProperty('id')) {
            throw new Error("deleteDataGridItem() requires an item object which includes the \"id\" property");
        }
        var itemId = (!item || !item.hasOwnProperty('id')) ? undefined : item.id;
        this.deleteDataGridItemById(itemId);
    };
    GridService.prototype.deleteDataGridItemById = function (itemId) {
        if (itemId === undefined) {
            throw new Error("Cannot delete a row without a valid \"id\"");
        }
        this._dataView.deleteItem(itemId);
        this._dataView.refresh();
    };
    GridService.prototype.updateDataGridItem = function (item, shouldHighlightRow) {
        if (shouldHighlightRow === void 0) { shouldHighlightRow = true; }
        var itemId = (!item || !item.hasOwnProperty('id')) ? undefined : item.id;
        if (itemId === undefined) {
            throw new Error("Could not find the item in the grid or it's associated \"id\"");
        }
        return this.updateDataGridItemById(itemId, item, shouldHighlightRow);
    };
    GridService.prototype.updateDataGridItems = function (items, shouldHighlightRow) {
        var _this = this;
        if (shouldHighlightRow === void 0) { shouldHighlightRow = true; }
        if (!Array.isArray(items)) {
            throw new Error('The function "updateDataGridItems" only support array of items, if you wish to only update 1 item then use "updateDataGridItem"');
        }
        var gridIndexes = [];
        items.forEach(function (item) {
            gridIndexes.push(_this.updateDataGridItem(item, false));
        });
        if (shouldHighlightRow) {
            this.highlightRow(gridIndexes);
        }
    };
    GridService.prototype.updateDataGridItemById = function (itemId, item, shouldHighlightRow) {
        if (shouldHighlightRow === void 0) { shouldHighlightRow = true; }
        if (itemId === undefined) {
            throw new Error("Cannot update a row without a valid \"id\"");
        }
        var row = this._dataView.getRowById(itemId);
        if (!item || row === undefined) {
            throw new Error("Could not find the item in the grid or it's associated \"id\"");
        }
        var gridIdx = this._dataView.getIdxById(itemId);
        if (gridIdx !== undefined) {
            this._dataView.updateItem(itemId, item);
            if (shouldHighlightRow) {
                this.highlightRow(row, 1500);
            }
            this._dataView.refresh();
            return gridIdx;
        }
    };
    return GridService;
}());
GridService.decorators = [
    { type: Injectable },
];
GridService.ctorParameters = function () { return [
    { type: ExtensionService, },
    { type: FilterService, },
    { type: GridStateService, },
    { type: SortService, },
    { type: TranslateService, },
]; };
var GroupingAndColspanService = /** @class */ (function () {
    function GroupingAndColspanService() {
        this._eventHandler = new Slick.EventHandler();
    }
    Object.defineProperty(GroupingAndColspanService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupingAndColspanService.prototype, "_columnDefinitions", {
        get: function () {
            return (this._grid && this._grid.getColumns) ? this._grid.getColumns() : [];
        },
        enumerable: true,
        configurable: true
    });
    GroupingAndColspanService.prototype.init = function (grid, dataView) {
        var _this = this;
        this._grid = grid;
        this._dataView = dataView;
        if (grid && this._gridOptions) {
            if (this._gridOptions.createPreHeaderPanel) {
                this._eventHandler.subscribe(grid.onSort, function (e, args) {
                    _this.createPreHeaderRowGroupingTitle();
                });
                this._eventHandler.subscribe(grid.onColumnsResized, function (e, args) {
                    _this.createPreHeaderRowGroupingTitle();
                });
                this._eventHandler.subscribe(dataView.onRowCountChanged, function (e, args) {
                    _this.createPreHeaderRowGroupingTitle();
                });
                setTimeout(function () {
                    _this.createPreHeaderRowGroupingTitle();
                }, 50);
            }
        }
    };
    GroupingAndColspanService.prototype.dispose = function () {
        this._eventHandler.unsubscribeAll();
    };
    GroupingAndColspanService.prototype.createPreHeaderRowGroupingTitle = function () {
        var $preHeaderPanel = $(this._grid.getPreHeaderPanel())
            .empty()
            .addClass('slick-header-columns')
            .css('left', '-1000px')
            .width(this._grid.getHeadersWidth());
        $preHeaderPanel.parent().addClass('slick-header');
        var headerColumnWidthDiff = this._grid.getHeaderColumnWidthDiff();
        var m;
        var header;
        var lastColumnGroup = '';
        var widthTotal = 0;
        for (var i = 0; i < this._columnDefinitions.length; i++) {
            m = this._columnDefinitions[i];
            if (lastColumnGroup === m.columnGroup && i > 0) {
                widthTotal += m.width;
                header.width(widthTotal - headerColumnWidthDiff);
            }
            else {
                widthTotal = m.width;
                header = $("<div class=\"ui-state-default slick-header-column\" />")
                    .html("<span class=\"slick-column-name\">" + (m.columnGroup || '') + "</span>")
                    .width(m.width - headerColumnWidthDiff)
                    .appendTo($preHeaderPanel);
            }
            lastColumnGroup = m.columnGroup;
        }
    };
    return GroupingAndColspanService;
}());
var DATAGRID_MIN_HEIGHT = 180;
var DATAGRID_MIN_WIDTH = 300;
var DATAGRID_BOTTOM_PADDING = 20;
var DATAGRID_PAGINATION_HEIGHT = 35;
var ResizerService = /** @class */ (function () {
    function ResizerService() {
        this.onGridBeforeResize = new Subject();
    }
    Object.defineProperty(ResizerService.prototype, "_gridOptions", {
        get: function () {
            return (this._grid && this._grid.getOptions) ? this._grid.getOptions() : {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResizerService.prototype, "_gridUid", {
        get: function () {
            return (this._grid && this._grid.getUID) ? this._grid.getUID() : this._gridOptions.gridId;
        },
        enumerable: true,
        configurable: true
    });
    ResizerService.prototype.init = function (grid, fixedDimensions) {
        this._grid = grid;
        if (fixedDimensions) {
            this._fixedHeight = fixedDimensions.height;
            this._fixedWidth = fixedDimensions.width;
        }
    };
    ResizerService.prototype.attachAutoResizeDataGrid = function (newSizes) {
        var _this = this;
        var gridDomElm = $("#" + (this._gridOptions && this._gridOptions.gridId ? this._gridOptions.gridId : 'grid1'));
        if (gridDomElm === undefined || gridDomElm.offset() === undefined) {
            return null;
        }
        this.resizeGrid(10, newSizes);
        $(window).on("resize.grid." + this._gridUid, function () {
            _this.onGridBeforeResize.next(true);
            _this.resizeGrid(0, newSizes);
        });
    };
    ResizerService.prototype.calculateGridNewDimensions = function (gridOptions) {
        var gridDomElm = $("#" + gridOptions.gridId);
        var autoResizeOptions = gridOptions && gridOptions.autoResize;
        var containerElm = (autoResizeOptions && autoResizeOptions.containerId) ? $("#" + autoResizeOptions.containerId) : $("#" + gridOptions.gridContainerId);
        var windowElm = $(window);
        if (windowElm === undefined || containerElm === undefined || gridDomElm === undefined) {
            return null;
        }
        var bottomPadding = (autoResizeOptions && autoResizeOptions.bottomPadding) ? autoResizeOptions.bottomPadding : DATAGRID_BOTTOM_PADDING;
        if (bottomPadding && (gridOptions.enablePagination || this._gridOptions.backendServiceApi)) {
            bottomPadding += DATAGRID_PAGINATION_HEIGHT;
        }
        var gridHeight = windowElm.height() || 0;
        var coordOffsetTop = gridDomElm.offset();
        var gridOffsetTop = (coordOffsetTop !== undefined) ? coordOffsetTop.top : 0;
        var availableHeight = gridHeight - gridOffsetTop - bottomPadding;
        var availableWidth = containerElm.width() || 0;
        var maxHeight = (autoResizeOptions && autoResizeOptions.maxHeight && autoResizeOptions.maxHeight > 0) ? autoResizeOptions.maxHeight : undefined;
        var minHeight = (autoResizeOptions && autoResizeOptions.minHeight && autoResizeOptions.minHeight < 0) ? autoResizeOptions.minHeight : DATAGRID_MIN_HEIGHT;
        var maxWidth = (autoResizeOptions && autoResizeOptions.maxWidth && autoResizeOptions.maxWidth > 0) ? autoResizeOptions.maxWidth : undefined;
        var minWidth = (autoResizeOptions && autoResizeOptions.minWidth && autoResizeOptions.minWidth < 0) ? autoResizeOptions.minWidth : DATAGRID_MIN_WIDTH;
        var newHeight = availableHeight;
        var newWidth = (autoResizeOptions && autoResizeOptions.sidePadding) ? availableWidth - autoResizeOptions.sidePadding : availableWidth;
        if (newHeight < minHeight) {
            newHeight = minHeight;
        }
        if (maxHeight && newHeight > maxHeight) {
            newHeight = maxHeight;
        }
        if (newWidth < minWidth) {
            newWidth = minWidth;
        }
        if (maxWidth && newWidth > maxWidth) {
            newWidth = maxWidth;
        }
        return {
            height: this._fixedHeight || newHeight,
            width: this._fixedWidth || newWidth
        };
    };
    ResizerService.prototype.dispose = function () {
        $(window).off("resize.grid." + this._gridUid);
    };
    ResizerService.prototype.compensateHorizontalScroll = function (grid, gridOptions) {
        var gridElm = $("#" + gridOptions.gridId);
        var scrollbarDimensions = grid && grid.getScrollbarDimensions();
        var slickGridScrollbarWidth = scrollbarDimensions && scrollbarDimensions.width;
        var calculatedScrollbarWidth = getScrollBarWidth();
        if (slickGridScrollbarWidth < calculatedScrollbarWidth) {
            gridElm.width(gridElm.width() + (calculatedScrollbarWidth - slickGridScrollbarWidth));
        }
    };
    ResizerService.prototype.getLastResizeDimensions = function () {
        return this._lastDimensions;
    };
    ResizerService.prototype.resizeGrid = function (delay, newSizes) {
        var _this = this;
        if (delay === void 0) { delay = 10; }
        if (!this._grid || !this._gridOptions) {
            throw new Error("\n      Angular-Slickgrid resizer requires a valid Grid object and Grid Options defined.\n      You can fix this by setting your gridOption to use \"enableAutoResize\" or create an instance of the ResizerService by calling attachAutoResizeDataGrid()");
        }
        return new Promise(function (resolve) {
            delay = delay || 0;
            if (delay > 0) {
                clearTimeout(_this._timer);
                _this._timer = setTimeout(function () {
                    _this.resizeGridWithDimensions(newSizes);
                    resolve(_this._lastDimensions);
                }, delay);
            }
            else {
                _this.resizeGridWithDimensions(newSizes);
                resolve(_this._lastDimensions);
            }
        });
    };
    ResizerService.prototype.resizeGridWithDimensions = function (newSizes) {
        var availableDimensions = this.calculateGridNewDimensions(this._gridOptions);
        var gridElm = $("#" + this._gridOptions.gridId) || {};
        var gridContainerElm = $("#" + this._gridOptions.gridContainerId) || {};
        if ((newSizes || availableDimensions) && gridElm.length > 0) {
            var newHeight = (newSizes && newSizes.height) ? newSizes.height : availableDimensions.height;
            var newWidth = (newSizes && newSizes.width) ? newSizes.width : availableDimensions.width;
            gridElm.height(newHeight);
            gridElm.width(newWidth);
            gridContainerElm.height(newHeight);
            gridContainerElm.width(newWidth);
            if (new RegExp('MSIE [6-8]').exec(navigator.userAgent) === null && this._grid && this._grid.resizeCanvas) {
                this._grid.resizeCanvas();
            }
            if (this._gridOptions && this._gridOptions.enableAutoSizeColumns && typeof this._grid.autosizeColumns) {
                if (this._gridUid && $("." + this._gridUid).length > 0) {
                    this._grid.autosizeColumns();
                }
                this.compensateHorizontalScroll(this._grid, this._gridOptions);
            }
            this._lastDimensions = {
                height: newHeight,
                width: newWidth
            };
            if ((this._gridOptions.enablePagination || this._gridOptions.backendServiceApi)) {
                this._lastDimensions.heightWithPagination = newHeight + DATAGRID_PAGINATION_HEIGHT;
            }
        }
        return this._lastDimensions;
    };
    return ResizerService;
}());
var AvgAggregator = /** @class */ (function () {
    function AvgAggregator(field) {
        this._field = field;
    }
    AvgAggregator.prototype.init = function () {
        this._count = 0;
        this._nonNullCount = 0;
        this._sum = 0;
    };
    AvgAggregator.prototype.accumulate = function (item) {
        var val = item[this._field];
        this._count++;
        if (val != null && val !== '' && !isNaN(val)) {
            this._nonNullCount++;
            this._sum += parseFloat(val);
        }
    };
    AvgAggregator.prototype.storeResult = function (groupTotals) {
        if (!groupTotals.avg) {
            groupTotals.avg = {};
        }
        if (this._nonNullCount !== 0) {
            groupTotals.avg[this._field] = this._sum / this._nonNullCount;
        }
    };
    return AvgAggregator;
}());
var MinAggregator = /** @class */ (function () {
    function MinAggregator(field) {
        this._field = field;
    }
    MinAggregator.prototype.init = function () {
        this._min = null;
    };
    MinAggregator.prototype.accumulate = function (item) {
        var val = item[this._field];
        if (val != null && val !== '' && !isNaN(val)) {
            if (this._min == null || val < this._min) {
                this._min = val;
            }
        }
    };
    MinAggregator.prototype.storeResult = function (groupTotals) {
        if (!groupTotals.min) {
            groupTotals.min = {};
        }
        groupTotals.min[this._field] = this._min;
    };
    return MinAggregator;
}());
var MaxAggregator = /** @class */ (function () {
    function MaxAggregator(field) {
        this._field = field;
    }
    MaxAggregator.prototype.init = function () {
        this._max = null;
    };
    MaxAggregator.prototype.accumulate = function (item) {
        var val = item[this._field];
        if (val != null && val !== '' && !isNaN(val)) {
            if (this._max == null || val > this._max) {
                this._max = val;
            }
        }
    };
    MaxAggregator.prototype.storeResult = function (groupTotals) {
        if (!groupTotals.max) {
            groupTotals.max = {};
        }
        groupTotals.max[this._field] = this._max;
    };
    return MaxAggregator;
}());
var SumAggregator = /** @class */ (function () {
    function SumAggregator(field) {
        this._field = field;
    }
    SumAggregator.prototype.init = function () {
        this._sum = null;
    };
    SumAggregator.prototype.accumulate = function (item) {
        var val = item[this._field];
        if (val != null && val !== '' && !isNaN(val)) {
            this._sum += parseFloat(val);
        }
    };
    SumAggregator.prototype.storeResult = function (groupTotals) {
        if (!groupTotals.sum) {
            groupTotals.sum = {};
        }
        groupTotals.sum[this._field] = this._sum;
    };
    return SumAggregator;
}());
var Aggregators = {
    Avg: AvgAggregator,
    Min: MinAggregator,
    Max: MaxAggregator,
    Sum: SumAggregator
};
var CheckboxEditor = /** @class */ (function () {
    function CheckboxEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(CheckboxEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxEditor.prototype.init = function () {
        var _this = this;
        var fieldId = this.columnDef && this.columnDef.id;
        this.$input = $("<input type=\"checkbox\" value=\"true\" class=\"editor-checkbox editor-" + fieldId + "\" />");
        this.$input.appendTo(this.args.container);
        this.$input.focus();
        if (this.args.grid.getOptions().autoCommitEdit) {
            this.$input.click(function () { return _this.args.grid.getEditorLock().commitCurrentEdit(); });
        }
    };
    CheckboxEditor.prototype.destroy = function () {
        this.$input.remove();
    };
    CheckboxEditor.prototype.focus = function () {
        this.$input.focus();
    };
    CheckboxEditor.prototype.hide = function () {
        this.$input.hide();
    };
    CheckboxEditor.prototype.show = function () {
        this.$input.show();
    };
    CheckboxEditor.prototype.loadValue = function (item) {
        this.defaultValue = !!item[this.columnDef.field];
        if (this.defaultValue) {
            this.$input.prop('checked', true);
        }
        else {
            this.$input.prop('checked', false);
        }
    };
    CheckboxEditor.prototype.preClick = function () {
        this.$input.prop('checked', !this.$input.prop('checked'));
    };
    CheckboxEditor.prototype.serializeValue = function () {
        return this.$input.prop('checked');
    };
    CheckboxEditor.prototype.applyValue = function (item, state) {
        item[this.columnDef.field] = state;
    };
    CheckboxEditor.prototype.isValueChanged = function () {
        return (this.serializeValue() !== this.defaultValue);
    };
    CheckboxEditor.prototype.validate = function () {
        if (this.validator) {
            var value = this.$input && this.$input.val && this.$input.val();
            var validationResults = this.validator(value, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        return {
            valid: true,
            msg: null
        };
    };
    return CheckboxEditor;
}());
var moment$8 = moment_;
require('flatpickr');
var DateEditor = /** @class */ (function () {
    function DateEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(DateEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    DateEditor.prototype.init = function () {
        var _this = this;
        if (this.args && this.args.column) {
            var fieldId = this.columnDef && this.columnDef.id;
            var gridOptions = (this.args.grid.getOptions());
            this.defaultDate = (this.args.item) ? this.args.item[this.args.column.field] : null;
            var inputFormat = mapFlatpickrDateFormatWithFieldType(this.columnDef.type || FieldType.dateIso);
            var outputFormat = mapFlatpickrDateFormatWithFieldType(this.columnDef.outputType || FieldType.dateUtc);
            var currentLocale = this.getCurrentLocale(this.columnDef, gridOptions);
            if (currentLocale.length > 2) {
                currentLocale = currentLocale.substring(0, 2);
            }
            var pickerOptions = {
                defaultDate: this.defaultDate,
                altInput: true,
                altFormat: inputFormat,
                dateFormat: outputFormat,
                closeOnSelect: false,
                locale: (currentLocale !== 'en') ? this.loadFlatpickrLocale(currentLocale) : 'en',
                onChange: function (selectedDates, dateStr, instance) {
                    _this.save();
                },
            };
            this.$input = $("<input type=\"text\" data-defaultDate=\"" + this.defaultDate + "\" class=\"editor-text flatpickr editor-" + fieldId + "\" />");
            this.$input.appendTo(this.args.container);
            this.flatInstance = (this.$input[0] && typeof this.$input[0].flatpickr === 'function') ? this.$input[0].flatpickr(pickerOptions) : null;
            this.show();
        }
    };
    DateEditor.prototype.getCurrentLocale = function (columnDef, gridOptions) {
        var options = gridOptions || columnDef.params || {};
        if (options.i18n && options.i18n instanceof TranslateService) {
            return options.i18n.currentLang;
        }
        return 'en';
    };
    DateEditor.prototype.loadFlatpickrLocale = function (locale) {
        var gridOptions = this.args && this.args.grid && this.args.grid.getOptions();
        if (gridOptions && gridOptions.params && gridOptions.params.flapickrLocale) {
            return gridOptions.params.flapickrLocale;
        }
        else if (locale !== 'en') {
            var localeDefault = require("flatpickr/dist/l10n/" + locale + ".js").default;
            return (localeDefault && localeDefault[locale]) ? localeDefault[locale] : 'en';
        }
        return 'en';
    };
    DateEditor.prototype.destroy = function () {
        this.hide();
        this.$input.remove();
    };
    DateEditor.prototype.show = function () {
        if (this.flatInstance && typeof this.flatInstance.open === 'function') {
            this.flatInstance.open();
        }
    };
    DateEditor.prototype.hide = function () {
        if (this.flatInstance && typeof this.flatInstance.close === 'function') {
            this.flatInstance.close();
        }
    };
    DateEditor.prototype.focus = function () {
        this.$input.focus();
    };
    DateEditor.prototype.save = function () {
        var validation = this.validate();
        if (validation && validation.valid) {
            if (this.args.grid.getOptions().autoCommitEdit) {
                this.args.grid.getEditorLock().commitCurrentEdit();
            }
            else {
                this.args.commitChanges();
            }
        }
    };
    DateEditor.prototype.getColumnEditor = function () {
        return this.args && this.args.column && this.args.column.internalColumnEditor && this.args.column.internalColumnEditor;
    };
    DateEditor.prototype.loadValue = function (item) {
        this.defaultDate = item[this.args.column.field];
        this.flatInstance.setDate(item[this.args.column.field]);
    };
    DateEditor.prototype.serializeValue = function () {
        var domValue = this.$input.val();
        if (!domValue) {
            return '';
        }
        var outputFormat = mapMomentDateFormatWithFieldType(this.args.column.type || FieldType.dateIso);
        var value = moment$8(domValue).format(outputFormat);
        return value;
    };
    DateEditor.prototype.applyValue = function (item, state) {
        if (!state) {
            return;
        }
        var outputFormat = mapMomentDateFormatWithFieldType(this.args.column.type || FieldType.dateIso);
        item[this.args.column.field] = moment$8(state, outputFormat).toDate();
    };
    DateEditor.prototype.isValueChanged = function () {
        return (!(this.$input.val() === '' && this.defaultDate == null)) && (this.$input.val() !== this.defaultDate);
    };
    DateEditor.prototype.validate = function () {
        if (this.validator) {
            var value = this.$input && this.$input.val && this.$input.val();
            var validationResults = this.validator(value, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        return {
            valid: true,
            msg: null
        };
    };
    return DateEditor;
}());
var defaultDecimalPlaces = 0;
var FloatEditor = /** @class */ (function () {
    function FloatEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(FloatEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatEditor.prototype, "hasAutoCommitEdit", {
        get: function () {
            return this.args.grid.getOptions().autoCommitEdit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FloatEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    FloatEditor.prototype.init = function () {
        var _this = this;
        var fieldId = this.columnDef && this.columnDef.id;
        this.$input = $("<input type=\"number\" class=\"editor-text editor-" + fieldId + "\" step=\"" + this.getInputDecimalSteps() + "\" />")
            .appendTo(this.args.container)
            .on('keydown.nav', function (e) {
            if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.RIGHT) {
                e.stopImmediatePropagation();
            }
        });
        if (this.hasAutoCommitEdit) {
            this.$input.on('focusout', function () { return _this.save(); });
        }
        setTimeout(function () {
            _this.$input.focus().select();
        }, 50);
    };
    FloatEditor.prototype.destroy = function () {
        this.$input.remove();
    };
    FloatEditor.prototype.focus = function () {
        this.$input.focus();
    };
    FloatEditor.prototype.getColumnEditor = function () {
        return this.args && this.args.column && this.args.column.internalColumnEditor && this.args.column.internalColumnEditor;
    };
    FloatEditor.prototype.getDecimalPlaces = function () {
        var rtn = (this.columnEditor.params && this.columnEditor.params.hasOwnProperty('decimalPlaces')) ? this.columnEditor.params.decimalPlaces : undefined;
        if (rtn === undefined) {
            rtn = defaultDecimalPlaces;
        }
        return (!rtn && rtn !== 0 ? null : rtn);
    };
    FloatEditor.prototype.getInputDecimalSteps = function () {
        var decimals = this.getDecimalPlaces();
        var zeroString = '';
        for (var i = 1; i < decimals; i++) {
            zeroString += '0';
        }
        if (decimals > 0) {
            return "0." + zeroString + "1";
        }
        return '1';
    };
    FloatEditor.prototype.loadValue = function (item) {
        this.defaultValue = item[this.columnDef.field];
        var decPlaces = this.getDecimalPlaces();
        if (decPlaces !== null
            && (this.defaultValue || this.defaultValue === 0)
            && this.defaultValue.toFixed) {
            this.defaultValue = this.defaultValue.toFixed(decPlaces);
        }
        this.$input.val(this.defaultValue);
        this.$input[0].defaultValue = this.defaultValue;
        this.$input.select();
    };
    FloatEditor.prototype.serializeValue = function () {
        var rtn = parseFloat(this.$input.val()) || 0;
        var decPlaces = this.getDecimalPlaces();
        if (decPlaces !== null
            && (rtn || rtn === 0)
            && rtn.toFixed) {
            rtn = parseFloat(rtn.toFixed(decPlaces));
        }
        return rtn;
    };
    FloatEditor.prototype.applyValue = function (item, state) {
        item[this.columnDef.field] = state;
    };
    FloatEditor.prototype.isValueChanged = function () {
        var elmValue = this.$input.val();
        return (!(elmValue === '' && this.defaultValue === null)) && (elmValue !== this.defaultValue);
    };
    FloatEditor.prototype.save = function () {
        var validation = this.validate();
        if (validation && validation.valid) {
            if (this.hasAutoCommitEdit) {
                this.args.grid.getEditorLock().commitCurrentEdit();
            }
            else {
                this.args.commitChanges();
            }
        }
    };
    FloatEditor.prototype.validate = function () {
        var elmValue = this.$input.val();
        var floatNumber = !isNaN((elmValue)) ? parseFloat(elmValue) : null;
        var decPlaces = this.getDecimalPlaces();
        var minValue = this.columnEditor.minValue;
        var maxValue = this.columnEditor.maxValue;
        var errorMsg = this.columnEditor.errorMessage;
        var mapValidation = {
            '{{minValue}}': minValue,
            '{{maxValue}}': maxValue,
            '{{minDecimal}}': 0,
            '{{maxDecimal}}': decPlaces
        };
        if (this.validator) {
            var validationResults = this.validator(elmValue, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        else if (isNaN((elmValue)) || (decPlaces === 0 && !/^[-+]?(\d+(\.)?(\d)*)$/.test(elmValue))) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_VALID_NUMBER
            };
        }
        else if (minValue !== undefined && maxValue !== undefined && floatNumber !== null && (floatNumber < minValue || floatNumber > maxValue)) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_NUMBER_BETWEEN.replace(/{{minValue}}|{{maxValue}}/gi, function (matched) { return mapValidation[matched]; })
            };
        }
        else if (minValue !== undefined && floatNumber !== null && floatNumber <= minValue) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_NUMBER_MIN.replace(/{{minValue}}/gi, function (matched) { return mapValidation[matched]; })
            };
        }
        else if (maxValue !== undefined && floatNumber !== null && floatNumber >= maxValue) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_NUMBER_MAX.replace(/{{maxValue}}/gi, function (matched) { return mapValidation[matched]; })
            };
        }
        else if ((decPlaces > 0 && !new RegExp("^(\\d*(\\.)?(\\d){0," + decPlaces + "})$").test(elmValue))) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_DECIMAL_BETWEEN.replace(/{{minDecimal}}|{{maxDecimal}}/gi, function (matched) { return mapValidation[matched]; })
            };
        }
        return {
            valid: true,
            msg: null
        };
    };
    return FloatEditor;
}());
var IntegerEditor = /** @class */ (function () {
    function IntegerEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(IntegerEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntegerEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntegerEditor.prototype, "hasAutoCommitEdit", {
        get: function () {
            return this.args.grid.getOptions().autoCommitEdit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IntegerEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    IntegerEditor.prototype.init = function () {
        var _this = this;
        var fieldId = this.columnDef && this.columnDef.id;
        this.$input = $("<input type=\"number\" class=\"editor-text editor-" + fieldId + "\" />")
            .appendTo(this.args.container)
            .on('keydown.nav', function (e) {
            if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.RIGHT) {
                e.stopImmediatePropagation();
            }
        });
        if (this.hasAutoCommitEdit) {
            this.$input.on('focusout', function () { return _this.save(); });
        }
        setTimeout(function () {
            _this.$input.focus().select();
        }, 50);
    };
    IntegerEditor.prototype.destroy = function () {
        this.$input.remove();
    };
    IntegerEditor.prototype.focus = function () {
        this.$input.focus();
    };
    IntegerEditor.prototype.getColumnEditor = function () {
        return this.args && this.args.column && this.args.column.internalColumnEditor && this.args.column.internalColumnEditor;
    };
    IntegerEditor.prototype.loadValue = function (item) {
        this.defaultValue = parseInt(item[this.args.column.field], 10);
        this.$input.val(this.defaultValue);
        this.$input[0].defaultValue = this.defaultValue;
        this.$input.select();
    };
    IntegerEditor.prototype.serializeValue = function () {
        return parseInt((this.$input.val()), 10) || 0;
    };
    IntegerEditor.prototype.applyValue = function (item, state) {
        item[this.args.column.field] = state;
    };
    IntegerEditor.prototype.isValueChanged = function () {
        var elmValue = this.$input.val();
        var value = isNaN(elmValue) ? elmValue : parseInt(elmValue, 10);
        return (!(value === '' && this.defaultValue === null)) && (value !== this.defaultValue);
    };
    IntegerEditor.prototype.save = function () {
        var validation = this.validate();
        if (validation && validation.valid) {
            if (this.hasAutoCommitEdit) {
                this.args.grid.getEditorLock().commitCurrentEdit();
            }
            else {
                this.args.commitChanges();
            }
        }
    };
    IntegerEditor.prototype.validate = function () {
        var elmValue = this.$input.val();
        var errorMsg = this.columnEditor.params && this.columnEditor.errorMessage;
        if (this.validator) {
            var validationResults = this.validator(elmValue, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        else if (isNaN((elmValue)) || !/^[+-]?\d+$/.test(elmValue)) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_VALID_INTEGER
            };
        }
        return {
            valid: true,
            msg: null
        };
    };
    return IntegerEditor;
}());
var LongTextEditor = /** @class */ (function () {
    function LongTextEditor(args) {
        this.args = args;
        this.gridOptions = (this.args.grid.getOptions());
        var options = this.gridOptions || this.args.column.params || {};
        this._translate = options.i18n;
        this.init();
    }
    Object.defineProperty(LongTextEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongTextEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongTextEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LongTextEditor.prototype, "hasAutoCommitEdit", {
        get: function () {
            return this.args.grid.getOptions().autoCommitEdit;
        },
        enumerable: true,
        configurable: true
    });
    LongTextEditor.prototype.init = function () {
        var _this = this;
        var fieldId = this.columnDef && this.columnDef.id;
        var cancelText = this._translate && this._translate.instant('CANCEL') || Constants.TEXT_CANCEL;
        var saveText = this._translate && this._translate.instant('SAVE') || Constants.TEXT_SAVE;
        var $container = $('body');
        this.$wrapper = $("<div class=\"slick-large-editor-text editor-" + fieldId + "\" />").appendTo($container);
        this.$input = $("<textarea hidefocus rows=\"5\">").appendTo(this.$wrapper);
        if (this.hasAutoCommitEdit) {
            this.$input.on('focusout', function () { return _this.save(); });
        }
        $("<div class=\"editor-footer\">\n          <button class=\"btn btn-primary btn-xs\">" + saveText + "</button>\n          <button class=\"btn btn-default btn-xs\">" + cancelText + "</button>\n      </div>").appendTo(this.$wrapper);
        this.$wrapper.find('button:first').on('click', function () { return _this.save(); });
        this.$wrapper.find('button:last').on('click', function () { return _this.cancel(); });
        this.$input.on('keydown', this.handleKeyDown.bind(this));
        this.position(this.args && this.args.position);
        this.$input.focus().select();
    };
    LongTextEditor.prototype.handleKeyDown = function (e) {
        if (e.which === KeyCode.ENTER && e.ctrlKey) {
            this.save();
        }
        else if (e.which === KeyCode.ESCAPE) {
            e.preventDefault();
            this.cancel();
        }
        else if (e.which === KeyCode.TAB && e.shiftKey) {
            e.preventDefault();
            if (this.args && this.args.grid) {
                this.args.grid.navigatePrev();
            }
        }
        else if (e.which === KeyCode.TAB) {
            e.preventDefault();
            if (this.args && this.args.grid) {
                this.args.grid.navigateNext();
            }
        }
    };
    LongTextEditor.prototype.save = function () {
        var validation = this.validate();
        if (validation && validation.valid) {
            if (this.hasAutoCommitEdit) {
                this.args.grid.getEditorLock().commitCurrentEdit();
            }
            else {
                this.args.commitChanges();
            }
        }
    };
    LongTextEditor.prototype.cancel = function () {
        this.$input.val(this.defaultValue);
        if (this.args && this.args.cancelChanges) {
            this.args.cancelChanges();
        }
    };
    LongTextEditor.prototype.hide = function () {
        this.$wrapper.hide();
    };
    LongTextEditor.prototype.show = function () {
        this.$wrapper.show();
    };
    LongTextEditor.prototype.position = function (position) {
        this.$wrapper
            .css('top', (position.top || 0) - 5)
            .css('left', (position.left || 0) - 5);
    };
    LongTextEditor.prototype.destroy = function () {
        this.$wrapper.remove();
    };
    LongTextEditor.prototype.focus = function () {
        this.$input.focus();
    };
    LongTextEditor.prototype.getColumnEditor = function () {
        return this.args && this.args.column && this.args.column.internalColumnEditor && this.args.column.internalColumnEditor;
    };
    LongTextEditor.prototype.loadValue = function (item) {
        this.$input.val(this.defaultValue = item[this.columnDef.field]);
        this.$input.select();
    };
    LongTextEditor.prototype.serializeValue = function () {
        return this.$input.val();
    };
    LongTextEditor.prototype.applyValue = function (item, state) {
        item[this.columnDef.field] = state;
    };
    LongTextEditor.prototype.isValueChanged = function () {
        return (!(this.$input.val() === '' && this.defaultValue == null)) && (this.$input.val() !== this.defaultValue);
    };
    LongTextEditor.prototype.validate = function () {
        if (this.validator) {
            var value = this.$input && this.$input.val && this.$input.val();
            var validationResults = this.validator(value, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        return {
            valid: true,
            msg: null
        };
    };
    return LongTextEditor;
}());
var DOMPurify$1 = DOMPurify_;
var SelectEditor = /** @class */ (function () {
    function SelectEditor(args, isMultipleSelect) {
        var _this = this;
        this.args = args;
        this.isMultipleSelect = isMultipleSelect;
        this._subscriptions = [];
        this._destroying = false;
        this.gridOptions = (this.args.grid.getOptions());
        var gridOptions = this.gridOptions || this.args.column.params || {};
        this._translate = gridOptions.i18n;
        var fieldId = this.columnDef && this.columnDef.id;
        this.elementName = "editor-" + fieldId;
        var libOptions = {
            autoAdjustDropHeight: true,
            autoAdjustDropPosition: true,
            autoAdjustDropWidthByTextSize: true,
            container: 'body',
            filter: false,
            maxHeight: 275,
            name: this.elementName,
            single: true,
            textTemplate: function ($elm) {
                var isRenderHtmlEnabled = _this.columnDef && _this.columnDef.internalColumnEditor && _this.columnDef.internalColumnEditor.enableRenderHtml || false;
                return isRenderHtmlEnabled ? $elm.text() : $elm.html();
            },
            onBlur: function () { return _this.destroy(); },
            onClose: function () {
                if (!_this._destroying && args.grid.getOptions().autoCommitEdit) {
                    args.grid.getEditorLock().commitCurrentEdit();
                }
            }
        };
        if (isMultipleSelect) {
            libOptions.single = false;
            libOptions.addTitle = true;
            libOptions.okButton = true;
            libOptions.selectAllDelimiter = ['', ''];
            if (this._translate) {
                libOptions.countSelected = this._translate.instant('X_OF_Y_SELECTED');
                libOptions.allSelected = this._translate.instant('ALL_SELECTED');
                libOptions.selectAllText = this._translate.instant('SELECT_ALL');
            }
        }
        this.defaultOptions = libOptions;
        this.init();
    }
    Object.defineProperty(SelectEditor.prototype, "collection", {
        get: function () {
            return this.columnDef && this.columnDef && this.columnDef.internalColumnEditor.collection || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "collectionOptions", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor.collectionOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "customStructure", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor.customStructure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "currentValues", {
        get: function () {
            var _this = this;
            if (this.collection.every(function (x) { return typeof x === 'string'; })) {
                return this.collection.filter(function (c) { return _this.$editorElm.val().indexOf(c.toString()) !== -1; });
            }
            var separatorBetweenLabels = this.collectionOptions && this.collectionOptions.separatorBetweenTextLabels || '';
            var isIncludingPrefixSuffix = this.collectionOptions && this.collectionOptions.includePrefixSuffixToSelectedValues || false;
            return this.collection
                .filter(function (c) { return _this.$editorElm.val().indexOf(c[_this.valueName].toString()) !== -1; })
                .map(function (c) {
                var labelText = c[_this.valueName];
                var prefixText = c[_this.labelPrefixName] || '';
                var suffixText = c[_this.labelSuffixName] || '';
                prefixText = (_this.enableTranslateLabel && prefixText && typeof prefixText === 'string') ? _this._translate.instant(prefixText || ' ') : prefixText;
                suffixText = (_this.enableTranslateLabel && suffixText && typeof suffixText === 'string') ? _this._translate.instant(suffixText || ' ') : suffixText;
                if (isIncludingPrefixSuffix) {
                    var tmpOptionArray = [prefixText, labelText, suffixText].filter(function (text) { return text; });
                    return tmpOptionArray.join(separatorBetweenLabels);
                }
                return labelText;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "currentValue", {
        get: function () {
            var _this = this;
            if (this.collection.every(function (x) { return typeof x === 'string'; })) {
                return findOrDefault(this.collection, function (c) { return c.toString() === _this.$editorElm.val(); });
            }
            var separatorBetweenLabels = this.collectionOptions && this.collectionOptions.separatorBetweenTextLabels || '';
            var isIncludingPrefixSuffix = this.collectionOptions && this.collectionOptions.includePrefixSuffixToSelectedValues || false;
            var itemFound = findOrDefault(this.collection, function (c) { return c[_this.valueName].toString() === _this.$editorElm.val(); });
            if (itemFound) {
                var labelText = itemFound[this.valueName];
                if (isIncludingPrefixSuffix) {
                    var prefixText = itemFound[this.labelPrefixName] || '';
                    var suffixText = itemFound[this.labelSuffixName] || '';
                    prefixText = (this.enableTranslateLabel && prefixText && typeof prefixText === 'string') ? this._translate.instant(prefixText || ' ') : prefixText;
                    suffixText = (this.enableTranslateLabel && suffixText && typeof suffixText === 'string') ? this._translate.instant(suffixText || ' ') : suffixText;
                    var tmpOptionArray = [prefixText, labelText, suffixText].filter(function (text) { return text; });
                    return tmpOptionArray.join(separatorBetweenLabels);
                }
                return labelText;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    SelectEditor.prototype.init = function () {
        if (!this.args) {
            throw new Error('[Angular-SlickGrid] An editor must always have an "init()" with valid arguments.');
        }
        if (!this.columnDef || !this.columnDef.internalColumnEditor || (!this.columnDef.internalColumnEditor.collection && !this.columnDef.internalColumnEditor.collectionAsync)) {
            throw new Error("[Angular-SlickGrid] You need to pass a \"collection\" (or \"collectionAsync\") inside Column Definition Editor for the MultipleSelect/SingleSelect Editor to work correctly.\n      Also each option should include a value/label pair (or value/labelKey when using Locale).\n      For example: { editor: { collection: [{ value: true, label: 'True' },{ value: false, label: 'False'}] } }");
        }
        this._collectionService = new CollectionService(this._translate);
        this.enableTranslateLabel = (this.columnDef.internalColumnEditor.enableTranslateLabel) ? this.columnDef.internalColumnEditor.enableTranslateLabel : false;
        this.labelName = this.customStructure && this.customStructure.label || 'label';
        this.labelPrefixName = this.customStructure && this.customStructure.labelPrefix || 'labelPrefix';
        this.labelSuffixName = this.customStructure && this.customStructure.labelSuffix || 'labelSuffix';
        this.optionLabel = this.customStructure && this.customStructure.optionLabel || 'value';
        this.valueName = this.customStructure && this.customStructure.value || 'value';
        if (this.enableTranslateLabel && (!this._translate || typeof this._translate.instant !== 'function')) {
            throw new Error("[select-editor] The ngx-translate TranslateService is required for the Select Editor to work correctly");
        }
        this.renderDomElement(this.collection);
    };
    SelectEditor.prototype.applyValue = function (item, state) {
        item[this.columnDef.field] = state;
    };
    SelectEditor.prototype.destroy = function () {
        this._destroying = true;
        if (this.$editorElm && this.$editorElm.multipleSelect) {
            this.$editorElm.multipleSelect('close');
            this.$editorElm.remove();
        }
        this._subscriptions = unsubscribeAllObservables(this._subscriptions);
    };
    SelectEditor.prototype.loadValue = function (item) {
        if (this.isMultipleSelect) {
            this.loadMultipleValues(item);
        }
        else {
            this.loadSingleValue(item);
        }
        this.refresh();
    };
    SelectEditor.prototype.loadMultipleValues = function (items) {
        var _this = this;
        this.defaultValue = items[this.columnDef.field].map(function (i) { return i.toString(); });
        this.$editorElm.find('option').each(function (i, $e) {
            $e.selected = (_this.defaultValue.indexOf($e.value) !== -1);
        });
    };
    SelectEditor.prototype.loadSingleValue = function (item) {
        var _this = this;
        this.defaultValue = item[this.columnDef.field] && item[this.columnDef.field].toString();
        this.$editorElm.find('option').each(function (i, $e) {
            $e.selected = (_this.defaultValue === $e.value);
        });
    };
    SelectEditor.prototype.serializeValue = function () {
        return (this.isMultipleSelect) ? this.currentValues : this.currentValue;
    };
    SelectEditor.prototype.focus = function () {
        if (this.$editorElm && this.$editorElm.multipleSelect) {
            this.$editorElm.multipleSelect('focus');
        }
    };
    SelectEditor.prototype.isValueChanged = function () {
        if (this.isMultipleSelect) {
            return !arraysEqual(this.$editorElm.val(), this.defaultValue);
        }
        return this.$editorElm.val() !== this.defaultValue;
    };
    SelectEditor.prototype.validate = function () {
        if (this.validator) {
            var value = this.isMultipleSelect ? this.currentValues : this.currentValue;
            var validationResults = this.validator(value, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        return {
            valid: true,
            msg: null
        };
    };
    SelectEditor.prototype.filterCollection = function (inputCollection) {
        var outputCollection = inputCollection;
        if (this.columnEditor && this.columnEditor.collectionFilterBy) {
            var filterBy = this.columnEditor.collectionFilterBy;
            var filterCollectionBy = this.columnEditor.collectionOptions && this.columnEditor.collectionOptions.filterAfterEachPass || null;
            outputCollection = this._collectionService.filterCollection(outputCollection, filterBy, filterCollectionBy);
        }
        return outputCollection;
    };
    SelectEditor.prototype.sortCollection = function (inputCollection) {
        var outputCollection = inputCollection;
        if (this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor.collectionSortBy) {
            var sortBy = this.columnDef.internalColumnEditor.collectionSortBy;
            outputCollection = this._collectionService.sortCollection(outputCollection, sortBy, this.enableTranslateLabel);
        }
        return outputCollection;
    };
    SelectEditor.prototype.renderDomElement = function (collection) {
        if (!Array.isArray(collection) && this.collectionOptions && this.collectionOptions.collectionInObjectProperty) {
            collection = getDescendantProperty(collection, this.collectionOptions.collectionInObjectProperty);
        }
        if (!Array.isArray(collection)) {
            throw new Error('The "collection" passed to the Select Editor is not a valid array');
        }
        if (this.collectionOptions && this.collectionOptions.addBlankEntry) {
            collection.unshift(this.createBlankEntry());
        }
        var newCollection = collection || [];
        newCollection = this.filterCollection(newCollection);
        newCollection = this.sortCollection(newCollection);
        var editorTemplate = this.buildTemplateHtmlString(newCollection);
        this.createDomElement(editorTemplate);
    };
    SelectEditor.prototype.buildTemplateHtmlString = function (collection) {
        var _this = this;
        var options = '';
        var fieldId = this.columnDef && this.columnDef.id;
        var separatorBetweenLabels = this.collectionOptions && this.collectionOptions.separatorBetweenTextLabels || '';
        var isRenderHtmlEnabled = this.columnDef.internalColumnEditor.enableRenderHtml || false;
        var sanitizedOptions = this.gridOptions && this.gridOptions.sanitizeHtmlOptions || {};
        if (collection.every(function (x) { return typeof x === 'string'; })) {
            collection.forEach(function (option) {
                options += "<option value=\"" + option + "\" label=\"" + option + "\">" + option + "</option>";
            });
        }
        else {
            collection.forEach(function (option) {
                if (!option || (option[_this.labelName] === undefined && option.labelKey === undefined)) {
                    throw new Error("[select-editor] A collection with value/label (or value/labelKey when using Locale) is required to populate the Select list, for example: { collection: [ { value: '1', label: 'One' } ])");
                }
                var labelKey = ((option.labelKey || option[_this.labelName]));
                var labelText = ((option.labelKey || _this.enableTranslateLabel) && labelKey) ? _this._translate.instant(labelKey || ' ') : labelKey;
                var prefixText = option[_this.labelPrefixName] || '';
                var suffixText = option[_this.labelSuffixName] || '';
                var optionLabel = option[_this.optionLabel] || '';
                optionLabel = optionLabel.toString().replace(/\"/g, '\'');
                prefixText = (_this.enableTranslateLabel && prefixText && typeof prefixText === 'string') ? _this._translate.instant(prefixText || ' ') : prefixText;
                suffixText = (_this.enableTranslateLabel && suffixText && typeof suffixText === 'string') ? _this._translate.instant(suffixText || ' ') : suffixText;
                optionLabel = (_this.enableTranslateLabel && optionLabel && typeof optionLabel === 'string') ? _this._translate.instant(optionLabel || ' ') : optionLabel;
                var tmpOptionArray = [prefixText, labelText, suffixText].filter(function (text) { return text; });
                var optionText = tmpOptionArray.join(separatorBetweenLabels);
                if (isRenderHtmlEnabled) {
                    var sanitizedText = DOMPurify$1.sanitize(optionText, sanitizedOptions);
                    optionText = htmlEncode(sanitizedText);
                }
                options += "<option value=\"" + option[_this.valueName] + "\" label=\"" + optionLabel + "\">" + optionText + "</option>";
            });
        }
        return "<select id=\"" + this.elementName + "\" class=\"ms-filter search-filter editor-" + fieldId + "\" " + (this.isMultipleSelect ? 'multiple="multiple"' : '') + ">" + options + "</select>";
    };
    SelectEditor.prototype.createBlankEntry = function () {
        var blankEntry = (_a = {}, _a[this.labelName] = '', _a[this.valueName] = '', _a);
        if (this.labelPrefixName) {
            blankEntry[this.labelPrefixName] = '';
        }
        if (this.labelSuffixName) {
            blankEntry[this.labelSuffixName] = '';
        }
        return blankEntry;
        var _a;
    };
    SelectEditor.prototype.createDomElement = function (editorTemplate) {
        var _this = this;
        this.$editorElm = $(editorTemplate);
        if (this.$editorElm && typeof this.$editorElm.appendTo === 'function') {
            this.$editorElm.appendTo(this.args.container);
        }
        if (typeof this.$editorElm.multipleSelect !== 'function') {
            this.$editorElm.addClass('form-control');
        }
        else {
            var elementOptions = (this.columnDef.internalColumnEditor) ? this.columnDef.internalColumnEditor.elementOptions : {};
            this.editorElmOptions = Object.assign({}, this.defaultOptions, elementOptions);
            this.$editorElm = this.$editorElm.multipleSelect(this.editorElmOptions);
            setTimeout(function () { return _this.$editorElm.multipleSelect('open'); });
        }
    };
    SelectEditor.prototype.refresh = function () {
        if (typeof this.$editorElm.multipleSelect === 'function') {
            this.$editorElm.multipleSelect('refresh');
        }
    };
    return SelectEditor;
}());
var MultipleSelectEditor = /** @class */ (function (_super) {
    __extends(MultipleSelectEditor, _super);
    function MultipleSelectEditor(args) {
        var _this = _super.call(this, args, true) || this;
        _this.args = args;
        return _this;
    }
    return MultipleSelectEditor;
}(SelectEditor));
var SingleSelectEditor = /** @class */ (function (_super) {
    __extends(SingleSelectEditor, _super);
    function SingleSelectEditor(args) {
        var _this = _super.call(this, args, false) || this;
        _this.args = args;
        return _this;
    }
    return SingleSelectEditor;
}(SelectEditor));
var DEFAULT_MIN_VALUE$2 = 0;
var DEFAULT_MAX_VALUE$2 = 100;
var DEFAULT_STEP$2 = 1;
var SliderEditor = /** @class */ (function () {
    function SliderEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(SliderEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderEditor.prototype, "editorParams", {
        get: function () {
            return this.columnEditor.params || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    SliderEditor.prototype.init = function () {
        var _this = this;
        var container = this.args && this.args.container;
        var itemId = this.args && this.args.item && this.args.item.id;
        this._elementRangeInputId = "rangeInput_" + this.columnDef.field + "_" + itemId;
        this._elementRangeOutputId = "rangeOutput_" + this.columnDef.field + "_" + itemId;
        var editorTemplate = this.buildTemplateHtmlString();
        this.$editorElm = $(editorTemplate);
        this.$input = this.$editorElm.children('input');
        this.$sliderNumber = this.$editorElm.children('div.input-group-addon.input-group-append').children();
        this.$editorElm
            .appendTo(container)
            .on('mouseup', function () { return _this.save(); });
        if (!this.editorParams.hideSliderNumber) {
            this.$editorElm.on('input change', function (e) {
                var value = e && e.target && e.target.value || '';
                if (value) {
                    document.getElementById(_this._elementRangeOutputId).innerHTML = e.target.value;
                }
            });
        }
    };
    SliderEditor.prototype.destroy = function () {
        this.$editorElm.remove();
    };
    SliderEditor.prototype.focus = function () {
        this.$editorElm.focus();
    };
    SliderEditor.prototype.save = function () {
        if (this.args.grid.getOptions().autoCommitEdit) {
            this.args.grid.getEditorLock().commitCurrentEdit();
        }
        else {
            this.args.commitChanges();
        }
    };
    SliderEditor.prototype.cancel = function () {
        this.$input.val(this.defaultValue);
        this.args.cancelChanges();
    };
    SliderEditor.prototype.loadValue = function (item) {
        this.defaultValue = item[this.columnDef.field];
        this.$input.val(this.defaultValue);
        this.$input[0].defaultValue = this.defaultValue;
        this.$sliderNumber.html(this.defaultValue);
    };
    SliderEditor.prototype.serializeValue = function () {
        return parseInt((this.$input.val()), 10) || 0;
    };
    SliderEditor.prototype.applyValue = function (item, state) {
        item[this.columnDef.field] = state;
    };
    SliderEditor.prototype.isValueChanged = function () {
        var elmValue = this.$input.val();
        return (!(elmValue === '' && this.defaultValue === null)) && (elmValue !== this.defaultValue);
    };
    SliderEditor.prototype.validate = function () {
        var elmValue = this.$input.val();
        var minValue = this.columnEditor.minValue;
        var maxValue = this.columnEditor.maxValue;
        var errorMsg = this.columnEditor.errorMessage;
        var mapValidation = {
            '{{minValue}}': minValue,
            '{{maxValue}}': maxValue
        };
        if (this.validator) {
            var validationResults = this.validator(elmValue, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        else if (minValue !== undefined && (elmValue < minValue || elmValue > maxValue)) {
            return {
                valid: false,
                msg: errorMsg || Constants.VALIDATION_EDITOR_NUMBER_BETWEEN.replace(/{{minValue}}|{{maxValue}}/gi, function (matched) {
                    return mapValidation[matched];
                })
            };
        }
        return {
            valid: true,
            msg: null
        };
    };
    SliderEditor.prototype.buildTemplateHtmlString = function () {
        var fieldId = this.columnDef && this.columnDef.id;
        var minValue = this.columnEditor.hasOwnProperty('minValue') ? this.columnEditor.minValue : DEFAULT_MIN_VALUE$2;
        var maxValue = this.columnEditor.hasOwnProperty('maxValue') ? this.columnEditor.maxValue : DEFAULT_MAX_VALUE$2;
        var defaultValue = this.editorParams.hasOwnProperty('sliderStartValue') ? this.editorParams.sliderStartValue : minValue;
        var step = this.columnEditor.hasOwnProperty('valueStep') ? this.columnEditor.valueStep : DEFAULT_STEP$2;
        var itemId = this.args && this.args.item && this.args.item.id;
        if (this.editorParams.hideSliderNumber) {
            return "\n      <div class=\"slider-editor\">\n        <input type=\"range\" id=\"" + this._elementRangeInputId + "\"\n          name=\"" + this._elementRangeInputId + "\"\n          defaultValue=\"" + defaultValue + "\" min=\"" + minValue + "\" max=\"" + maxValue + "\" step=\"" + step + "\"\n          class=\"form-control slider-editor-input editor-" + fieldId + " range\" />\n      </div>";
        }
        return "\n      <div class=\"input-group slider-editor\">\n        <input type=\"range\" id=\"" + this._elementRangeInputId + "\"\n          name=\"" + this._elementRangeInputId + "\"\n          defaultValue=\"" + defaultValue + "\" min=\"" + minValue + "\" max=\"" + maxValue + "\" step=\"" + step + "\"\n          class=\"form-control slider-editor-input editor-" + fieldId + " range\" />\n        <div class=\"input-group-addon input-group-append slider-value\"><span class=\"input-group-text\" id=\"" + this._elementRangeOutputId + "\">" + defaultValue + "</span></div>\n      </div>";
    };
    return SliderEditor;
}());
var TextEditor = /** @class */ (function () {
    function TextEditor(args) {
        this.args = args;
        this.init();
    }
    Object.defineProperty(TextEditor.prototype, "columnDef", {
        get: function () {
            return this.args && this.args.column || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "columnEditor", {
        get: function () {
            return this.columnDef && this.columnDef.internalColumnEditor && this.columnDef.internalColumnEditor || {};
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "hasAutoCommitEdit", {
        get: function () {
            return this.args.grid.getOptions().autoCommitEdit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextEditor.prototype, "validator", {
        get: function () {
            return this.columnEditor.validator || this.columnDef.validator;
        },
        enumerable: true,
        configurable: true
    });
    TextEditor.prototype.init = function () {
        var _this = this;
        var fieldId = this.columnDef && this.columnDef.id;
        this.$input = $("<input type=\"text\" class=\"editor-text editor-" + fieldId + "\" />")
            .appendTo(this.args.container)
            .on('keydown.nav', function (e) {
            if (e.keyCode === KeyCode.LEFT || e.keyCode === KeyCode.RIGHT) {
                e.stopImmediatePropagation();
            }
        });
        if (this.hasAutoCommitEdit) {
            this.$input.on('focusout', function () { return _this.save(); });
        }
        setTimeout(function () {
            _this.$input.focus().select();
        }, 50);
    };
    TextEditor.prototype.destroy = function () {
        this.$input.remove();
    };
    TextEditor.prototype.focus = function () {
        this.$input.focus();
    };
    TextEditor.prototype.getValue = function () {
        return this.$input.val();
    };
    TextEditor.prototype.setValue = function (val) {
        this.$input.val(val);
    };
    TextEditor.prototype.loadValue = function (item) {
        this.defaultValue = item[this.args.column.field] || '';
        this.$input.val(this.defaultValue);
        this.$input[0].defaultValue = this.defaultValue;
        this.$input.select();
    };
    TextEditor.prototype.serializeValue = function () {
        return this.$input.val();
    };
    TextEditor.prototype.applyValue = function (item, state) {
        item[this.args.column.field] = state;
    };
    TextEditor.prototype.isValueChanged = function () {
        return (!(this.$input.val() === '' && this.defaultValue === null)) && (this.$input.val() !== this.defaultValue);
    };
    TextEditor.prototype.save = function () {
        var validation = this.validate();
        if (validation && validation.valid) {
            if (this.hasAutoCommitEdit) {
                this.args.grid.getEditorLock().commitCurrentEdit();
            }
            else {
                this.args.commitChanges();
            }
        }
    };
    TextEditor.prototype.validate = function () {
        if (this.validator) {
            var value = this.$input && this.$input.val && this.$input.val();
            var validationResults = this.validator(value, this.args);
            if (!validationResults.valid) {
                return validationResults;
            }
        }
        return {
            valid: true,
            msg: null
        };
    };
    return TextEditor;
}());
var Editors = {
    checkbox: CheckboxEditor,
    date: DateEditor,
    float: FloatEditor,
    integer: IntegerEditor,
    longText: LongTextEditor,
    multipleSelect: MultipleSelectEditor,
    singleSelect: SingleSelectEditor,
    slider: SliderEditor,
    text: TextEditor
};
var arrayObjectToCsvFormatter = function (row, cell, value, columnDef, dataContext) {
    var propertyNames = columnDef && columnDef.params && columnDef.params.propertyNames;
    var parentObjectKeyName = columnDef && columnDef.field && columnDef.field.split('.')[0];
    if (!propertyNames || !Array.isArray(propertyNames) || !parentObjectKeyName) {
        throw new Error("Formatters.arrayObjectToCsv requires you to pass an array of \"propertyNames\" (declared in \"params\") that you want to pull the data from.\n      For example, if we have an array of user objects that have the property of firstName & lastName then we need to pass in your column definition:: { params: { propertyNames: ['firtName'] }}");
    }
    if (dataContext[parentObjectKeyName] && Array.isArray(dataContext[parentObjectKeyName])) {
        if (Array.isArray(dataContext[parentObjectKeyName])) {
            var outputStrings_1 = [];
            dataContext[parentObjectKeyName].forEach(function (data) {
                var strings = [];
                propertyNames.forEach(function (prop) {
                    strings.push(data[prop]);
                });
                outputStrings_1.push(strings.join(' '));
            });
            var output = outputStrings_1.join(', ');
            return "<span title=\"" + output + "\">" + output + "</span>";
        }
    }
    return '';
};
var arrayToCsvFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value && Array.isArray(value)) {
        var values = value.join(', ');
        return "<span title=\"" + values + "\">" + values + "</span>";
    }
    return '';
};
var boldFormatter = function (row, cell, value, columnDef, dataContext) {
    var isNumber = (value === null || value === undefined) ? false : !isNaN(+value);
    if (!isNumber) {
        return '';
    }
    else if (value >= 0) {
        return "<span style=\"font-weight: bold\">" + decimalFormatted(value, 2, 2) + "$</span>";
    }
    else {
        return "<span style=\"font-weight: bold\">" + decimalFormatted(value, 2, 2) + "$</span>";
    }
};
var checkboxFormatter = function (row, cell, value, columnDef, dataContext) { return value ? '&#x2611;' : ''; };
var checkmarkFormatter = function (row, cell, value, columnDef, dataContext) { return value ? "<i class=\"fa fa-check checkmark-icon\" aria-hidden=\"true\"></i>" : ''; };
var collectionFormatter = function (row, cell, value, columnDef, dataContext) {
    if (!value || !columnDef || !columnDef.params || !columnDef.params.collection
        || !columnDef.params.collection.length) {
        return '';
    }
    var params = columnDef.params, collection = columnDef.params.collection;
    var labelName = (params.customStructure) ? params.customStructure.label : 'label';
    var valueName = (params.customStructure) ? params.customStructure.value : 'value';
    if (Array.isArray(value)) {
        return arrayToCsvFormatter(row, cell, value.map(function (v) { return findOrDefault(collection, function (c) { return c[valueName] === v; })[labelName]; }), columnDef, dataContext);
    }
    return findOrDefault(collection, function (c) { return c[valueName] === value; })[labelName] || '';
};
var collectionEditorFormatter = function (row, cell, value, columnDef, dataContext) {
    if (!value || !columnDef || !columnDef.internalColumnEditor || !columnDef.internalColumnEditor.collection
        || !columnDef.internalColumnEditor.collection.length) {
        return '';
    }
    var internalColumnEditor = columnDef.internalColumnEditor, collection = columnDef.internalColumnEditor.collection;
    var labelName = (internalColumnEditor.customStructure) ? internalColumnEditor.customStructure.label : 'label';
    var valueName = (internalColumnEditor.customStructure) ? internalColumnEditor.customStructure.value : 'value';
    if (Array.isArray(value)) {
        if (collection.every(function (x) { return typeof x === 'string'; })) {
            return arrayToCsvFormatter(row, cell, value.map(function (v) { return findOrDefault(collection, function (c) { return c === v; }); }), columnDef, dataContext);
        }
        else {
            return arrayToCsvFormatter(row, cell, value.map(function (v) { return findOrDefault(collection, function (c) { return c[valueName] === v; })[labelName]; }), columnDef, dataContext);
        }
    }
    return findOrDefault(collection, function (c) { return c[valueName] === value; })[labelName] || '';
};
var complexObjectFormatter = function (row, cell, value, columnDef, dataContext) {
    if (!columnDef) {
        return '';
    }
    var complexField = columnDef.field || '';
    return complexField.split('.').reduce(function (obj, i) { return (obj ? obj[i] : ''); }, dataContext);
};
var moment$9 = moment_;
var FORMAT$6 = mapMomentDateFormatWithFieldType(FieldType.dateIso);
var dateIsoFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$9(value, FORMAT$6, false).isValid();
    return (value && isDateValid) ? moment$9(value).format(FORMAT$6) : value;
};
var moment$10 = moment_;
var FORMAT$7 = mapMomentDateFormatWithFieldType(FieldType.dateTimeIso);
var dateTimeIsoFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$10(value, FORMAT$7, false).isValid();
    return (value && isDateValid) ? moment$10(value).format(FORMAT$7) : value;
};
var moment$11 = moment_;
var FORMAT$8 = mapMomentDateFormatWithFieldType(FieldType.dateTimeIsoAmPm);
var dateTimeIsoAmPmFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$11(value, FORMAT$8, false).isValid();
    return (value && isDateValid) ? moment$11(value).format(FORMAT$8) : value;
};
var moment$12 = moment_;
var FORMAT$9 = mapMomentDateFormatWithFieldType(FieldType.dateTimeUsAmPm);
var dateTimeUsAmPmFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$12(value, FORMAT$9, false).isValid();
    return (value && isDateValid) ? moment$12(value).format(FORMAT$9) : value;
};
var moment$13 = moment_;
var FORMAT$10 = mapMomentDateFormatWithFieldType(FieldType.dateTimeUs);
var dateTimeUsFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$13(value, FORMAT$10, false).isValid();
    return (value && isDateValid) ? moment$13(value).format(FORMAT$10) : value;
};
var moment$14 = moment_;
var FORMAT$11 = mapMomentDateFormatWithFieldType(FieldType.dateTimeShortIso);
var dateTimeShortIsoFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$14(value, FORMAT$11, false).isValid();
    return (value && isDateValid) ? moment$14(value).format(FORMAT$11) : value;
};
var moment$15 = moment_;
var FORMAT$12 = mapMomentDateFormatWithFieldType(FieldType.dateTimeShortUs);
var dateTimeShortUsFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$15(value, FORMAT$12, false).isValid();
    return (value && isDateValid) ? moment$15(value).format(FORMAT$12) : value;
};
var moment$16 = moment_;
var FORMAT$13 = mapMomentDateFormatWithFieldType(FieldType.dateUs);
var dateUsFormatter = function (row, cell, value, columnDef, dataContext) {
    var isDateValid = moment$16(value, FORMAT$13, false).isValid();
    return (value && isDateValid) ? moment$16(value).format(FORMAT$13) : value;
};
var decimalFormatter = function (row, cell, value, columnDef, dataContext) {
    var params = columnDef.params || {};
    var minDecimalPlaces = params.minDecimalPlaces || params.decimalPlaces || 2;
    var maxDecimalPlaces = params.maxDecimalPlaces || 2;
    var isNumber = (value === null || value === undefined) ? false : !isNaN(+value);
    return !isNumber ? value : "" + decimalFormatted(value, minDecimalPlaces, maxDecimalPlaces);
};
var deleteIconFormatter = function (row, cell, value, columnDef, dataContext) { return "<i class=\"fa fa-trash pointer delete-icon\" aria-hidden=\"true\"></i>"; };
var dollarColoredBoldFormatter = function (row, cell, value, columnDef, dataContext) {
    var isNumber = (value === null || value === undefined) ? false : !isNaN(+value);
    var params = columnDef && columnDef.params || {};
    var minDecimal = params.minDecimal || 2;
    var maxDecimal = params.minDecimal || 4;
    var outputValue = (isNumber && (params.minDecimal || params.maxDecimal)) ? decimalFormatted(value, minDecimal, maxDecimal) : value;
    if (!isNumber) {
        return '';
    }
    else if (value >= 0) {
        return "<span style=\"color:green; font-weight: bold;\">$" + outputValue + "</span>";
    }
    else {
        return "<span style=\"color:red; font-weight: bold;\">$" + outputValue + "</span>";
    }
};
var dollarColoredFormatter = function (row, cell, value, columnDef, dataContext) {
    var isNumber = (value === null || value === undefined) ? false : !isNaN(+value);
    var params = columnDef && columnDef.params || {};
    var minDecimal = params.minDecimal || 2;
    var maxDecimal = params.minDecimal || 4;
    var outputValue = (isNumber && (params.minDecimal || params.maxDecimal)) ? decimalFormatted(value, minDecimal, maxDecimal) : value;
    if (!isNumber) {
        return '';
    }
    else if (value >= 0) {
        return "<span style=\"color:green;\">$" + outputValue + "</span>";
    }
    else {
        return "<span style=\"color:red;\">$" + outputValue + "</span>";
    }
};
var dollarFormatter = function (row, cell, value, columnDef, dataContext) {
    var isNumber = (value === null || value === undefined) ? false : !isNaN(+value);
    var params = columnDef && columnDef.params || {};
    var minDecimal = params.minDecimal || 2;
    var maxDecimal = params.minDecimal || 4;
    var outputValue = (isNumber && (params.minDecimal || params.maxDecimal)) ? decimalFormatted(value, minDecimal, maxDecimal) : value;
    return !isNumber ? '' : "$" + outputValue;
};
var editIconFormatter = function (row, cell, value, columnDef, dataContext) { return "<i class=\"fa fa-pencil pointer edit-icon\" aria-hidden=\"true\"></i>"; };
var hyperlinkFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value && typeof value === 'string') {
        var matchUrl = value.match(/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:\/~\+#]*[\w\-\@?^=%&amp;\/~\+#])?/i);
        if (matchUrl && Array.isArray(matchUrl)) {
            return "<a href=\"" + matchUrl[0] + "\">' + value + '</a>";
        }
    }
    return '';
};
var hyperlinkUriPrefixFormatter = function (row, cell, value, columnDef, dataContext) {
    var uriPrefix = (columnDef && columnDef.params && columnDef.params.uriPrefix) ? columnDef.params.uriPrefix : '';
    if (!uriPrefix) {
        throw new Error("HyperlinkUriPrefix Formatter require a \"uriPrefix\" that can be passed through params. e.g.:: formatter: Formatters.hyperlinkUriPrefix, params: { uriPrefix: '/users/' }");
    }
    if (value && uriPrefix && typeof uriPrefix === 'string' && !uriPrefix.includes('<script>')) {
        uriPrefix += value;
        return '<a href="' + uriPrefix + '">' + value + '</a>';
    }
    return '';
};
var infoIconFormatter = function (row, cell, value, columnDef, dataContext) { return "<i class=\"fa fa-info-circle pointer info-icon\" aria-hidden=\"true\"></i>"; };
var lowercaseFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value !== undefined && typeof value !== 'string') {
        value = value + '';
    }
    return value ? value.toLowerCase() : '';
};
var maskFormatter = function (row, cell, value, columnDef, dataContext) {
    var params = columnDef.params || {};
    var mask = params.mask;
    if (!mask) {
        throw new Error("You must provide a \"mask\" via the generic \"params\" options (e.g.: { formatter: Formatters.mask, params: { mask: '000-000' }}");
    }
    if (value && mask) {
        var i_1 = 0;
        var v_1 = value.toString();
        return mask.replace(/[09A]/g, function () { return v_1[i_1++] || ''; });
    }
    return '';
};
var multipleFormatter = function (row, cell, value, columnDef, dataContext, grid) {
    var params = columnDef.params || {};
    if (!params.formatters || !Array.isArray(params.formatters)) {
        throw new Error("The multiple formatter requires the \"formatters\" to be provided as a column params.\n    For example: this.columnDefinitions = [{ id: title, field: title, formatter: Formatters.multiple, params: { formatters: [Formatters.lowercase, Formatters.uppercase] }");
    }
    var formatters = params.formatters;
    var currentValue = value;
    try {
        for (var formatters_1 = __values(formatters), formatters_1_1 = formatters_1.next(); !formatters_1_1.done; formatters_1_1 = formatters_1.next()) {
            var formatter = formatters_1_1.value;
            currentValue = formatter(row, cell, currentValue, columnDef, dataContext, grid);
        }
    }
    catch (e_15_1) { e_15 = { error: e_15_1 }; }
    finally {
        try {
            if (formatters_1_1 && !formatters_1_1.done && (_a = formatters_1.return)) _a.call(formatters_1);
        }
        finally { if (e_15) throw e_15.error; }
    }
    return currentValue;
    var e_15, _a;
};
var percentFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value === null || value === '') {
        return '';
    }
    var outputValue = value > 0 ? value / 100 : 0;
    return "<span>" + outputValue + "%</span>";
};
var percentCompleteBarFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value === null || value === '') {
        return '';
    }
    var color;
    if (value < 30) {
        color = 'red';
    }
    else if (value < 70) {
        color = 'silver';
    }
    else {
        color = 'green';
    }
    return "<span class=\"percent-complete-bar\" style=\"background:" + color + "; width:" + value + "%\"></span>";
};
var percentCompleteFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value === null || value === '') {
        return '-';
    }
    else if (value < 50) {
        return "<span style='color:red;font-weight:bold;'>" + value + "%</span>";
    }
    else {
        return "<span style='color:green'>" + value + "%</span>";
    }
};
var percentSymbolFormatter = function (row, cell, value, columnDef, dataContext) {
    return value ? "<span>" + value + "%</span>" : '';
};
var progressBarFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value === null || value === '') {
        return '';
    }
    var color;
    if (value < 30) {
        color = 'danger';
    }
    else if (value < 70) {
        color = 'warning';
    }
    else {
        color = 'success';
    }
    return "<div class=\"progress\">\n    <div class=\"progress-bar progress-bar-" + color + " bg-" + color + "\" role=\"progressbar\" aria-valuenow=\"" + value + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"min-width: 2em; width: " + value + "%;\">\n    " + value + "%\n    </div>\n  </div>";
};
var translateFormatter = function (row, cell, value, columnDef, dataContext, grid) {
    var gridOptions = (grid && typeof grid.getOptions === 'function') ? grid.getOptions() : {};
    var options = gridOptions || columnDef.params || {};
    var translate = options.i18n;
    if (!translate || typeof translate.instant !== 'function') {
        throw new Error("The translate formatter requires the \"ngx-translate\" Service to be provided as a Grid Options or Column Definition \"i18n\".\n    For example: this.gridOptions = { enableTranslate: true, i18n: this.translate }");
    }
    if (value !== undefined && typeof value !== 'string') {
        value = value + '';
    }
    return value ? translate.instant(value) : '';
};
var translateBooleanFormatter = function (row, cell, value, columnDef, dataContext, grid) {
    var gridOptions = (grid && typeof grid.getOptions === 'function') ? grid.getOptions() : {};
    var options = gridOptions || columnDef.params || {};
    var translate = options.i18n;
    if (!translate || typeof translate.instant !== 'function') {
        throw new Error("The translate formatter requires the \"ngx-translate\" Service to be provided as a Grid Options or Column Definition \"i18n\".\n    For example: this.gridOptions = { enableTranslate: true, i18n: this.translate }");
    }
    if (value !== undefined && typeof value !== 'string') {
        value = value + '';
    }
    return value ? translate.instant((value.toUpperCase())) : '';
};
var uppercaseFormatter = function (row, cell, value, columnDef, dataContext) {
    if (value !== undefined && typeof value !== 'string') {
        value = value + '';
    }
    return value ? value.toUpperCase() : '';
};
var yesNoFormatter = function (row, cell, value, columnDef, dataContext) { return value ? 'Yes' : 'No'; };
var Formatters = {
    arrayObjectToCsv: arrayObjectToCsvFormatter,
    arrayToCsv: arrayToCsvFormatter,
    bold: boldFormatter,
    checkbox: checkboxFormatter,
    checkmark: checkmarkFormatter,
    complexObject: complexObjectFormatter,
    collection: collectionFormatter,
    collectionEditor: collectionEditorFormatter,
    dateIso: dateIsoFormatter,
    dateTimeIso: dateTimeIsoFormatter,
    dateTimeShortIso: dateTimeShortIsoFormatter,
    dateTimeIsoAmPm: dateTimeIsoAmPmFormatter,
    dateUs: dateUsFormatter,
    dateTimeUs: dateTimeUsFormatter,
    dateTimeShortUs: dateTimeShortUsFormatter,
    dateTimeUsAmPm: dateTimeUsAmPmFormatter,
    deleteIcon: deleteIconFormatter,
    decimal: decimalFormatter,
    dollar: dollarFormatter,
    dollarColored: dollarColoredFormatter,
    dollarColoredBold: dollarColoredBoldFormatter,
    editIcon: editIconFormatter,
    hyperlink: hyperlinkFormatter,
    hyperlinkUriPrefix: hyperlinkUriPrefixFormatter,
    infoIcon: infoIconFormatter,
    lowercase: lowercaseFormatter,
    mask: maskFormatter,
    multiple: multipleFormatter,
    percent: percentFormatter,
    percentComplete: percentCompleteFormatter,
    percentCompleteBar: percentCompleteBarFormatter,
    percentSymbol: percentSymbolFormatter,
    progressBar: progressBarFormatter,
    translate: translateFormatter,
    translateBoolean: translateBooleanFormatter,
    uppercase: uppercaseFormatter,
    yesNo: yesNoFormatter
};
var avgTotalsPercentageFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.avg && totals.avg[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + Math.round(val) + '%' + suffix;
    }
    return '';
};
var avgTotalsDollarFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.avg && totals.avg[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + '$' + decimalFormatted(val, 2, 4) + suffix;
    }
    return '';
};
var avgTotalsFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.avg && totals.avg[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + Math.round(val) + suffix;
    }
    return '';
};
var minTotalsFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.min && totals.min[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix;
    }
    return '';
};
var maxTotalsFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.max && totals.max[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix;
    }
    return '';
};
var sumTotalsColoredFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (isNaN(+val)) {
        return '';
    }
    else if (val >= 0) {
        return "<span style=\"color:green;\">" + (prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix) + "</span>";
    }
    else {
        return "<span style=\"color:red;\">" + (prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix) + "</span>";
    }
};
var sumTotalsDollarColoredBoldFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (isNaN(+val)) {
        return '';
    }
    else if (val >= 0) {
        return "<span style=\"color:green; font-weight: bold;\">" + (prefix + '$' + decimalFormatted(val, 2, 2) + suffix) + "</span>";
    }
    else {
        return "<span style=\"color:red; font-weight: bold;\">" + (prefix + '$' + decimalFormatted(val, 2, 2) + suffix) + "</span>";
    }
};
var sumTotalsDollarColoredFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (isNaN(+val)) {
        return '';
    }
    else if (val >= 0) {
        return "<span style=\"color:green;\">" + (prefix + '$' + decimalFormatted(val, 2, 2) + suffix) + "</span>";
    }
    else {
        return "<span style=\"color:red;\">" + (prefix + '$' + decimalFormatted(val, 2, 2) + suffix) + "</span>";
    }
};
var sumTotalsDollarBoldFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return "<span style=\"font-weight: bold;\">" + (prefix + '$' + decimalFormatted(val, 2, 4) + suffix) + "</span>";
    }
    return '';
};
var sumTotalsDollarFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + '$' + decimalFormatted(val, 2, 2) + suffix;
    }
    return '';
};
var sumTotalsFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix;
    }
    return '';
};
var sumTotalsBoldFormatter = function (totals, columnDef, grid) {
    var field = columnDef.field || '';
    var val = totals.sum && totals.sum[field];
    var prefix = (columnDef.params && columnDef.params.groupFormatterPrefix) ? columnDef.params.groupFormatterPrefix : '';
    var suffix = (columnDef.params && columnDef.params.groupFormatterSuffix) ? columnDef.params.groupFormatterSuffix : '';
    if (val != null) {
        return "<span style=\"font-weight: bold;\">" + (prefix + ((Math.round(parseFloat(val) * 1000000) / 1000000)) + suffix);
    }
    return '';
};
var GroupTotalFormatters = {
    avgTotals: avgTotalsFormatter,
    avgTotalsDollar: avgTotalsDollarFormatter,
    avgTotalsPercentage: avgTotalsPercentageFormatter,
    maxTotals: maxTotalsFormatter,
    minTotals: minTotalsFormatter,
    sumTotals: sumTotalsFormatter,
    sumTotalsBold: sumTotalsBoldFormatter,
    sumTotalsColored: sumTotalsColoredFormatter,
    sumTotalsDollar: sumTotalsDollarFormatter,
    sumTotalsDollarBold: sumTotalsDollarBoldFormatter,
    sumTotalsDollarColored: sumTotalsDollarColoredFormatter,
    sumTotalsDollarColoredBold: sumTotalsDollarColoredBoldFormatter,
};
var SlickPaginationComponent = /** @class */ (function () {
    function SlickPaginationComponent(filterService) {
        this.filterService = filterService;
        this._isFirstRender = true;
        this.onPaginationChanged = new EventEmitter();
        this.dataFrom = 1;
        this.dataTo = 1;
        this.pageCount = 0;
        this.pageNumber = 1;
        this.totalItems = 0;
        this.paginationPageSizes = [25, 75, 100];
        this.fromToParams = { from: this.dataFrom, to: this.dataTo, totalItems: this.totalItems };
    }
    Object.defineProperty(SlickPaginationComponent.prototype, "gridPaginationOptions", {
        get: function () {
            return this._gridPaginationOptions;
        },
        set: function (gridPaginationOptions) {
            this._gridPaginationOptions = gridPaginationOptions;
            if (this._isFirstRender || !gridPaginationOptions || !gridPaginationOptions.pagination || (gridPaginationOptions.pagination.totalItems !== this.totalItems)) {
                this.refreshPagination();
                this._isFirstRender = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    SlickPaginationComponent.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    SlickPaginationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._gridPaginationOptions = this._gridPaginationOptions;
        if (!this._gridPaginationOptions || !this._gridPaginationOptions.pagination || (this._gridPaginationOptions.pagination.totalItems !== this.totalItems)) {
            this.refreshPagination();
        }
        this._filterSubcription = this.filterService.onFilterChanged.subscribe(function (data) {
            _this.refreshPagination(true);
        });
        this._filterSubcription = this.filterService.onFilterCleared.subscribe(function (data) {
            _this.refreshPagination(true);
        });
    };
    SlickPaginationComponent.prototype.ceil = function (number) {
        return Math.ceil(number);
    };
    SlickPaginationComponent.prototype.changeToFirstPage = function (event) {
        this.pageNumber = 1;
        this.onPageChanged(event, this.pageNumber);
    };
    SlickPaginationComponent.prototype.changeToLastPage = function (event) {
        this.pageNumber = this.pageCount;
        this.onPageChanged(event, this.pageNumber);
    };
    SlickPaginationComponent.prototype.changeToNextPage = function (event) {
        if (this.pageNumber < this.pageCount) {
            this.pageNumber++;
            this.onPageChanged(event, this.pageNumber);
        }
    };
    SlickPaginationComponent.prototype.changeToPreviousPage = function (event) {
        if (this.pageNumber > 0) {
            this.pageNumber--;
            this.onPageChanged(event, this.pageNumber);
        }
    };
    SlickPaginationComponent.prototype.changeToCurrentPage = function (event) {
        this.pageNumber = +event.currentTarget.value;
        if (this.pageNumber < 1) {
            this.pageNumber = 1;
        }
        else if (this.pageNumber > this.pageCount) {
            this.pageNumber = this.pageCount;
        }
        this.onPageChanged(event, this.pageNumber);
    };
    SlickPaginationComponent.prototype.dispose = function () {
        this.onPaginationChanged.unsubscribe();
        if (this._filterSubcription) {
            this._filterSubcription.unsubscribe();
        }
    };
    SlickPaginationComponent.prototype.onChangeItemPerPage = function (event) {
        var itemsPerPage = +event.target.value;
        this.pageCount = Math.ceil(this.totalItems / itemsPerPage);
        this.pageNumber = (this.totalItems > 0) ? 1 : 0;
        this.itemsPerPage = itemsPerPage;
        this.onPageChanged(event, this.pageNumber);
    };
    SlickPaginationComponent.prototype.refreshPagination = function (isPageNumberReset) {
        if (isPageNumberReset === void 0) { isPageNumberReset = false; }
        var backendApi = this._gridPaginationOptions.backendServiceApi;
        if (!backendApi || !backendApi.service || !backendApi.process) {
            throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
        }
        if (this._gridPaginationOptions && this._gridPaginationOptions.pagination) {
            var pagination = this._gridPaginationOptions.pagination;
            if (!this.itemsPerPage) {
                this.itemsPerPage = +((backendApi && backendApi.options && backendApi.options.paginationOptions && backendApi.options.paginationOptions.first) ? backendApi.options.paginationOptions.first : this._gridPaginationOptions.pagination.pageSize);
            }
            if (isPageNumberReset || this.totalItems !== pagination.totalItems) {
                if (this._isFirstRender && pagination.pageNumber && pagination.pageNumber > 1) {
                    this.pageNumber = pagination.pageNumber || 1;
                }
                else {
                    this.pageNumber = 1;
                }
                if (this.pageNumber === 1) {
                    backendApi.service.resetPaginationOptions();
                }
            }
            this.paginationPageSizes = this._gridPaginationOptions.pagination.pageSizes;
            this.totalItems = this._gridPaginationOptions.pagination.totalItems;
            this.recalculateFromToIndexes();
        }
        this.pageCount = Math.ceil(this.totalItems / this.itemsPerPage);
    };
    SlickPaginationComponent.prototype.onPageChanged = function (event, pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var backendApi, itemsPerPage, startTime, query, observableOrPromise, processResult, endTime, e_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.recalculateFromToIndexes();
                        backendApi = this._gridPaginationOptions.backendServiceApi;
                        if (!backendApi || !backendApi.service || !backendApi.process) {
                            throw new Error("BackendServiceApi requires at least a \"process\" function and a \"service\" defined");
                        }
                        if (this.dataTo > this.totalItems) {
                            this.dataTo = this.totalItems;
                        }
                        else if (this.totalItems < this.itemsPerPage) {
                            this.dataTo = this.totalItems;
                        }
                        if (!backendApi) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        itemsPerPage = +this.itemsPerPage;
                        startTime = new Date();
                        if (backendApi.preProcess) {
                            backendApi.preProcess();
                        }
                        query = backendApi.service.processOnPaginationChanged(event, { newPage: pageNumber, pageSize: itemsPerPage });
                        observableOrPromise = backendApi.process(query);
                        return [4 /*yield*/, castToPromise(observableOrPromise)];
                    case 2:
                        processResult = _a.sent();
                        endTime = new Date();
                        if (processResult && backendApi.internalPostProcess) {
                            backendApi.internalPostProcess(processResult);
                        }
                        if (backendApi.postProcess) {
                            if (processResult instanceof Object) {
                                processResult.statistics = {
                                    startTime: startTime,
                                    endTime: endTime,
                                    executionTime: endTime.valueOf() - startTime.valueOf(),
                                    itemCount: this.totalItems,
                                    totalItemCount: this.totalItems
                                };
                            }
                            backendApi.postProcess(processResult);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_16 = _a.sent();
                        if (backendApi && backendApi.onError) {
                            backendApi.onError(e_16);
                        }
                        else {
                            throw e_16;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5: throw new Error('Pagination with a backend service requires "BackendServiceApi" to be defined in your grid options');
                    case 6:
                        this.onPaginationChanged.emit({
                            pageNumber: this.pageNumber,
                            pageSizes: this.paginationPageSizes,
                            pageSize: this.itemsPerPage,
                            totalItems: this.totalItems
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SlickPaginationComponent.prototype.recalculateFromToIndexes = function () {
        if (this.totalItems === 0) {
            this.dataFrom = 0;
            this.dataTo = 0;
            this.pageNumber = 0;
        }
        else {
            this.dataFrom = (this.pageNumber * this.itemsPerPage) - this.itemsPerPage + 1;
            this.dataTo = (this.totalItems < this.itemsPerPage) ? this.totalItems : (this.pageNumber * this.itemsPerPage);
        }
    };
    return SlickPaginationComponent;
}());
SlickPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'slick-pagination',
                template: "<div class=\"slick-pagination\">\n    <div class=\"slick-pagination-nav\">\n        <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n            <li class=\"page-item\" [ngClass]=\"(pageNumber === 1 || totalItems === 0) ? 'disabled' : ''\">\n            <a class=\"page-link icon-seek-first fa fa-angle-double-left\" aria-label=\"First\" (click)=\"changeToFirstPage($event)\">\n            </a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"(pageNumber === 1 || totalItems === 0) ? 'disabled' : ''\">\n            <a class=\"page-link icon-seek-prev fa fa-angle-left\" aria-label=\"Previous\" (click)=\"changeToPreviousPage($event)\">\n            </a>\n            </li>\n        </ul>\n        </nav>\n\n        <div class=\"slick-page-number\">\n            <span [translate]=\"'PAGE'\"></span>\n            <input type=\"text\" class=\"form-control\" [value]=\"pageNumber\" size=\"1\" [readOnly]=\"totalItems === 0\" (change)=\"changeToCurrentPage($event)\">\n            <span [translate]=\"'OF'\"></span><span> {{pageCount}}</span>\n        </div>\n\n        <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n            <li class=\"page-item\" [ngClass]=\"(pageNumber === pageCount || totalItems === 0) ? 'disabled' : ''\">\n            <a class=\"page-link icon-seek-next text-center fa fa-lg fa-angle-right\" aria-label=\"Next\" (click)=\"changeToNextPage($event)\">\n            </a>\n            </li>\n            <li class=\"page-item\" [ngClass]=\"(pageNumber === pageCount || totalItems === 0) ? 'disabled' : ''\">\n            <a class=\"page-link icon-seek-end fa fa-lg fa-angle-double-right\" aria-label=\"Last\" (click)=\"changeToLastPage($event)\">\n            </a>\n            </li>\n        </ul>\n        </nav>\n    </div>\n    <span class=\"slick-pagination-settings\">\n        <select id=\"items-per-page-label\" [value]=\"itemsPerPage\" (change)=\"onChangeItemPerPage($event)\">\n        <option value=\"{{pageSize}}\" *ngFor=\"let pageSize of paginationPageSizes;\">{{pageSize}}</option>\n        </select>\n        <span [translate]=\"'ITEMS_PER_PAGE'\"></span>,\n        <span class=\"slick-pagination-count\">\n            <span [translate]=\"'FROM_TO_OF_TOTAL_ITEMS'\" [translateParams]=\"{ from: dataFrom, to: dataTo, totalItems: totalItems }\"></span>\n        </span>\n    </span>\n    </div>\n"
            },] },
    { type: Injectable },
];
SlickPaginationComponent.ctorParameters = function () { return [
    { type: FilterService, },
]; };
SlickPaginationComponent.propDecorators = {
    "onPaginationChanged": [{ type: Output },],
    "gridPaginationOptions": [{ type: Input },],
    "grid": [{ type: Input },],
};
var slickgridEventPrefix = 'sg';
var AngularSlickgridComponent = /** @class */ (function () {
    function AngularSlickgridComponent(elm, exportService, extensionService, extensionUtility, filterService, gridService, gridEventService, gridStateService, groupingAndColspanService, resizer, sharedService, sortService, translate, forRootConfig) {
        this.elm = elm;
        this.exportService = exportService;
        this.extensionService = extensionService;
        this.extensionUtility = extensionUtility;
        this.filterService = filterService;
        this.gridService = gridService;
        this.gridEventService = gridEventService;
        this.gridStateService = gridStateService;
        this.groupingAndColspanService = groupingAndColspanService;
        this.resizer = resizer;
        this.sharedService = sharedService;
        this.sortService = sortService;
        this.translate = translate;
        this.forRootConfig = forRootConfig;
        this._eventHandler = new Slick.EventHandler();
        this._hideHeaderRowAfterPageLoad = false;
        this.groupingDefinition = {};
        this.showPagination = false;
        this.isGridInitialized = false;
        this.subscriptions = [];
        this.onAngularGridCreated = new EventEmitter();
        this.onDataviewCreated = new EventEmitter();
        this.onGridCreated = new EventEmitter();
        this.onGridInitialized = new EventEmitter();
        this.onBeforeGridCreate = new EventEmitter();
        this.onBeforeGridDestroy = new EventEmitter();
        this.onAfterGridDestroyed = new EventEmitter();
        this.onGridStateChanged = new EventEmitter();
    }
    Object.defineProperty(AngularSlickgridComponent.prototype, "gridHeight", {
        set: function (height) {
            this._fixedHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularSlickgridComponent.prototype, "gridWidth", {
        set: function (width) {
            this._fixedWidth = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularSlickgridComponent.prototype, "columnDefinitions", {
        get: function () {
            return this._columnDefinitions;
        },
        set: function (columnDefinitions) {
            this._columnDefinitions = columnDefinitions;
            if (this.isGridInitialized) {
                this.updateColumnDefinitionsList(columnDefinitions);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularSlickgridComponent.prototype, "dataset", {
        get: function () {
            return this._dataView.getItems();
        },
        set: function (dataset) {
            this._dataset = dataset;
            this.refreshGridData(dataset);
        },
        enumerable: true,
        configurable: true
    });
    AngularSlickgridComponent.prototype.ngOnInit = function () {
        this.onBeforeGridCreate.emit(true);
        if (this.gridOptions && !this.gridOptions.enableAutoResize && !this.gridOptions.autoResize) {
            this.gridHeightString = this._fixedHeight + "px";
            this.gridWidthString = this._fixedWidth + "px";
        }
    };
    AngularSlickgridComponent.prototype.ngOnDestroy = function () {
        this.onBeforeGridDestroy.emit(this.grid);
        this.destroy();
        this.onAfterGridDestroyed.emit(true);
    };
    AngularSlickgridComponent.prototype.destroy = function (emptyDomElementContainer) {
        if (emptyDomElementContainer === void 0) { emptyDomElementContainer = false; }
        this._dataView = [];
        this.gridOptions = {};
        this._eventHandler.unsubscribeAll();
        this.extensionService.dispose();
        this.filterService.dispose();
        this.gridEventService.dispose();
        this.gridStateService.dispose();
        this.groupingAndColspanService.dispose();
        this.resizer.dispose();
        this.sortService.dispose();
        this.grid.destroy();
        if (emptyDomElementContainer) {
            $(this.gridOptions.gridContainerId).empty();
        }
        this.subscriptions = unsubscribeAllObservables(this.subscriptions);
    };
    AngularSlickgridComponent.prototype.ngAfterViewInit = function () {
        this.initialization();
        this.isGridInitialized = true;
    };
    AngularSlickgridComponent.prototype.initialization = function () {
        var _this = this;
        this._dataset = this._dataset || [];
        this.gridOptions = this.mergeGridOptions(this.gridOptions);
        this.createBackendApiInternalPostProcessCallback(this.gridOptions);
        if (!this.customDataView) {
            if (this.gridOptions.draggableGrouping || this.gridOptions.enableGrouping) {
                this.extensionUtility.loadExtensionDynamically(ExtensionName.groupItemMetaProvider);
                this.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
                this.sharedService.groupItemMetadataProvider = this.groupItemMetadataProvider;
                this._dataView = new Slick.Data.DataView({ groupItemMetadataProvider: this.groupItemMetadataProvider });
            }
            else {
                this._dataView = new Slick.Data.DataView();
            }
        }
        this._columnDefinitions = this._columnDefinitions.map(function (column) {
            if (column.editor && column.editor.collectionAsync) {
                _this.loadEditorCollectionAsync(column);
            }
            return Object.assign({}, column, { editor: column.editor && column.editor.model, internalColumnEditor: Object.assign({}, column.editor) });
        });
        this.sharedService.allColumns = this._columnDefinitions;
        this.sharedService.visibleColumns = this._columnDefinitions;
        this.extensionService.createExtensionsBeforeGridCreation(this._columnDefinitions, this.gridOptions);
        this.grid = new Slick.Grid("#" + this.gridId, this.customDataView || this._dataView, this._columnDefinitions, this.gridOptions);
        this.sharedService.dataView = this._dataView;
        this.sharedService.grid = this.grid;
        this.extensionService.attachDifferentExtensions();
        this.attachDifferentHooks(this.grid, this.gridOptions, this._dataView);
        this.onGridCreated.emit(this.grid);
        this.grid.init();
        if (!this.customDataView && (this._dataView && this._dataView.beginUpdate && this._dataView.setItems && this._dataView.endUpdate)) {
            this.onDataviewCreated.emit(this._dataView);
            this._dataView.beginUpdate();
            this._dataView.setItems(this._dataset, this.gridOptions.datasetIdPropertyName);
            this._dataView.endUpdate();
        }
        if (this._hideHeaderRowAfterPageLoad) {
            this.showHeaderRow(false);
        }
        this.executeAfterDataviewCreated(this.grid, this.gridOptions, this._dataView);
        this.attachResizeHook(this.grid, this.gridOptions);
        if (this.gridOptions.createPreHeaderPanel && !this.gridOptions.enableDraggableGrouping) {
            this.groupingAndColspanService.init(this.grid, this._dataView);
        }
        this.gridService.init(this.grid, this._dataView);
        if (this.gridOptions.enableTranslate) {
            this.extensionService.translateColumnHeaders();
        }
        if (this.gridOptions.enableExport) {
            this.exportService.init(this.grid, this._dataView);
        }
        this.onGridInitialized.emit(this.grid);
        if (this.gridOptions && this.gridOptions.backendServiceApi) {
            this.attachBackendCallbackFunctions(this.gridOptions);
        }
        this.gridStateService.init(this.grid, this.extensionService, this.filterService, this.sortService);
        this.onAngularGridCreated.emit({
            dataView: this._dataView,
            slickGrid: this.grid,
            destroy: this.destroy.bind(this),
            backendService: this.gridOptions && this.gridOptions.backendServiceApi && this.gridOptions.backendServiceApi.service,
            exportService: this.exportService,
            filterService: this.filterService,
            gridEventService: this.gridEventService,
            gridStateService: this.gridStateService,
            gridService: this.gridService,
            groupingService: this.groupingAndColspanService,
            extensionService: this.extensionService,
            pluginService: this.extensionService,
            resizerService: this.resizer,
            sortService: this.sortService,
        });
    };
    AngularSlickgridComponent.prototype.commitEdit = function (target) {
        var _this = this;
        if (this.grid.getOptions().autoCommitEdit) {
            var activeNode_1 = this.grid.getActiveCellNode();
            setTimeout(function () {
                if (activeNode_1 && activeNode_1.contains(target) && _this.grid.getEditorLock().isActive()) {
                    _this.grid.getEditorLock().commitCurrentEdit();
                }
            });
        }
    };
    AngularSlickgridComponent.prototype.createBackendApiInternalPostProcessCallback = function (gridOptions) {
        var _this = this;
        if (gridOptions && gridOptions.backendServiceApi) {
            var backendApi_1 = gridOptions.backendServiceApi;
            if (backendApi_1 && backendApi_1.service && backendApi_1.service instanceof GraphqlService) {
                backendApi_1.internalPostProcess = function (processResult) {
                    var datasetName = (backendApi_1 && backendApi_1.service && typeof backendApi_1.service.getDatasetName === 'function') ? backendApi_1.service.getDatasetName() : '';
                    if (processResult && processResult.data && processResult.data[datasetName]) {
                        _this._dataset = processResult.data[datasetName].nodes;
                        _this.refreshGridData(_this._dataset, processResult.data[datasetName].totalCount);
                    }
                    else {
                        _this._dataset = [];
                    }
                };
            }
        }
    };
    AngularSlickgridComponent.prototype.attachDifferentHooks = function (grid, gridOptions, dataView) {
        var _this = this;
        this.subscriptions.push(this.translate.onLangChange.subscribe(function (event) {
            if (gridOptions.enableTranslate) {
                _this.extensionService.translateColumnHeaders();
                _this.extensionService.translateColumnPicker();
                _this.extensionService.translateGridMenu();
                _this.extensionService.translateHeaderMenu();
            }
        }));
        if (gridOptions.presets && Array.isArray(gridOptions.presets.columns) && gridOptions.presets.columns.length > 0) {
            var gridColumns = this.gridStateService.getAssociatedGridColumns(grid, gridOptions.presets.columns);
            if (gridColumns && Array.isArray(gridColumns) && gridColumns.length > 0) {
                if (gridOptions.enableCheckboxSelector) {
                    var checkboxColumn = (Array.isArray(this._columnDefinitions) && this._columnDefinitions.length > 0) ? this._columnDefinitions[0] : null;
                    if (checkboxColumn && checkboxColumn.id === '_checkbox_selector' && gridColumns[0].id !== '_checkbox_selector') {
                        gridColumns.unshift(checkboxColumn);
                    }
                }
                grid.setColumns(gridColumns);
            }
        }
        if (gridOptions.enableSorting && !this.customDataView) {
            gridOptions.backendServiceApi ? this.sortService.attachBackendOnSort(grid, dataView) : this.sortService.attachLocalOnSort(grid, dataView);
        }
        if (gridOptions.enableFiltering && !this.customDataView) {
            this.filterService.init(grid);
            if (gridOptions.presets && Array.isArray(gridOptions.presets.filters) && gridOptions.presets.filters.length > 0) {
                this.filterService.populateColumnFilterSearchTerms();
            }
            gridOptions.backendServiceApi ? this.filterService.attachBackendOnFilter(grid) : this.filterService.attachLocalOnFilter(grid, this._dataView);
        }
        if (gridOptions.backendServiceApi) {
            var backendApi = gridOptions.backendServiceApi;
            if (backendApi && backendApi.service && backendApi.service.init) {
                backendApi.service.init(backendApi.options, gridOptions.pagination, this.grid);
            }
        }
        var _loop_3 = function (prop) {
            if (grid.hasOwnProperty(prop) && prop.startsWith('on')) {
                this_3._eventHandler.subscribe(grid[prop], function (e, args) {
                    return _this.dispatchCustomEvent("" + slickgridEventPrefix + titleCase(prop), { eventData: e, args: args });
                });
            }
        };
        var this_3 = this;
        for (var prop in grid) {
            _loop_3(prop);
        }
        var _loop_4 = function (prop) {
            if (dataView.hasOwnProperty(prop) && prop.startsWith('on')) {
                this_4._eventHandler.subscribe(dataView[prop], function (e, args) {
                    return _this.dispatchCustomEvent("" + slickgridEventPrefix + titleCase(prop), { eventData: e, args: args });
                });
            }
        };
        var this_4 = this;
        for (var prop in dataView) {
            _loop_4(prop);
        }
        this.subscriptions.push(this.gridStateService.onGridStateChanged.subscribe(function (gridStateChange) {
            _this.onGridStateChanged.emit(gridStateChange);
        }));
        this.gridEventService.attachOnCellChange(grid, dataView);
        this.gridEventService.attachOnClick(grid, dataView);
        if (dataView && grid) {
            this._eventHandler.subscribe(dataView.onRowCountChanged, function (e, args) {
                grid.updateRowCount();
                grid.render();
            });
            this._eventHandler.subscribe(dataView.onRowsChanged, function (e, args) {
                grid.invalidateRows(args.rows);
                grid.render();
            });
        }
        if (gridOptions.colspanCallback) {
            this._dataView.getItemMetadata = function (rowNumber) {
                var item = _this._dataView.getItem(rowNumber);
                return gridOptions.colspanCallback(item);
            };
        }
    };
    AngularSlickgridComponent.prototype.attachBackendCallbackFunctions = function (gridOptions) {
        var _this = this;
        var backendApi = gridOptions.backendServiceApi;
        var serviceOptions = (backendApi && backendApi.service && backendApi.service.options) ? backendApi.service.options : {};
        var isExecuteCommandOnInit = (!serviceOptions) ? false : ((serviceOptions && serviceOptions.hasOwnProperty('executeProcessCommandOnInit')) ? serviceOptions['executeProcessCommandOnInit'] : true);
        if (backendApi) {
            var backendService = backendApi.service;
            if (gridOptions && gridOptions.presets) {
                if (backendService && backendService.updateFilters && Array.isArray(gridOptions.presets.filters) && gridOptions.presets.filters.length > 0) {
                    backendService.updateFilters(gridOptions.presets.filters, true);
                }
                if (backendService && backendService.updateSorters && Array.isArray(gridOptions.presets.sorters) && gridOptions.presets.sorters.length > 0) {
                    backendService.updateSorters(undefined, gridOptions.presets.sorters);
                }
                if (backendService && backendService.updatePagination && gridOptions.presets.pagination) {
                    backendService.updatePagination(gridOptions.presets.pagination.pageNumber, gridOptions.presets.pagination.pageSize);
                }
            }
            else {
                var columnFilters = this.filterService.getColumnFilters();
                if (columnFilters && backendService && backendService.updateFilters) {
                    backendService.updateFilters(columnFilters, false);
                }
            }
        }
        if (backendApi && backendApi.service && (backendApi.onInit || isExecuteCommandOnInit)) {
            var query = (typeof backendApi.service.buildQuery === 'function') ? backendApi.service.buildQuery() : '';
            var observableOrPromise_1 = (isExecuteCommandOnInit) ? backendApi.process(query) : backendApi.onInit(query);
            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                var startTime, processResult, endTime, e_17;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startTime = new Date();
                            if (backendApi.preProcess) {
                                backendApi.preProcess();
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, castToPromise(observableOrPromise_1)];
                        case 2:
                            processResult = _a.sent();
                            endTime = new Date();
                            if (processResult && backendApi && backendApi.service instanceof GraphqlService && backendApi.internalPostProcess) {
                                backendApi.internalPostProcess(processResult);
                            }
                            if (backendApi.postProcess) {
                                if (processResult instanceof Object) {
                                    processResult.statistics = {
                                        startTime: startTime,
                                        endTime: endTime,
                                        executionTime: endTime.valueOf() - startTime.valueOf(),
                                        totalItemCount: this.gridOptions && this.gridOptions.pagination && this.gridOptions.pagination.totalItems
                                    };
                                }
                                backendApi.postProcess(processResult);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_17 = _a.sent();
                            if (backendApi && backendApi.onError) {
                                backendApi.onError(e_17);
                            }
                            else {
                                throw e_17;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    AngularSlickgridComponent.prototype.attachResizeHook = function (grid, options) {
        if (grid && options.autoFitColumnsOnFirstLoad && options.enableAutoSizeColumns) {
            grid.autosizeColumns();
            this.resizer.compensateHorizontalScroll(this.grid, this.gridOptions);
        }
        if (this._fixedHeight || this._fixedWidth) {
            this.resizer.init(grid, { height: this._fixedHeight, width: this._fixedWidth });
        }
        else {
            this.resizer.init(grid);
        }
        if (options.enableAutoResize) {
            this.resizer.attachAutoResizeDataGrid();
            if (grid && options.autoFitColumnsOnFirstLoad && options.enableAutoSizeColumns) {
                grid.autosizeColumns();
            }
        }
    };
    AngularSlickgridComponent.prototype.executeAfterDataviewCreated = function (grid, gridOptions, dataView) {
        if (gridOptions.enableSorting) {
            if (gridOptions.presets && Array.isArray(gridOptions.presets.sorters) && gridOptions.presets.sorters.length > 0) {
                this.sortService.loadLocalPresets(grid, dataView);
            }
        }
    };
    AngularSlickgridComponent.prototype.mergeGridOptions = function (gridOptions) {
        gridOptions.gridId = this.gridId;
        gridOptions.gridContainerId = "slickGridContainer-" + this.gridId;
        var options = $.extend(true, {}, GlobalGridOptions, this.forRootConfig, gridOptions);
        this._hideHeaderRowAfterPageLoad = (options.showHeaderRow === false);
        if (options.enableFiltering && !options.showHeaderRow) {
            options.showHeaderRow = options.enableFiltering;
        }
        return options;
    };
    AngularSlickgridComponent.prototype.paginationChanged = function (pagination) {
        if (this.gridOptions.enableRowSelection || this.gridOptions.enableCheckboxSelector) {
            this.gridService.setSelectedRows([]);
        }
        this.gridStateService.onGridStateChanged.next({
            change: { newValues: pagination, type: GridStateType.pagination },
            gridState: this.gridStateService.getCurrentGridState()
        });
    };
    AngularSlickgridComponent.prototype.refreshGridData = function (dataset, totalCount) {
        if (Array.isArray(dataset) && this.grid && this._dataView && typeof this._dataView.setItems === 'function') {
            this._dataView.setItems(dataset, this.gridOptions.datasetIdPropertyName);
            if (!this.gridOptions.backendServiceApi) {
                this._dataView.reSort();
            }
            this.grid.invalidate();
            this.grid.render();
            if (this.gridOptions.backendServiceApi) {
                this.showPagination = ((this.gridOptions.backendServiceApi && this.gridOptions.enablePagination === undefined) ? true : this.gridOptions.enablePagination) || false;
                if (!this.gridOptions.pagination) {
                    this.gridOptions.pagination = (this.gridOptions.pagination) ? this.gridOptions.pagination : undefined;
                }
                if (this.gridOptions.pagination && totalCount !== undefined) {
                    this.gridOptions.pagination.totalItems = totalCount;
                }
                if (this.gridOptions.presets && this.gridOptions.presets.pagination && this.gridOptions.pagination) {
                    this.gridOptions.pagination.pageSize = this.gridOptions.presets.pagination.pageSize;
                    this.gridOptions.pagination.pageNumber = this.gridOptions.presets.pagination.pageNumber;
                }
                this.gridPaginationOptions = this.mergeGridOptions(this.gridOptions);
            }
            if (this.grid && this.gridOptions.enableAutoResize) {
                var delay = this.gridOptions.autoResize && this.gridOptions.autoResize.delay;
                this.resizer.resizeGrid(delay || 10);
            }
        }
    };
    AngularSlickgridComponent.prototype.updateColumnDefinitionsList = function (newColumnDefinitions) {
        if (this.gridOptions.enableTranslate) {
            this.extensionService.translateColumnHeaders(false, newColumnDefinitions);
        }
        else {
            this.extensionService.renderColumnHeaders(newColumnDefinitions);
        }
        if (this.gridOptions && this.gridOptions.enableAutoSizeColumns) {
            this.grid.autosizeColumns();
        }
    };
    AngularSlickgridComponent.prototype.showHeaderRow = function (isShowing) {
        this.grid.setHeaderRowVisibility(isShowing);
        return isShowing;
    };
    AngularSlickgridComponent.prototype.toggleHeaderRow = function () {
        var isShowing = !this.grid.getOptions().showHeaderRow;
        this.grid.setHeaderRowVisibility(isShowing);
        return isShowing;
    };
    AngularSlickgridComponent.prototype.dispatchCustomEvent = function (eventName, data, isBubbling, isCancelable) {
        if (isBubbling === void 0) { isBubbling = true; }
        if (isCancelable === void 0) { isCancelable = true; }
        var eventInit = { bubbles: isBubbling, cancelable: isCancelable };
        if (data) {
            eventInit.detail = data;
        }
        return this.elm.nativeElement.dispatchEvent(new CustomEvent(eventName, eventInit));
    };
    AngularSlickgridComponent.prototype.loadEditorCollectionAsync = function (column) {
        var _this = this;
        var collectionAsync = column && column.editor && column.editor.collectionAsync;
        if (collectionAsync instanceof Observable) {
            this.subscriptions.push(collectionAsync.subscribe(function (resolvedCollection) { return _this.updateEditorCollection(column, resolvedCollection); }));
        }
    };
    AngularSlickgridComponent.prototype.updateEditorCollection = function (column, newCollection) {
        column.editor.collection = newCollection;
        var columns = this.grid.getColumns();
        if (Array.isArray(columns)) {
            var columnRef = columns.find(function (col) { return col.id === column.id; });
            columnRef.internalColumnEditor = column.editor;
        }
    };
    return AngularSlickgridComponent;
}());
AngularSlickgridComponent.decorators = [
    { type: Injectable },
    { type: Component, args: [{
                selector: 'angular-slickgrid',
                template: "<div id=\"slickGridContainer-{{gridId}}\" class=\"gridPane\" [style.width]=\"gridWidthString\">\n    <div attr.id='{{gridId}}' class=\"slickgrid-container\" style=\"width: 100%\" [style.height]=\"gridHeightString\">\n    </div>\n\n    <slick-pagination id=\"slickPagingContainer-{{gridId}}\"\n        *ngIf=\"showPagination\"\n        (onPaginationChanged)=\"paginationChanged($event)\"\n        [gridPaginationOptions]=\"gridPaginationOptions\">\n    </slick-pagination>\n</div>\n",
                providers: [
                    AutoTooltipExtension,
                    CellExternalCopyManagerExtension,
                    CheckboxSelectorExtension,
                    ColumnPickerExtension,
                    DraggableGroupingExtension,
                    ExtensionService,
                    ExportService,
                    ExtensionUtility,
                    FilterFactory,
                    FilterService,
                    GraphqlService,
                    GridEventService,
                    GridMenuExtension,
                    GridService,
                    GridStateService,
                    GroupingAndColspanService,
                    GroupItemMetaProviderExtension,
                    HeaderButtonExtension,
                    HeaderMenuExtension,
                    ResizerService,
                    RowMoveManagerExtension,
                    RowSelectionExtension,
                    SharedService,
                    SortService,
                    SlickgridConfig
                ]
            },] },
];
AngularSlickgridComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: ExportService, },
    { type: ExtensionService, },
    { type: ExtensionUtility, },
    { type: FilterService, },
    { type: GridService, },
    { type: GridEventService, },
    { type: GridStateService, },
    { type: GroupingAndColspanService, },
    { type: ResizerService, },
    { type: SharedService, },
    { type: SortService, },
    { type: TranslateService, },
    { type: undefined, decorators: [{ type: Inject, args: ['config',] },] },
]; };
AngularSlickgridComponent.propDecorators = {
    "onAngularGridCreated": [{ type: Output },],
    "onDataviewCreated": [{ type: Output },],
    "onGridCreated": [{ type: Output },],
    "onGridInitialized": [{ type: Output },],
    "onBeforeGridCreate": [{ type: Output },],
    "onBeforeGridDestroy": [{ type: Output },],
    "onAfterGridDestroyed": [{ type: Output },],
    "onGridStateChanged": [{ type: Output },],
    "customDataView": [{ type: Input },],
    "gridId": [{ type: Input },],
    "gridOptions": [{ type: Input },],
    "gridHeight": [{ type: Input },],
    "gridWidth": [{ type: Input },],
    "columnDefinitions": [{ type: Input },],
    "dataset": [{ type: Input },],
};
var AngularSlickgridModule = /** @class */ (function () {
    function AngularSlickgridModule() {
    }
    AngularSlickgridModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AngularSlickgridModule,
            providers: [
                { provide: 'config', useValue: config },
                CollectionService,
                FilterFactory,
                GraphqlService,
                GridOdataService
            ]
        };
    };
    return AngularSlickgridModule;
}());
AngularSlickgridModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    TranslateModule
                ],
                declarations: [
                    AngularSlickgridComponent,
                    SlickPaginationComponent
                ],
                exports: [
                    AngularSlickgridComponent,
                    SlickPaginationComponent
                ],
                entryComponents: [AngularSlickgridComponent]
            },] },
];
AngularSlickgridModule.ctorParameters = function () { return []; };

export { SlickgridConfig, SlickPaginationComponent, AngularSlickgridComponent, AngularSlickgridModule, CaseType, DelimiterType, ExtensionName, FieldType, FileType, FilterMultiplePassType, GridStateType, KeyCode, OperatorType, SortDirection, SortDirectionNumber, CollectionService, ExportService, ExtensionService, FilterService, GraphqlService, GridOdataService, GridEventService, GridService, GridStateService, GroupingAndColspanService, OdataService, ResizerService, SharedService, SortService, addWhiteSpaces, htmlEncode, htmlDecode, htmlEntityDecode, htmlEntityEncode, arraysEqual, castToPromise, findOrDefault, decimalFormatted, getDescendantProperty, getScrollBarWidth, mapMomentDateFormatWithFieldType, mapFlatpickrDateFormatWithFieldType, mapOperatorType, mapOperatorByFieldType, parseUtcDate, sanitizeHtmlToText, titleCase, toCamelCase, toKebabCase, uniqueArray, unsubscribeAllObservables, Aggregators, Editors, AutoTooltipExtension, CellExternalCopyManagerExtension, CheckboxSelectorExtension, ColumnPickerExtension, DraggableGroupingExtension, ExtensionUtility, GridMenuExtension, GroupItemMetaProviderExtension, HeaderButtonExtension, HeaderMenuExtension, RowMoveManagerExtension, RowSelectionExtension, FilterConditions, Filters, FilterFactory, Formatters, GroupTotalFormatters, Sorters, AvgAggregator as ɵa, MaxAggregator as ɵc, MinAggregator as ɵb, SumAggregator as ɵd, CheckboxEditor as ɵe, DateEditor as ɵf, FloatEditor as ɵg, IntegerEditor as ɵh, LongTextEditor as ɵi, MultipleSelectEditor as ɵj, SelectEditor as ɵk, SingleSelectEditor as ɵl, SliderEditor as ɵm, TextEditor as ɵn, booleanFilterCondition as ɵp, collectionSearchFilterCondition as ɵq, dateFilterCondition as ɵr, dateIsoFilterCondition as ɵs, dateUsFilterCondition as ɵu, dateUsShortFilterCondition as ɵv, dateUtcFilterCondition as ɵt, executeMappedCondition as ɵo, testFilterCondition as ɵy, numberFilterCondition as ɵw, stringFilterCondition as ɵx, CompoundDateFilter as ɵz, CompoundInputFilter as ɵba, CompoundInputNumberFilter as ɵbb, CompoundInputPasswordFilter as ɵbc, CompoundSliderFilter as ɵbd, InputFilter as ɵbe, InputNumberFilter as ɵbf, InputPasswordFilter as ɵbg, MultipleSelectFilter as ɵbh, NativeSelectFilter as ɵbj, SelectFilter as ɵbi, SingleSelectFilter as ɵbk, SliderFilter as ɵbl, arrayObjectToCsvFormatter as ɵbm, arrayToCsvFormatter as ɵbn, boldFormatter as ɵbo, checkboxFormatter as ɵbp, checkmarkFormatter as ɵbq, collectionEditorFormatter as ɵbt, collectionFormatter as ɵbs, complexObjectFormatter as ɵbr, dateIsoFormatter as ɵbu, dateTimeIsoAmPmFormatter as ɵbx, dateTimeIsoFormatter as ɵbv, dateTimeShortIsoFormatter as ɵbw, dateTimeShortUsFormatter as ɵca, dateTimeUsAmPmFormatter as ɵcb, dateTimeUsFormatter as ɵbz, dateUsFormatter as ɵby, decimalFormatter as ɵcd, deleteIconFormatter as ɵcc, dollarColoredBoldFormatter as ɵcg, dollarColoredFormatter as ɵcf, dollarFormatter as ɵce, editIconFormatter as ɵch, hyperlinkFormatter as ɵci, hyperlinkUriPrefixFormatter as ɵcj, infoIconFormatter as ɵck, lowercaseFormatter as ɵcl, maskFormatter as ɵcm, multipleFormatter as ɵcn, percentCompleteBarFormatter as ɵcq, percentCompleteFormatter as ɵcp, percentFormatter as ɵco, percentSymbolFormatter as ɵcr, progressBarFormatter as ɵcs, translateBooleanFormatter as ɵcu, translateFormatter as ɵct, uppercaseFormatter as ɵcv, yesNoFormatter as ɵcw, avgTotalsDollarFormatter as ɵcy, avgTotalsFormatter as ɵcx, avgTotalsPercentageFormatter as ɵcz, maxTotalsFormatter as ɵda, minTotalsFormatter as ɵdb, sumTotalsBoldFormatter as ɵdd, sumTotalsColoredFormatter as ɵde, sumTotalsDollarBoldFormatter as ɵdg, sumTotalsDollarColoredBoldFormatter as ɵdi, sumTotalsDollarColoredFormatter as ɵdh, sumTotalsDollarFormatter as ɵdf, sumTotalsFormatter as ɵdc, dateIsoSorter as ɵdk, dateSorter as ɵdj, dateUsShortSorter as ɵdm, dateUsSorter as ɵdl, numericSorter as ɵdn, stringSorter as ɵdo };
//# sourceMappingURL=angular-slickgrid.js.map
