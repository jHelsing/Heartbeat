% Agile Development Processes Project Report  
  Team 4
% Evio Abazi; Lage Bergman; Jonathan Helsing; Ashish M Husain; Christoffer Karlsson; Oskar Lignell; Marufa Binte Mostafa; David Mendez Alvarez
%

# Project Description
The project is called Heartbeat, which is a mobile application for tracking patients in a hospital. Through the application, doctors can view patients, which doctors are treating a patient, the patient’s allergies, and the patient’s medical history.
The initial description given by the customer is as follows:
“Hospital Horror: I work in a hospital, and we are struggling to keep track of our patients. It is such a difficult process which requires knowing; any treatments they have had, which doctor is treating them, their allergies, the doctor’s diagnosis. We desperately need an app which can tell us all of these details about a patient.”
The application is developed using Ionic, a cross-platform mobile framework built on top of AngularJS and Apache Cordova. The backend database is developed using Firebase. Ionic uses TypeScript for scripting and HTML with CSS for representing visual components.

- GitHub repository: https://github.com/jHelsing/Heartbeat
- Issue tracker: https://trello.com/b/nf2rvUqW/development
- Continuous integration builds: https://travis-ci.org/jHelsing/Heartbeat/

# Sprint 1 Log

## Commitment
For the first sprint, only one backlog item was completed:
* As developers we want a "Hello World" application pushed to GitHub.

## Work Done
During the startup meeting, decisions were made on which technologies to use, both in the actual product and for the development work (communication, issue tracking, etc.) and general planning and design ideas. 
We opted to choose the Ionic Framework to develop the application as it is cross-platform and free to use. The decision was unanimous as everyone wanted to learn a new framework for this project, and our brief research depicted Ionic as a great tool for rapid prototyping, which seemed suitable in the context of this project. For communication between team members, Slack was selected and finally, for issue tracking and depicting tasks for the project in a systematic manner, using Trello was finalized. 

Some team members are new to git, and so a quick tutorial session was held to bring everyone up to speed. All the team members were new to the Ionic framework. Thus all of us together in the meeting learned the configuration and installation of the framework.
Lastly, a git workflow was decided upon, and the repository was configured to prevent commits directly to the master or develop branches, using protected branches. The backlog was populated with some expected features, and an initial project was pushed to GitHub.

For the planning phase, we opted to list down the primary tasks for the current sprint in our Trello dashboard and mark them as completed when they were finalized, verified and tested. As for the design, in the meeting, we opted to consider the possible requirements of the hospital system briefly based on the problem statement that was provided to us. Hence, this gave us a contextual idea of how the feature set may look like from the perspective of the customer. Based on our findings, a rough sketch of the possible entities and their relations were transcribed.
When it comes to the continuous integration tool, we opted for Travis CI which was set up and configured to work with the Ionic project, unit testing, and proper notifications for builds from GitHub. Additionally, during the startup meeting, we made sure that everyone had the programs required, and that they work, to work with the Ionic project, i.e. that everyone's development environment was set up.

A test suite was also created, using the Karma test runner in combination with the behaviour-driven testing framework Jasmine. A simple test was also created for demonstration purposes, with the primary intention of ensuring that the connection between Travis CI and GitHub was correctly configured. The test suite can be used primarily for unit testing, but an end-to-end testing framework such as Protractor might later be added as well.
To ensure a consistent code style and to enable us to follow best practices, a TSLint configuration was created for static code analysis. The configuration contains most of the recommended TSLint rules for TypeScript. TSLint can be integrated with various editors, such as Visual Studio Code, for instant feedback.

