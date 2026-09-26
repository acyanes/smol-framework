# Custom UI Framework POC

## Goal

Build the smallest possible custom UI framework for the web first, then later connect the same framework core to Lynx.

## POC Scope

- Build against the browser DOM first.
- Define a minimal custom component abstraction.
- Support a small set of basic UI primitives such as elements and text.
- Build a simple component tree representation.
- Render that tree to the DOM.
- Add minimal local state.
- When state changes, rebuild the affected UI tree.
- Compare the previous tree with the new tree.
- Apply only the required DOM updates.
- Keep DOM-specific rendering separate from the framework core.

## Architecture

Application Components → Framework Core → DOM Adapter → Browser

Later:

Application Components → Framework Core → Lynx Adapter → Lynx → iOS / Android / Web

## What the POC Should Prove

The framework core can manage components, state, and UI updates without being permanently tied to the DOM.

The POC is successful once a small interactive web UI can update state and render correctly through the DOM adapter.
