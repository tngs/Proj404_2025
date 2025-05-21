RequestLogin {email and password}

//Transporter = transporter
//TransportUser = user
public class ResponseTransportUser {
    private String email;
    private String username;
    private String transportUserId;
    private String address;


    private List<ResponseServiceApply> applies;
}

ResponseTransportService.java
{
    //service list
    @GetMapping(value="/transport-service")

    //returned
    ResponseEntity<List<ResponseTransportService>>

    //service page
    @GetMapping("/transport-service/byServiceId/{serviceId}")//get 
    //returned
    ResponseEntity<ResponseTransportService>
}
//login and member registration
//login
//transporter -> transporter-service/login
//            transporter-service/transporter
//user     -> transport-user-service/login
//            transporter-service/transporter

//home page
@GetMapping(value="/transport-service")


//add "to my page" botton


//signing up
//if transporter -> "Transporter:"; user -> "TransportUser:"
//return transporter
ResponseEntity<ResponseTransporter>
//return user
ResponseEntity<ResponseTransportUser>

//"signup success" page
//"confirm signup button" -> auto login and navigate to coresponding 

ResponseTransportService.java
//service list screen & the service screen
//display
    // serviceName,
    // departures,
    // destinations,
    // transporterName

//when service is clicked
//service/:id
ResponseTransportService.java

//when ordering
List<ResponseWeightRange>
@PostMapping("/transport-apply-service/{serviceId}/applyByTransportUser/option/{optionNumber}")
//input->
RequestServiceApply.java
//return
ResponseEntity<ResponseServiceApply>

//when done display ServiceOrderDetail screen

/////////admin
@PostMapping("/administration-service/makeAdministrator")
RequestAdministrator
ResponseEntity<ResponseAdministrator>

@GetMapping("/administration-service/permitAdministrator/{administratorEmail}")
//???????????????
ResponseEntity<ResponsePermit>

@GetMapping("/administration-service/getServicesByEmail/{administratorEmail}")
ResponseEntity<List<ResponseService>>
//probably all the services the transporter have

@GetMapping("/administration-service/permitService/{serviceId}/byAdministrator/{administratorEmail}")
ResponseEntity<ResponseService>
//make a page for this
//"service permission" button
@PostMapping("/administration-service/permitService/{serviceId}/byAdministrator/{administratorEmail}")
ResponseEntity<ResponseService>