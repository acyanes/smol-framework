function InputComponent() {
  let state = "";
  let node = render(ui());

  function ui() {
    return Component("div", undefined, undefined, [
      Component(
        "input",
        { value: state, placeholder: "Type something..." },
        {
          input: (event) => {
            inputHandler(event);
          },
        },
        [],
      ),
      Component(
        "button",
        undefined,
        {
          click: () => {
            submitHandler();
          },
        },
        ["Submit"],
      ),
      Component("p", undefined, undefined, [`Current value: ${state}`]),
    ]);
  }

  function setState(newState) {
    state = newState;
    rerender();
  }

  function inputHandler(event) {
    setState(event.target.value);
  }

  function submitHandler() {
    alert(`Submitted: ${state}`);
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
