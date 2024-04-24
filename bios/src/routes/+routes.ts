import { HStack, UIController, UIRoute, UIRouteOutlet, UIRoutes, UIView, cTopLeading } from "@tuval/forms"

import { LogoutController } from "./logout/+controller"

import { LayoutController } from "./@/+controller"
import { DefaultWorkspaceController } from "./@/+default"
import { LoginSuccess } from "./@/login-success/+controller"
import { LandingController } from "./LandingController"
import { InviteController } from "./invite/+controller"
import { LoginController } from "./login/+controller"
import { ResetPasswordController } from "./reset-password/+controller"
import { SignupController } from "./signup/+controller"
import { UpdatePasswordController } from "./update-password/+controller"


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


export const Routes = () => {
    return (
        UIRoutes(

            // Console Routes
            UIRoute('/app', LayoutController).children(
                UIRoute('', DefaultWorkspaceController),
                UIRoute('login-success', LoginSuccess),
                UIRoute('*', HomeController),
            ),

         

            UIRoute('/', LandingController),
            UIRoute('/login', LoginController),
            UIRoute('/signup', SignupController),
            UIRoute('/logout', LogoutController),
            UIRoute('/reset-password', ResetPasswordController),
            UIRoute('/update-password', UpdatePasswordController),
            UIRoute('/invite', InviteController),
        )
    )
}