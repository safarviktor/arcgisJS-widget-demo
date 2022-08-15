import Widget from "@arcgis/core/widgets/Widget";
import { subclass } from "@arcgis/core/core/accessorSupport/decorators";
import React from 'react'

@subclass("esri.widgets.HelloWorld")
class HelloWorldWidget extends Widget {

    override render() {
        console.log("rendering")
        return (
            <div id="myhello">
                HELLO
            </div>
        );
    }
}

export default HelloWorldWidget;