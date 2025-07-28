---
description: Apply when implementing features that interact with the DummyJSON Users API, especially for the S&N Summit DEMO prototype UI. This ensures consistent data handling and UI integration.
alwaysApply: true
---

1. Use the DummyJSON Users API (https://dummyjson.com) as specified in dummy-json-user-api.yml for all backend operations.

2. Implement data properties according to UI requirements:
- Main table: id, firstName, lastName, address.street, address.city
- Detail view: id, address.street, address.city, age, company.title (position), team, company.department
- Left menu structure: Employees, Positions (company.title), Teams, Departments (company.department)

3. Follow API endpoints:
- GET /users: List retrieval with pagination
- GET /users/{id}: Single user retrieval
- POST, PUT, PATCH, DELETE: Use for simulated operations

4. Remember this is a dummy API - all modification operations are simulated but should be treated as production-like.
