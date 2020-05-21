class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    this.nameValidate = true;
    if (this.name.search(/^[\d-_]|[\d-_]$/) !== -1) {
      this.nameValidate = false;
    }

    if (this.name.search(/\d{4}/) !== -1) {
      this.nameValidate = false;
    }

    if (this.name.search(/^[^a-z]/i) !== -1) {
      this.nameValidate = false;
    }
  }
}

export default Validator;
