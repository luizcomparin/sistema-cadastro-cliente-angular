import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteFormService } from '../../services/cliente-form.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    constructor(
        private clienteService: ClienteFormService,
    ) { }

    @Input({ required: true }) input_formGroup!: FormGroup
    @Input({ required: true }) input_formControl!: FormControl
    @Input({ required: true }) input_label!: string
    @Input() input_type!: string
    @Input() input_placeholder!: string
    @Input() input_mask: string = ''
    @Input() input_thousandSeparator!: string
    @Input() input_decimalMarker: "." | "," | [".", ","] = ','
    @Input() input_leadZero!: boolean
    @Input() input_prefix: string = ''
    @Input() input_isDisabled: boolean = false
    @Input() input_maxLength: number = 60

    requiredErrorMessage = 'Este campo não pode estar vazio.'

    inputHasError() {
        return this.clienteService.checkIfFormControlHasError(this.input_formControl)
    }

}
