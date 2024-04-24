
import { useCreateDatabase, useListAccountMemberships } from "@realmocean/sdk";
import { Button, Fragment, Text, UINavigate, UIView, VStack } from "@tuval/forms";
import { CelminoController } from "../../CelminoController";
import { useGetSubdomain } from "../../hooks/useGetSubdomain";




export class DefaultWorkspaceController extends CelminoController {
  public override LoadView(): UIView {

//    const { realm } = useRealm();
       return (
      VStack(
        Text(''),
        Button(
          Text('sdfdsf')
        ).onClick(() => {
         
        })
      )

    )
  }
}
