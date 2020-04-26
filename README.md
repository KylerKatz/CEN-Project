# Career Find 
## Group 2
## Luis Venereo, Ashley Adames, Noah Cline, Kyler Katz

# 1 Introduction 
This is group 2’s final documentation for our CEN 3031 “Career Find” project. This document is meant to serve as a resource to guide anyone in the future with information about the features, such as the login process, and chatbot. In addition, a detailed walkthrough of how to perform CRUD operations from within the admin page is also included.

Lastly, a more technical section is devoted within this documentation to help those who plan on deploying the web application in an environment of their choice. Heroku was initially used for the development and presentation phases, however, this section covers guidelines for using a different environment, and all of the necessary API keys, environmental variables, and log-in credentials to consider when doing so.      

# 2.1 Description of Features 

The main features of this project are

A chatbot 
An explore page
User account creation 
Student
Teacher (Admin)
Student progression
     

## 2.1.1 Chatbot 

The chatbot is located on every page on the bottom right, and allows students to have a conversation in order to determine a career that best suits them. This is done by gaining insight into what a student’s favorite class is, what things do they enjoy, etc . Once the conversation is complete, the student will be given a list of career clusters that we feel best fits them. 

## 2.1.2 Explore Page  
	
The explore page is for students who want to see all of the available careers that the website contains. Careers are grouped into clusters which can be accessed by clicking on one of the cluster cards. From there, the student is redirected to the career page which will allow them to explore details about each career such as a description, a day in the life video, average salary, known celebrities, and relevant classes within the cluster they clicked on. 

## 2.1.3 Account Creation 
	
Both students and teachers are able to create an account. Which will give them access to more features.
Student 
If a user is a student, this allows for them to have their own personalized dashboard displaying their recommended careers along with careers they have recently viewed from the career page.

Teacher
If the user happens to be a teacher, their dashboard will allow them to perform, create, read, update, and delete operations in order to tailor the website content to the needs of their students.     

## 2.1.4 Student Progression 

In addition to students being able to have their previous data saved to their account, they will also be able to gain points and rewards for completing challenges on the site such as talking with the chatbot, and exploring every career in a given cluster, along with taking a quiz just to name a few.

## 2.1.5 APIs 
In order to implement these features we used three APIs, a clusters API for retrieving information about each career cluster and for performing CRUD operations on the clusters. The second API is the signup API which is used to authenticate a new user signup and add them to the database. The last API is the login API which is used to verify that a user account matching the inputted credentials exists and what account type it is. This is then used to determine what kind of access a user has and what pages they can see on the website. 


# 3 Technical Specifications 
## 3.1 Technology Stack
This webapp was created using the MERN stack. MongoDB is used to store all of our user data such as usernames, passwords (encrypted), emails, saved clusters, achievement points, ect… Express is used for all our API requests, such as getting the user data, and cluster information from the database. React is used on the front end for routing, displaying data, and keeping track of states. Lastly, the whole project runs on Node.js for performance.     
## 3.2 System Requirements 
3.2.1 List of API With Keys Step by Step

### Chatbot APIs 
Diaglogflow API Key
	Since the chatbot has already been created and trained to a certain extent. To use this bot and put it on the site you will need the Diaglogflow account key which we will provide and a Kommunicate account that you will need to create. 
Create a Kommunicate accouunt

Once you navigate and sign in to the Kommunicate site, go to the section that says “Bot Integration” and select Diaglogflow.
 Now, you have the option to upload the Service account private key file. To do this, you will need to upload the file located in server/config/speedy-solstice

To put this bot on the site, go to the “Settings”, and look under the “Install” options and you should see one for Web. 
Copy that code and paste it in the Chat.js file, replacing the code that looks nearly identical. 

Please note that Kommunicate offers a free trial for a limited time, so for continued use, you will have to purchase a subscription. 

### MongoDB API 
Listed in the Environment Variables section, there are instructions there on how to change the key associated with MongoDB


## 3.2.2 Environmental Variables
In Config.js, the uri must be changed. To do so, you need a MongoDB account and you need to create a cluster. You will than be prompted with a Connect to Cluter box, click on "Choose a connection method." Than "Connect your application," copy your uri, past it into the config.js file for the uri variable, and change the <password> to your password.  
        

## 3.2.3 Log-in Credentials
Needed Log-in Credentials to complete set up of site are: 

Chatbot: Kommuncicate
Database: MongoDB
Web hosting: GoDaddy

## 3.3 Project Handoff Guidelines
	If you would like to have your own domain, and not use Heroku, you can use a hosting service like GoDaddy.  After creating an account and logging into GoDaddy, you can register a domain name. GoDaddy will give you a list of recommendations on what’s available. After registering a domain, navigate to your account page. There should be a section that says “Web Hosting” click Manage. On the hosting accounts page, select the domain name you want to upload the site to, and click “Manage”. This will bring you to the cPanel. Select “File Manager” and click Go. On the left, there is a section that says “public_html > Select File. Select “Choose File” and navigate to the zipped website folder. Once this is finished uploading, you will see the folder in File Manager. Select the folder and click “Extract” it, and now the website should be hosted onto the domain.  
