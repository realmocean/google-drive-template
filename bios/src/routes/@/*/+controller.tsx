import { HStack, Text, UIController, UIRouteOutlet, UIView, cTopLeading } from "@tuval/forms";


export class HomeController extends UIController {
    public override LoadView(): UIView {
        return (
             HStack({ alignment: cTopLeading })(
               // LeftSideMenuView('Home'),
                UIRouteOutlet().width("100%").height("100%")
            ) 
        )
    }
}