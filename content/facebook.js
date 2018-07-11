// classes  for about
var About = /** @class */ (function () {
    function About(name, dateOfBirth, gender, mobileNumber, email, listOfEducationDetails, listOfWorkDetails, aboutMe, nickName, bloodGroup, instagramLink, relatationShipStatus, livesin, from) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.listOfEducationDetails = listOfEducationDetails;
        this.listOfWorkDetails = listOfWorkDetails;
        this.aboutMe = aboutMe;
        this.nickName = nickName;
        this.bloodGroup = bloodGroup;
        this.instagramLink = instagramLink;
        this.relatationShipStatus = relatationShipStatus;
        this.livesin = livesin;
        this.from = from;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.listOfEducationDetails = listOfEducationDetails;
        this.listOfWorkDetails = listOfWorkDetails;
        this.aboutMe = aboutMe;
        this.nickName = nickName;
        this.bloodGroup = bloodGroup;
        this.instagramLink = instagramLink;
        this.relatationShipStatus = relatationShipStatus;
        this.livesin = livesin;
        this.from = from;
    }
    //getters and setters
    About.prototype.getDateOfBirth = function () {
        return this.dateOfBirth;
    };
    About.prototype.setDateOfBirth = function (newDateOfBirth) {
        this.dateOfBirth = newDateOfBirth;
    };
    About.prototype.getMobileNumber = function () {
        return this.mobileNumber;
    };
    About.prototype.setMobileNumber = function (newMobileNumber) {
        this.mobileNumber = newMobileNumber;
    };
    About.prototype.getEmail = function () {
        return this.email;
    };
    About.prototype.setEmail = function (newEmail) {
        this.email = newEmail;
    };
    //methods
    About.prototype.getCurrentAge = function () {
        var ageDifMs = Date.now() - this.getDateOfBirth().getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    return About;
}());
var Education = /** @class */ (function () {
    function Education(schoolName, year, fromYear, description) {
        this.schoolName = schoolName;
        this.year = year;
        this.fromYear = fromYear;
        this.description = description;
        this.getEducationDetails = function () { return Array(); };
        this.schoolName = schoolName;
        this.year = year;
        this.fromYear = fromYear;
        this.description = description;
    }
    return Education;
}());
var Work = /** @class */ (function () {
    function Work(company, position, city, description, fromTime, toTime) {
        this.company = company;
        this.position = position;
        this.city = city;
        this.description = description;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.getWorkDetails = function () { return Array(); };
        this.company = company;
        this.position = position;
        this.city = city;
        this.description = description;
        this.fromTime = fromTime;
        this.toTime = toTime;
    }
    return Work;
}());
//click event
var bttnclick = document.getElementById("facebookId");
bttnclick.addEventListener("click", function (e) { return objectStart(); });
var objectStart = function () {
    var education = new Education("School1", 2010, 2008);
    var work = new Work("Company1", "Position1", "Hyderbad");
    var about = new About("Venkat", new Date(), "M", 9030949725, "venkat33b@gmail.com", education.getEducationDetails(), work.getWorkDetails());
    console.clear();
    console.log("Facebook about:");
    console.log("Name:" + about.name);
    console.log("Data Of Birth:" + about.getDateOfBirth());
    console.log("Gender:" + about.gender);
    console.log("Mobile Number: " + about.getMobileNumber());
    console.log("Email: " + about.getEmail());
};
