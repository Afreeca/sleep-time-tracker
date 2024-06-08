import { AsyncThunk, EnhancedStore } from "@reduxjs/toolkit";
import { MountOptions, MountReturn, mount } from "cypress/react";
import { RootState } from "../../src/lib/store";

export type ApiAction<TPayload> = AsyncThunk<
  TPayload,
  void,
  {
    rejectValue: string;
    dispatch?: any;
    state?: unknown;
    extra?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }
>;

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      useRouter(): void;
      /**
       * mountWithProvider mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mountWithProvider(
        component: React.ReactNode,
        options?: MountOptions & {
          reduxStore?: EnhancedStore<RootState>;
        }
      ): Cypress.Chainable<MountReturn>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      mockApiResponseError<TPayload>(
        apiAction: ApiAction<TPayload>,
        error?: string
      ): void;
    }
  }
}
