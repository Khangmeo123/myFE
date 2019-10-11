import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  
  formA =  new FormGroup({
    soGDDT  : new FormControl(null,[Validators.required]),
    facilityCode1 : new FormControl(null,[Validators.required,Validators.maxLength(1)]),
    facilityCode2 : new FormControl(null,[Validators.required,Validators.maxLength(1)]),
    billNumber : new FormControl (null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    gender: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobDay1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobDay2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobMonth1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobMonth2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobYear1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    dobYear2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    wasBornIn : new FormControl(null,[Validators.required]),
    nation : new FormControl(null,[Validators.required]),
    idNumber1: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber2: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber3: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber4: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber5: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber6: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber7: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber8: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber9: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber10: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber11: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    idNumber12: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    cityCode1: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    citycode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    districtCode1: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    districtCode2: new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    communeCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    communeCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    address : new FormControl(null,[Validators.required]),
    live18monthInKV1 : new FormControl(false),
    live18monthInKVKK : new FormControl(false),
    grade10_schoolName : new FormControl(null,[Validators.required]),
    grade10_cityCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade10_cityCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade10_schoolCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade10_schoolCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade10_schoolCode3 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade11_schoolName : new FormControl(null,[Validators.required]),
    grade11_cityCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade11_cityCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade11_schoolCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade11_schoolCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade11_schoolCode3 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_schoolName : new FormControl(null,[Validators.required]),
    grade12_cityCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_cityCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_schoolCode1 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_schoolCode2 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_schoolCode3 : new FormControl(null,[Validators.required, Validators.maxLength(1)]),
    grade12_className : new FormControl(null,[Validators.required]),
    phoneNumber: new FormControl(null,[Validators.required]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    address_contact : new FormControl(null,[Validators.required])
  });
  get soGDDT(){
    return this.formA.get("soGDDT");
  }
  get facilityCode1(){
    return this.formA.get("facilityCode1");
  }
  get facilityCode2(){
    return this.formA.get("facilityCode2");
  }
  get billNumber(){
    return this.formA.get("billNumber");
  }
  get name(){
    return this.formA.get("name");
  }
  get gender(){
    return this.formA.get("gender");
  }
  get dobDay1(){
    return this.formA.get("dobDay1");
  }
  get dobDay2(){
    return this.formA.get("dobDay2");
  }
  get dobMonth1(){
    return this.formA.get("dobMonth1");
  }
  get dobMonth2(){
    return this.formA.get("dobMonth2");
  }
  get dobYear1(){
    return this.formA.get("dobYear1");
  }
  get dobYear2(){
    return this.formA.get("dobYear2");
  }
  get wasBornIn(){
    return this.formA.get("wasBornIn");
  }
  get nation(){
    return this.formA.get("nation");
  }
  get idNumber1(){
    return this.formA.get("idNumber1");
  }
  get idNumber2(){
    return this.formA.get("idNumber2");
  }
  get idNumber3(){
    return this.formA.get("idNumber3");
  }
  get idNumber4(){
    return this.formA.get("idNumber4");
  }
  get idNumber5(){
    return this.formA.get("idNumber5");
  }
  get idNumber6(){
    return this.formA.get("idNumber6");
  }
  get idNumber7(){
    return this.formA.get("idNumber7");
  }
  get idNumber8(){
    return this.formA.get("idNumber8");
  }
  get idNumber9(){
    return this.formA.get("idNumber9");
  }
  get idNumber10(){
    return this.formA.get("idNumber10");
  }
  get idNumber11(){
    return this.formA.get("idNumber11");
  }
  get idNumber12(){
    return this.formA.get("idNumber12");
  }
  get cityCode1(){
    return this.formA.get("cityCode1");
  }
  get cityCode2(){
    return this.formA.get("cityCode2");
  }
  get districtCode1(){
    return this.formA.get("districtCode1");
  }
  get districtCode2(){
    return this.formA.get("districtCode2");
  }
  get communeCode1(){
    return this.formA.get("communeCode1");
  }
  get communeCode2(){
    return this.formA.get("communeCode2");
  }
  get address(){
    return this.formA.get("address");
  }
  get grade10_schoolName(){
    return this.formA.get("grade10_schoolName");
  }
  get grade10_cityCode1(){
    return this.formA.get("grade10_cityCode1");
  }
  get grade10_cityCode2(){
    return this.formA.get("grade10_cityCode2");
  }
  get grade10_schoolCode1(){
    return this.formA.get("grade10_schoolCode1");
  }
  get grade10_schoolCode2(){
    return this.formA.get("grade10_schoolCode2");
  }
  get grade10_schoolCode3(){
    return this.formA.get("grade10_schoolCode3");
  }
  get grade11_schoolName(){
    return this.formA.get("grade11_schoolName");
  }
  get grade11_cityCode1(){
    return this.formA.get("grade11_cityCode1");
  }
  get grade11_cityCode2(){
    return this.formA.get("grade11_cityCode2");
  }
  get grade11_schoolCode1(){
    return this.formA.get("grade11_schoolCode1");
  }
  get grade11_schoolCode2(){
    return this.formA.get("grade11_schoolCode2");
  }
  get grade11_schoolCode3(){
    return this.formA.get("grade11_schoolCode3");
  }
  get grade12_schoolName(){
    return this.formA.get("grade12_schoolName");
  }
  get grade12_cityCode1(){
    return this.formA.get("grade12_cityCode1");
  }
  get grade12_cityCode2(){
    return this.formA.get("grade12_cityCode2");
  }
  get grade12_schoolCode1(){
    return this.formA.get("grade12_schoolCode1");
  }
  get grade12_schoolCode2(){
    return this.formA.get("grade12_schoolCode2");
  }
  get grade12_schoolCode3(){
    return this.formA.get("grade12_schoolCode3");
  }
  get grade12_className(){
    return this.formA.get("grade12_className");
  }
  get phoneNumber(){
    return this.formA.get("phoneNumber");
  }
  get email(){
    return this.formA.get("email");
  }
  get address_contact(){
    return this.formA.get("address_contact");
  }

  showSoGDDT(){
    console.log(this.formA.get("soGDDT").value);
  }
  getString(str : string, n: number){
    let allCharacter : string
    for(var i = 1 ; i<= n ; i++){
      let string: string  = this.formA.get(`str`+`i`).value;
      let strig = string.trim();
      allCharacter = allCharacter + strig;
    }
  }
  constructor() { 
    
  }
  ngOnInit() {
  }
  onSubmit(){
    if(this.formA.valid){
      alert('hihi')
    }
    else{
      this.validateAllFields(this.formA);
    }
  }
  validateAllFields(form: FormGroup | FormArray) {
    Object.keys(form.controls).forEach((field: string) => {
      const control = form.get(field);
      if (control instanceof FormArray) {
        this.validateAllFields(control);
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }
}
