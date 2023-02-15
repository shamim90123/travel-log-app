import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";

import Contact, {
  loader as contactLoader,
} from "./routes/contact";

import Root, { loader as rootLoader, action as rootAction } from "./routes/root";

import EditContact, {
  action as editAction,
} from "./routes/edit";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
    ],
  },
]);