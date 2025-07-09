```mermaid
sequenceDiagram
    participant Transporter
    participant Frontend
    participant Backend

    Transporter->>Frontend: Visit Page
    Frontend->>Backend: GET /transport-service/byTransporterId
    Backend-->>Frontend: List of services
    loop For each service
        Frontend->>Transporter: Show service item
    end
    Transporter->>Frontend: Click on service
    Frontend->>Transporter: redirect to /transporter/service/:id
```
