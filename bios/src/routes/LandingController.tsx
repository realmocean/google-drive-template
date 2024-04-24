import { is } from "@tuval/core";
import { DialogStack, ForEach, Fragment, HStack, ReactView, ScrollView, Text, UIController, UIImage, UINavigate, UIView, UIViewBuilder, VStack, cLeading, cTop, cTopLeading, cVertical, useDialogStack, useNavigate, useState } from "@tuval/forms";
import { useGetSubdomain } from "../hooks/useGetSubdomain";
import { GooleDriveBroker } from "@realmocean/sdk";
import React from "react";
import { FolderController, FolderView } from "../views/FolderView";





export class LandingController extends UIController {
    public override LoadView(): UIView {
        const navigate = useNavigate();
        const subDomain = useGetSubdomain();

        const [folders, setFolders] = useState();
        const [files, setFiles] = useState();

        return (

            ReactView(
                <DialogStack>
                    {
                        VStack({ alignment: cTopLeading })(
                            HStack(
                                UIImage('/images/google_login.svg')
                            ).width().height()
                                .onClick(async () => {
                                    const files = await GooleDriveBroker.Default.listFiles();
                                    const folders = await GooleDriveBroker.Default.listFolders();
                                    setFolders(folders);
                                    setFiles(files);
                                }),
                            folders == null ? Fragment() :
                                HStack({ alignment: cTopLeading })(
                                    ScrollView({ axes: cVertical, alignment: cTopLeading })(
                                        VStack({ alignment: cTopLeading })(
                                            ...ForEach(folders)((folder: any) =>
                                                UIViewBuilder(() => {
                                                    const { openDialog } = useDialogStack();
                                                    return (
                                                        HStack({ alignment: cLeading, spacing: 5 })(
                                                            UIImage(folder.iconLink.replace('16', '32')),
                                                            Text(folder.name)
                                                                .foregroundColor('rgb(31, 31, 31)')
                                                        )
                                                            .allHeight(50)
                                                            .borderBottom('solid 1px #CCCCCC55')
                                                            .background({ hover: '#F0F1F1' })
                                                            .onClick(()=> {
                                                                openDialog({
                                                                    title: 'Open',
                                                                    view: FolderView(folder)
                                                                })
                                                            })
                                                    )
                                                })

                                            ),
                                            ...ForEach(files)((file: any) =>
                                                HStack({ alignment: cLeading, spacing: 5 })(
                                                    HStack(
                                                        UIImage(file.iconLink.replace('16', '32'))
                                                            .imageHeight(24)
                                                            .imageWidth(24)
                                                            .allWidth(24)
                                                            .allHeight(24)
                                                    )
                                                        .allWidth(32)
                                                        .allHeight(32)
                                                        .padding(),
                                                    Text(file.name)
                                                        .foregroundColor('rgb(31, 31, 31)')
                                                )
                                                    .background({ hover: '#F0F1F1' })
                                                    .allHeight(50)
                                                    .borderBottom('solid 1px #CCCCCC55')
                                            )

                                        )
                                    )
                                )
                                    .padding()

                        ).render()
                    }
                </DialogStack>
            )



        )
    }
}