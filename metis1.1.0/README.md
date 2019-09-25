# Metis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3. by Asperah

## Versionsnummer: 1.1.0

## Versionsbeschreibung:

Ordnerstruktur:

src/
┣ app/
┃ ┣ form-options/
┃ ┃ ┣ form-options.component.css
┃ ┃ ┣ form-options.component.html
┃ ┃ ┣ form-options.component.spec.ts
┃ ┃ ┗ form-options.component.ts
┃ ┣ lernmodi/
┃ ┃ ┣ auswertung/
┃ ┃ ┃ ┣ auswertung.component.css
┃ ┃ ┃ ┣ auswertung.component.html
┃ ┃ ┃ ┣ auswertung.component.spec.ts
┃ ┃ ┃ ┗ auswertung.component.ts
┃ ┃ ┣ modus-lernen/
┃ ┃ ┃ ┣ modus-lernen.component.css
┃ ┃ ┃ ┣ modus-lernen.component.html
┃ ┃ ┃ ┣ modus-lernen.component.spec.ts
┃ ┃ ┃ ┗ modus-lernen.component.ts
┃ ┃ ┣ modus-teil-pruef/
┃ ┃ ┃ ┣ modus-teil-pruef.component.css
┃ ┃ ┃ ┣ modus-teil-pruef.component.html
┃ ┃ ┃ ┣ modus-teil-pruef.component.spec.ts
┃ ┃ ┃ ┗ modus-teil-pruef.component.ts
┃ ┃ ┣ modus-voll-pruef/
┃ ┃ ┃ ┣ modus-voll-pruef.component.css
┃ ┃ ┃ ┣ modus-voll-pruef.component.html
┃ ┃ ┃ ┣ modus-voll-pruef.component.spec.ts
┃ ┃ ┃ ┗ modus-voll-pruef.component.ts
┃ ┃ ┣ lernmodi-routing.module.ts
┃ ┃ ┗ lernmodi.module.ts
┃ ┣ shared/
┃ ┃ ┣ question.service.spec.ts
┃ ┃ ┗ question.service.ts
┃ ┣ user-interface/
┃ ┃ ┣ user-interface.component.css
┃ ┃ ┣ user-interface.component.html
┃ ┃ ┣ user-interface.component.spec.ts
┃ ┃ ┗ user-interface.component.ts
┃ ┣ app-routing.module.ts
┃ ┣ app.component.css
┃ ┣ app.component.html
┃ ┣ app.component.spec.ts
┃ ┣ app.component.ts
┃ ┗ app.module.ts
┣ assets/
┃ ┗ .gitkeep
┣ environments/
┃ ┣ environment.prod.ts
┃ ┗ environment.ts
┣ favicon.ico
┣ index.html
┣ main.ts
┣ polyfills.ts
┣ styles.css
┗ test.ts

Übersicht Funktionen:

app-components:
- Imports hinzugefügt:
    import { FormOptionsComponent } from './form-options/form-options.component';
    import { LernmodiModule } from './lernmodi/lernmodi.module';
    import { ReactiveFormsModule } from '@angular/forms';
    import { UserInterfaceComponent } from './user-interface/user-interface.component';


- Decorator @NgModule erweitert: 
    @NgModule({
      declarations: [
	AppComponent,
	FormOptionsComponent,
	UserInterfaceComponent,
      ],
      imports: [
	BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
	LernmodiModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })

app-routing-module:
- Routing eingerichtet.

form-options: 
- Checkboxen eingefügt und funktionstüchtig.
- Buttons zu den jeweiligen Lernmodi funktionstüchtig, Checkbox-Values werden ausgelesen.
- Vorläufiges UI design eingerichtet.
- Grid-Struktur erstellt.

lernmodi:
- Vorläufiges, grundlegendes UI design eingerichtet.
- Header eingefügt.

index.html:
- Header eingefügt.
- Grid-Struktur erstellt.

shared:
- Service "question.service" generiert

user-interface:
- Komponente vorläufig generiert
