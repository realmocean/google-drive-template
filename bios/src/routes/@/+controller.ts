import { UIController, UIRouteOutlet, UIView, Text } from "@tuval/forms";
import { CelminoController, Guard } from "../../CelminoController";
//import { LoginGuard } from "../../guards/LoginGuard";



export class LayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width("100%").height("100%")

        )
    }
}


export class PublicLayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
            UIRouteOutlet().width("100%").height("100%")
        )
    }
}

export class RealmLayoutController extends CelminoController {
    public override LoadView(): UIView {
        return (
           
            UIRouteOutlet().width("100%").height("100%")
            

        )
    }
}


