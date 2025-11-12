<small>Curso Backend con NodeJS TalentoTech [Prof. Gustavo Ovejero](mailto:gustavo.ovejero@bue.edu.ar) 
Codo a Codo 4.0 2025 | Talento Tech | Agencia de Habilidades para el Futuro 
Ministerio de Educación del Gob. de la Ciudad de Buenos Aires (Argentina)

</small>

# **Final Project**

---

## *Premise:*

Our client currently has various products in their catalog and needs to have a **REST API** from which their official store can manage them — enabling the possibility to **Read, Create, Update, and Delete** information about the products.

The application must include an **authentication layer** to ensure the security of the data, which will be stored in a **cloud database** using the **Firestore service from Firebase**.

> It is important to define a **scalable architecture**, separating the different responsibilities of the application into layers that clearly establish **routes, controllers, services, and models**, as well as the necessary folders to store **middlewares** and **external service configurations**.

Finally, the application must include **clear error handling**, taking into account:

* **404** errors for undefined routes,
* **401** and **403** for authentication errors, and
* **400** and **500** when requests contain errors or our external data services fail to respond.

---

## **Project Requirements**

### **Requirement #1: Initial Configuration**

* Create a directory to host your project and include a file named **index.js** as the entry point.
* Initialize Node.js and configure npm using the command:

  ```bash
  npm init -y
  ```
* Add the property `"type": "module"` to the **package.json** file to enable **ESModules**.
* Configure a script called **start** to run the program with:

  ```bash
  npm run start
  ```

---

### **Requirement #2: Installing Dependencies**

Install the following dependencies for the project:

```
express, cors, body-parser, dotenv, firebase, jsonwebtoken
```

---

### **Requirement #3: Server Configuration**

* Create a web server using **Express** and configure it inside the **index.js** file.
* Configure **CORS** to enable cross-origin requests, so the company’s frontend applications can communicate with the service without issues.
* Set up a **global middleware** using **body-parser** to interpret JSON-formatted request bodies.
* Establish a **middleware** to handle unknown routes, returning a **404 status** with an appropriate message.
* Create a **.env** file where the project’s environment variables will be stored.

---

### **Requirement #4: Routes**

* Create the **routes layer** of the project.
* Define the necessary routes to handle requests that interact with products, as well as a login route for user authentication.

  #### `products.routes.js`:

  * `GET /api/products` → returns all products.
  * `GET /api/products/:id` → returns the product with the specified ID.
  * `POST /api/products/create` → receives in the request body the information for a new product to be stored in the cloud data service.
  * `DELETE /api/products/:id` → deletes the product with the specified ID.

  #### `auth.routes.js`:

  * `POST /auth/login` → receives user credentials in the request body and returns a **Bearer Token** if they are valid, or an authentication error otherwise.

---

### **Requirement #5: Controllers and Services**

* Create the **controllers layer** for each of the routes defined in the previous requirement.
* Create the **services layer** to handle the logic for each controller.

---

### **Requirement #6: Data Access**

* Create the **models layer** of the application.
* Create a new **Firestore project in Firebase**, add a **collection** to store products, and create the first **product document** to define its structure and data types.
* Configure and connect **Firebase** within your project.
* Use the created Firebase instance to build the necessary methods so that the model can interact with the remote database.
* Connect the **services** with the **models**.

---

### **Requirement #7: Protect Your Routes**

* Configure **JWT (JSON Web Token)** in the project.
* Create an **authentication middleware** and protect the corresponding routes.
* Add the necessary logic in the **login controller** to validate user identity and return a **Bearer Token**.

