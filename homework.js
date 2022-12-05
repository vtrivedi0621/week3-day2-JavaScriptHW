class Governer {
    constructor(name, contactInfo, age) {
        this.name = name;
        this.contactInfo = contactInfo;
        this.age = age;
    }
    static stateName () {
        return ['NC' , 'VA', 'GA'];
    }  
}
console.log(Governer.stateName());

class Person {
    constructor(name,age,city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    setHeight(height) {
        this.height = height;
        return `height: ${this.height}`;
    }

    setWeight(weight) {
        this.weight = weight;
        return `weight: ${this.weight}`;
    }

    setEmail(email) {
        this.email = email;
        return `email: ${this.email}`;
    }
}

const AA = new Person('Vaishali', 30, 'NewYork');
console.log(AA);
console.log(AA.setHeight('5.3ft'));
console.log(AA.setWeight('128lb'));
console.log(AA.setEmail('aaa@gmail.com'));

class PostalWorker extends Person {

    setPhoneNumber(phone){
        this.phone = phone;
        return (`This is my phonenumber: ${this.phone}`);
    }

    setAddress(address){
        this.address = address;
        return (`My Address: ${this.address}`);
    }

}

const BB = new PostalWorker('Jigna', 32, 'Boston');
console.log(BB);
console.log(BB.setHeight('5.5ft'));
console.log(BB.setWeight('130lb'));
console.log(BB.setEmail('abc@gmail.com'));
console.log(BB.setPhoneNumber('888-865-9000'));
console.log(BB.setAddress('Bush Rive Rd, NJ'));

const CC = new PostalWorker('prapti', 35, 'Richmond');
console.log(CC);
console.log(CC.setHeight('5.4ft'));
console.log(CC.setWeight('135lb'));
console.log(CC.setEmail('ccc@gmail.com'));
console.log(CC.setPhoneNumber('884-866-9050'));
console.log(CC.setAddress('2400 Ashland Rive Rd, Richmond'));

class Chef extends Person {

    setTitleOfChef(title) {
        this.title = title;
        return(`I am ${title} in Hilton hotel`);
    }

    setHoursOfDuty(hours) {
        this.hours = hours;
        return(`I have ${hours} hours duty in weekdays`);
    }

}

const DD = new Chef('Ramsay', 40, 'Atlanta');
console.log(DD);
console.log(DD.setHeight('5.7ft'));
console.log(DD.setWeight('150lb'));
console.log(DD.setEmail('DDD@gmail.com'));
console.log(DD.setTitleOfChef('Head Chef'));
console.log(DD.setHoursOfDuty(10));

const EE  = new Chef('Rayan', 45, 'Huston');
console.log(EE);
console.log(EE.setHeight('5.8ft'));
console.log(EE.setWeight('160lb'));
console.log(EE.setEmail('EEE@gmail.com'));
console.log(EE.setTitleOfChef('Executive Chef'));
console.log(EE.setHoursOfDuty(12));

class BankAccount {

    constructor(ownerName,balance,acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }

    deposit(balance) {
        return balance = balance + (0.03*balance);  // here 3% is interest on balance
    }

    withdraw(accountType) {
        if(accountType == 'CheckingAccount') {
            
            return true ;  // here 0.25 is transaction charge for every withdrawal.
        }else{
            return false;
        }
        
    }
}

const BOA = new BankAccount('Bob', 2000, 5555);
console.log(BOA);
console.log(BOA.deposit(5000));
//console.log(BOA.withdraw(""));


class CheckingAccount extends BankAccount{

    constructor(overdraftEnabled) {
        super();
        this.overdraftEnabled = overdraftEnabled;
    }
    overdraft(overdraftEnabled) {
       return overdraftEnabled = true;
    }
    withdraw() {
        super.withdraw('CheckingAccount');
        this.overdraft();
        
    }

}
const chkAccount = new CheckingAccount(true)
console.log(chkAccount.withdraw());



class SavingsAccount extends BankAccount{

    withdraw() {
        super.withdraw(0,'savingAccount');
        
    }
}

