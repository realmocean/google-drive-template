
import { CelminoController } from "../../../CelminoController";
import { Services, useCreateOrganization, useDeleteCache, useGetOrganization, useListAccountMemberships, useListTeams, useUpdatePrefs } from "@realmocean/sdk";
import { UIView, Fragment, UINavigate, UIViewBuilder, useNavigate, Text, useEffect } from "@tuval/forms";


export class LoginSuccess extends CelminoController {
    public override LoadView(): UIView {
        //  const { memberships, isLoading: isMembershipLoading } = useListAccountMemberships('console');
     

        return (

         Text('login success')


        )
    }
}
