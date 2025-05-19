## 🧭 Application Structure Overview

### 👤 User Types

1. **Transporter** — Registers/logins via `transporter-service`
2. **General User** — Registers/logins via `transport-user-service`
3. **Administrator** — Registers/logins via `administration-service`

---

## 🌐 Routing & API Map

### 1. **Service List Page (Home)**

* **URL (Auto-loaded on Home):** `GET /transport-service`
* **Return Type:** `ResponseEntity<List<ResponseTransportService>>`
* **Displayed Fields:**

  * `serviceName`
  * `departures`
  * `destinations`
  * `transporterName`
* **UI Notes:**

  * Each service is clickable → navigates to the **Service Detail Page**
  * Include **Login** button → navigates to login choice page or my page

---

### 2. **Service Detail Page**

* **URL:** `GET /transport-service/byServiceId/{serviceId}`
* **Path Variable:** `@PathVariable`
* **Return Type:** `ResponseEntity<ResponseTransportService>`
* **Displayed Fields:**
  All fields of `ResponseTransportService` except `transporterId`
* **Weight Range Selection:**

  * From `List<ResponseWeightRange>` field
  * Display as **Button Options**
  * Selected option’s `id` is used as `optionNumber` in the apply URL

#### ▶️ Apply for Service

* **URL:** `POST /transport-apply-service/{serviceId}/applyByTransportUser/option/{optionNumber}`
* **Request Body:** `RequestServiceApply`
* **Return Type:** `ResponseEntity<ResponseServiceApply>`
* **Post-Submit UI:** Show confirmation using `ResponseServiceApply`

---

### 3. **Login & Registration**

#### 🚪 Login

* **Transporter Login:** `POST /transporter-service/login`
* **General User Login:** `POST /transport-user-service/login`

#### 📝 Registration

* **Transporter Registration:**

  * **URL:** `POST /transporter-service/transporter`
  * **Body:** `Transporter`
  * **Return:** `ResponseEntity<ResponseTransporter>`
* **General User Registration:**

  * **URL:** `POST /transport-user-service/transport-user`
  * **Body:** `TransportUser`
  * **Return:** `ResponseEntity<ResponseTransportUser>`
* **Post-Success Action:**

  * Show registration success page
  * Button → Redirects to appropriate login screen

---

### 4. **Administrator Features**

#### 🆕 Create Administrator

* **URL:** `POST /administration-service/makeAdministrator`
* **Request Body:** `RequestAdministrator`
* **Return Type:** `ResponseEntity<ResponseAdministrator>`

#### ✅ Grant Administrator Permissions

* **URL:** `GET /administration-service/permitAdministrator/{administratorEmail}`
* **Return Type:** `ResponseEntity<ResponsePermit>`
* **Usage:** Button to permit admin access

#### 📋 View Services by Administrator

* **URL:** `GET /administration-service/getServicesByEmail/{administratorEmail}`
* **Return Type:** `ResponseEntity<List<ResponseService>>`
* **UI:**

  * List of services tied to that administrator
  * Click on one → navigates to service detail (admin mode)

#### 🔍 Admin View of Service Detail

* **URL:** `GET /administration-service/permitService/{serviceId}/byAdministrator/{administratorEmail}`
* **Return Type:** `ResponseEntity<ResponseService>`

#### 🔘 Approve Service

* **URL:** `POST /administration-service/permitService/{serviceId}/byAdministrator/{administratorEmail}`
* **Return Type:** `ResponseEntity<ResponseService>`
* **Button:** On the service detail page (admin mode), approve this service

---

## 📘 Notes & Guidelines

* Use `@PathVariable` for all `{serviceId}`, `{optionNumber}`, and `{administratorEmail}` params.
* Use `@RequestBody` for:

  * `Transporter`, `TransportUser`, `RequestAdministrator`, `RequestServiceApply`
* All response types are wrapped in `ResponseEntity<...>`
* Make sure to differentiate display between normal users and administrators where necessary (permissions, buttons).
* Home should default to service listing page (`/transport-service`).
* Use shared component structure for list and detail view using `ResponseTransportService`, just with different field visibility.




Here's a **Visual UI Flow Map** and a corresponding **Component Structure** for your transport service application based on your requirements.

---

## 🗺️ Visual UI Flow Map

