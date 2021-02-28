Your Solution Documentation
===========================

My solution has been developed using various design priciples for both the frontend webpage development and the backend api development. I will cover then individually in the below sections.

* Frontend developmemt using React and Redux
* Backend development using dotnet webapi integrated with MySQL database

## Frontend Webpage
I have used a redux container on top of React for enhancing the state management experience. I have used a centralized store for storing job invitations and the jobs which have been accepted. The data from the API is captured using the axios library, which is called only once. When the operations corresponding to the accept and decline is performed, only a PATCH request is called to update the status of the job. Simultaneously, the client-side state is managed by calling actions and reducers that alter the state without calling the GET requests to fetch the data from the database again after an update is performed. The mentioned approach is represented in the diagram below.

<img src="images/api.png" height="400">

While performing an update on the job status, I chose to use PATCH request over PUT request. In a PATCH request, I need to send only the data I want to modify compared to the PUT request, where the entire object has to be passed. 

While fetching the data from the database, I chose to get the create_date in the Date type format rather than the string format I want to display on the user interface. This approach enabled me to preserve more information about the date and time, like the timezone. It is a common practice to locate the server where the API is hosted at a separate location as compared to the client's location. This approach opens up an opportunity to customize the data according to the geographical location of the client.

I have used a component-based modular approach while designing the individual elements in the user interface. The job cards have been created as a component that can later be reused in other parts of the application.

## Backend Api
For developing the API, I have used dotnet's MVC Web API framework. This framework assists by handing over control over the way HTTP protocol messages are sent and responded to. I have used dependency injection across my application to link the models and data transfer objects with the controller as it helps in reducing the amount of code required to achieve the objective. The MySQL connectivity is also achieved using dependency injection and integrating entity framework, which offers an ORM based approach to interact with the database. ORMs help in developing a code that makes the database query platform-independent. I made use of auto mappers to map the models with the DTOs. While creating the PATCH request, I attached the JSON serializer with the application so that JSON based validations can be performed while accepting JSON message in the request body.

<img src="images/web.png" height="400">

I have also attached a swagger UI to the application to see the documentation and the data objects and try out the API before integrating it with their applications.

The entire application has used a modular approach which makes it easy to implement test cases. Though I haven't created any test cases, but they can be created and validated by calling the corresponding functions.

## How to use the application
### Starting backend API
* Go the root directory
* Run the below command to parse into ui folder
    ```sh
    cd ui
    ```
* Now install all the required packages using the below command
    ```sh
    npm install
    ```
* The website is now ready to be started using the below command
    ```sh
    npm start
    ```
### Starting frontend web application
* Go the root directory
* Run the below command to parse into hipagesapi folder
    ```sh
    cd hipagesapi
    ```
* The api can be started using the below command
    ```sh
    dotnet run
    ```
* If prompted to self-authenticaticate the SSL certificate, then press yes