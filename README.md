# LearnBox

We aim to build a web application for solving the problems students are facing in virtual classes and to bridge classroom learning and virtual learning. We decided to choose Education as the track for our hack project because of it’s crucial presence and practicality during today’s time of pandemic. Our web-app LearnBox is an education platform for bringing physical classes to virtual mode with an interactive experience for students and teachers. Teachers will be able to conduct classes via zoom meetings and will not have to worry about student’s presence. Student’s attendance will be done by facial detection to ensure student is present in class.

Gamification has been introduced to keep students engaged with the portal and earn points. Students will be given assignments on daily basis which will be the basis of the leaderboard.

## Problem Statement: 

The problem statements under Education track challenge us with the following questions:
- How can we replace the human connection lost through social distancing?
- Create a progressive web app which can make virtual classes more interactive.
- Apps that aid college students.

With the onset of the pandemic, education has gone through a drastic change, where institutions are striving towards providing uninterrupted learning for their students.
- Our portal will make a significant and positive impact on students and teachers.
- By integrating all the tasks related to teaching and assessments in our web app, miscommunication and misunderstandings will be reduced, and a seamless communication will be established between the student and teacher.
- Further on, to give a feel of physical classes and catch the attention of students, we have added quizzes for everyday points and strict attendance feature.


## Start Instructions

To run the react app: 

```
git clone https://github.com/IB-14/LearnBox.git
```

### Client Side:

```
cd LearnBox
npm i
npm start
```

### Server Side:

```
cd LearnBox
cd server
npm i
nodemon index.js
```

### Zoom SDK:

```
cd zoom-sdk-web-1.9.9
cd Local
npm i
npm run start
```

## Screens



## Technologies Used

We have used MERN stack in our web app:
MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.
- MongoDB - document database
- Express(.js) - Node.js web framework
- React(.js) - a client-side JavaScript framework
- Node(.js) - the premier JavaScript web server


## Innovation 

Our innovation in this project is:
- When the class session is going on, facial recognition will be enabled, which means that student will only be given attendance if they are present throughout the class.
- We have also added a reward /ranking system for students in each of their classes and overall aspect. This will bring about a healthy competition and learning environment among students.
- A collaborative whiteboard to brainstorm group projects or take notes of class.
- Unique badges allotted to students by teachers which will show on their profile

## Feasibility 

- Since we have developed a prototype in this hackathon, we believe that our project is certainly feasible as it has a smooth workflow and proper error handling mechanisms.
- Authentication and authorization is done with JWT and Formik, video calls are carried out with zoom meeting API so that the student can freely use whiteboard features and be monitored throughout the class.
- There are additional features which we has brainstormed(included in future scope), ans we believe these features will make the web app more reliable and feasible to be used as a product by schools and colleges.

## Future Prospects

There are many future prospects of our current project such as:
- Facial detection can be further improved to facial recognition, this will certainly be a big turn over as compared to traditional attendance forms and will encourage students to attend classes.
- Detailed analysis of the meeting(such as how much time was taken for doubt-clearing, exam discussion,etc). This will be a very useful feature for the parents.
- Text to speech recognition can be integrated along with a language translate option so that students are comfortable in learning the curriculum.
- Many students do not have a stable internet connection, so the application needs to be light-weight and function in low internet bandwidth.
- The platform can also detect tab switch, whenever the student is getting distracted and opening another tab, the teacher can be alerted.


## Contributors

<table>
	<tr align="center">
    <td>
      <b>Ishan Bhardwaj</b>
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/u/59660334?v=4" width="150" height="150" alt="Your Name Here (Insert Your Image Link In Src">
		</p>
			<p align="center">
				<a href = "https://github.com/IB-14">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "hhttps://www.linkedin.com/in/ishan-bhardwaj-b080b21a1/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
		<td>
      <b>Abeer Aftab</b>
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/u/54543768?v=4" width="150" height="150" alt="Your Name Here (Insert Your Image Link In Src">
		</p>
			<p align="center">
				<a href = "https://github.com/abeeraftab123">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "https://www.linkedin.com/in/abeer-aftab-00274719a/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
    <td>
      <b>Yashi Shukla</b>
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/u/59660649?v=4" width="150" height="150" alt="Your Name Here (Insert Your Image Link In Src">
		</p>
			<p align="center">
				<a href = "https://github.com/yashi4001">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
				<a href = "https://www.linkedin.com/in/yashi-shukla-a4b81a1a9/">
					<img src = "http://www.iconninja.com/files/863/607/751/network-linkedin-social-connection-circular-circle-media-icon.svg" width="36" height="36" alt="LinkedIn"/>
				</a>
			</p>
		</td>
 
</table>
