import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `<h1>{{title}}</h1>
    <my-heroes></my-heroes>`
})

export class AppComponent {
    title = "Tour of Heroes";
}