<!--- *Name and ID of each feature* | *X hours* | *Member A: Y hours, Member B: Z hours* --->
Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*1 As developers we want a “Hello World” app pushed to GitHub* | * * | * *
*1.1 Initial project meeting, Sprint 1 planning* | *4 hours* |	*Evio Abazi: 4 hours, Ashish M Husain: 4 hours, Lage Bergman: 4 hours, Jonathan Helsing: 4 hours, Christoffer Karlsson: 4 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 4 hours*
*1.2 Add .gitignore* |	*0.5 hours*	|	*Jonathan Helsing: 0.5 hours*
*1.3 Setup Travis* | *4 hours* |	*Jonathan Helsing: 4 hours, Christoffer Karlsson: 1 hour*
*1.4 Add TA’s to git repo (+ slack, trello, etc.)*|	*3 hours* |	*Evio Abazi: 0.5 hours, Jonathan Helsing: 0.5 hours, Lage Bergman: 0.5 hours*
*1.5 Initiate an Ionic Project* |	*14 hours*	| *Evio Abazi: 2 hours, Ashish M Husain: 3 hours, Lage Bergman: 2 hours, Jonathan Helsing: 2 hours, Christoffer Karlsson: 2 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 3 hours*
*1.6 Add TSLint configuration* | *2 hours* | *Christoffer Karlsson: 2 hours*
*1.7 Create one simple unit test to make sure Travis is able to handle it*	 | *3 hours* |	*Christoffer Karlsson: 3 hours*
*1.8 Report Sprint 1*				|	*4 hours*	|	*Ashish M Husain: 1 hour, Christoffer Karlsson: 0.5 hours, Oskar Lignell: 1 hour, Lage Bergman: 1 hours, Jonathan Helsing: 0.5 hours*
*1.9 Self Study of Ionic Framework/Github* | *25 hours* |	*Evio Abazi: 4  hours, Ashish M Husain: 4 hours, Lage Bergman: 3 hours, Jonathan Helsing: 4 hours, Christoffer Karlsson: 3 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 3 hours*

## Reflections

Overall the meeting went very well, and everyone contributed to the discussions. The initial project setup required some research since none of the team members was very familiar with Ionic or Travis CI while a few had little to no prior experience of using GitHub.

Since the first Sprint was not even a week long and only included setup of the project environment, no real agile practices were used. Tools were chosen to enable continuous integration and test-first development, as well as for enforcing code standards, but none of the techniques was practiced. Setting up these tools required some work since the team is not familiar with all of them, but hopefully, they will be rewarding when the actual development starts.
Many of the tools used were discussed and went through together to make sure that everyone had the same basic knowledge of the tools and how to use them.

# Sprint 2 Log

## Commitment
For the second sprint, six backlog items were selected.
- #2 As an administrator I want to be able to register doctors to the system.
- #15 As a user I want to be able to log in.
- #11 As an administrator I want to be able to add a new patient to the hospital.
- #8 As an administrator I want to be able to assign doctor(s) to a patient.
- #18 As a doctor I want to be able to view my patients.
- #19 As a user I want to be able to create, read, update, and delete data in the application.

## Work Done
During the second sprint, pair programming was used to a large extent. The use of pair programming was facilitated by assigning most of the selected backlog items to two team members instead of just one, allowing these two team members to work closely together. By using this technique, it was possible to share knowledge and review each other in order to get a good result.

The group met after every lecture to do a stand-up meeting to inform everyone about what had been done since the last meeting, discuss found obstacles, and plan for the time ahead.

The project is using the Cloud Firestore from Google Firebase for storage in the cloud. It is a NoSQL database using collections, which can be seen as quite similar to the concept of tables in SQL databases. This suited our previous experience better than if we had chosen the alternative database offered by Google Firebase. The Cloud Firestore database also allows us to structure data in a way that we believe is more intuitive, and allows us to perform richer querying on the data. We believe that creating the data model is a very important step of building software. Therefore, we met as a team to discuss how we wanted to construct our data model, i.e. which collections we should store and which fields those should contain.

A meeting on Friday the 13th was selected to review pull requests created and make sure that everyone’s code was similar in structure and it’s execution.

