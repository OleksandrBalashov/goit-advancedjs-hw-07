class Key {
  private signature = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  protected key: Key;

  comeIn(person: Person) {
    const tenants: Person[] = [];

    if (this.door) tenants.push(person);
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(protected key: Key) {
    super();
  }

  public openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
