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

# Postmortem
This section presents a reflection on this projects and the agile practices used within. Each practice has a dedicated subsection and discusses the following:

- Did the experience of this method contradict or correspond to what literature suggests?
- How did this practice interact with other practices?
- Was this practice efficient?

After discussing the agile methods, a discussion about what should change if we are to do this project again.

## Pair Programming
When applying the pair programming practice, the team felt that the coding process became more effective. Even though the literature states that empirical studies fail to support pair programming, we feel that it can be useful. It might be that it worked well because of the chosen framework that was new to everyone in the group, which made pair programming help in catching faults as well as speeding up the process of finding information on how to implement things.

Pair programming did help the team in other aspects as well. It complemented with collective code ownership since multiple people learned different parts of the code together. This made everyone understand different parts of the code much faster than if one would sit with each part by themselves. Thereby making the process of collective code ownership grow much faster. One could also state that it helped members with coding standards. However, this would only be a complement in situations such as this one, where the framework is new to the group. 

With the experiences from this project, it is safe to say that pair programming definitely can be an effective way to work. However, as the project progressed and everyone got more comfortable with how to code and use the new things, pair programming became less effective which makes our experience go from contradicting the literature to correspond to it.

## Planning Game
Using planning game to estimate our effort was in a way useful because we got an idea of how much work we would have to complete during the sprint. However, since we only did it once, our estimations were off, sometimes things with the same score took somewhere between 5 minutes and 5 hours. Additionally, because we only used it once, it was impossible to establish a reasonable velocity. The planning game for us did not take that long, only a couple of hours, which meant that since it gave such an extensive overview, we consider it to have been useful.

## Small Releases
A core idea with agile is to obtain frequent customer feedback. This is done by working iteratively and showing the product in its current state to the customer at the end of each iteration. Because we wanted to show a small demo at each of these customer meetings, we wanted some working prototype. For this, working with small releases, where each release contains a working product with more functionality added to the previous, is a fitting workflow. It can be difficult for some projects to divide the work so that each finished part adds to a specific functionality which is visible to the user, but for us it has worked rather well. The earlier sprints needed some work to be spent on setting up backend functionality and deciding on a proper project structure, meaning less visible functionality was presented to the customer, but during the later sprints, the releases contained mostly new, complete features.

## Simple Design
Developing software with a simple design helped us deliver working software quickly, in small releases. This made it possible to have working prototypes, which could be shown to and validated by, the customer. It is easy to get attached to something you have spent much effort on, i.e. spending multiple hours on a design, which can be problematic in case the design needs to be updated in the future, for instance, if the customer requests another design. The safer alternative is building a simple, low-fidelity design, which can be further developed during future iterations. We worked with this actively and made our sketches on whiteboards to maintain a rather low level of detail, as opposed to creating pixel-perfect mockups, for instance. As a rule of thumb, we also avoided writing custom CSS for our components, to avoid spending unnecessary work on a design, as it was prone to change in the future, and we did not have a defined style guide. Not applying custom styles to the components was made possible thanks to the Ionic framework, which provides standardized components, that in general look good out of the box.

## Test-first
Test first and test-driven development are central parts of extreme programming. For experienced developers in familiar environments, they are probably very powerful as it pinpoints the minimal functionality required to satisfy some requirement. Together with refactoring (described in the next section), this becomes a very fast and efficient practice which at the same time guarantees that all implemented functionality has been tested.

However, for us, this was not the case at all. All group members of this project were new to the techniques used; all group members were new to test driven development, the nature of the application was not suitable for unit tests and the project demanded new functionality to be added each sprint. Some group members spent time on trying to implement useful unit tests to use for test-driven development, but it all turned out to be a waste of time. We believe we would have been able to apply test-driven development in some parts of the project, and write complete end-to-end tests to ensure the quality of the software, but we had already created the parts suitable for TDD when we tried to apply the practice, and there was not enough time to do end-to-end tests.

If we were to redo the project, we would try to put more effort during earlier sprints on understanding testing tools for the used languages and frameworks, as well as try to lower the amount of functionality for each sprint to provide a buffer for this kind of necessary research and implementation work that do not create visible functionality to the customer.