To further promote the feeling of collective code ownership, increase each others knowledge, and to achieve better code, we decided to increase the number of required reviewers on pull request from one person to two. This will act as a safety net, making sure that the code we are merging into our project meets a certain standard and works as expected. It also forces more people to actually see and reflect upon the code, which in the long run can be quite useful for general understandability of the code and maintainability. A checklist with certain things to consider when doing a code review (or even writing a pull request) was also created, as a guiding tool to make code reviews more systematic.

Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*Sprint 2 planning meeting* | *3 hours* | *Evio Abazi: 3 hours, Ashish M Husain: 3 hours, Lage Bergman: 3 hours, Jonathan Helsing: 3 hours, Christoffer Karlsson: 3 hours, Oskar Lignell: 3 hours, Marufa Binte Mostafa: 3 hours, David Mendez Alvarez: 3 hours*
*Database data model creation* | *2 hours* | *Evio Abazi: 2 hours, Ashish M Husain: 2 hours, Lage Bergman: 2 hours, Jonathan Helsing: 1 hours, Christoffer Karlsson: 3.5 hours, Oskar Lignell: 2 hours, Marufa Binte Mostafa: 2 hours, David Mendez Alvarez: 2 hours*
*2.1 Create a register doctor view* |*2 hours*| *Evio Abazi: 3 hours, Oskar Lignell: 3 hours*
*2.2 Connect to create a new doctor in database* |*4 hours*| *Evio Abazi: 4 hours, Oskar Lignell: 4 hours*
*8.1 Make it possible to register a patient to doctor when creating a patient* | *5 hours* | *Marufa Binte Mostafa: 4 hours, David Mendez: 4 hours*
*11.1 Create a patient creation view.* | *2 hours* | *Marufa Binte Mostafa: 2 hours*
*11.2 Connect to create a new patient in Database* | *6 hours* | *Marufa Binte Mostafa: 6 hours*
*15.1 Create a log-in view* | *1 hour* | *Ashish M Husain: 1 hours, Lage Bergman: 1 hours*
*15.2 Check with database over credentials* | *2 hour* | *Ashish M Husain: 2 hours, Lage Bergman: 2 hours*
*15.3 Check level of user.* | *3 hour* | *Ashish M Husain: 3 hours, Lage Bergman: 3 hours*
*18.1 View all of my patients* | *10 hours* | *Jonathan Helsing: 12 hours*
*18.2 View a specific patient* | *4 hours* | *Jonathan Helsing: 3 hours*
*19.1 Research and create a Firebase database and connect it to the application* | *6 hours* | *Christoffer Karlsson: 6 hours*
*19.2 Add example CRUD view for the Users collection to demonstrate how to interact with Firebase* | *2 hours* | *Christoffer Karlsson: 2 hours*
*19.3 Refactor example Users collection database functionality into a provider for better separation of concerns and modularity, as a reference for other collections* | *1 hours* | *Christoffer Karlsson: 1 hours*
*19.4 Replace Users collection functionality with Nurses collection and make it possible to access referenced values from Firestore* | *3 hours* | *Christoffer Karlsson: 4 hours*
*Report Sprint 2* | *5 hours* | *Ashish M Husain: 1 hour, Christoffer Karlsson: 1 hour, Oskar Lignell: 1 hour, Lage Bergman: 1 hour, Jonathan Helsing: 1 hours, David Mendez Alvarez: 1 hours*, Marufa Binte Mostafa: 0.5 hours

## Reflections
In many cases it was very convenient to use pair programming as all team members are new to the technologies used in the project, and so having one person who can look for information and try to anticipate upcoming problems while the other person writes the actual source code is very helpful. At times it can be frustrating to try to explain certain concepts when you know in your head what a possible solution looks like but you aren’t able to write it yourself, but remaining patient and discussing everything makes for a more thorough job since all aspects are discussed aloud. It also gives more collective ownership of the code when two people are involved in creating each solution. Having two sets of eyes on the code also makes spotting errors much faster.

The group tried to have a team member acting as a proxy, or an on-site customer, in the beginning of the second sprint. This did not last for long. It might have been that it was forgotten after the easter, but while the practice was used one could see that it is possible that the on-site customer’s opinions differ from the “real” customer.

