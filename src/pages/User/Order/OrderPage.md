```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend

    User->>Frontend: Fills in the order details
    Frontend->>Backend: POST /transport-apply-service/:serviceId/applyByTransportUser/option/:weight/byAdministrator{email}
    Backend-->>Frontend: Success response
    Frontend->>Frontend: Redirects to /orderDetail/:id
```