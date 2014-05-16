var sam = {
  name: "Sam",

  introduce: function(){
    return "Hi, my name is " + this.name;
  }
}

print(sam.name);
print(sam.introduce());
sam.name = "Theodore";
print(sam.name);