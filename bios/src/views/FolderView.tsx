import { GooleDriveBroker } from "@realmocean/sdk";
import { ForEach, HStack, Heading, ReactView, Text, UIController, UIImage, UIView, UIViewBuilder, VStack, cLeading, useDialogStack, useEffect, useState } from "@tuval/forms";
import React from "react";

export class FolderController extends UIController {
    public LoadView(): UIView {
        const { folderItem } = this.props;
        const [files, setFiles] = useState();

        useEffect(() => {
            GooleDriveBroker.Default.listChild(folderItem.id).then((folders) => {
                setFiles(folders)
            })
        }, []);
        return (
            VStack(
                HStack(
                    Heading(folderItem.name)
                        .h2()
                )
                    .height(),
                ...ForEach(files)((folder: any) =>
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
                                .onClick(() => {
                                    openDialog({
                                        title: 'Open',
                                        view: FolderView(folder)
                                    })
                                })
                        )
                    })

                )
            )
        )
    }
}

export const FolderView = (folderItem) => UIViewBuilder(() => {
    const [files, setFiles] = useState();
    useEffect(() => {
        GooleDriveBroker.Default.listChild(folderItem.id).then((folders) => {
            setFiles(folders)
        })
    }, []);
    return (
        VStack(
            HStack(
                Heading(folderItem.mimeType)
                    .h2()
            )
                .height(),
            folderItem.mimeType === 'application/vnd.google-apps.folder' ?
                VStack(
                    ...ForEach(files)((folder: any) =>
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
                                    .onClick(() => {
                                        openDialog({
                                            title: 'Open',
                                            view: FolderView(folder)
                                        })
                                    })
                            )
                        })

                    )
                )
                :
                ReactView(
                    <iframe src={`${folderItem.webViewLink}`} style={{ width: '100%', height: '100%', border:'none' }}></iframe>
                )

        )
    )
})

