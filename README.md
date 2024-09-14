# Trackify
 Captures the essence of tracking vehicle documents.

## Features

- **Vehicle List Display:** A sidebar lists all available vehicles in the system, allowing users to select a vehicle and view its specific records.
- **Detailed Records Page:** Each vehicle has a dedicated page displaying a table of its records. Users can filter records based on multiple criteria like Driver, Date, Serial Number, and Document Status.
- **Frontend Search Implementation:** Filtering is executed entirely on the frontend without backend dependencies, utilizing Angular's reactive forms and various UI components.
- **Pagination:** To manage large data sets, records are displayed with pagination using the Angular Material Paginator component.
- **Visual Status Indicators:** Documents are visually differentiated based on their status (Approved/Canceled) using Angular Material Chips.

## Project Structure

1. **Sidebar (Vehicle List):** Created using Angular Material's `Sidenav` and `mat-nav-list` components to display available vehicles.
2. **Vehicle Header:** Displays the selected vehicle's information using a `Toolbar` component.
3. **Search Filters:** A set of form fields, including text inputs, dropdowns, and date pickers, allows the user to search records. The search triggers when the user clicks the search button.
4. **Records Table:** Displays relevant vehicle records with columns for Serial Number, Driver, Date, Status, and various financial amounts. The table utilizes Angular Material's `Table` component.
5. **Pagination:** Implemented using the `Paginator` component to handle the large data sets efficiently.

## Data

The project avoids backend dependencies by sourcing data from JSON files:

- `vehicles.json` for vehicle data.
- `drivers.json` for driver details.
- `records.json` for the list of records.

## Key Angular Concepts

- **Usage of Angular Directives:** (`*ngIf`, `*ngFor`)
- **Reactive Forms** for search functionality
- **TypeScript Interfaces** for data structuring
- **Angular Routing** with Lazy Loading
- **Angular Pipes** for data transformation
- **Angular Services** for data handling
- **Component Communication** using `@Input()`
- **Lifecycle Hooks** for component management
- **Angular Material Component Library** for UI elements

## Screenshot
![image](https://github.com/user-attachments/assets/90e0b76c-9490-4d55-9d43-107402ba4274)

