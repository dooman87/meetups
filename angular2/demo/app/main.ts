///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {NG_VALIDATORS, Control, Validator} from "angular2/common"
import {Provider} from "angular2/core"
import {EmailValidatorDirective} from "./email-validator.directive"

bootstrap(AppComponent, [new Provider(NG_VALIDATORS, {useValue: EmailValidatorDirective, multi: true})]);