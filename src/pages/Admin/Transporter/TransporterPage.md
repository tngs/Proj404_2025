```mermaid
sequenceDiagram
    participant Admin
    participant Frontend
    participant Backend

    Admin->>Frontend: Visit Page
    Frontend->>Backend: GET /transporter-service/transporter/checkByAdministrator
    Backend-->>Frontend: List of transporters
    loop For each service
        Frontend->>Admin: Show transporter item
    end
    
```
