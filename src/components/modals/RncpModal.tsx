


// rncp
import languages from "@locales/languages";
import RNCP_MAPPING, { RncpMappingItem } from "@utils/mapping/rncpMapping";
import rncpDescMapping from "@utils/mapping/rncpDescMapping";
import { X } from "lucide-react";
import { sanityExperiences, sanityProjects } from "@lib/sanity";
import { useEffect, useState } from "react";


type RncpModalType = {
    language:keyof typeof languages;
    modalTitle:string,
    modalClose:string,
    projectId:number|undefined;
    isVisible:boolean;
    onClose:()=>void;
}

type Project = {
  title: Record<string, string>;
  description: Record<string, string>;
  github: string | null  ;  // ← can be null
  demo: string | null   ;   // ← can be null
  tech: string[];
  rncp: string[];
  image: { asset: { url: string } }[];
  order: number;
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
    return pRncpInfos;
} 

const RncpModal = ({language,modalTitle,modalClose,projectId,isVisible,onClose}:RncpModalType) => {

    const [sanityProjects,setSanityProjects] = useState<any[]>([]);

    useEffect(()=>{
        sanityExperiences().then(setSanityProjects)
    },[])
    
    if (!isVisible) return;
    
    const projects = sanityProjects ?? []
    const project = projects?.filter((_:any,index:number)=> index===projectId) ?? []
    console.log("hello",project)
    
    // get the rncp project array objects based on the mapping
    const rncpMap = RNCP_MAPPING.filter((item) =>
        Object.values(item).some( (value:string) =>
            project.some((pObj : Project)=>
                pObj.rncp.some((pRncp: string)=> (pRncp==value)
            ))
        )
    );

    // we have the mapping rncp array, 
    // now get the final full rncp+desc array of the project  
    const pRncpInfos = mapRncpDesc(language,rncpMap)

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
            relative w-76
            bottom-1/4
            md:w-5/6
            lg:w-2/3
            p-4 md:px-6
            bg-base-100 text-base-content
            rounded-t-2xl md:rounded-2xl
            overflow-y-auto
            animate-slide-up
            border
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="ml-3 font-bold text-2sm
                md:text-lg md:mx-auto">
                    {modalTitle}
                </h3>
                <button className="btn btn-sm btn-circle btn-ghost"
                    onClick={onClose}>
                   <X />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-3 ">
                {pRncpInfos.map((skillRncp) => 
                (
                    <div className="rounded-lg bg-base-200 p-3" key={skillRncp[0]}>
                        <h4 className="font-semibold text-sm mb-1">
                            {skillRncp[0]}
                        </h4>
                        <p className="text-xs leading-snug opacity-80 
                        md:line-clamp-3">
                            {skillRncp[1]}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="mt-5 flex justify-center
            md:mt-0">
                <button
                    className="mt-3 btn btn-primary w-full 
                    md:mt-5
                    "
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