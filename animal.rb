class Animal 
  attr_accessor :name, :type, :sound

  def initialize(name, type, sound)
    self.name = name
    self.type = type
    self.sound = sound
  end 

  def make_noise
    "#{self.sound} is the sound that #{self.name} makes."
  end

  def get_weight_at_age(age)
    if self.type == "dog"
      5 * age
    elsif self.type == "fish"
      2 * age
    else 
      age
    end
  end

  def to_s
    "#{self.name} is a #{self.type}"
  end 

end 

ziggy = Animal.new("Ziggy", "dog", "Woof!")
nemo = Animal.new("Nemo", "fish", "bubble!")

puts ziggy.name + " is a " + ziggy.type + " and makes the sound " + ziggy.sound
puts ziggy.make_noise
puts nemo.make_noise

puts nemo.to_s

puts "When " + ziggy.name + " is 7 she'll be " + ziggy.get_weight_at_age(7).to_s + " pounds!"

puts "Setting Nemo's type to shark..."
nemo.type = "shark";
puts "Now " + nemo.name + " is a " + nemo.type
