```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend

    User->>Frontend: Visit Page
    Frontend->>Backend: GET /transport-apply-service/getPaidByTransportUser
    Backend-->>Frontend: List of orders
    loop For each service
        Frontend->>User: Show service item
    end
```
