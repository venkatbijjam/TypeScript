// classes  for about

class About{
    constructor(public name:string,private dateOfBirth: Date,public gender: string,private mobileNumber: number,
    private email:string,public listOfEducationDetails ?:Array<Education>,public listOfWorkDetails ?: Array<Work>,
    public aboutMe ?: string,public nickName ?: string,public bloodGroup ?: string,public instagramLink ?: string,
    public relatationShipStatus ?: string,public livesin ?: string,public from ?: string){

        this.name=name;
        this.dateOfBirth=dateOfBirth;
        this.gender=gender;
        this.mobileNumber=mobileNumber;
        this.email=email;
        this.listOfEducationDetails=listOfEducationDetails;
        this.listOfWorkDetails=listOfWorkDetails;
        this.aboutMe=aboutMe;
        this.nickName=nickName;
        this.bloodGroup=bloodGroup;
        this.instagramLink=instagramLink;
        this.relatationShipStatus=relatationShipStatus;
        this.livesin=livesin;
        this.from=from;

    }

    //getters and setters

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    setDateOfBirth(newDateOfBirth: Date){
        this.dateOfBirth= newDateOfBirth;
    }

    getMobileNumber(){
        return this.mobileNumber;
    }

    setMobileNumber(newMobileNumber: number){

        this.mobileNumber =newMobileNumber;
    }

    getEmail(){
        return this.email;
    }

    setEmail(newEmail:string){
        this.email = newEmail;
    }


    //methods

    getCurrentAge(){
        let ageDifMs = Date.now() - this.getDateOfBirth().getTime();
        let ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    }


}

class Education{

    constructor(public schoolName:string,public year: number,public fromYear: number,public description?: string){

        this.schoolName=schoolName;
        this.year=year;
        this.fromYear=fromYear;
        this.description=description;
    }

    getEducationDetails = () => Array<Education>();

}

class Work{

    constructor(public company:string,public position:string,public city:string,public description ?:string,
    public fromTime ?: Date, public toTime?: Date){

        this.company=company;
        this.position=position;
        this.city=city;
        this.description=description;
        this.fromTime=fromTime;
        this.toTime=toTime;
    }

    getWorkDetails = () => Array<Work>();


}


//click event

  var bttnclick = <HTMLButtonElement>document.getElementById("facebookId");  
  bttnclick.addEventListener("click",(e:Event) => objectStart());
  let objectStart= () =>{
let education= new Education("School1",2010,2008);
let work= new Work("Company1","Position1","Hyderbad");

let about = new About("Venkat",new Date(),"M",9030949725,"venkat33b@gmail.com",education.getEducationDetails(),work.getWorkDetails());

console.clear();
console.log("Facebook about:");
console.log("Name:"+about.name);
console.log("Data Of Birth:"+about.getDateOfBirth());
console.log("Gender:"+about.gender);
console.log("Mobile Number: "+about.getMobileNumber());
console.log("Email: "+about.getEmail());

  }