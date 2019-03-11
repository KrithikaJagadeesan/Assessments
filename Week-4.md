# Week 4 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.


#### 1. What is a method in Ruby? How is it different or similar to functions in JavaScript?

A method in ruby is code that can be reused, it performs a specific function. The way a method works is similar to a JS function. The syntax is different while JS uses the key word functions and then the name of the function, Ruby uses def and then the name.

#### 2. What does it mean that a class inherits from another class? Try to explain Ruby inheritance.


[Your Answer]

A child class inherits from the parent class (superclass).


[Googled Answer]
"In the previous chapter we talked briefly about inheritance. Inheritance is when a class inherits behavior from another class. The class that is inheriting behavior is called the subclass and the class it inherits from is called the superclass.

We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass."


#### 3. What is rspec and what is the general process for writing tests in RSpec?

//Your Answer
rspec is how we write unit test for ruby. The general process of writing tests is that they are written first followed by the actual code that will be tested.

//Googled Answer
"RSpec is a testing tool for Ruby, created for behavior-driven development (BDD). It is the most frequently used testing library for Ruby in production applications. To understand why RSpec is the way it is, we need to understand the point of BDD and its parent, TDD. The idea of test-driven development (TDD) was first brought to a wider audience by Kent Beck in his 2000 book Extreme Programming Explained. Instead of always writing tests for some code we already have, we work in a red-green loop:
Write the smallest possible test case that matches what we need to program.
Run the test and watch it fail.  Behavior-driven development is a concept built on top of TDD. The idea is to write tests as specifications of system behavior."

#### 4. Name three possible non-inheritance relationships between ruby objects?

//Your Answer
classes on the same level that might have unique instances, unique attribute or behavior.

//Googled Answer


#### 5. What do we call the #{} convention used below? What is it accomplishing?

```ruby
x = 1022
puts "I am printing a random number #{x}"
```
//Your Answer
"#{}" convention is used for string interpolation, when a variable can be passed between the curly braces. It is a more concise way of doing string interpolation.

#### 6. How do you feel about testing right now? What potential pros/cons/barriers/advantages do you see to implementing BDD in your own code?

//Your Answer
I feel ok about testing. I feel that it will be difficult for me to remember the syntax that is associated with BDD. I also often feel the urge to write the actual code first instead of the tests. However, with practice I can improve my skills.


#### 7. What is an instance variable in Ruby? How is it different from a normal, local variable?

//Your Answer
Instance variables have local scope and can be seen in the initialize part of a class. They have an @ in front of the variable name.

//Googled Answer
"@name is a new type of variable, called an “instance variable”. You have also learned that this scope is erased, and thrown away when Ruby exits the method body and returns from the method. And that local variables that are visible in one method are not visible in other methods: that’s why they are called local.Instance variables live in, and are visible everywhere in the object’s scope."


#### 8. Ruby has a great community and tons of free resources to help you learn. Here is the long list of great resources: https://www.ruby-lang.org/en/documentation/. Below are a few popular ones:
- Interactive Ruby tutorial (http://tryruby.org/levels/1/challenges/0)
- Why's (poigniant) Guide to Ruby: comics, anecdotes, and microscopic canaries (http://poignant.guide/book/chapter-1.html)
- Ruby in 20 min (https://www.ruby-lang.org/en/documentation/quickstart/)


Choose one of these resources and go through the material (not for hours, only looking for around 10min of your time) then come back here and list a few new things you learned about Ruby.
