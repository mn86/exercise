## Tech Stack ##
* React
* Java 8
* Spring Boot 2.1.2
* h2 embedded in-memory database
* Hibernate
* Undertow embedded web server
* Enzyme for React testing
* REST services

## Build ##
To build it :
1) package with Maven: 

`mvn package`
2) start jar file 

`java -jar target/exercise-0.0.1-SNAPSHOT.jar`

## Usage ##
Service will open default :8080 port, so it should be available on <http://localhost:8080>

On main view there will be an empty list of customers, to add some customers you could use >> Test page << link underneath the table.
Optionally you could use h2-console on <http://localhost:8080/h2-console/> with JDBC URL: `jdbc:h2:file:~/exercisedb;AUTO_SERVER=true` and default user and password.
Also you could use Postman or curl to POST directly to RESTApi endpoints:

`http://localhost:8080/v1/customers`

`{
	"code": "0123456789012345678",
	"name": "name",
	"location": "location",
	"registrationDate": 1517011200000,
	"active": true,
	"type": "vip"
}`

`http://localhost:8080/v1/orders`

`{
	"orderDate": 1517011200000,
	"confirmationDate": 1517011200000,
	"completionDate": 1517011200000,
	"product": "product name",
	"originalPrice": 100,
	"order": "ordered",
	"customer": {
		"id": 1
	}
}`

After customer will be added, you will be able to click on its row in table to open details.

To add orders for specific user you can use the same >> Test page <<
