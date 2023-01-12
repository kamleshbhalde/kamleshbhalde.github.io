import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addperiod',
  templateUrl: './addperiod.component.html',
  styleUrls: ['./addperiod.component.scss']
})
export class AddperiodComponent {
  setPeriod:any;
  profileForm:FormGroup;
  days:any;
  subjects:any;
  books:any;
  periods:any;
  storeDataArray:any;
  constructor(public fb:FormBuilder){
    this.profileForm= /* new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      })
    }) */
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
    ;
  }
  ngOnInit(){
   this.setPeriod = this.fb.group({
      day: [''],
    period:[''],
    subject:[''],
    books:this.fb.group({
      bookName:['']
    })
    });

    this.periods = [1,2,3,4,5,6];
    this.days = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    this.subjects = [
      "English", // when , where , which books
      "Hindi",
      "Marathi",
      "Maths",
      "Science",
      "S.St.",
      "Computer",
      "G.K.",
      "V.E.",
      "Art",
      "AI",
      "P.T.",
      "Music",
      "Library",
      "Test"
    ];
    this.books =
      [
        {
          "id": 1,
          "bookName": "Treasures of English Textbook",
          "subject": "english"
        },
        {
          "id": 2,
          "bookName": "Advanced English Grammer Textbook",
          "subject": "english"
        },
        {
          "id": 3,
          "bookName": "Tenali Raman Book",
          "subject": "english"
        },
        {
          "id": 4,
          "bookName": "Cursive Writing book",
          "subject": "english"
        },
  
        {
          "id": 5,
          "bookName": "Prathibha Textbook",
          "subject": "hindi"
        },
        {
          "id": 6,
          "bookName": "Vyakaran Textbook",
          "subject": "hindi"
        },
        {
          "id": 7,
          "bookName": "Sulekh Book",
          "subject": "hindi"
        },
        {
          "id": 8,
          "bookName": "Marathi Sulabh Bharati Textbook",
          "subject": "marathi"
        },
        {
          "id": 9,
          "bookName": "Lekhan Pan Book",
          "subject": "marathi"
        },
        {
          "id": 10,
          "bookName": "Step By Step Mathematics",
          "subject": "maths"
        },
        {
          "id": 11,
          "bookName": "Mastering Science",
          "subject": "Science"
        },
        {
          "id": 12,
          "bookName": "My Wonderful Book of Social Studies Textbook",
          "subject": "SocialStudies"
        },
        {
          "id": 13,
          "bookName": "Integrated Complluter Textbook",
          "subject": "Computer"
        },
        {
          "id": 14,
          "bookName": "Brain Booster Plus",
          "subject": "G.K."
        },
        {
          "id": 15,
          "bookName": "inspiring Souls Textbook",
          "subject": "v.E."
        },
  
        {
          "id": 16,
          "bookName": "Prachi Visual Art Book",
          "subject": "Art"
        },
        {
          "id": 17,
          "bookName": "plain Drawing Book",
          "subject": "Art"
        },
        {
          "id": 18,
          "bookName": "AI Lab textbook",
          "subject": "AI"
        }
  
      ];

      this.storeDataArray = [{
        "day":0,
        "period":1,
        "subject":"English",
        "books":[
          {"bookName":"testing"}
        ]}];


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
  };
 /*  get registerFormControl() {
    return this.profileForm.controls;
  } */

    

}
