// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import { mount } from "cypress/react18";
import StoreProvider from "../../src/app/StoreProvider";
import "../../src/app/globals.css";
import ErrorBoundary from "../../src/components/ErrorBoundary";
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add("mount", mount);

Cypress.Commands.add("mountWithProvider", (component, options = {}) => {
  const { routerProps = { url: "/" }, ...mountOptions } = options;
  const wrappedComponent = (
    <html lang="en">
      <ErrorBoundary>
        <StoreProvider>
          <body className="inter-class-name">
            <main className="h-fullWithNav overflow-hidden p-10">
              {component}
            </main>
          </body>
        </StoreProvider>
      </ErrorBoundary>
    </html>
  );

  return mount(wrappedComponent, options);
});
