import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
    selector:'demo-form-sku',
    directives:'FORM_DIRECTIVES',
    template:`
    <div class="ui raised segment">
        <h2 class="ui header"> DEMO FORM: sku</h2>
        <form #f='ngForm'
            (ngSubmit)="onSubmit(f.value)" class="ui form">
            <div class="field">
                <label for="skuInput">SKU</label>
                <input type="text"
                       id="skuInput"
                       placeholder="SKU"
                       ngControl="sku">
                       
            </div>
            <button type="submit" class="ui button"></button>
        </form>
    </div>
    `
})