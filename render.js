function Component(type, props, events, children) {
  return {
    type,
    props,
    events,
    children,
  };
}

function render(component) {
  const el = component.type
    ? document.createElement(component.type)
    : document.createTextNode(component);

  // props
  if (component.props) {
    for (const [key, value] of Object.entries(component.props)) {
      if (key in el) {
        el[key] = value;
      }
    }
  }

  // events
  if (component.events) {
    for (const [key, value] of Object.entries(component.events)) {
      el.addEventListener(key, value);
    }
  }

  // children
  component.children?.forEach((child) => {
    const childElement = render(child);
    el.append(childElement);
  });

  return el;
}
