class Observer {
    update(phoneNumber) {
    }
  }

  class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log(`Phone Number: ${phoneNumber}`);
    }
  }

  class DialingObserver extends Observer {
    update(phoneNumber) {
      console.log(`Now Dialling: ${phoneNumber}`);
    }
  }

  class Telephone {
    constructor() {
      this.observers = [];
      this.phoneNumber = '';
    }

    addPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
      this.notifyObservers();
    }

    removePhoneNumber() {
      this.phoneNumber = '';
      this.notifyObservers();
    }

    dialPhoneNumber() {
      console.log(`Dialing: ${this.phoneNumber}`);
      this.notifyObservers();
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
      for (const observer of this.observers) {
        observer.update(this.phoneNumber);
      }
    }
  }

  
  const telephone = new Telephone();

  const phoneNumberObserver = new PhoneNumberObserver();
  const dialingObserver = new DialingObserver();

  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(dialingObserver);

  telephone.addPhoneNumber('1234567890');
  telephone.dialPhoneNumber();
  telephone.removePhoneNumber();
  telephone.dialPhoneNumber();

  telephone.removeObserver(phoneNumberObserver);
  telephone.addPhoneNumber('9876543210');
  telephone.dialPhoneNumber();
