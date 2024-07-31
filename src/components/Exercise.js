class Exercise {
    constructor(name, sets, reps) {
      this.name = name;
      this.sets = sets;
      this.reps = reps;
    }
  
    description() {
      return `${this.name}: ${this.sets} sets of ${this.reps} reps`;
    }
  }
  
  export default Exercise;
  