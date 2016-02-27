import {provide, Directive} from "angular2/core"
import {NG_VALIDATORS, Control, Validator} from "angular2/common"

@Directive({
    selector: '[email]',
    providers: [provide(NG_VALIDATORS, {useExisting: EmailValidatorDirective, multi: true})]
})
export class EmailValidatorDirective implements Validator {
    validate(c: Control): {[key: string]: any} {
        return c.value && c.value.indexOf('@') > 0 ?
            null :
            {'emailvalidate': 'Please enter correct email'};
    }
}
