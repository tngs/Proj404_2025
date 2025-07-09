```mermaid
sequenceDiagram
    participant Admin
    participant Frontend
    participant Backend

    Frontend->>Backend: GET /getService/${serviceId}/byAdministrator{email}
    Backend-->>Frontend: Service data
    Frontend->>Admin: Display data
```