```plaintext
                                    ┌────────────────────┐
                                    │    Start / Home    │
                                    │ (/transport-service)│
                                    └────────┬───────────┘
                                             │
                                             ▼
                                ┌────────────────────────────┐
                                │ Service List Page          │
                                │ (4 fields: name, from, to, │
                                │ transporter name)          │
                                └────────┬───────────────────┘
           ┌─────────────Login──────────┘
           │
┌──────────▼───────────┐
│ Login Options        │
│ - Transporter        │
│ - General User       │
└─────┬────────┬───────┘
      │        │
      ▼        ▼
┌────────┐ ┌────────────┐
│ Login  │ │ Login      │
│ (User) │ │ (Transporter) │
└──┬─────┘ └──────┬─────┘
   │              │
   ▼              ▼
My Page        My Page
(General)      (Transporter)

                                             ▼
                          ┌───────────────────────────────┐
                          │ Clicked Service Detail Page   │
                          │ (/transport-service/byId/...) │
                          └────────────┬──────────────────┘
                                       │
                 ┌────────────────────┴──────────────────┐
                 │ Weight Range Options (buttons)        │
                 └────────────┬──────────────────────────┘
                              ▼
                 ┌────────────────────────────────────┐
                 │ Apply for Service (selected range) │
                 │ (/transport-apply-service/... )    │
                 └────────────┬───────────────────────┘
                              ▼
                 ┌────────────────────────────────────┐
                 │ Service Apply Success Page         │
                 └────────────────────────────────────┘

Registration Flow:
-------------------
       Start Registration
          │
   ┌──────▼───────────────┐
   │ Select User Type     │
   │ - General            │
   │ - Transporter        │
   └────────┬─────────────┘
            ▼
 ┌──────────────────────────┐
 │ Registration Form        │
 │ - Uses @RequestBody      │
 └───────┬──────────────────┘
         ▼
 ┌──────────────────────────┐
 │ Success Page             │
 │ (Show returned object)   │
 └────────┬─────────────────┘
          ▼
 Login Screen (type-specific)

Admin Flow:
------------
Start Admin Setup
    │
┌───▼────────────────────────────────────────────┐
│ POST /makeAdministrator                        │
│ GET /permitAdministrator/{email} (approve btn)│
└───┬────────────────────────────────────────────┘
    ▼
GET /getServicesByEmail/{email}
    ▼
Service List
    ▼
Click on a Service
    ▼
GET /permitService/{serviceId}/byAdministrator/{email}
    ▼
Service Detail (Admin View)
    ▼
POST /permitService/... (Approve Service Button)
```

---

## 🧩 Component Structure

### 🏠 `HomePage.jsx`

* Loads `/transport-service`
* Shows:

  * `ServiceCard` (List of `ResponseTransportService`)
  * `LoginButton`
  * `MyPageLink`

---

### 📦 `ServiceCard.jsx`

* Props: `serviceName`, `departures`, `destinations`, `transporterName`
* On click → Navigate to `ServiceDetailPage`

---

### 🔍 `ServiceDetailPage.jsx`

* URL: `/transport-service/byServiceId/:serviceId`
* Data: `ResponseTransportService`
* UI:

  * All fields except `transporterId`
  * Weight Range selection (`ButtonGroup`)
  * Apply button → navigates to POST `/transport-apply-service/{...}`

---

### 📝 `ServiceApplySuccessPage.jsx`

* Displays `ResponseServiceApply`
* Confirmation button

---

### 🔐 `LoginChoicePage.jsx`

* Buttons:

  * Go to Transporter Login
  * Go to User Login

---

### 🚪 `TransporterLoginPage.jsx` / `UserLoginPage.jsx`

* POST login request
* Redirect to My Page

---

### 🧾 `TransporterRegisterPage.jsx` / `UserRegisterPage.jsx`

* POST to respective registration
* Show success message from `ResponseTransporter` / `ResponseTransportUser`
* Confirm → Redirect to corresponding login

---

### 👤 `AdminRegisterPage.jsx`

* Input: `RequestAdministrator`
* POST to `/makeAdministrator`

---

### 🔑 `AdminPermissionButton.jsx`

* GET `/permitAdministrator/{email}`
* Button shown to admin or superadmin

---

### 📃 `AdminServiceListPage.jsx`

* GET `/getServicesByEmail/{email}`
* Displays list of `ResponseService`

---

### 🛠️ `AdminServiceDetailPage.jsx`

* GET `/permitService/{serviceId}/byAdministrator/{email}`
* Button: POST to permit service

---
