```mermaid
sequenceDiagram
    participant Transporter
    participant Frontend
    participant Backend

    Transporter->>Frontend: Pill the fields(details)
    Frontend->>Backend: POST /transport-service/makingService
    Backend-->>Frontend: Success responce
    Frontend->>Transporter: redirect to /transporter/service/:id
```