## Refactoring
To avoid increasing our technical debt, we ensured that the code met our standards by performing refactoring regularly. An excellent occasion to perform this was after multiple pull requests had been merged, as different authors typically wrote the code in the pull requests, and therefore following different styles. Refactoring the code enabled us to follow our coding standards, and to increase the collective code ownership by exposing the code to everyone, and writing it in a standardized way. Refactoring is something we feel is very efficient, especially if done at an early stage, to avoid further technical debt. By using pull requests with required code reviews, we were also able to detect problems early, which could lead to the pull request issuer to be able to refactor the code in the pull request instantly. This lead to our code holding, in general, meeting our expectations, which overall lowered the need for extensive refactoring.

## Continuous Integration
Continuous integration is a good way for systems to absorb small updates while making sure no change breaks anything. It is also a way to automate the checking of the system after each update instead of having each developer do integration tests of their changes manually when they want to integrate something. For some projects, it can be nearly impossible to emulate and run the whole system on one developer’s machine, and therefore integration testing needs to be run in a separate environment, but this is not the case for our project.

For us, setting up Travis and waiting for CI builds when merging pull requests was not worth it for the value we received in return. Since we never implemented any real useful unit or integration tests, the continuous integration builds do not test the code, and so we are not really doing continuous integration even though we have the environment set up. For future projects, just as for the issues with test driven development, more emphasis would need to be put on testing for the continuous integration to be useful.

## Sustainable Pace
By thinking of having a sustainable pace the group tried to work as with a “regular job”. But since it sometimes happened that someone preferred to work during the weekend, the working hours were differing sometimes. By complementing the practice with planning game to have estimations and get to know your velocity, sustainable pace is easier to keep. But there is also a risk with estimations, if they are misestimated it might force people to work hard on tasks that were assumed to be simple. This then leads to a work overload that ruins the sustainable pace. 

It is in the end a nice thought to aim for a sustainable pace, but it is a difficult task to plan perfectly which leads to some sprints to have a higher workload and in some sprints there is less to to.

## Coding Standards
One of the things we used to make sure that we write code that looks the same was lint, which checks the code against a set of rules. Lint enabled us to have the same structure in the code. However, there was still the problem of solving similar problems in the same way. Using pull requests and reviewing these together made sure that all the code that had a similar purpose, actually worked in the same way. One example of this is the use of certain classes, called providers, that provide access to the database. With the providers, it was possible to access everything with different classes using methods that only changed very little depending on what information exists about that item type in the database.

Our use of coding standards enabled us to reduce the amount of refactoring we needed. The decreased need for refactoring became very clear the further the project went on. In the beginning, we would spend group meetings inspecting each others code, which resulted in quite a lot of significant changes to it. However, when the project neared its final deadline in sprint four, we spent much less time reviewing, and there were fewer things in the new code that needed correction.

So does the implementation of coding standards help programmers with understanding the code and making it easier to work on and understand different parts of the code? In this project, it most definitely helped us and enabled us to easier add new features and correcting problems in the code, even if the person correcting it is not the person who originally wrote it.

## Collective Code Ownership
Collective code ownership is vital to increase the knowledge about the code across the team. This facilitates development as everyone is more knowledgeable about the code in general, which also decreases the so-called truck factor. We used different practices to promote collective code ownership, such as code reviews, coding standards, pair programming, and refactoring. Code reviews exposed the code to all team members, coding standards made the code more easily understandable as we had standardized ways of doing things, pair programming effectively exposes the code to two persons at the same time, and refactoring makes sure the code follows the defined standards, which makes the code more easily understood by everyone. These methods were very efficient in promoting collective code ownership. However, we had a tendency where everyone continued working on features related to the first set of features he or she worked on.

## Onsite Customer
Onsite customer is one of the requirements of extreme programming in order to have instant feedbacks and decisions to facilitate the development. At the beginning of our project when close communication with the customer was necessary we chose two of our members to be proxy customer for taking decisions. But with time the requirements became more clear and visible, so we did not feel the necessity of a proxy onsite customer that much. Also due to the placement of easter break everyone kind of forgot about this and moved on to the other practices. 