So far, all the tools selected for the project have worked well. Using TSLint makes it easier to read everyone's code and also reduces the risk of unnecessary merge conflicts due to inconsequent spacing and such. The git workflow also makes collective ownership more natural, as someone else always has to approve the merging of each feature branch to the develop branch, forcing them to read and understand the code to some extent. We believe that increasing the number of required reviewers will help us get even better at this, while still maintaining some agility of being able to merge changes rather quickly.

Writing tests has been seen as something quite unnatural due to the early stages of the project, where the code is quickly being changed by us, and as a result of changed requirements from customers. Our goal is to soon be able to start writing tests in a more systematic manner, when the basics of the project has been established and implementation has calmed down a bit. This will probably let us write tests that do not instantly have to be changed, which could otherwise be considered wasteful.

Gathering together as a team to create the initial data model for the Cloud Firestore database was a good exercise, where everyone was involved in the discussion. Spending some extra time on thinking through the data model is something we believe can greatly help us in the long run, as making major changes to the data model can be quite tricky after the database has already been populated by a lot of data, and the code has been built around a certain structure.

Due to an optimistic time schedule, we feel that the pull requests were not reviewed to the extent they ideally should have been. To avoid introducing a lot of technical debt, we might take this into account during the next sprint planning, to perform refactoring to resolve any issues introduced when merging these particular pull requests. We will also try to create the pull requests earlier during the next sprint, to enable us to spend more time on code reviews before merging.

# Sprint 3 Log
## Commitment
For the third sprint, six backlog items were selected.
- #23 As an administrator, I want information to be hidden from users that do not have the access level to read it.
- #8 As an administrator I want to change the assigned doctor of a patient.
- #4 As a doctor I want to be able to add a diagnosis to a patient (with the option of adding x-ray images to the diagnosis).
- #24 As an administrator, I want to be able to view the list of doctors.
- #21 As a user I want an application that is intuitive with a common theme.
- #20 As a developer I want the code to be well-organised to make development easier.

## Work Done
The priority of this sprint was decided to be on design and code structure, which resulted in less implemented features in the third sprint. From the previous sprints we had many individual features that were ready to be tied together, to generate a better user experience, as the previous features were only connected to the application for demo purposes (e.g. by having buttons that navigated to all possible screens, instead of having the navigation between different screens follow a more intuitive interaction flow). At the early stages of the sprint, we had a meeting to discuss the design of the application and the user flow according to its interactions. We made some low-fidelity sketches together on a whiteboard, to get a better overview of the interaction flow we were trying to achieve. We managed to make the application more secure in the sense that users have access rights to specific features. We worked on adding the capability for the different types of users to perform some of their actions required. This means that a doctor is able to add a diagnosis, treatment, and notes to a patient and that an administrator is able to view the different aspects of the hospital, for example doctors and nurses. As previously mentioned the most important feature is the redesign which means that the overall look of the application has been improved, the usability has greatly improved and because of the redesign we were able to streamline the user experience to match the purpose of the user type, e.g. the first thing a doctor will see after logging in is a list of his or her patients which is possible to interact with in order to view and edit some of the details of a patient. Overall, the user interface was streamlined to address the simplicity factor of using a mobile app. From the Developers perspective, we managed to minimize technical debt, by emphasizing more on refactoring and writing structured code. The aforementioned does not count as a feature but makes the entire project more modular, reusable which indirectly makes integrating future changes easier.

