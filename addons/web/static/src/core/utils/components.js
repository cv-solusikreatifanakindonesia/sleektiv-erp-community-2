import { Component, onError, xml } from "@sleektiv/owl";

export class ErrorHandler extends Component {
    static template = xml`<t t-slot="default" />`;
    static props = ["onError", "slots"];
    setup() {
        onError((error) => {
            this.props.onError(error);
        });
    }
}
