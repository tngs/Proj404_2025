```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend

    User->>Frontend: Visit Page
    Frontend->>Backend: GET /transport-service/
    Backend-->>Frontend: List of services
    loop For each service
        Frontend->>User: Show service item
    end
    User->>Frontend: Click on service
    Frontend->>User: redirect to /service/:id
```
