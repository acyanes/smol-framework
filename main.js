function CounterComponent() {
  let state = 0;
  let node = render(ui());

  function ui() {
    return Component("div", undefined, undefined, [
      Component("p", undefined, undefined, [`Count: ${state}`]),
      Component(
        "button",
        undefined,
        {
          click: () => {
            incrementHandler();
          },
        },
        ["Increment"],
      ),
      Component(
        "button",
        undefined,
        {
          click: () => {
            decrementHandler();
          },
        },
        ["Decrement"],
      ),
    ]);
  }

  function setState(newState) {
    state = newState;
    rerender();
  }

  function incrementHandler() {
    setState(state + 1);
  }
  function decrementHandler() {
    setState(state - 1);
  }

  function rerender() {
    const newNode = render(ui());
    node.replaceWith(newNode);
    node = newNode;
  }

  return {
    ui,
    node,
  };
}

function ToggleComponent() {
  let state = false;
  let node = render(ui());

  function ui() {
    return Component("div", undefined, undefined, [
      Component("p", undefined, undefined, [`Status: ${state ? "ON" : "OFF"}`]),
      Component(
        "button",
        undefined,
        {
          click: () => {
            toggleHandler();
          },
        },
        ["Toggle"],
      ),
    ]);
  }

  function setState(newState) {
    state = newState;
    rerender();
  }

  function toggleHandler() {
    setState(!state);
  }

  function rerender() {
    const newNode = render(ui());
    node.replaceWith(newNode);
    node = newNode;
  }

  return {
    ui,
    node,
  };
}

const counter = CounterComponent();
const toggle = ToggleComponent();

const app = document.getElementById("app");

app.append(counter.node);
app.append(toggle.node);
