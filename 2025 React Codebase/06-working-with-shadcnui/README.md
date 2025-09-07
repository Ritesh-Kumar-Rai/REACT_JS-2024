# Working with Shadcn UI

## Tanstack/react-tables Course

This Course now fully enriched with advanced concepts, real-world integration, and UX polish. It’s structured for progressive mastery, from fundamentals to production-grade implementation:

---

## 📚 TanStack Table + shadcn/ui Complete Syllabus

### 🧭 **Level 0: Orientation & Setup**

> _Goal: Understand the ecosystem and set up your environment._

- ✅ What is TanStack Table? Why is it headless?
- ✅ How shadcn/ui integrates with TanStack Table
- ✅ Installing `@tanstack/react-table` and setting up a basic table
- ✅ Understanding `useReactTable()` and its return object
- ✅ Styling with Tailwind + shadcn primitives (`Table`, `Button`, `DropdownMenu`, etc.)
- ✅ Handling empty states, loading indicators, and async fetches

---

### 🧱 **Level 1: Core Table Fundamentals**

> _Goal: Build a basic table with sortable columns and row rendering._

- ✅ Defining `columns` with `accessorKey`, `header`, and `cell`
- ✅ Supplying `data` and rendering rows with `getCoreRowModel()`
- ✅ Using `flexRender()` to render headers and cells
- ✅ Making columns sortable with `getSortedRowModel()`
- ✅ Basic Tailwind styling for layout and responsiveness
- ✅ Conditional rendering for no data, errors, or loading states

---

### 🔍 **Level 2: Filtering & Searching**

> _Goal: Add dynamic filters and search inputs._

- ✅ Column-level filtering with `getFilteredRowModel()`
- ✅ Global search input (e.g., filter by label)
- ✅ Dropdown filter for category
- ✅ Toggle filter for transaction type (expense/income)
- ✅ Date range filter using `shadcn/ui` `Calendar` or `DatePicker`
- ✅ Debounced input handling for smoother UX
- ✅ Combining multiple filters (label + category + date)
- ✅ Reset filters button and default filter states

---

### 🧮 **Level 3: Row Selection & Actions**

> _Goal: Enable row selection and contextual actions._

- ✅ Adding checkboxes to select rows
- ✅ Managing selected rows via `getSelectedRowModel()`
- ✅ Displaying selected count or bulk actions
- ✅ Adding a command column (`Actions` or `Options`)
  - Dropdown menu with `Edit`, `Delete`, `Favorite`
  - Using `shadcn/ui` `DropdownMenu` component
- ✅ Handling row-level events (e.g., onEdit, onDelete)
- ✅ Multi-row actions (bulk delete, export)
- ✅ Row-level permissions (disable actions for certain rows)

---

### 🧩 **Level 4: Column Visibility & Customization**

> _Goal: Let users toggle which columns are visible._

- ✅ Using `getColumnVisibility()` and `setColumnVisibility()`
- ✅ Creating a `Columns` dropdown with checkboxes
- ✅ Persisting column visibility in localStorage or context
- ✅ Responsive column layout with Tailwind
- ✅ Drag-and-drop column reordering (optional)
- ✅ Saving column preferences per user

---

### 📦 **Level 5: Pagination & Virtualization**

> _Goal: Handle large datasets efficiently._

- ✅ Implementing pagination with `getPaginationRowModel()`
- ✅ Custom pagination UI with `shadcn/ui` `Pagination` component
- ✅ Optional: Virtual scrolling with `react-virtual`
- ✅ Server-side pagination and filtering
- ✅ Infinite scroll vs. traditional pagination trade-offs

---

### 🧠 **Level 6: Advanced Features & UX Enhancements**

> _Goal: Polish the experience and add real-world power._

- ✅ Column grouping and nested headers
- ✅ Sticky headers and scrollable body
- ✅ Export to CSV or JSON (client-side)
- ✅ Inline editing (e.g., edit amount or label directly)
- ✅ Row expansion (e.g., show notes or tags)
- ✅ Accessibility best practices (keyboard nav, ARIA roles)
- ✅ Keyboard shortcuts for table actions
- ✅ Contextual tooltips and hover states
- ✅ Mobile-friendly stacked layout (transform table into cards)

---

### 🧪 **Level 7: Testing & Performance**

> _Goal: Ensure reliability and speed._

- ✅ Unit testing table logic with Jest/React Testing Library
- ✅ Testing filters, sorting, and selection logic
- ✅ Memoizing columns and data
- ✅ Avoiding unnecessary re-renders with `useMemo`
- ✅ Simulating large datasets for performance benchmarking
- ✅ Profiling with React DevTools

---

### 🔗 **Level 8: Real-World Integration**

> _Goal: Connect your table to APIs and state management._

- ✅ Fetching data from REST or GraphQL APIs
- ✅ Integrating with Redux, Zustand, or React Query
- ✅ Handling optimistic updates and error states
- ✅ Syncing filters and pagination with URL params

---

### 🚀 Final Project: Expense Tracker Table

> _Build a fully-featured table with all the above._

- ✅ Label search input
- ✅ Date range filter
- ✅ Category dropdown
- ✅ Transaction type toggle
- ✅ Sortable columns: Label, Date, Category, Type, Amount
- ✅ Row selection with bulk actions
- ✅ Command column with dropdown menu
- ✅ Column visibility toggle
- ✅ Pagination
- ✅ Responsive and accessible UI
- ✅ Export to CSV
- ✅ Inline editing
- ✅ Sticky headers
- ✅ Mobile-friendly layout

---

### 🎯 Bonus: Extend to Other Domains

Once mastered, apply this to:

| Domain       | Example Use Case                       |
| ------------ | -------------------------------------- |
| 🎓 College   | Student dashboards, attendance logs    |
| 🏞️ Tourism   | Place lists with filters, bookmarks    |
| 🛠️ Admin     | Audit logs, moderation queues          |
| 🌐 Community | UGC review tables, feedback moderation |

---
