


// rncp
import languages from "@locales/languages";
import mappingRncp from "@utils/mapping/rncpMapping";
import RNCP_DATA from "@utils/Rncp";


type RncpModalType = {
    language:keyof typeof languages;
    modalTitle:string,
    modalClose:string,
    projectId:number;
    isVisible:boolean;
    onClose:()=>void;
}



const RncpModal = ({language,modalTitle,modalClose,projectId,isVisible,onClose}:RncpModalType) => {
    
    const rncpMap = mappingRncp(RNCP_DATA);
    const projects = languages[language].projects.data
    const project = projects.find((project)=> (project.id==projectId)) ?? []

    if(!isVisible) return null;
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
            {project.rncp?.map((rncpLabel: string) => {

                const match = rncpMap.find( (item) => item.label === rncpLabel);

                if (!match || !match.rncp) return null;

                return (
                <div
                    key={rncpLabel}
                    className="rounded-lg bg-base-200 p-3"
                >
                    <h4 className="font-semibold text-sm mb-1">
                    {match.rncp.code}
                    </h4>
                    <p className="text-xs leading-snug opacity-80 line-clamp-3">
                    {match?.rncp?.[`description_${language}`] ?? ""}
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