We have discussed adding some more tests during the upcoming sprints, perhaps using Protractor for end-to-end testing. From our quick discussion it feels like focusing on end-to-end tests would be quite efficient, as a lot of functionality in our application is related to GUI interaction and CRUD operations against a remote database.

Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*Sprint 3 planning meeting* | *0.5 hours* | *Evio Abazi: 0.5 hours, Ashish M Husain: 0.5 hours, Lage Bergman: 0.5 hours, Jonathan Helsing: 0.5 hours, Christoffer Karlsson: 0.5 hours, Oskar Lignell: 0.5 hours, Marufa Binte Mostafa: 0.5 hours, David Mendez Alvarez: 0.5 hours*
*Report Sprint 3* | *4 hours* | *Evio Abazi: 0.5 hours, Ashish M Husain: 0.5 hours, Christoffer Karlsson: 1 hour, Oskar Lignell: 0.5 hours, Lage Bergman: 1 hour, Jonathan Helsing: 1 hour, David Mendez Alvarez: 0.5 hours, Marufa Binte Mostafa: 0.5 hours*
*Code reviews and refactor code of Sprint 2 features* | *25 hours* | *Evio Abazi: 3 hours, Ashish M Husain: 3 hours, Lage Bergman: 3 hours, Jonathan Helsing: 3 hours, Christoffer Karlsson: 3 hours, Oskar Lignell: 3 hours, Marufa Binte Mostafa: 3 hours, David Mendez Alvarez: 4 hours*
*#4 As a doctor I want to be able to add a diagnosis to a patient (with the option of adding x-ray images to the diagnosis)* | *10 hours* | *Jonathan Helsing: 8 hours, Christoffer Karlsson: 1 hour*
*24 As an admin I want to be able to view the list of doctors* | *2 hours* | *Evio Abazi: 4 hours, Oskar Lignell: 4 hours*
*8.2 As an administrator I want to change the assigned doctor of a patient.* | *5 hours* | *Marufa Binte Mostafa: 5 hours, David Mendez Alvarez: 6 hours, Christoffer Karlsson: 0.5 hours*
*21 As a user I want an application that is intuitive with a common theme.* | *4 hours* | *Christoffer Karlsson: 4 hours, David Mendez Alvarez: 1 hour, Jonathan Helsing: 2 hours* 
*23 As an administrator, I want information to be hidden from users that do not have the access level to read it* | *8 hours* | *Lage Bergman: 6 hours, Ashish M Husain: 5 hours, Christoffer Karlsson: 0.5 hours*

## Reflections
Since this sprint is shorter than the two previous sprints, which meant that we were unsure of how many features we would be able to add to the application. Instead we focused on improving what we have, for example establishing a pull request review checklist in order to make our code look good. This meant that we gained a deeper understand of our code and how it works while also improving our ability to add more features quicker in the future.
Before even starting on any new features, we refactored all code implemented during the previous sprint. All team members went through the code of all the new features and reviewed it together according to the newly created review checklist mentioned above. This was a good way of making sure no part of the code is unfamiliar to any team member and also made improving the features easier.

Having the meeting where we met and together discussed different design solutions on a whiteboard was a great way to get all team members involved in the decision process. It was also very helpful in the sense that it naturally resulted in good discussions, regarding different approaches to the user experience. Having this meeting at the beginning of the sprint facilitated the process of dividing smaller tasks between the team members, and ensured that everyone was on the same page about what we were trying to achieve, prior to starting. We, also, intentionally decided not to spend too much time on styling of individual features (i.e. by specifying CSS for different components), as it would be hard to orchestrate this and still reach a unified look and feel of the application. As the built in components provided by Ionic already provide a standardized look and feel we thought it would be better to use the default design initially, and then, perhaps update individual components with CSS, given that we have settled on a specific look and feel for the application. This is, however, something that will be thought about in future sprints, if it becomes relevant.

As mentioned earlier, we discussed adding end-to-end tests during the next sprint. This is something we will look more into, but it feels as if it would be an efficient way of achieving a lot of rich test cases, in a way that would probably suit our application and workflow better, than only relying strictly on unit tests.

# Sprint 4 Log

## Commitment
For the fourth sprint, 13 backlog items were selected.
- #4 As a doctor I want to be able to add a diagnosis to a patient (with option of adding x-ray images)
- #21 As a user I want an application that is intuitive with a common theme
- #30 As an admin I want to be able to add picture urls when registering a nurse or doctor
- #31 As an administrator I want to be able to view the details of a doctor
- #32 As a doctor I want to be able to view the severity of a patient's condition from the list view
- #33 As a doctor I want to view details of a comment in a modal
- #34 As an admin I don’t want doctors and nurses to be able to add patients to the system
- #35 As a developer I don't want the app to crash when bad input is entered into text field
- #36 As an admin I want the doctors and nurses I enter into the system to be able to log in
- #37 As a developer I want to have dates of birth in the database instead of age for all people in the system
- #38 As a doctor I want to be able to see the author of comments in a patient
- #39 The color on the patient list should be dependent on room, not name
- #40 As a developer I don't want the app to crash when I remove a doctor that has associated patients (in patient-detail view)

