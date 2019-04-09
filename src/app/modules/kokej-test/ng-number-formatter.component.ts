import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-kokej-test',
    template: '<span>{{ngNumber}}</span>'
})
export class NgNumberFormatterComponent implements OnInit {
    @Input() ngNumber: string;
    constructor() {}

    nFormatter(num, digits) {
        const si = [
                { value: 1e18, symbol: 'E' },
                { value: 1e15, symbol: 'P' },
                { value: 1e12, symbol: 'T' },
                { value: 1e9, symbol: 'B' },
                { value: 1e6, symbol: 'M' },
                { value: 1e3, symbol: 'K' }
            ],
            rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        for (let i = 0; i < si.length; i++) {
            if (num >= si[i].value) {
                return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
            }
        }
        return num.toFixed(digits).replace(rx, '$1');
    }

    ngOnInit() {
        const incomingNumber = this.ngNumber;
        this.ngNumber = this.nFormatter(Math.abs(parseInt(incomingNumber, 10)), 1);
    }
}
