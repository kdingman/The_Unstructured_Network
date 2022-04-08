# The Unstructured Network
*A Social Network experience that can handle large amounts of unstructured data.*.  

## **Description**
A `RESTFUL API` for a social media app.     
Built with `Express`, `Mongoose` and `MongoDB`.    

## **User Story**
**AS A** social media startup,     
**I WANT** an API for my social network that uses a NoSQL database    
**SO THAT** my website can handle large amounts of unstructured data   

## **Technology Used**
  `Express.js` - npm i express   
  `Mongoose` - npm i mongoose    

## **Installation**
  1. Install MongoDB on your local machine   
      Follow these instructions if you need to install [MongoDB](https://www.mongodb.com/docs/manual/installation/)   
  2. Clone Repo   
  3. Install dependencies with `npm -i`   
  4. Run `npm start` from your command line to turn the server on and make the API live   
  5. Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the REST API   

## **Endpoints**
  **USER**   
    - GET all Users: `GET /api/users`   
    - CREATE User: `POST /api/users`   
    - GET User by ID: `GET /api/users/:id`   
    - UPDATE User: `PUT /api/users/:id`   
    - DELETE User: `DELETE /api/users/:id`   
    - ADD Friend: `POST /api/users/:userId/friends/:friendId`   
    - DELETE Friend: `DELETE /api/users/:userId/friends/:friendId`   
  
  **THOUGHTS**   
    - GET all Thoughts: `GET /api/thoughts`   
    - CREATE Thoughts: `POST /api/thoughts`   
    - GET Thought by ID: `GET /api/thoughts/:id`   
    - UPDATE Thoughts: `PUT /api/thoughts/:id`    
    - DELETE Thoughts: `DELETE /api/thoughts/:id`   
    
  **REACTIONS**   
    - ADD Reaction: `POST /api/thoughts/:id/reactions`   
    - DELETE Reaction: `DELETE /api/thoughts/:id/reactions/:id`   
    
 ## **Demonstration Video**
 Click here to view [The Unstructured Network](https://drive.google.com/file/d/1IlZ3Cxf2ZNuP4prmptqKZltzc6jar6yn/view) demonstration video.    
 
 ### **Contact**
 Please feel free to reach out with any questions or comments.    
 [Kelly's GitHub](https://github.com/kdingman)   
 [Kelly's Email](kcdonlan@yahoo.com)