## Work Done
This sprint’s priority was to finish all of the promises made to our customer while also squashing out bugs.
With most of the functionality already in place, a lot of work consisted of improving already existing features. For instance by improving the UX, or by adding a layer of role-based authorisation, where functionality was restricted depending on the role of the logged in user. One example of this is that only an administrator should be able to add new doctors to the system, while a nurse should not have the rights to perform this operation.

As decided during the previous acceptance meeting with the customers, we decided to make a compromise with regards to the functionality regarding image attachments (such as x-rays), to limit the scope of the sprint. This meant that we let the user provide an image URL to an attachment, instead of selecting it through their own device. The application logo was also mentioned during the acceptance meeting, where the customer requested the logo to always be visible in the title bar. But after discussions within the group, and testing it out in practise, we thought that change would be better of unimplemented, so we contacted the customer about this matter. A mutual agreement was made, where we, as the developers, got to decide if we wanted to have the logo in the title bar or not. We decided not to include it, as we thought it would look better without it there. And as per our agreement, this was something the customer was fine with.

The rest of the improvements requested by the customers were implemented, such as making the colors of patients circles dependent on room, add colored marks depending on the status on the patient, and use different colors depending on the type of comment in the details of a patient.

Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*Sprint 4 planning meeting* | *2 hours* | *Evio Abazi: 2 hours, Ashish M Husain: 2 hours, Lage Bergman: 2 hours, Jonathan Helsing: 2 hours, Christoffer Karlsson: 2 hours, Oskar Lignell: 2 hours, Marufa Binte Mostafa: 2 hours, David Mendez Alvarez: 2 hours*
*#4 As a doctor I want to be able to add a diagnosis to a patient* |*2 hours*| *Jonathan Helsing: 2 hours*
*#21 As a user I want an application that is intuitive with a common theme* |*10 hours*| *Christoffer Karlsson: 2 hours, David Mendez Alvarez: 3.5 hours, Ashish M Husain: 2.5 hours, Lage Bergman: 3 hours*
*#30 As an admin I want to be able to add picture urls when registering a nurse or doctor* |*2 hours*| *Jonathan Helsing: 2.5 hours*
*#31 As an administrator I want to be able to view the details of a doctor* |*2 hours*| *David Mendez Alvarez: 1.5 hours*
*#32 As a doctor I want to be able to view the severity of a patient's condition from the list view* |*5 hours*| *Marufa Binte Mostafa: 6 hours, David Mendez Alvarez: 1 hour, Christoffer Karlsson: 0.5 hours*
*#33 As a doctor I want to view details of a comment in a modal* |	 *4 hours* | *Lage Bergman: 4 hours, Ashish M Husain: 4 hours*
*#34 As an admin I don’t want doctors and nurses to be able to add patients to the system* |*2 hours*| *Evio Abazi: 2 hours, Oskar Lignell: 2 hours*
*#35 As a developer I don't want the app to crash when bad input is entered into text field* |*1 hour*| *David Mendez Alvarez: 0.5 hours*
*#36 As an admin I want the doctors and nurses I enter into the system to be able to log in* |*2 hours*| *David Mendez Alvarez: 2 hours*
*#37 As a developer I want to have dates of birth in the database instead of age for all people in the system* |*1 hour*| *David Mendez Alvarez: 1.5 hours*
*#38 As a doctor I want to be able to see the author of comments in a patient* |*2.5 hours*| *David Mendez Alvarez: 3 hours*
*#39 The color on the patient list should be dependent on room, not name* |*0.5 hours*| *David Mendez Alvarez: 0.5 hours*
*#40 As a developer I don't want the app to crash when I remove a doctor that has associated patients (in patient-detail view)* |*0.5 hours*| *David Mendez Alvarez: 0.5 hours*
*Investigating and implementing unit tests* | *2 hours* | *Lage Bergman: 4 hours, Oskar Lignell: 3 hours*
*Investigating and implementing E2E-tests using Protractor* | *2 hours* | *Christoffer Karlsson: 2 hours*
*Pull request review* |*20 hours*| *Jonathan Helsing: 2 hours, Lage Bergman: 2 hours, Marufa Binte Mostafa: 3 hours, Christoffer Karlsson: 2 hours, David Mendez Alvarez: 2 hours*
*Report sprint 4* |*4 hours*| *Evio Abazi: 0.5 hours, Ashish M Husain: 0.5 hours, Christoffer Karlsson: 1 hour, Oskar Lignell: 0.5 hours, Lage Bergman: 1 hour, Jonathan Helsing: 1 hour, David Mendez Alvarez: 1 hour, Marufa Binte Mostafa: 1 hour*

