```mermaid
sequenceDiagram
    participant Admin
    participant Frontend
    participant Backend

    Admin->>Frontend: Visit Page
    Frontend->>Backend: GET /transport-user-service/transporter/checkByAdministrator
    Backend-->>Frontend: List of users
    loop For each service
        Frontend->>Admin: Show user item
    end
    
```
