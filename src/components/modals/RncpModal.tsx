


// rncp
import languages from "@locales/languages";
import RNCP_MAPPING, { RncpMappingItem } from "@utils/mapping/rncpMapping";
import rncpDescMapping from "@utils/mapping/rncpDescMapping";



type RncpModalType = {
    language:keyof typeof languages;
    modalTitle:string,
    modalClose:string,
    projectId:number|undefined;
    isVisible:boolean;
    onClose:()=>void;
}

const mapRncpDesc = (language:keyof typeof languages, rncpMap:RncpMappingItem[]) =>{
    const rncpDescs = rncpDescMapping[language]
    const pRncpCodes = rncpMap.map((({rncp})=>({rncp}))).map((obj) => obj.rncp);
    
    // now, getting an array that matches rncp from both prev arrays
    const pRncpInfos = Object.entries(rncpDescs).filter((rncpDesc) => 
        pRncpCodes.some((pRncpCode) =>
            (rncpDesc[0] === pRncpCode)
        )
    )

    // i cant get what i want...
    console.log("ffff",pRncpCodes)
   
    console.log("Verdict:",pRncpInfos)

    return pRncpInfos;
} 

const RncpModal = ({language,modalTitle,modalClose,projectId,isVisible,onClose}:RncpModalType) => {
    
    if (!isVisible) return null;
    
    const projects = languages[language].projects.data
    const project = projects.filter((project)=> (project.id==projectId)) ?? []
    // get the rncp project array objects based on the mapping
    const rncpMap = RNCP_MAPPING.filter((item) =>
        Object.values(item).some( (value) =>
            project.some((pObj)=> 
                pObj.rncp.some((pRncp)=> (pRncp==value)
            ))
        )
    );
    console.log("rncpMap",rncpMap)

    // we have the mapping rncp array, 
    // now get the final full rncp+desc array of the project  
    const pRncpInfos = mapRncpDesc(language,rncpMap)

    console.log("project:",project);
    // project ==> OK , but project.rncp is undefined???

    return ( 
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
        {/* Overlay */}
        <div
            className="absolute inset-0 b g-black/50"
            onClick={onClose}
        />

        {/* Modal */}
        <div
            className="
            relative
            bottom-40 md:bottom-auto
            w-full md:w-[28rem]
            max-h-[85vh]
            bg-base-100 text-base-content
            rounded-t-2xl md:rounded-2xl
            p-4 md:p-6
            overflow-y-auto
            animate-slide-up
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg">
                {modalTitle}
            </h3>
            <button
                className="btn btn-sm btn-circle btn-ghost"
                onClick={onClose}
            >
                ✕
            </button>
            </div>

            {/* Content */}
            <div className="space-y-3">
            {pRncpInfos.map((skillRncp) => {

            return (
                <div className="rounded-lg bg-base-200 p-3" key={skillRncp[0]}>
                    <h4 className="font-semibold text-sm mb-1">
                        {skillRncp[0]}
                    </h4>
                    <p className="text-xs leading-snug opacity-80 line-clamp-3">
                        {skillRncp[1]}
                    </p>
                </div>
                );
            })}
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-center">
            <button
                className="btn btn-primary btn-sm w-full md:w-auto"
                onClick={onClose}
            >
                {modalClose}
            </button>
            </div>
        </div>
    </div>
    )
}

export default RncpModal;