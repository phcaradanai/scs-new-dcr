import { JSX, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, SetStateAction, Suspense, useEffect, useState } from "react";
import { FormattedMessage, MessageFormatElement } from 'react-intl';

interface ObjString {
    [key: string]: any;
}

type AllProps = {
    colsObj?: ObjString,
    colsArr?: Array<string>,
    listObj?: ObjString,
    listData?: ObjString,
    actions?: ObjString
} & typeof defaultProps;

const defaultProps = {
    // colsObj: {a:'a',b:'b'},
    colsArr: ['a', 'b'],
    // listObj: {a:'a',b:'b'},
    listData: {},
    actions: {}
};

export default function TableList(props: AllProps) {
    const [IsActive, setIsActive] = useState<string | null>(null);
    const [OnDir, setOnDir] = useState('expand_more');
    let { colsArr, listData, actions } = props
    useEffect(
        () => {

        },
        []
    );

    const onClickColumn = (e: SetStateAction<string | null>) => {
        if (OnDir !== 'expand_less') {
            setOnDir('expand_less')
        }
        else {
            setOnDir('expand_more')
        }
        setIsActive(e)
    }
    let colMenu = []
    for (const key of colsArr) {
        if (key === 'actions') {
            continue
        }
        let dirIcon;
        if (IsActive === key) {
            dirIcon = <div className="material-symbols-sharp">{OnDir}</div>
        }
        colMenu.push(<button className={`w-1/2 flex pl-2 ${IsActive === key ? ' bg-gray-300' : ''} justify-between`}
            onClick={() => { onClickColumn(key) }} key={key}
        >
            <FormattedMessage id={key} defaultMessage={key} />
            {dirIcon}
        </button> ?? <></>)
    }

    let actionMenus = Object.keys(actions).map(e => {
        let menu = actions[e]
        return <button className="material-symbols-sharp" key={e}>
            {menu}
        </button> ?? <></>
    })
    let inputMenus = colsArr.map(e => {
        return <input className={`w-1/2 `} key={e} /> ?? <></>
    })
    let actionRows = listData?.['actions'].map((e: string | number) => {
        return <button className="material-symbols-sharp" key={e}>
            {e}
        </button> ?? <></>
    })
    let rowsData: any = []
    for (let index = 0; index < Object.keys(listData).length; index++) {
        const key = Object.keys(listData)[index];
        let actions: any = []
        listData[key].map((x: any | undefined) => {
            let row: any = []
            if (key !== 'actions') {
                row.push(
                    <div className="w-1/2">
                        <FormattedMessage id={x} defaultMessage={x} />
                    </div>
                )
            } else {
                for (let index = 0; index < listData[key][0].length; index++) {
                    listData['actions'].map((y: string | number) => {
                        actions.push(<button className="material-symbols-sharp w-1/2" key={y}>
                            {y}
                        </button> ?? <></>)
                    })
                }
                row.push(actions)
            }
            let show = <div className="flex flex-col w-1/2">
                {row}
            </div>
            rowsData.push(show)

        }
        )


    }
    let mainDiv = `flex justify-between px-2`

    return <div className="flex flex-col">
        <div className={`${mainDiv} border-b-warm-gray-500 border-b-2`}>
            {colMenu}
            {Object.keys(actions).length ?
                <div className={`w-1/2 flex-shrink flex justify-center items-center gap-1`}>{actionMenus}</div>
                :
                <></>
            }
        </div>
        <div className={`${mainDiv}`}>
            {inputMenus}
            <div className={`w-1/2 flex-shrink flex justify-center items-center gap-1`}>
                <div className="material-symbols-sharp px-2">search</div>
            </div>
        </div>
        <div className={`${mainDiv} `}>

            {rowsData}

            {/* {Object.keys(listData).map((e: any | undefined) =>
                <div className="flex flex-col w-1/2">
                    {listData[e].map((x: any | undefined) => {
                        let actions: any = []
                        if (e !== 'actions') {
                            return <div className="w-1/2">
                                <FormattedMessage id={x} defaultMessage={x} />
                            </div>
                        } else {

                            listData['actions'].map((y: string | number) => {
                                actions.push(<button className="material-symbols-sharp w-1/2" key={y}>
                                    {y}
                                </button> ?? <></>)
                            })
                        }
                        return actions
                    }
                    )}
                </div>
            )} */}

        </div>
    </div>
} 