#### 1. Use Ruby to loop over this array, multiplying each element by 2.

tempArray = [1, 2, 6, 9, 3, 21]

tempArray.each do |num|
   puts num*2
end

#### 2. From all the built in Ruby methods we've seen in class this week, choose three that you think are particularly helpful and create examples to show how they work.

# 1) .each is a method that is used as an iterator for looping over arrays and hashes.
# (see example above)

# 2).times method is a compact for loop that will do an action a set number of times

10.times{puts "What a Beautiful World!"}

# 3).reverse will reverse a string

my_name="Krithika"

puts my_name.reverse

#### 3. Look at this horrible ruby code, and fix it to be good ruby code.

``` ruby
class Example
  def initialize(day)
    @day=day
  end

  def say_hi
    if(day == "Friday"){
      puts "TGIF!"
    }
    elsif(day == "Monday"){
      puts "Its monday again"
    }
    else
      puts "another day"
    end
  end
end
```
