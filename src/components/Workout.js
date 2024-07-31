import Exercise from "./Exercise";

class Workout {
    constructor(name, exercises){
        this.name = name;
        this.exercises = exercises;
    }

    name(){
        return `${this.name}`;
    }

    exercises(){
        return `${this.exercises}`
    }
}

export default Workout;