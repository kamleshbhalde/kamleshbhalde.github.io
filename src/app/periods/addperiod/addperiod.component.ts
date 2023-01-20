import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

class selectOption{
  constructor(public id:number, public name:string) {
  }
};
class bookOption{ 
  constructor(public id:number, public name:string, public subject:string){}
};

@Component({
  selector: 'app-addperiod',
  templateUrl: './addperiod.component.html',
  styleUrls: ['./addperiod.component.scss']
})


export class AddperiodComponent {
  setPeriod:any;
/*   profileForm:FormGroup;
 */  days:any;
  subjects:any;
  booksList:any;
  periods:any;/* 
  storeDataArray:any; */
  constructor(public fb:FormBuilder){
   /*  this.profileForm=
    this.fb.group({
      firstName:['', Validators.required ],
      lastName:['', Validators.required],
      address: this.fb.group({
        street:['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      aliases: this.fb.array([
        this.fb.control('', Validators.required)
      ])
    
    })
    ; */
  }
  ngOnInit(){
   this.setPeriod = this.fb.group({
      day: [null],
    period:[null],
    subject:[null],
    books: this.fb.array([
      this.fb.control(null, Validators.required)
    ])
    });

    this.periods = [
      new selectOption(1, "1"),
      new selectOption(2, "2"),
      new selectOption(3, "3"),
      new selectOption(4, "4"),
      new selectOption(5, "5"),
      new selectOption(6, "6")
    ];
    this.days = [
      new selectOption(1, "monday"),
      new selectOption(2, "tuesday"),
      new selectOption(3, "wednesday"),
      new selectOption(4, "thursday"),
      new selectOption(5, "friday"),
      new selectOption(6, "saturday")
    ];
    this.subjects = [
      new selectOption(1, "English"),
      new selectOption(2, "Hindi"),
      new selectOption(3, "Marathi"),
      new selectOption(4, "Maths"),
      new selectOption(5, "Science"),
      new selectOption(6,  "S.St.",),
      new selectOption(7, "Computer"),
      new selectOption(8, "G.K."),
      new selectOption(9, "V.E."),
      new selectOption(10, "Art"),
      new selectOption(11, "AI"),
      new selectOption(12, "P.T."),
      new selectOption(13, "Music"),
      new selectOption(14, "Library"),
      new selectOption(15, "Test")
    ];
    this.booksList =
      [
       new bookOption (
          1,
          "Treasures of English Textbook",
          "english"
          ),
          new bookOption (
           2,
         "Advanced English Grammer Textbook",
           "english"
       ),
       new bookOption (
           3,
         "Tenali Raman Book",
           "english"
       ),
       new bookOption (
           4,
         "Cursive Writing book",
           "english"
       ),
       new bookOption (
           5,
         "Prathibha Textbook",
           "hindi"
       ),
       new bookOption (
           6,
         "Vyakaran Textbook",
           "hindi"
       ),
       new bookOption (
           7,
         "Sulekh Book",
           "hindi"
       ),
       new bookOption (
           8,
         "Marathi Sulabh Bharati Textbook",
           "marathi"
       ),
       new bookOption (
           9,
         "Lekhan Pan Book",
           "marathi"
       ),
       new bookOption (
           10,
         "Step By Step Mathematics",
           "maths"
       ),
       new bookOption (
           11,
         "Mastering Science",
           "Science"
       ),
       new bookOption    (
           12,
         "My Wonderful Book of Social Studies Textbook",
           "SocialStudies"
       ),
       new bookOption (
           13,
         "Integrated Complluter Textbook",
           "Computer"
       ),
       new bookOption  (
           14,
         "Brain Booster Plus",
           "G.K."
       ),
       new bookOption  (
           15,
         "inspiring Souls Textbook",
           "v.E."
       ),
       new bookOption (
           16,
         "Prachi Visual Art Book",
           "Art"
       ),
       new bookOption (
           17,
         "plain Drawing Book",
           "Art"
       ),
       new bookOption  (
           18,
         "AI Lab textbook",
           "AI"
        ),
  
      ];

      this.setPeriod.get('subject').valueChanges.subscribe((x:any)=>{
        const control = this.books;
         control.clear();
         control.push(this.fb.control('', Validators.required));
      });
     /* 
      this.storeDataArray = [{
        "day":0,
        "period":1,
        "subject":"English",
        "books":[
          {"bookName":"testing"}
        ]}];

      */
      }

/* 
    this.profileForm.valueChanges.subscribe(x=>{
      console.log(x);
      console.log(this.profileForm.controls)
    });

    
  }

  updateValueWithPatch(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
    });
  }

  onSubmit(){
    console.log(this.profileForm)
  }

   

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control('', Validators.required));
  }; */
 /*  get registerFormControl() {
    return this.profileForm.controls;
  } */
get books(){
  return this.setPeriod.get('books') as FormArray;
}
addBook() {
  this.books.push(this.fb.control('', Validators.required));
  console.log(this.books);
};
    

  onSubmit(){
   
  }

  findBooks(item:any){
    if(this.setPeriod.get('subject') && this.setPeriod.get('subject')?.value?.name.toLowerCase() == item.subject.toLowerCase()){
      return true
    }
    return false;
  }

}
