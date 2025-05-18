RequestLogin {email and password}

//Transporter = provider
//TransportUser = user
public class ResponseTransportUser {
    private String email;
    private String username;
    private String transportUserId;
    private String address;


    private List<ResponseServiceApply> applies;
}