## Reflections
For this sprint we played planning poker to estimate the effort required to complete the selected backlog items. We used an online tool (https://scrumpoker.online/) which worked great without us having to create or find any physical materials. As for the technique itself, it worked rather well for estimating effort points. The problem is that we had not done any explicit estimation for previous sprints, meaning we did not have a good perception of the team velocity, making the effort points less useful than if we had a known velocity. Another issue was that certain tasks would take an hour to complete, while another task with the same number of effort points resulted in 5 hours of work. However, this will reoccur in most agile teams, but if we would have used this for every sprint we would have been better at it and made more accurate estimates.

This sprint, efforts were spent on trying to get the test first principle to work. However, we ran into a lot of obstacles with testing and after a few members of the group spent an entire morning putting together a test and trying to understand how it should be created and what is needed for them to work, we ended up deciding against testing since it required too much effort given the large commitment that were made for this final sprint. The main reason for the obstacles we ran into is that the internal components of the application are not well suited for unit testing. The application is basically just a graphical interface for viewing and modifying the contents of a database, without much internal functionality. This means that testing the app would require UI-testing or complete end-to-end tests instead of unit tests, which in turn would require much more work. Some effort was spent on configuring and testing out end-to-end testing, and while the principle seems suitable and powerful for our application, it might not be ideal for test driven development, which was the higher goal we wanted to achieve. At least this is our hypothesis, that test driven development is more suitable for unit tests (where it’s quite intuitive to think about future functionality, and its expected input and output), rather than end-to-end tests. We believe end-to-end tests are most suitable for regression testing, where the goal is to ensure that already implemented functionality is working as expected, even as further changes are made to the code.

When looking in the product backlog, all the different backlog items that were once created have now been implemented, which means we are more or less on schedule. This is good, as this could be seen as the last “real” sprint.

<!-- Reflect on how the work worked.
This data will form the basis for your final reflection.
As the postmortem will be a writeup, it's fine to use shorthand notes, bullet list, and similar.
Keep within 1000-1500 words. -->

<!-- Discuss any deviations from the sprint commitment. -->

<!-- Reflect on the agile practice practiced: -->

<!-- - Did your experience correspond to or contradict with what literature claims?

    - Analysis of why. Mostly interesting if something unexpected happens, but even
      if everything runs according to plan, reflecting on the underlying mechanisms
      can be interesting. -->

<!-- - How did the practices interact?
  Did they complement or counteract each other? -->

<!-- - How efficient were the practices, given the time they took to use? -->

# Postmortem
Once the project is finished, summarize your experiences.
The postmortem part shall be 2000-3000 words long.

Considering the following:

- With regards to the agile practices, reflect on the combined experience from all sprints.

- Which practices had the most impact on the software developed?
  Think of both positives and negatives.

- What would you do differently in a future but similar project?


# Project outcome
Document the project, for example using screenshots.



