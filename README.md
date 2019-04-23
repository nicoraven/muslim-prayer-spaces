# muslim-prayer-spaces
A JS/Node/Express/PostgreSQL web app that helps SG muslims find the nearest space to perform their prayers


## Project Post Mortem

#### Approach and Process

1. What in my process and approach to this project would I do differently next time?

* Start small, add more later
* Focus on the database first

	I started on the wrong foot for this project where I focused more on the Google Maps API instead of my basic database features, and ended up having less time to work on the database. I could have also pared down my MVP features to be more agile in my development.

2. What in my process and approach to this project went well that I would repeat next time?

	Making commits regularly. There were times when I had to roll back to a previous commit because I had made too many changes that ended up breaking the code.


#### Code and Code Design

1. What in my code and program design in the project would I do differently next time?

I would focus on the design of the database tables first and properly plan out the Entity Relationship Diagram (ERD) to avoid having to change my tables midway and causing a cascade of code cleanups afterwards.

Originally I had split the list of mosques and musollah into two separate tables because I thought it would be easier to call out the necessary data that way. While working on my code I realised doing it that way gave me more work so I merged the two tables.

Original:

```javascript
CREATE TABLE mosque(
	id SERIAL PRIMARY KEY,
	name TEXT,
	address TEXT,
	latitude FLOAT,
	longitude FLOAT,
	telephone TEXT,
	email TEXT,
	website TEXT,
	type TEXT
);

CREATE TABLE mussolah(
	id SERIAL PRIMARY KEY,
	name TEXT,
	address TEXT,
	latitude FLOAT,
	longitude FLOAT,
	directions TEXT,
	details TEXT,
	type TEXT
);
```

Updated:

```javascript
CREATE TABLE space(
	id SERIAL PRIMARY KEY,
	name TEXT,
	type TEXT,
	address TEXT,
	latitude FLOAT,
	longitude FLOAT,
	telephone TEXT,
	email TEXT,
	website TEXT,
	directions TEXT,
	details TEXT,
	createdBy TEXT,
	modifiedBy TEXT
);
```


2. What in my code and program design in the project went well? Is there anything I would do the same next time?

I chopped up my react components into smaller components which made it faster to generate my jsx files since I did not have to keep coding the same thing each time I create a new view.

```javascript
<body>
	<Header/>
	<div class="pageWrapper">
```

#### WDI Unit 2 Post Mortem
1. What habits did I use during this unit that helped me?

Using a kanban board like Trello helped me keep track of my pending tasks. I feel that I can continue leveraging on kanban to further streamline my work processes.

2. What habits did I have during this unit that I can improve on?

I came in with a mindset of coding the Google Maps API out first and I ended up having tunnel vision. I would have had an easier time if I had stopped earlier and looked at what I've already done and then reprioritise my tasks.

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

I find that the overall level is still manageable in terms of learning and applying what we've learned. The work would definitely be easier if we had more time to absorb what we've learned though.