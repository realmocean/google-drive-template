import { ButtonRenderer, InputRenderer } from "@realmocean/antd";
import { Query, Services, useCreateMagicURL, useCreateRealm, useDeleteSession, useGetMe, useGetOrganization, useGetRealm, useListAccounts, useListRealms } from "@realmocean/sdk";

import { Button, ForEach, HStack, Heading, Input, TextField, Text, UINavigate, UIViewBuilder, VStack, useNavigate, useState, Spacer, cLeading, cHorizontal, darken, Icon, Icons, HDivider, UIController, UIView } from "@tuval/forms";
import { useGetHostName, useGetProtocol } from "../../hooks/useGetProtocol";



function CreateUserRealm(userId: string): Promise<any> {
    return new Promise((resolve, reject) => {
       
    })
}

export class InviteController extends UIController {
    /* LoadViewInternal(): UIView {
        const result = (this as any).GetDepends();
        return UIViewBuilder(()=> {
            return (
                VStack(
                    result ,
                    this.LoadView()
                )
            )
        })
    } */
    public override LoadView(): UIView {

        const navigate = useNavigate();

     
        return (

            VStack(
                VStack(
                    VStack({ spacing: 10 })(
                        Heading('Password').fontFamily('"Hagrid", sans-serif').fontSize('6rem').foregroundColor('#090e13').lineHeight(90),
                        VStack({ alignment: cLeading, spacing: 10 })(

                            TextField().fontSize('1.8rem')
                                .allHeight(40)
                                .placeholder('New password')
                                .transition('all 0.3s ease-in-out')
                                .border('none')
                                .borderBottom({ hover: '2px solid #162330' })
                                .background('white')
                                .outline({ focus: 'none' })
                                .padding('0 1.5rem').width(332)

                        ).height().marginBottom('1.5rem'),
                        TextField().fontSize('1.8rem')
                            .allHeight(40)
                            .placeholder('Confirm password')
                            .transition('all 0.3s ease-in-out')
                            .border('none')
                            .borderBottom({ hover: '2px solid #162330' })
                            .background('white')
                            .outline({ focus: 'none' })
                            .padding('0 1.5rem').width(332)

                    ).height().marginBottom('1.5rem'),

                    Button().renderer(ButtonRenderer).label('Submit')

                        .onClick(async () => {

                           

                        }),

                    HStack(
                        Text('Log in with another email')
                            .fontSize(16)
                    )
                        .height()
                        .onClick(() => {
                            navigate('/logout');
                        }),
                ).width(),
                HStack().height('9rem')
                    .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
            ).background('#7FE8D4')
        )





    }
}
