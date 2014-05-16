var Animal = function (name, type, sound) {  // this could also be `function Animal (name, type, sound) { ` 
  this.name = name;
  this.type = type;
  this.sound = sound;
};

Animal.prototype = {
  toString: function () {
    return this.name + " is a " + this.type;
  },
  makeNoise: function () {
    return this.sound + " is the sound that " + this.name + " makes!";
  },
  getSizeAtAge: function(age) {
    if (this.type === "dog"){
      return 5 * age;
    } else if (this.type == "fish"){
      return 2 * age;
    } else {
      return age;
    }
  }
  
}


var ziggy = new Animal("Ziggy", "dog", "Woof!", 10);
var nemo = new Animal("Nemo", "fish", "bubble!", 2);

print(ziggy.name + " is a " + ziggy.type + " and makes the sound " + ziggy.sound);
print(nemo.toString());
print(ziggy.makeNoise());
print(nemo.makeNoise());

print("When " + ziggy.name + " is 7 she'll be " + ziggy.getSizeAtAge(7) + " pounds!");

print("Setting Nemo's type to shark...");
nemo.type = "shark";
print("Now " + nemo.name + " is a " + nemo.type);


