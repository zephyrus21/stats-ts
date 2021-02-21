"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var date = dateString.split('/').map(function (value) { return parseInt(value); });
    return new Date(date[2], date[1], date[0]);
};
exports.dateStringToDate = dateStringToDate;
