---
title: 'Lesson 1: What Is Programming?'
date: '2023-04-14'
tags: ['beginners-programming', 'scratch']
draft: false
summary: "This lesson, the first in the series 'Beginners Programming', introduces the concept of programming and how programs interact with computers. In the later half of the course, we dive into Scratch, a graphical programming language for beginners."
--- 

# Welcome to the Course!  

In this course we will be learning the basics of *programming*.   
The outline of the course is:  
- What is programming? (How a computer interprets programs).  
- Let's write programs! (Scratch).  
- Moving on with more programs (Python).  
- How do people solve problems with code? (Python, algorithms).  

Now...  

# First Things First.  

In this course we will be working closely with each other. So, let's begin by introducing ourselves.  
I want each of you to share your name, your age, your favorite food, and one way in which you interacted with a computer program this week. But, you can't say something someone else has already mentioned, so try and get creative and think of all the ways in which you use computer programs in your life.    
Ok, I'll start.   
- My name is Jake  
- I am 22 years old
- my favorite food is pancakes 
- one way in which I interacted with code this week. I took the train and went through the gate with my Suica. That's an example of a hugeee computer program that a lot of people use everyday.  

![Jake's Profile](/static/images/beginners-programming/lesson1/jake-profile.JPG)

# What Is Programming?  
Ok, we've talked a little bit about computer programs now and all of you have given excellent examples of how we use computer programs in our daily lives. Now comes the big question....  
<center><strong>What is a computer program?</strong></center>

{/* 
Can anyone answer that?   
<center>*Hear student answers*</center>
Ok, good!!! We had a couple really good answers there.
*/}
 
When put really simply, computer programs are the following:  

```text
Definition: Computer programs are instructions you give to your computer  
```
Which brings us to our next point, and this is an important one:  

# Computers Are DUMB!  

Computers are really really dumb. Really dumb.  
{/* How many of you find that surprising? Right? Let me explain this a little bit. 
*/}
Computers are really good at following orders. If you give them clear instructions, they're able to follow them very well. But, that's the important thing, and that's why people like me, programmers, are able to find jobs, because it's not always easy to give clear instructions.

```text
Rule: Computers are dumb, so your instructions (programs) need to be very clear.  
```
For example, computers are really good at counting. If you asked people to stand at the gates of the station and count every person that goes inside and outside, that's gonna be a very difficult task, right? Well, for a computer, that kind of thing is easy.   

BUT, let's imagine instead we ask something a little bit more complicated. Let's ask the computer to not only count the people that go in and out, but also high five everyone wearing a red shirt. Now, a person can do this easily, right? For a computer to do this, we need to teach the computer the following:  
{/* You guys can find everyone wearing a red shirt and high five them? A computer can do this too, but suddenly it's much more difficult. To teach a computer to high five everyone in a red shirt, you need to: */}
1. Teach the computer *what the color red is*. 
2. Teach the computer *what a shirt is*. 
3. Teach the computer what a *high five is*. 
4. Tell the computer to look at every person's shirt, find the red shirts, and high five them.  

You can't just tell the computer to high five every red shirt, you need to treat the computer like it doesn't know anything, and teach it everything it needs to know to complete the task.  

- Exercise: Have a friend help out and hide one of your possessions somewhere in the classroom. Your students will watch your friend hide the object, and then give you instructions on how to go and retrieve it. However, you need to act like a computer, i.e. try as hard to take every instruction *literally*. 

# What Is a Programming Language?   

![programming languages are just like human languages](/static/images/beginners-programming/lesson1/languages1.jpg)

Now we move on to *programming languages*. This is what we will be writing in our class.  
What is a programming language? Can anyone answer that? Does anyone know any examples of programming languages?   
{/* <center>*ask students*</center>    */}

{/* Great! Thank you for all of your answers. Programming languages are a bit tricky. How can there be so many languages that a computer understands?    */}

Programming languages are similar to how our human, verbal languages work. Look at the image at the beginning of this section. There are many different languages that us humans speak, but when we *understand* a language, we're not just thinking of the word that we receive, we're thinking about the *idea* that that word points to. For example, when I say "apple", you're not just thinking about the word "apple" in your head, you're imagining a nice, red, (or green, or yellow), delicious, juicy fruit. Once you can picture that in your head, you can say that you *understand* me when I say "apple".   

Computers are the same. Computers, when they *understand* code, it means they are able to transform it into a set of instructions written *only in 1s and 0s*. To understand a program means to translate a program into very simple operations that can be described only with these two numbers. Now, we're not gonna get into the details of this, but you might ask, why don't all programmers just write code directly in 1s and 0s? Well, that's kind of like me drawing a picture of an apple to you instead of saying the word *apple*, every time. I can do it, but it's much easier for me to just say the word *apple*. Similarly, programming languages makes giving instructions to computers *simple*. It lets you speak to a computer without writing in only 1s and 0s (which is incredibly difficult!).   

```text
Definition: A programming language is a simpler way to give instructions to a computer.  
```

# Let's Write Programs!  

## Introduction to Scratch  

**Scratch** is a special kind of programming language^[we say a language is a programming language when it is *turing complete*. You don't need to know what this means, but looking at it like this, even [Microsoft PowerPoint](https://www.youtube.com/watch?v=uNjxe8ShM-8) can be considered a programming language!] used to learn the basic ideas of programming.  

### Create a Scratch Account  

- Go to the [Scratch website](http://scratch.mit.edu)  
- On the homepage, click 'Join Scratch'  
- Complete the three steps to sign up for a Scratch Account! (Remember your username and password, we will be using them to login to Scratch throughout this course!)  

### Create a Scratch Project  

- Go to the [Scratch website](http://scratch.mit.edu), login if you haven't already, and click "Create" at the top.  
- Take 10 minutes to explore the page. Try dragging blocks from the left into the white box in the center. Some hints:  
    - In Scratch, the little character below is called a *sprite*.  
    - ![](/static/images/beginners-programming/lesson1/scratch-sprite.png)
    - You can add or delete different Sprites by clicking on the bottom right cat icon.  
    - You can add costumes to the Sprite from the `Costumes` tab.  
    - The blocks on the left are *instructions* that your Sprite follows.  
    - You can connect blocks to form a sequence of instructions. For example, try connecting 
    - `Events` are useful when starting or ending a sequence of instructions.  
    - `Control` helps you wait, repeat, or change your Sprite's behavior.  
    - Try to sandwich your code blocks with `wait` so that you see the actions in your Sprite.  

- Show each other the programs you made!  

### Find the Apple!　🍎  

- Go to [this Scratch project](https://scratch.mit.edu/projects/835198551).  
- Your goal is to add code blocks so that when the green flag button is clicked, your Sprite moves across the screen to find the Apple.  
- When your Sprite finds the Apple, it should say, "I found the Apple!".  
- Add your code here:  
- ![](/static/images/beginners-programming/lesson1/scratch-find-the-apple.jpg)  

- Here's the teacher solution to the exercise. But remember, there are many correct ways to do this project! This isn't the only solution!
    - [Teacher Solution to Find the Apple! Exercise](https://scratch.mit.edu/projects/834933692)

### Dance Time!!! 💃  

- In this exercise, you'll be put into pairs.  
- In each pair, there will be an *instructor* and a *programmer*.  
- The *instructor* will watch a video of a Scratch Sprite doing a silly dance.  
- The programmer **must not watch the video!!!**  
- The instructor will describe the video **only using words**.  
- The programmer will try to recreate the dance on Slack only from the instructor's instructions.  
- Once you're done, compare the video with the original video, and switch roles!!  

**Programmers**:  

- Start a new project on your Scratch account.  

**Instructors**: 

- Here are Video links: (Don't visit until teacher says so, and **don't click the `See inside` button!)
    - [Dance1-jiggle](https://scratch.mit.edu/projects/835185231)  
    - [Dance2-move-rotations](https://scratch.mit.edu/projects/835196496)  
    - [Dance3-costumes-gliding](https://scratch.mit.edu/projects/835197036/)  
    - [Dance4-rotations](https://scratch.mit.edu/projects/835197664/)  
    - [Dance5-size](https://scratch.mit.edu/projects/835198242/)