```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend

    User->>Frontend: Visits service
    Frontend->>Backend: GET /transport-service/byServiceId/:id
    Backend-->>Frontend: Service data
    Frontend->>User: Display data
    User->>Frontend: Clicks Order
    Frontend->>Frontend: Redirects to /order/:id
```