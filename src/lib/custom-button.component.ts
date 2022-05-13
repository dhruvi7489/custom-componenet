import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'custom-button',
    templateUrl: 'custom-button.component.html',
    styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

    @Output() onClickBtn = new EventEmitter();
    @Input() colorBtn = 'primary';
    @Input() sizeBtn = 'medium';
    @Input() title = 'Custom Button';

    acceptedColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    acceptedSizes = ['small', 'medium', 'large'];

    ngOnInit() {
        this.validColorBtn(this.colorBtn);
        this.validSizeBtn(this.sizeBtn);
        this.validTitleBtn(this.title);
    }

    validColorBtn(colorBtn) {
        if (colorBtn) {
            const foundColor = this.acceptedColors.indexOf(colorBtn);
            if (foundColor === -1) {
                console.error(`A cor ${colorBtn} é inválida para o ng-custom-button.`);
                this.colorBtn = this.acceptedColors[0];
            }
        } else {
            this.colorBtn = this.acceptedColors[0];
        }
    }

    validSizeBtn(sizeBtn) {
        if (sizeBtn) {
            const foundSize = this.acceptedSizes.indexOf(sizeBtn);
            if (foundSize === -1) {
                console.error(`O tamanho ${sizeBtn} é inválido para o ng-custom-button.`);
                this.sizeBtn = this.acceptedSizes[0];
            }
        } else {
            this.sizeBtn = this.acceptedSizes[0];
        }
    }

    validTitleBtn(titleBtn) {
        if (titleBtn) {
            if (titleBtn.length === 0) {
                this.title = 'Custom Button';
            }
        } else {
            this.title = 'Custom Button';
        }
    }

    handleClickBtn() {
        this.onClickBtn.emit();
    }

}
