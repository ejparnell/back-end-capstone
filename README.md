## D&D Play

This is the start of my game where you are able to create a character from D&D
5e. The character creation is done with React.js on the front end and Express.js
on the back end. You are able to create a new 'hero' from a form that has per
determinded options. As a user you are also able to update and character that you
create as well as delete them.

Front-end repo is located here:https://github.com/ejparnell/front-end-capstone
Front-end deployed is located here: https://ejparnell.github.io/front-end-capstone/#/
Back-end repo is located here: https://github.com/ejparnell/back-end-capstone
Back-end deployed is located here: https://afternoon-stream-50589.herokuapp.com/

### The Future

The goal with this app was to make a game out of it. I do entend on completing
this. The game will be a dungeon crawler where you can create a character from
D&D 5e and be able to run campaigns from Wizards of the Coast or Homebrew content.

### Planning

When I had started out I had planned on using Phaser.io to create a very simple
RPG game but I quickly figured out that I had bitten off more than was possible
in the time frame. From there I took a step back and made sure I had MVP. MVP
took the form of just being able to create a hero and have 4 RESTful routes attached
to this rescource. This was the second time that I had used React to create a project
so I had some trouble with learning how this technology worked.

### Set up and Installing Instructions

* Fork and clone this repo
* npm install

### Technology
 * React.js
 * Express.js

### Screen Shot of Front-end
![Image 6-6-19 at 1 25 PM](https://user-images.githubusercontent.com/37162387/59053136-b5358e00-885e-11e9-8a2a-697b554944a5.jpg)

### Catalog of Routes

| Verb | URL | Route |
|------|-----|-------|
| POST | /sign-up | users/create |
| POST | /sign-in | users/create |
| DELETE | /sign-out | users/destroy |
| PATCH | /change-password | users/update |
| POST | /heros | /heros |
| PATCH | /heros/:id/update | /heros/:id/update |
| DELETE | /heros/:id | /heros/:id |
| GET | /heros | /heros |
