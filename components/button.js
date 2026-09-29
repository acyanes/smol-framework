function ButtonComponent() {
  let state = false;
  let node = render(ui());

  function ui() {
    return Component(
      "button",
      { disabled: state },
      {
        click: () => {
          clickHandler();
        },
      },
      [state ? "Disabled" : "Click me"],
    );
  }

  function setState(newState) {
    state = newState;
    rerender();
  }

  function clickHandler() {
    setState(true);
  }

  function rerender() {
    const newNode = render(ui());
    node.replaceWith(newNode);
    node = newNode;
  }

  return {
    node,
  };
}
