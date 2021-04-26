import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resetLusers = false

  students = [
    { surname: 'Рубина', name: 'Дина', middleName: 'Ильинична', birthdayDate: "06/06/1996", grade: 3.3},
    { surname: 'Толстая', name: 'Татьяна', middleName: 'Никитична', birthdayDate: "09/11/1994", grade: 4.9},
    { surname: 'Устинова', name: 'Татьяна', middleName: 'Витальевна', birthdayDate: "26/12/1999", grade: 2.9},
    { surname: 'Хакова', name: 'Радмила', middleName: 'Радифовна', birthdayDate: "12/07/1995", grade: 4.6},
    { surname: 'Улицкая', name: 'Людмила', middleName: 'Евгеньевна', birthdayDate: "25/10/1996", grade: 4.2},
    { surname: 'Цветаева', name: 'Марина', middleName: 'Ивановна', birthdayDate: "31/08/1995", grade: 3.1},
    { surname: 'Барто', name: 'Агния', middleName: 'Львовна', birthdayDate: "10/06/1992", grade: 5.0},
    { surname: 'Ахматова', name: 'Анна', middleName: 'Андреевна', birthdayDate: "04/05/1990", grade: 3.9},
    { surname: 'Пушкин', name: 'Александр', middleName: 'Сергеевич', birthdayDate: "01/01/1997", grade: 3.6},
    { surname: 'Толстой', name: 'Лев', middleName: 'Николаевич', birthdayDate: "02/03/1996", grade: 4.6},
    { surname: 'Есенин', name: 'Сергей', middleName: 'Александрович', birthdayDate: "03/04/1998", grade: 4.0},
    { surname: 'Чехов', name: 'Антон', middleName: 'Павлович', birthdayDate: "30/03/1997", grade: 3.6},
    { surname: 'Бродский', name: 'Иосиф', middleName: 'Александрович', birthdayDate: "17/09/1994", grade: 3.7},
    { surname: 'Достоевский', name: 'Фёдор', middleName: 'Михайлович', birthdayDate: "24/09/1995", grade: 4.1},
    { surname: 'Тургенев', name: 'Иван', middleName: 'Сергеевич', birthdayDate: "04/05/1996", grade: 2.8},
  ]



  } 
