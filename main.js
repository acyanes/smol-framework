const button = ButtonComponent();
const input = InputComponent();

const app = document.getElementById("app");

app.append(button.node);

// Every character change causes rerender which causes input el to be destroyed then recreated
// because of this, we lose the focus.
// TODO - implement reconciliation
app.append(input.node);