## Change for future
For the future, it would be a good idea to set up the coding standards from the start of the project, since it, in this case, meant that we lost a week of correcting stuff. Moreover, the group could have done with more reflection and discussion before starting working on each sprint, since the way it was done in this project meant that we would have a lot of similar code and functionality, but in different locations within the project. A way to accommodate for this would be to have used the planning game more, and there include discussions about each of the backlog items and discuss their dependence and similarities. Another idea is to have brainstorming sessions before the group starts coding in each sprint. This brainstorming session would enable the group to reflect and think about challenges and possible solutions.

# Project outcome
![](https://drive.google.com/file/d/13jKzjUqoFLpq0TkGTTthIF3aseMhFlXJ/view?usp=sharing)
When the application is started, the user is shown a login screen where they can log in. On login, the user is redirected to a page corresponding to their role. The roles of the system are Doctor, Nurse or Admin. If the email or password is incorrect, a message is displayed notifying the user of what went wrong.

![](https://lh3.googleusercontent.com/Jzl-9i_5lQ1cRg4l-lZDC5q3eLTndAmMXf_PyL93J0ph0MpPEbhcoAKDJDUKX-pCTu--FPjkEQPU0hpeJJLYrJs1dLqiFj4f4iprHG99CbZ2n6TG2H0XUFVBpVluE16xqbkOwBQ9UTEVJsQgVmHH14SQyFJJ4X463mv75shk3OzcjCxloQ-VrwQHY5bAI80-nWPu7f5bwmJj1AOSpdAurJPYIrOhEWg_mhgJ2BNKnhz-CRqZxiLS6gkAjIRnDHIS1c0uhktfTh9KUOFAPE2RcE9W37qCGvgj-n_ayV4Fh9xBjtSYJv11cnzFucOqVBypKen9G4Cm_-F-62xFI62jXxEjLSgmjgwUpo6G_Rb8OLmpsKLdVJ0C3w4w1WJ_sKmzDnjPYqvNs_yr09JtCE8oo3Ypvm-JzrcUVdk6owREajn_ENIHE5nQhBj81Ndb_sgfMquy_CMbg4yn0UImurrVgcJ1lMsULsDkrGokb-bpmZAiVgwViDbgqAFaIytbA7_5pcJ0g4HMj9nPeAiaRwjNr2ka29pt8H_HdbaD4BX2EWhHg0I7Riarj4CKpaCdxCRL=w2880-h1606)
A list of all the patients is shown after someone has signed in. An admin/nurse sees all patients while a doctor only sees the patients assigned to them.

![](https://lh3.googleusercontent.com/TAdVFJl9eM5Qvx_650vqnrw-3V0J1_N_hEpPzaSfgZ5T2S5GByJoXQG5aaX32rRS_xnwm2sRLr32fQNeKjozrsVXtxICMq6v_CEWX_EDR8ksFr5ZNH_dEIwWsda09R04S7zF1Tp8ZNsUfhPlVAvPXUm9WIFsNR8UFMWrVy9vG9VaEKhZo5qq4TcBoVf5_KQWXs4wj_ixkbNcd51fKJ5oYrirx4VhS9zDTAfbgDZyLqvZO0ocVn5eiTJzcbba0VwXot7hCjie5TuvU-ELcpk1Zv4dgCgKSQcBT21KWmC6bHdDCHagAISq2oU_OYAa50MFgRWgm_U1mB_jsHfDbsYqxGINuAOGQFW5NZpfhbBqVAMLKbZEX4R2eLkj39e4baI6I8lLXoofcNlVWEr6ZHbbY1ASDhNVdgeIYpRb8Xn5Bm97FpkABBelpwznbNNIoomnKyqOvPyzmBpyNpjiSeXmi9Od66cm-AH9yFeZMzV73Cz9Ksejw696QcL-s9e7KEFBN4YFuc-cc8I_9sSlxMpZ-NLa7VgqWErnrBWuIRH94DnwnCLm3p20VI8ky3GNEXA_=w1462-h1606)
The view that appears when an admin creates a new patient. The same look and feel is used when updating a patient, and also when adding new nurses and doctors to the system.

![](https://www.google.com/url?q=https://lh3.googleusercontent.com/9-H67ZlsVO0T8YxwgCettVSLopAb0H6KZ0HMUhJdtWJzRXSgNHb9GgTrpVxXM64oDiiLIVZV_U28qqhoVpfMsQjq9C52LEcBMJJBNXZAEOcDzQcu3RJcx8ZWvC4JUXEmZeiCmK4byxb7AjRlR8LyYahfef88C58whZEHRN8QAOuqT--YUzsAn2uUccomclc7H_f2786fF_0FwdaVRCduanRAwwMi1LPKZwu3SkB72M3JW7BfRy1Y5e5yrfKqFu1JjCN70jwxr3E7Jlai_P3w1kPZyVl4FSLwHqnoga_w-M88RX70fRf_JiDeK3Y4UFA9Pyw43CzOX8oy_ZXUdtLWALYv1920mt9mvut4dpON8Ilu4KLnR0yzKfvc4IB-Ja8RcHngJAV4Yx7JGHOF5EculQQ_4NHYvYvSdk70dG0qJjFGss7gA22pyGtUjwKdi_gbxyaO8vWhzUJ6PmAECBHYu9YxeYHGQYo9XsXFwa46If-KU8t_9TkCR2B0Oi5LxbpY3nzf8ldnBsWH1u5lyaHmKEiTwcA30W7rw-nQ0vjyV7xz9hEXTDrGWN5rOrkyAf6m%3Dw1462-h1606&sa=D&ust=1526641675625000&usg=AFQjCNFWxKs-F8p5-NAX7P1UH07epNDP9w)
Patient details, which appears after clicking on a certain patient.

![](https://lh3.googleusercontent.com/cZsX1iHJ_IWqBm__5xW3j28m_4gQdv8gURbNySNBMm3Al-zleh2aswxDxb81ufS5yaXlHNB7bPaSUyIOVLdbHdipWrls4U25c09oOWJwnGsHaiw9tNenkcx7zYyhQYZISRDokgAzl6u1uhXVUSN8OgBzjncZSdPSMj-dGA7lVCHJTUWykpto6GDCtCKPR_C1dvRwH3KruP7GEuqGGpElC5wxjyUsz3rFjVlE4a9tLKHcaRPmTkZLN6UwnD-24tUDGIZlJ-6qDgc9O-OVUxQN6CG04UOaxdO4fOqHGETtFolJrQgu9ZHz8tRJHiBDQC1fkkYe7qILNmUzXH1ZaDwvSzzmZ0dzkSSp_TCG0Q2FcWtfP4MbJ21wbjoLLnSxSVa8ecbskR4JdKl6EnDDYWhFFr4Sjx6JBF0LpnnRcm07yhkyyeAdL1ywM0Pw6xEw_aEjWRHvRjymTNudka-s413Yw92dB44ArGVxU_JKu0crUkfdKG3LMPFXujbZ7Ru57c750mKAwwL4xvxS05ziHdkQe55ak7DfFsESVARe6bBcUwLk9GevC0PUW_C-yHktqOZ7=w1462-h1606)
In the patient history, all comments are shown in chronological order starting from the newest. There are three types of comments a user can add to a patient; diagnosis, treatment and note. The comments are color coded based on the type. Clicking a comment brings up a detailed view of it.

![](https://www.google.com/url?q=https://lh3.googleusercontent.com/wr4Kqj40T0HlSwy_aw5q38aQK0IBIehP9H7pVwnMET5m3w4oj8iD6YiTKHKb1o1-FKghp1PFzFlXLGK4rzXlHSa6iolfkpovlXcRT-aZo1zaLfs4mPScFxdYL-5Mf2vv8YzvY70Ku2IJgxYtXwygbxr7YYycFqgqtu-DeI8esafu-r6D1SjIZlBCXDc0Xs7W3Wg9csARKLKbCTo-BmuufMoi9O1MMHPnZOvTzpyn9fC7sDND4BWqudKj4GnPvjX3ed5fqZc3XR3JQtQ62NWw-a9LosKjR3o6tiYYkj7v13dTW36Wb6ES5oZjclwg3JGezEWuEYH858Ybdc6eJ05capgLJm8J5EQQuzzoZS0nm2YeJWZLe_wM_GW8kuO2QZxceZ3Fkmr782fkJCscoVRKCCXpphX-OKzjkujlxkeCoTGiK9BJaPtRDpc9kIhuWAtxRJcWTdrnVDsTuJ9AD3hmNJVtmnkk7drX1JHoPWzpYBdYzh8tntt_kENrkbEv1q_-xnxJfI-cMNVA721j5qdayb85PwTkBmB1jkCpL3PlkaQnFjElQriq0ndRneWquCqL%3Dw1462-h1606&sa=D&ust=1526641759898000&usg=AFQjCNGh9PZ-6k09NCn65JPTpfyYkSmHMw)
Doctors can add comments (note/diagnosis/treatment) to a patient with explanation and image attachments. Also they can change the patient’s severity through a comment.

![](https://lh3.googleusercontent.com/FnkbMQAUHof9L0x7wSown6p_j3wGlOklyaHxLWfkbOC3edrDGLmC12IriYevz9PxNnX_eEkBpcRO3a_8IOFm_lpOcjDvFi5hhOSJprqfczayGew0gaHaNQeJUxRf-JzTx2JrAIWfCbbPSsUf-gdEDt8X5cxFxiDToYhUNWCqsmSnSC44Yr5FOloCOGYY1tClY2uTlc8lOgWTWLsCYd160F8vcmJmJ7TPV8PTPwdZzuXfxK5P74Ej0FCphXuqwZMgrgFkiPAOWD4HoiE6uqRdWMXSFHealTLPot53eIGzBPGOLEIuMccktTuxHOsP1pzUttTNnekULwDqIXle8fVc0g4IOtuugLj0u3tb-YswBZc75tAuOmCmqNm8KhozHiG8guIxyVV5le3r_BkRdr1wCUO09rZrgyNzvRC7IOpyJnD3heZQUzO0pjfuxMU2mTXDGFZ4aPjM3i8GhQRSK4MqM69vp79nwAQNXpTyYZKOoZjRlluKSPingzyXNphDQrTHt6VI-vXaJ0yJowG6mtkqAnLrdY6y3m4uRua8bs2DAZFAHFo_ntyEXSdDsEkLxa0j=w1462-h1606)
Any note/diagnosis/treatment can be viewed in detail along with the attachments by clicking on the item.

![](https://lh3.googleusercontent.com/lPnqrDDorg9HLpxJyy3QfbWwdbGMyiBaplDo4lzJp5M3xD0xc2ubcIfGGJfnRi1DG79Jsmy8lfQfv1kAbWChBDYOdJiGafwzqcW8xu1Vfzj4-jWyRq946Qv_kzgHizxrkBLzKRhILcUXL2pF4p6JjbHeW-6NH6GjDErLakmsdQrNqb6KBPtAFIFGY6XyzVotEbBEUgVCV7MDrQ2i7bnxFuhKhrVkZlfWhATb-6vomPyPQh0jZQxS7C914CzmQCq7u49ltCO64BTf-RstfydKBq1t1iy2Vn876RwSYOMBIj57pR753b_yf9fjgKBW3GkN08X1jFEl7LNtWm5KjimtVdw4a4Xo8sLQhMsz0UxLM8DugJMyNSfZ-xxRxH6yRnhHASpen3_0MzeSgf_wXAi39lNUPy_BVRZBO5_K1T3lWKXLKnfqsqCy5rzs5bmuy_JWiEBQYZDLm0qmxC18ah8y_h_aQpaRvAnFKREbmBoQXN_lom8WVcsi1KHH276f3ZfqrtAqNYs21Yo0orIE1JcTkJQeN96Ol7-Pd9IV_41hV1fCm8CJZDXhdIeWdt6agq7A=w1462-h1606)
A doctor can transfer his/her patient to another doctor which means he will no longer be responsible for that patient and therefore will not be able to view that patient in his/her own list. Admin has the same privilege of transferring a patient. 

![](https://lh3.googleusercontent.com/ZuzHX7IKxxcmXWtaXAFpP-NkmD6PSiABAOkdFzPM8onAhljv9pRc0UzgjVZsnNkLlWB_cx7ZucHnvEpZlnq-tF2jFgeaqpzu3NgAmiFLag1vM88ipb1dY5vZ0PAeoKx1fY8-ti6l_IBnriLF-PF7nA-WCU6suI0gyDqIVG7eFuO6v1RzFt5cONGZZKJ8o0Sfoid7ZGInjGOuE4fcNTDcJeom5RpJvOE2G1409F9WgFD2fxbJVaqvDfFvcIB20y_djtHDACaN9G4RfD-ORJLYaYiyt_5EVN8o9XlgoGRfMexXLE83HYDJJsAytf02Y9XT1TnKjxbLBhP20vSEZdcTVmzM_EZARUOD1pxdqr9tlbyZGSbZo9VvN-pzNFTMSVcX6xKwWbrSvLd2LZmw3eMTEdwAaZ4icAIOm4Of8jl8VjpQK3R_QldmITmBs6GseKLBomIhqMLEJD14JybvCWFkgqPHk0g3oLa-Ji4wfZKmzMGhUxNxyiPdi5t9bZKFce-6zgaZqogIaWehi4nKYrZvPLrsTD8qi8bOnFxA7TpambHCf6qg9--qWxDT72usgJek=w1462-h1606)
An admin is able to view patients, doctors and nurses from three separate list views. The lists are navigated between from a tabbed navigation menu at the bottom of the screen.

![](https://lh3.googleusercontent.com/jyMAt0YTtUvRPQf9ojsoZ9Uk__LJtQBY8NQY3DmLki8yrKY7Zm6zT6yv3p3exAjkAsRRYh5KXMniGoQ6sVt0zG2BaKN7ko5S6la7mTqqM38w-TS_PlNiqs6lXyuJriV28CJEsJB-PsjP5DETv3knaIS7OMvZhXPqSWMc9CUXqkSHs1XY2HKUD9hv1oMYYaCaaNVoxIEQFJYetuGY-cwZtoJswxApuCWJwA94BD6icNupJqsLjidwsIoOmJxjsAyREJ0xST7w4-pxyELW3GZTSyD6wOVI5mQBOalD6uWRrYqqkjQ4xOYx8kzrDUhmB9-VyvPXtlFZUsE8-zSEqf2L8adcufgDB_cbV0tfDhyzjGm2_S2q5Jpp9dqmUjh5Ro4odPAI3h-XcoXDJDbL7gAhMD2PiBDdo0gp6AoSbP2P7EjrVts2oK90QuHgI41QnhGFSU9-Pnk9TtQ0qdV_LSggCEiqzbM1NEEhp9wufaSq5GvIgDvphIgRGcvTDC-RGmBLvVmV1X6NF8wd-yq2DtcIuQQaEwvFSex1qlgUZmTg-vDDBXt8VppFM8wQOLEgm4IU=w1462-h1606)
There is also a detailed view for the doctors and nurses, where their profile images are shown.

![](https://lh3.googleusercontent.com/nBS3fdx5ZXpiPKb1CgpZ_AQn9ryMsKIleIRDKV8_Jg_6_-8t_6o9Tu_ZqedC6KyMlCQa8PjwLFycQKp7XQ5OndT2v_xCvyfxAEI_c_s_BDr9pjJ5JFu2sHrDIH63vYaL94zy094Qhw2RViilGKRCh5suGSBUQycbPXDzOacA4XW0dRUfVv-wIXySkDt8Rtou1KE2LNGbyf9HsKqztS3UMmgPzGOI6ULTImRiCtEt-sSG-1ks6Jp3SUwV2MvQ9-cceRJGxiuoYP7G828n2gLVm4BYr4P155wH5gAiDY_cr_PdFCIu6mER03t0zqSduaSjV8uE9MIGb7GlyhQONGQt7RM_xhPGAYlhIP3TweimRRxh0fu6QU84-vVR1gahQUDqHZmUc_Gf_knXXXTvFTndXDL_2wqNpXvb5BPH6BbbUtQ2DGFcDui3_BT0H2QR2hWHD0ZKY0YSDmxJFzkkoSJ2l-WeVkRdG9xwMZ_njSUC6UY50VObsQLMttM5YWLJt9hbsHDOtUzZ_6KsIvlIaHsSPuE5VV2LuXFIBq4aqY6c1NbkWDcae3bbdUKoou1M0lRb=w1462-h1606)
The tabbed navigation is not shown when logged in as a doctor or a nurse. Only the list of patients assigned to the logged in person is shown, making the other tabs unnecessary to show.
